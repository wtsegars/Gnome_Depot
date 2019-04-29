const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    post: 8889,
    user: "root",
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "gnomedepot_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as ID " + connection.threadId);
});

const addInventory = function(response, data) {
    console.log("Inventory updating...\n");
    connection.query(
        "UPDATE gnomedepot_products SET ? WHERE ?",
        [
            {
                stock_quantity: response.productQuantity += data[0].stock_quantity
            },
            {
                product_name: response.productName
            }
        ],
        function(err) {
            if(err) throw err;
            console.log("Update complete!\n");
            connection.end();
        }
    )
};

const addProduct = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "newItem",
            message: "What is the name of the new product?"
        },
        {
            type: "input",
            name: "itemId",
            message: "What is the ID for this new product?"
        },
        {
            type: "input",
            name: "price",
            message: "What is the price of this new item?"
        },
        {
            type: "input",
            name: "stock",
            message: "How much inventory are we going to get of this new item?"
        },
        {
            type: "input",
            name: "department",
            message: "What department is this item going into?"
        }
    ]).then(function(response) {
        console.log("Adding new product to inventory...\n")
        connection.query(
            "INSERT INTO gnomedepot_products SET ?",
            {
                item_id: response.itemId,
                product_name: response.newItem,
                department_name: response.department,
                price: response.price,
                stock_quantity: response.stock
            },
            function(err) {
                if(err) throw err;
            }
        )
        console.log("New product addition complete!\n");
        connection.end();
    })
};

inquirer.prompt([
    {
        type: "list",
        name: "managerOptions",
        message: "Welcome to the Gnome Depot Manager's portal! What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
]).then(function(user) {
    if(user.managerOptions === "View Products for Sale") {
        connection.query("SELECT item_id,product_name,price,stock_quantity FROM gnomedepot_products", function (err, res) {
            if(err) throw err;
            
            console.table(res);
            connection.end();
        })
    }
    else if(user.managerOptions === "View Low Inventory") {
        connection.query("SELECT * FROM gnomedepot_products WHERE stock_quantity BETWEEN 0 AND 5", function (err, res) {
            if(err) throw err;

            console.table(res);
            connection.end();
        })
    }
    else if(user.managerOptions === "Add to Inventory") {
        inquirer.prompt([
            {
                type: "input",
                name: "productName",
                message: "Which product would you like to add quantity to?"
            },
            {
                type: "input",
                name: "productQuantity",
                message: "What is the amount that you would like to add?"
            }
        ]).then(function (response) {
            connection.query("SELECT * FROM gnomedepot_products WHERE product_name = ?", [response.productName], function(err, data) {
                console.log(JSON.stringify(response, null, 2));
                console.log(JSON.stringify(data, null, 2));
                if(err) throw err;
                let prodQuan = parseInt(response.productQuantity);
                if(data[0].product_name) {
                    if(!prodQuan) {
                        console.log("This action could not be completed because you entered an invalid number.");
                        connection.end();
                    }
                    else {
                        addInventory(response, data);
                    }
                }
                else {
                    console.log("This action could not be completed because you entered an invalid item.");
                    connection.end();
                }
            })
        })
    }
    else if(user.managerOptions === "Add New Product") {
        addProduct();
    }
});
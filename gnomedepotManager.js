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

const addInventory = function() {
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
    ]).then(function(response) {
        if(response.productName === data[0].product_name) {
            connection.query("UPDATE gnomedepot_products SET ? WHERE ?", [
                {
                    stock_quantity: data[0].product_name += response.productName
                },
                {
                    productName: response.productName
                }
            ],
            function(err) {
                if(err) throw err;
                console.log("Update complete!");
                connection.end();
            }
            )
        }
    })
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
    })
}

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
        addInventory();
        connection.end();
    }
    else if(user.managerOptions === "Add New Product") {
        addProduct();
        connection.end();
    }
});
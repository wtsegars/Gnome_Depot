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
    getAll();
});

const getAll = function() {
    connection.query("SELECT * FROM gnomedepot_products", function(error, result) {
        if(error) throw error;
        console.log(result);
        //connection.end();
    });
};

const purchaseItem = function() {
    console.log("Processing Transaction...\n");
    connection.query(
        "UPDATE gnomedepot_products SET ? WHERE ?",
        [
            {
                stock_quantity: parseInt("SELECT * FROM gnomedepot_products WHERE " + user.itemID + " IN stock_quantity") -= parseInt(user.quantity)
            },
            {
                item_id: user.itemID
            }
        ],
        function(err) {
            if(err) throw err;
            console.log("Transaction completed!\n");
        }
    )
};

inquirer.prompt([
    {
        type: "number",
        name: "itemID",
        message: "What is the id of the item that you would like to purchase?"
    },
    {
        type: "number",
        name: "quantity",
        message: "How many of this product would you like to purchase?"
    }
]).then(function(user) {
    let items;

    connection.query("SELECT * FROM gnomedepot_products WHERE item_id BETWEEN 0 AND 9999999999", function(err, res) {
        if(err) throw err;
        items == res.data;

        if(("SELECT * FROM gnomedepot_products WHERE item_id").includes(user.itemID)) {
            let amountPurchased = parseInt(user.quantity);

            if(amountPurchased !== num) {
                console.log("We were unable to complete your transaction because the amount that you entered to purchase was not a valid number.")
            }

            else if(amountPurchased > "SELECT * FROM gnomedepot_products WHERE " + user.itemID + " IN price") {
                console.log("The amount of this item that you wish to purchase is greater than what we have available in stock");
            }

            else if(amountPurchased <= "SELECT * FROM gnomedepot_products WHERE " + user.itemID + " IN price") {
                purchaseItem();
            }
        }
        else {
            console.log("We are unable to continue this transaction because you have entered an invalid item id.");
        }
    })
});
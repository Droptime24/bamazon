// require sql
var mysql = require("mysql");
var inquirer = require("inquirer");

// configure sql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1",
    database: "bamazon_DB"
});

// connect to mysql
connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful");
    open();
});

// display items for sale in the store, Include the ids, names, and prices of products for sale
// function viewProducts()
function open() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res)

      
}





// prompt with two questions (use inquirer)
    // whats the id of the product you want top buy?
    // how many would you like to buy?

// query database to see if their is enough product available
    // else "Sold out!"

// if enough in stock, fulfill order
    //  update database to show amount remaining 
    //  display the total cost of purchase



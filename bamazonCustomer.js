// required to run
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

// create connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  // message if errors
  if (err) throw err;
  console.log("Welcome to Bamazon!");
  open();
});

// run question
function open() {
  connection.query(cTable = "SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.table(results)

  inquirer
    .prompt([
    
      {
        name: 'item_name',
        type: 'rawlist',
        message: 'Select the product you want to buy?',
        choices: [
          "Mr. Ts Gold Chain",
          "IronMan Armor",
          "Robo cops badge",
          "The Hockey Stick Putter",
          "Ant-Mans Van",
          "Infinity Gauntlet",
          "Zeldas Ocarina",
          "The Batmobile",
          "Dr. Stranges Cape",
          "Lokis Staff",]
      },
      {
        name: 'stock_quantity',
        type: 'number',
        message: 'How many would you like to buy?',
      },
    ])
    .then(function (answer) {
    // connection.query("UPDATE products SET ? WHERE ?", 
    console.log(answer.item_name)
    
     

      // console.log("-------------------------------")
      // console.log("Selected Item: ", display.items)
      // console.log("-------------------------------")
      // console.log("Selected Item: ", display.inventory)
      // console.log("-------------------------------")
    
    
    });
  })
  }




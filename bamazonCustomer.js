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
  start()
});

// run question
function start() {
  connection.query(cTable = ('SELECT * FROM `bamazon_DB`.`products` LIMIT 1000'), function (err, res) {
    console.table(res)

    inquirer
      .prompt([
        {
          name: 'id',
          type: 'list',
          message: 'Name of the product you want to buy?',
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
          name: 'id',
          type: 'input',
          message: 'How many do you want?',
        },
      ])
      .then(function (update) {
       

        console.log('test catch')
      });

  });
}



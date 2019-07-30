var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1",
  database: "bamazon_DB"
});

let sql = `SELECT * FROM products`;
connection.query(sql, (results) => {
  if (error) {
    // return console.results(error.message);
  
  return console.log(results);
  }
});


function start(){
inquirer
  .prompt([
    {
      name: 'id',
      type: 'input',
    message: 'Choose the ID of the product you want to buy?',
    },
    {
      name: 'id',
      type: 'input',
      message: 'How many do you want?',
    },
  ])
  .then(answer => {
    
    
    console.log('test catch')
  });
}



var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to Bamazon!");
  open();
});

function open() {
  connection.query(cTable = "SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res)
    // promtCust(res)
    // function promtCust(res){
    inquirer
      .prompt([

        {
          name: 'product',
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
          name: 'quantity',
          type: 'number',
          message: 'How many would you like to buy?',
        },
      ])
      .then(function (answer) {
         
        var products = answer;
        for (var i = 0; i < res.length; i++) {
          if (res[i].product_name === answer.product) {
            products = res[i];
            quantiy = res[i].stock_quantity;
            price = res[i].price;
          }
        }
        if (products.stock_quantity >= answer.quantity) {
          console.log("Thank you for your business!");
          console.log("Product: ", products.product_name);
          console.log("Quantity: ", products.stock_quantity);
          console.log("Price: ", products.price);
          updateDB(answer.product,
            answer.quantity);
        } else {
          console.log("Update quantity")
          open();
        }
      });
  })
}
function updateDB(products) {
  connection.query(`UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?`,

    [products],
    

    function (err, res) {
      console.log("test1", res)

    }

  )

}




// && res[i].stock_quantity >= answer.quantity
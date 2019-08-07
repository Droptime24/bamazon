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
  connection.query(cTable = "SELECT * FROM products;", function (err, res) {
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
            id = res[i].item_id;
          }
        }
        if (products.stock_quantity >= answer.quantity) {
          var x = price * answer.quantity;
          console.log("======================================"); 
          console.log("Thank you for your business!");
          console.log("======================================"); 
          console.log("--------------------------------------");
          console.log("************** RECEIPT ***************");
          console.log("--------------------------------------");
          console.log("Product: ", products.product_name);
          console.log("--------------------------------------");
          console.log("Quantity: ", answer.quantity);
          console.log("--------------------------------------");
          console.log("Price: ", '$' + x);
          console.log("--------------------------------------");
          updateDB(answer.product,
            answer.quantity);
        } else {
          console.log("Please update your quantity, supplies are low.");
          console.log("======================================================================");
          open()
        }

       
      });
  })
}
function updateDB(products, quantity) {
  connection.query(`UPDATE products SET stock_quantity = stock_quantity - ? WHERE product_name = ?`,
    [quantity, products],

    function (err ,res) {
      
      if(res.affectedRows === res.changedRows){
      console.log("Succesful Updates: " ,res.changedRows);
      console.log("Failied Updates: " ,res.warningCount);
      
      console.log("======================================================================")
      console.log("======================================================================")
      console.log("======================================================================")
      open()
      }else{
        var err; throw err
        
        }
      connection.end()
      }
  )
}
  

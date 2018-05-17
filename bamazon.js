var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "break123out",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  showProducts();
  });


// Function to load the products table from the database and print results to the console
function showProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Draw the table in the terminal using the response
    console.table(res);
    // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
    pickProduct(res);
  });
}
//Pick a product and how many
function pickProduct(answer) {
    inquirer.prompt([
      {
        name: "item",
        type: "input",
        message: "Enter the ID of the item you would like to purchase"
      },
      {
        name: "count",
        type: "input",
        message: "How many would you like to buy?"
      }

      ]).then(function(answer) {
          connection.query("SELECT item_id,product_name,price,stock_quantity FROM products WHERE ?",
            {item_id: answer.item},  function(err, res) {

              //console.log("count " + answer.count);

              if (parseInt(answer.count) > res[0].stock_quantity) {

                console.log("sorry, there are only " + res[0].stock_quantity + " left");
                pickProduct();

              }

              else {
                console.log("Your purchase of " + answer.count + ' ' + res[0].product_name +"/s total cost is: $ " + parseInt(res[0].price) * parseInt(answer.count));
               var quantityLeft = res[0].stock_quantity - answer.count;
                      console.log(quantityLeft);
                      connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                          {
                            stock_quantity: quantityLeft
                          },
                          {
                            item_id: answer.item
                          }
                        ],
                        function(error) {
                          if (error) throw err;
                         
                         
                        }); 
                      console.log("Inventory updated. There are  " + quantityLeft + " left"); 
                      showProducts();
               }


            })
      });

}; 
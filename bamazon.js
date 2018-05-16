var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  showProducts();
  });
]

function showProducts(answer) {
      var query = "SELECT item_id,product_name,price,stock_quantity FROM products";
      connection.query(query,  function(err, res) {
        var theDisplayTable = new Table({
          head: ['Item ID', 'Product Name', 'Price', 'Quantity'],

            colWidths: [10, 30, 10, 14]
          });

          for (var i = 0; i < res.length; i++) {
             theDisplayTable.push(
              [res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]
              );
           }
              console.log(theDisplayTable.toString());

      });}
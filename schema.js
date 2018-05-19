DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Game_Girl','VideoGames',100,12),
  ('Bucky_Charms','Breakfast',5,40),
  ('Gary_Slotter','Books',20,29),
  ('Pikamen','VideoGames',20,32),
  ('Ham_O_Cheese','Lunch',5,1),
  ('Game_of_Chairs','TV',40,100),
  ('Agents_of_SWORD','TV',10,78),
  ('Fried_Eggs','Breakfast',9,9),
  ('Super_Maria_Sisters','VideoGames',20,15),
  ('Lord_of_the_Springs','Books','8,39)

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id VARCHAR(20) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ('001','Game_Girl','VideoGames',100,12),
  ('002','Bucky_Charms','Breakfast',5,40),
  ('003','Gary_Slotter','Books',20,29),
  ('004','Pikamen','VideoGames',20,32),
  ('005','Ham_O_Cheese','Lunch',5,1),
  ('006','Game_of_Chairs','TV',40,100),
  ('007','Agents_of_SWORD','TV',10,78),
  ('008','Fried_Eggs','Breakfast',9,9),
  ('009','Super_Maria_Sisters','VideoGames',20,15),
  ('010','Lord_of_the_Springs','Books','8,39)

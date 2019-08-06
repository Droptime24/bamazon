DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL, 
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (60) NULL,
  money DECIMAL (13,4) NULL,
  stock_quantity INT NULL, 
  PRIMARY KEY (item_id) 
);


  INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES("Mr. Ts Gold Chain", "Accsesories", "$60.00", 20);

  
INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES("IronMan Armor", "Gear", "$5,000.00", 10);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Robo cops badge", "Accsesories", "$15.00", 100);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("The Hockey Stick Putter", "Equipment", "$76.50", 15);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Ant-Mans Van", "Vehicles", "$1,500.00", 1);
  
INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Infinity Gauntlet", "Gear", "$450.25", 3);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Zeldas Ocarina", "Instuments", "$300.00", 5);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("The Batmobile", "Vehicles", "$900.00", 2);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Dr. Stranges Cape", "Gear", "$120.00", 10);

INSERT INTO products
  (product_name, department_name, price, stock_quantity)

  VALUES
    ("Lokis Staff", "Gear", "$370.90", 3);

SELECT * FROM bamazon_DB.products;


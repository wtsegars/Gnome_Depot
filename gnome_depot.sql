DROP DATABASE IF EXISTS gnomedepot_db;

CREATE DATABASE gnomedepot_db;

USE gnomedepot_db;

CREATE TABLE gnomedepot_products(
	item_id BIGINT(12) NOT NUll,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price DECIMAL(7, 2),
    stock_quantity INTEGER(4)
);

USE gnomedepot_db;

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1009867543, "Gnome 2x4", "Gnome Lumber", 3.50, 450);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000155696, "Gnome-crete", "Gnome Building Materials", 4.75, 622);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001555108, "Gnome-tile", "Gnome Flooring", 20.75, 150);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000151696, "Gnome Hardword Fl.", "Gnome Flooring", 15.99, 256);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000532219, "Gnome Paint", "Gnome Paint", 14.99, 55);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000151228, "Gnome Wood Stain", "Gnome Paint", 5.55, 25);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000222245, "Gnome Drill", "Gnome Hardware", 55.25, 10);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1002889148, "Gnome Nails", "Gnome Hardware", 12.50, 54);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000515291, "Gnome Pipe", "Gnome Plumbing", 6.50, 33);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001229186, "Gnome LED Bulb", "Gnome Electrical", 9.99, 64);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000553298, "Gnome Mulch", "Gnome Garden", 3.50, 643);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000222541, "Gnome Flower", "Gnome Garden", 4.99, 101);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1001678992, "Gnome Fertilizer", "Gnome Garden", 15.95, 49);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1003223899, "Gnome Toilet", "Gnome Appliances", 299.99, 12);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000218677, "Gnome Frige", "Gnome Appliances", 699.99, 9);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000234986, "Gnome Door", "Gnome Millworks", 150.00, 15);

INSERT INTO gnomedepot_products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0000898921, "Gnome Molding", "Gnome Millworks", 1.05, 85);

SELECT * FROM gnomedepot_products;

-- Creating the database
CREATE DATABASE customers;

-- Selecting the database
USE customers;

-- Creating tables
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    birthdate DATE
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- The SELECT Statement
SELECT * FROM customers;

-- The SELECT Clause
SELECT name, email FROM customers;

-- The WHERE Clause
SELECT * FROM customers WHERE birthdate = '1990-01-01';

-- The AND, OR, and NOT Operators
SELECT * FROM customers WHERE birthdate = '1990-01-01' AND email LIKE '%@example.com';
SELECT * FROM customers WHERE birthdate = '1990-01-01' OR email LIKE '%@example.com';
SELECT * FROM customers WHERE NOT birthdate = '1990-01-01';

-- The IN Operator
SELECT * FROM customers WHERE id IN (1, 2, 3);

-- The BETWEEN Operator
SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;

-- The LIKE Operator
SELECT * FROM customers WHERE email LIKE '%@example.com';

-- The REGEXP Operator
SELECT * FROM customers WHERE email REGEXP '^[a-zA-Z0-9._%+-]+@example.com$';

-- The IS NULL Operator
SELECT * FROM customers WHERE email IS NULL;

-- The ORDER BY Operator
SELECT * FROM customers ORDER BY name ASC;

-- The LIMIT Operator
SELECT * FROM customers LIMIT 5;

-- Inner Joins
SELECT customers.name, orders.order_date, orders.amount
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id;


-- Outer Joins
SELECT customers.name, orders.order_date
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;

-- Outer Join Between Multiple Tables
SELECT customers.name, orders.order_date, products.name AS product_name
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
LEFT JOIN products ON orders.id = products.id;



-- Unions
SELECT name FROM customers
UNION
SELECT name FROM products;

-- Column Attributes
CREATE TABLE new_customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserting a Single Row
INSERT INTO customers (name, email, birthdate) VALUES ('John Doe', 'john@example.com', '1990-01-01');

-- Inserting Multiple Rows
INSERT INTO customers (name, email, birthdate) VALUES 
('Jane Doe', 'jane@example.com', '1985-05-15'),
('Alice Smith', 'alice@example.com', '1992-08-20');

-- Inserting Hierarchical Rows
INSERT INTO products (name, price) VALUES ('Product1', 10.00);
INSERT INTO orders (customer_id, order_date, amount) VALUES (1, '2024-07-01', 10.00);

-- Creating a Copy of a Table
CREATE TABLE customers_backup AS SELECT * FROM customers;

-- Updating a Single Row
UPDATE customers SET email = 'john.doe@example.com' WHERE id = 1;

-- Updating Multiple Rows
UPDATE customers SET email = 'updated@example.com' WHERE id IN (1, 2);

-- Using Subqueries in Updates
UPDATE orders SET amount = amount * 1.1 WHERE customer_id = (SELECT id FROM customers WHERE email = 'john.doe@example.com');

-- Deleting Rows
DELETE FROM customers WHERE id = 1;



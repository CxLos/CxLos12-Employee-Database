-- Template
-- DROP DATABASE IF EXISTS _db;
-- CREATE DATABASE _db;

-- USE _db;

-- Departments
DROP DATABASE IF EXISTS cxlos_db;
CREATE DATABASE cxlos_db;

USE cxlos_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE roles  (
  id INT NOT NULL, 
  title VARCHAR(30) NOT NULL,
  dept_id INT,
  salary INT NOT NULL,


  FOREIGN KEY (dept_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  depo VARCHAR(30) NOT NULL,
  manager VARCHAR(30) NOT NULL
);
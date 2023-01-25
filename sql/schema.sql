-- Template
-- DROP DATABASE IF EXISTS _db;
-- CREATE DATABASE _db;

-- USE _db;

-- CREATE TABLE  (
--   id INT NOT NULL,
--   name VARCHAR(30) NOT NULL,
-- );

-- Departments
DROP DATABASE IF EXISTS cxlos_db;
CREATE DATABASE cxlos_db;

USE cxlos_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

-- Roles
-- DROP DATABASE IF EXISTS roles_db;
-- CREATE DATABASE roles_db;

-- USE roles_db;

CREATE TABLE roles  (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  dept_id INT AUTO_INCREMENT,
  salary INT NOT NULL,


  FOREIGN KEY (dept_id)
  REFERENCES departments(id)
  
);

-- Employees
-- DROP DATABASE IF EXISTS emp_db;
-- CREATE DATABASE emp_db;

-- USE emp_db;

CREATE TABLE employees (
  id INT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  manager VARCHAR(30) NOT NULL
);
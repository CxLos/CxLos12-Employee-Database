-- Template
DROP DATABASE IF EXISTS _db;
CREATE DATABASE _db;

USE _db;

CREATE TABLE  (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
);

-- Departments
DROP DATABASE IF EXISTS dept_db;
CREATE DATABASE dept_db;

USE dept_db;

CREATE TABLE Departments (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
);

-- Roles
DROP DATABASE IF EXISTS roles_db;
CREATE DATABASE roles_db;

USE roles_db;

CREATE TABLE Roles  (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  dept VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
);

-- Employees
DROP DATABASE IF EXISTS emp_db;
CREATE DATABASE emp_db;

USE emp_db;

CREATE TABLE Employees (
  id INT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  dept VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  manager VARCHAR(30) NOT NULL,
);
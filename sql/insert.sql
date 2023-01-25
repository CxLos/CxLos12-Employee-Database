-- Template
-- INSERT INTO (id,)
-- VALUES (,""),
--        (,""),

-- Departments
INSERT INTO departments (name)
VALUES ("Web Development"),
       ("Marketing"),
       ("Software Engineer"),
       ("Data Analyst");

-- Roles
INSERT INTO roles (id, title, salary)
VALUES (10, "Freshman", 80000),
       (11, "Sophmore", 100000),
       (12, "Junior", 120000),
       (13, "Senior", 150000);

-- Employees
INSERT INTO employees (id, first, last, title, manager)
VALUES (201, "Carlos", "Bautista", "Freshman", "Ricardo"),
       (301, "Francisco", "Bautista", "Freshman", "Guilhermo");
    --    (,"",),
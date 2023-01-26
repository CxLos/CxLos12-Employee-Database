-- Template
-- INSERT INTO (id,)
-- VALUES (,""),
--        (,""),

-- Departments
INSERT INTO departments (name)
VALUES ("Web Development"),
       ("Marketing"),
       ("Engineering"),
       ("Design"),
       ("Data Analytics");

-- Roles
INSERT INTO roles (id, title, salary)
VALUES (10, "Freshman Developer", 80000),
       (11, "Sophmore Developer", 100000),
       (12, "Junior Developer", 120000),
       (13, "Senior Developer", 150000),
       (14, "Software Engineer", 150000),
       (15, "Marketing Manager", 130000),
       (16, "UX/UI Designer", 100000),
       (17, "Data Analyst", 110000),
       (18, "Data Architect", 115000);

-- Employees
INSERT INTO employees (id, first, last, title, depo, manager)
VALUES (201, "Carlos", "Bautista", "Software Engineer", "Engineering", "Ricardo"),
       (301, "Francisco", "Bautista", "Marketing Manager", "Marketing", "Guilhermo"),
       (956, "Rebecca", "Sherbert", "UX/UI Designer", "Design", "Christian"),
       (189, "Crystalee", "Negron", "Junior Developer", "Web Development", "Virna"),
       (189, "Gia", "Hayes", "Data Architect", "Data Analytics", "Thomas");
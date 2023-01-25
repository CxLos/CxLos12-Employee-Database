// Modules
const express = require('express');
const inquirer = require('inquirer');
const db = require("./db/login");
// const sequel = require('./db/login');
// const mysql = require('mysql2');
// const db = require('./db/login');
// const fs = require('fs');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sequelize.connect(err => {
//     if (err) throw err;
//     console.log("Employee Database Connected!");
// })

// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'nve2-98547yhgvfbnqp',
//       database: 'cxlos_db'
//     },
//     console.log(`Connected to the books_db database.`)
//   );

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening at PORT ${PORT}!`));
//   });

// questions
function begin() {
inquirer.prompt(
    [
        {
            type: 'list',
            message: "What would you like to do?",
            name: 'initial',
            choices: ['View all employees','Add employee','Update employee role','View all roles','Add role','View all departments','Add department','Quit'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
    ]
).then (response => {
    if (response.initial === "View all employees") {
        vEmp()
    } else if(response.initial === "Add employee") {
        aEmp()
    } else if(response.initial === "Update employee role") {
        uRole()
    } else if(response.initial === "View all roles") {
        vRole()
    } else if(response.initial === "Add role") {
        aRole()
    } else if(response.initial === "View all departments") {
        vDept()
    } else if(response.initial === "Add department") {
        aDept()
    } else 
        closeMenu();
});
};

// Functions
begin();

function vEmp () {
    db.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        console.table(results);
        begin();
    });
};

function aEmp () {
    inquirer.prompt (
        [
            {
            type: 'input',
            message: "Please enter employee name",
            name: 'name',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
            },
        ])
    db.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        console.table(results);
        vEmp();
    });
};

function uRole () {
    inquirer.prompt(
        [
            {
                type: 'list',
                message: "What would you like to update the role to?",
                name: 'role2',
                choices: ['', '',],
                validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
            },
        ])
    db.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        console.table(results);
        vRole();
    });
};

function vRole () {
    db.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err;
        console.table(results);
        begin();
    });
};

function aRole () {
    inquirer.prompt (
        [
            {
            type: 'input',
            message: "Please add new role",
            name: 'role1',
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
            },
        ]).then (response => {
            db.query("INSERT INTO roles (name) values ?", (response.roles), function (err, results) {
                if (err) throw err;
                vDept();
            });
        });
};

function vDept () {
    db.query("SELECT * FROM departments", function (err, results) {
        if (err) throw err;
        console.table(results);
        begin();
    });
};

function aDept () {
    inquirer.prompt (
        [
            {
            type: 'input',
            message: "Please add new department",
            name: 'dept1',
            // validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
            },
        ]).then 
            (function(answers) {
                db.query("INSERT INTO departments SET ?", {
                    name: answers.dept1
                }, function (error) {
                    if (error) throw error;
                    vDept();
                })
            });
        // (response => {
        //     db.query(`INSERT INTO departments SET ?`, (response.department), function (err, results) {
        //         if (err) throw err;
        //         vDept();
        //     });
        // });
  
};

function closeMenu () {
    console.log("Bye!");
    process.exit(1);
};

// Sequelize Way
// function vEmp () {
//     sequel.sync("Select * from employees", function (err, result) {
//         if (err) throw err;
//         console.table(result);
//         begin();
//     });
// };

// function aEmp () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };

// function uRole () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };

// function vRole () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };

// function aRole () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };

// function vDept () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };

// function aDept () {
//     sequelize.sync("Select * from employees", function (err, result) {
//         // if (err) throw err;
//         console.log("");
//         begin();
//     });
// };
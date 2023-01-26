// Modules
const inquirer = require('inquirer');
const db = require("./db/login");

// questions
function begin() {
inquirer.prompt(
    [
        {
            type: 'list',
            message: "What would you like to do?",
            name: 'initial',
            choices: ['View all employees','Add employee','View all roles','Add role', 'Update role', 'View all departments','Add department','Quit'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
    ]
).then (response => {
    if (response.initial === "View all employees") {
        vEmp()
    } else if(response.initial === "Add employee") {
        aEmp()
    } else if(response.initial === "View all roles") {
        vRole()
    } else if(response.initial === "Update role") {
        uRole()
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
            message: "Please enter new employee's ID#",
            name: 'emp1',
            },
            {
            type: 'input',
            message: "Please enter new employee's first name",
            name: 'emp2',
            },
            {
            type: 'input',
            message: "Please enter new employee's last name",
            name: 'emp3',
            },
            {
            type: 'list',
            message: "Please enter new employee's job title",
            name: 'emp4',
            choices: ['Freshman Developer', 'Sophomore Developer', 'Junior Developer', 'Senior Developer', 'Software Engineer', 'Marketing Manager', 'UX/UI Designer', 'Data Analyst', 'Data Architect'],
            },
            {
            type: 'list',
            message: "Please enter the department",
            name: 'emp5',
            choices: ['Web Development', 'Marketing', 'Engineering', 'Design', 'Data Analytics'],
            },
            {
            type: 'list',
            message: "Who is this employee's manager?",
            name: 'emp6',
            choices: ['Ricardo', 'Guilhermo', 'Christian', 'Virna', 'Thomas'],
            },
        ]).then 
            (function(answers) {
                db.query("INSERT INTO employees SET ?", {
                    id: answers.emp1,
                    first: answers.emp2,
                    last: answers.emp3,
                    title: answers.emp4,
                    depo: answers.emp5,
                    manager: answers.emp6,
                }, function (error) {
                    if (error) throw error;
                    vEmp();
                })
            });
};

function vRole () {
    db.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err;
        console.table(results);
        begin();
    });
};

function uRole () {
    inquirer.prompt (
        [
            {
            type: 'input',
            message: "Please enter role id",
            name: 'roleId',
            },
            {
            type: 'input',
            message: "Please enter updated salary",
            name: 'newSalary',
            },
        ]).then 
            (function(answers) {
                db.query("UPDATE roles SET ? WHERE ?", 
                [
                    {
                        salary: answers.newSalary
                    },
                    {
                        id: answers.roleId
                    },
                ],
                    function (error) {
                    if (error) throw error;
                    vRole();
                })
            });
};

function aRole () {
    inquirer.prompt (
        [
            {
            type: 'input',
            message: "Please enter role id",
            name: 'role1',
            },
            {
            type: 'input',
            message: "Please enter name of new role",
            name: 'role2',
            },
            {
            type: 'input',
            message: "Please enter salary",
            name: 'role3',
            },
        ]).then 
            (function(answers) {
                db.query("INSERT INTO roles SET ?", {
                    id: answers.role1,
                    title: answers.role2,
                    salary: answers.role3
                }, function (error) {
                    if (error) throw error;
                    vRole();
                })
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
};

function closeMenu () {
    console.log("Bye!");
    process.exit(1);
};
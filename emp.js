// Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// questions

inquirer.createPromptModule(
    [
        {
            type: 'list',
            message: "What would you like to do?",
            name: 'initial',
            choices: ['View all employees','Add employee','Update employee role','View all roles','Add role','View all departments','Add department','Quit'],
            validate: (value)=>{ if(value){return true} else {return 'Please enter a valied entry'}}
        },
    ]
)
const mysql = require('mysql2');
const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { response } = require('express');
const { star } = require('cli-spinners');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any request (not found!)
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log("EmployeeTracker Database Connected!");
    startMenu();
});


// create a function inquirer with all menu and `response.menu` below is tied to `name: "menu"`
function startMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "menu",
            choices: [
                "view all departments",
                "view all roles", 
                "view all employees",
                "add a department",
                "add a role",
                "add an employee", 
                "update an employee role"
            ],
            message: "choose the following choice?"
        }
        ])
        .then(response => {
            if (response.menu === "view all departments") {
                viewAllDepartment()
            } else if (response.menu === "view all roles") {
                viewAllRoles()
            } else if (response.menu === "view all employees") {
                viewAllEmployee()
            } else if (response.menu === "add a department") {
                addADepartment()
            } else if (response.menu === "add a role") {
                addARole()
            } else if (response.menu === "add an employee") {
                addAnEmployee()
            } else if (response.menu === "update an employee role") {
                updateAnEmployeeRole()
            }
        });    
};

console.table("|__________________________________________________________________________|");
console.table("|                                                                          |");
console.table("|  *******  *       *  ******  *        ******  *      *  *******  ******* |");
console.table("|  *        * *   * *  *    *  *        *    *    *   *   *        *       |");
console.table("|  *****    *   *   *  ******  *        *    *      *     *****    *****   |");
console.table("|  *        *       *  *       *        *    *      *     *        *       |");
console.table("|  *******  *       *  *       *******  ******      *     *******  ******* |");
console.table("|                                                                          |");
console.table("|                                                                          |");
console.table("|  *******  *******         *         *******  *     *   *******   ******  |");
console.table("|     *     *     *       *   *       *        *   *     *         *    *  |");
console.table("|     *     *******      *  *  *      *        * *       *****     ******  |");
console.table("|     *     *  *        *       *     *        *   *     *         *  *    |");
console.table("|     *     *     *    *         *    *******  *     *   *******   *    *  |");
console.table("|                                                                          |");
console.table("|__________________________________________________________________________|");

function viewAllDepartment() {
    db.query("select * from department", function (err, result) {
        if (err) throw err;
        console.table(result);
        startMenu()
    });
};

function viewAllRoles() {
    db.query("select * from role join department on role.department_id = role.id", function (err, result) {
        if (err) throw err;
        console.table(result);
        startMenu();
    });
};

function viewAllEmployee() {
        db.query("select * from employee", function (err, result) {
        if (err) throw err;
        console.table(result);
        startMenu();
    });
};

function addADepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department",
                message: "Enter department name: "
            }
        ])
        .then(response => {
            db.query("insert into department (name) values(?)", [response.department], function(err, result) {
                if (err) throw err;
                viewAllDepartment();
            });
        });
};

function addARole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Enter Role: "
            },
            {
                type: "input",
                name: "salary",
                message: "Enter salary: "
            },
            {
                type: "input",
                name: "department_id",
                message: "Enter Department ID: "
            }
        ])
        .then(response => {
            db.query("insert into role (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function(err, result) {
                if (err) throw err;
                viewAllRoles();
            });
        });
};

function addAnEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter First Name: "
            },
            {
                type: 'input',
                name: "last_name",
                message: "Enter Last Name: "
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the Role ID of this Employee: "
            }
        ])
        .then(response => {
            db.query("insert into employee (first_name, last_name, role_id) values (?, ?, ?)", [response.first_name, response.last_name, response.role_id], function(err, result) {
                if (err) throw err;
                viewAllEmployee();
            });
        });
};


function updateAnEmployeeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "What is the ID of Employee need to be updated: ?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the manager ID for this employee? :"
            }
        ])
        .then(response => {
            db.query(`update employee set manager_id = ? where id = ?`, [response.id, response.manager_id], function(err, result) {
                if (err) throw err;
                viewAllEmployee();
            });
        });
};
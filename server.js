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

// const pool = require('mysql2/promise').createPool({user: 'root', password: 'mysqldb!', database: 'employeetracker'});
// pool.getConnection()
//     .then(conn => {
//         const res = conn.query('select * from department');
//         conn.release();
//         return res;
//     })
//     .then(result => {
//         console.table(console.log(result));
//     })
//     .catch(err => {
//         console.log(err);
//     });

// db.connect(function(err) {
//     if (err) throw err;
//     db.query("select * from department", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// db.connect(function(err) {
//     if (err) throw err;
//     db.query("select * from role", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// db.connect(function(err) {
//     if (err) throw err;
//     db.query("select * from employee", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


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
            }
        });
};


function viewAllDepartment() {
    db.query("select * from department", function (err, result) {
        if (err) throw err;
        console.table(result);
        startMenu()
    });
};

function viewAllRoles() {
    db.query("select * from role", function (err, result) {
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
                message: "Enter a Role: "
            },
            {
                type: "input",
                name: "salary",
                message: "Enter salary: "
            },
            {
                type: "input",
                name: "department_id",
                message: "Enter department id: "
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
                name: "employee",
                message: "Enter employee name: "
            }
        ])
        .then(response => {
            db.query("insert into employee ()")
        })
}
const mysql = require('mysql2');
const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { response } = require('express');
const { star } = require('cli-spinners');
const { result } = require('lodash');
const res = require('express/lib/response');
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
                "update an employee role",
                "update employee manager",
                "view employees by manager",
                "view employees by department",
                "budget of a department",
                "delete a depertment",
                "delete a role",
                "delete an employee",
                "exit"
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
            } else if (response.menu === "update employee manager") {
                updateEmployeeManager()
            } else if (response.menu === "view employees by manager") {
                viewEmployeesByManager()
            } else if (response.menu === "view employees by department") {
                viewEmployeesByDepartment()
            } else if (response.menu === "budget of a department") {
                budgetOfADepartment()
            } else if (response.menu === "delete a depertment") {
                deleteADepartment()
            } else if (response.menu === "delete a role") {
                deleteARole()
            } else if (response.menu === "delete an employee") {
                deleteAnEmployee()
            } else 
                exitMenu();
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
    db.query(`select role.id, role.title, department.name as department, role.salary from role left join department on role.department_id = department.id`, function (err, result) {
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
                message: "To add a Role make sure deparment ID is created already! Enter Department ID: "
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
                name: "role_id",
                message: "What is the new role ID of this employee? :"
            }
        ])
        .then(response => {
            db.query(`update employee set role_id = ? where id = ?`, [response.role_id, response.id], function(err, result) {
                if (err) throw err;
                viewAllEmployee();
            });
        });
};

function updateEmployeeManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: 'id',
                message: "What is the ID of the employee who's manager would need to be updated? "
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is manager's ID? "
            }
        ])
        .then(response => {
            db.query(`update employee set manager_id = ? where id = ?`, [response.manager_id, response.id], function(err, result) {
                if (err) throw err;
                viewAllEmployee();
            });
        });
};

function viewEmployeesByManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "manager_id",
                message: "What is the manager's ID which would show all employees direct reports to:? "
            }
        ])
        .then(response => {
            db.query(`select * from employee where manager_id = ?`, [response.manager_id], function(err, result) {
                if (err) throw err;
                console.table(result);
                viewAllEmployee();
            });
        });
};

function viewEmployeesByDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter department ID: " 
            }
        ])
        .then(response => {
            //  this works as well `select employee.id, employee.first_name, employee.role_id, role.title, role.salary from employee join role on role.id = employee.id where role.id = 2;`
            db.query(`select t1.id, t1.first_name, t1.role_id, t2.title, t2.salary from employee t1 join role t2 on t1.id = t2.id where t2.id = ?`, [response.id], function(err, result) {
                if(err) throw err;
                console.table(result);
                viewAllDepartment();
            });
        });
};

function budgetOfADepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department_id",
                message: "Enter the department ID to see budget of that department: "
            }
        ])
        .then(response => {
            db.query(`select sum(role.salary) from role where department_id = ?;`, [response.department_id], function (err, result) {
                if (err) throw err;
                console.table(result);
                viewAllRoles();
            });
        });
};

function deleteADepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter the department ID needs to be deleted: "
            }
        ])
        .then(response => {
            db.query(`set foreign_key_checks=0;`);
            db.query(`delete from department where id = ?`, [response.id], function(err, result) {
                if (err) throw err;
                // console.table(result);
                db.query(`set foreign_key_checks=1;`);
                viewAllDepartment();
            });
        });
};

function deleteARole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter the Role ID need to be deleted: "
            }
        ])
        .then(response => {
            db.query(`delete from role where id = ?;`, [response.id], function(err, result) {
                if(err) throw err;
                // console.table(result);
                viewAllRoles();
            });
        });
};

function deleteAnEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "ID of the employee need to be deleted: "
            }
        ])
        .then(response => {
            db.query(`delete from employee where id = ?;`, [response.id], function(err, result) {
                if(err) throw err;
                // console.table(result);
                viewAllEmployee();
            });
        });
};


function exitMenu() {
    process.exit(1);
};
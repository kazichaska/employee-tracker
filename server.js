const mysql = require('mysql2');
const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const { result } = require('lodash');
const cTable = require('console.table');
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
// db.connect(err => {
//     if (err) throw err;
//     console.log("EmployeeTracker Database Connected!");
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// });

const pool = require('mysql2/promise').createPool({user: 'root', password: 'mysqldb!', database: 'employeetracker'});
// pool.getConnection()
//     .then(conn => {
//         const res = conn.query('select * from department');
//         conn.release();
//         return res;
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });

pool.query({ sql: 'select * from role', rowsAsArray: true  }, function(err, results, fields){
    console.log(results)
    console.log(fields);
});
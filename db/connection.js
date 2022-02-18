const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL username
        user: 'root',
        // MYSQL password
        password: "mysqldb!",
        database: "employeetracker"
    },
    console.log('Connected to the Employee Tracker Database!')
);

module.exports = db;
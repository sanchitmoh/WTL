//CREATE DATABASE college;

//USE college;

//CREATE TABLE students (
  //  id INT AUTO_INCREMENT PRIMARY KEY,
    //name VARCHAR(50),
    //email VARCHAR(50),
    //age INT
//);



// npm install mysql2
// npm install readline

const mysql = require('mysql2');
const readline = require('readline');

// create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'college'
});

// connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        throw err;
    }
    console.log('Database Connected');
});

// ================= CRUD FUNCTIONS =================

// INSERT
function insertStudent() {
    const sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
    db.query(sql, ['Sanchit', 'sanchit@gmail.com', 22], (err) => {
        if (err) throw err;
        console.log('1 record inserted');
    });
}

// READ
function readStudent() {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

// UPDATE
function updateStudent() {
    const sql = "UPDATE students SET age=?, name=? WHERE id=?";
    db.query(sql, [23, 'Rudra', 12], (err) => {
        if (err) throw err;
        console.log('Record Updated');
    });
}

// DELETE
function deleteStudent() {
    const sql = "DELETE FROM students WHERE id=?";
    db.query(sql, [1], (err) => {
        if (err) throw err;
        console.log('Record Deleted');
    });
}

// BULK INSERT
function bulkInsert() {
    const sql = "INSERT INTO students (name, email, age) VALUES ?";
    const values = [
        ['Amit', 'amit@gmail.com', 21],
        ['Riya', 'riya@gmail.com', 22],
        ['Neha', 'neha@gmail.com', 23]
    ];
    db.query(sql, [values], (err) => {
        if (err) throw err;
        console.log('Bulk Insert Successful');
    });
}

// ================= SWITCH STATEMENT WITH LOOP =================

function performOperation() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\n========== STUDENT MANAGEMENT SYSTEM ==========');
    console.log('create  - Insert a student');
    console.log('read    - View students');
    console.log('update  - Update student');
    console.log('delete  - Delete student');
    console.log('bulk    - Bulk insert');
    console.log('exit    - Exit program\n');

    rl.question('Enter operation: ', (operation) => {
        operation = operation.toLowerCase().trim();

        switch (operation) {

            case 'create':
                insertStudent();
                break;

            case 'read':
                readStudent();
                break;

            case 'update':
                updateStudent();
                break;

            case 'delete':
                deleteStudent();
                break;

            case 'bulk':
                bulkInsert();
                break;

            case 'exit':
                console.log('Exiting program...');
                rl.close();
                db.end();
                return;

            default:
                console.log('Invalid Operation!');
        }

        rl.close();

        // loop again
        setTimeout(performOperation, 1500);
    });
}

// Start program
performOperation();

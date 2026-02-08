const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// เพิ่มใช้งานไฟล์
const conn = require('./database');

// static resourse & template engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');
// For parsing form data
app.use(express.urlencoded({ extended: true }));

// routing 
app.get('/', (req, res) => {
    res.send(`<a href="/create">Create table</a><br>
        <a href="/insert">Insert data to table</a><br>
        <a href="/showdata">Show data</a><br>
        <a href="/form">Instructer form</a>`);
});

app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/formget', (req, res) => {
    /* const id = req.query.id;
    const name = req.query.name;
    const dept = req.query.deptname;
    const sal = req.query.salary; */
    const { id, name, deptname, salary } = req.query;
    const insertSql = "INSERT INTO Instructer (ID, NAME, DEPT_NAME, SALARY) VALUES (?, ?, ?, ?)";
    conn.query(insertSql, [id, name, deptname, salary], (err, result) => {
        if (err) throw err;
        console.log("Data inserted");
        res.send("Data inserted");
    });
});

app.get('/showdata', (req, res) => {
    const sql = 'SELECT * FROM Instructer;';
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('show', { data: result });
    });
});

app.get('/create', (req, res) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS Instructer (
        ID VARCHAR(5) NOT NULL,
        NAME VARCHAR(20) NOT NULL,
        DEPT_NAME VARCHAR(20) NOT NULL,
        SALARY FLOAT,
        PRIMARY KEY (ID)
    );`;
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created or already exists");
        res.send("Table created or already exists");
    });
});

app.get('/insert', (req, res) => {
    const sql = `INSERT INTO Instructer (ID, NAME, DEPT_NAME, SALARY) VALUES
    ('10101', "Srinivasan", "Comp. Sci.", 65000),
    ('12121', "Wu", "Finance", 90000),
    ('15151', "Mozart", "Music", 40000),
    ('22222', "Einstein", "Physics", 95000),
    ('32343', "El Said", "History", 60000);`;
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table inserted into table");
        res.send("Table inserted into table");
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 

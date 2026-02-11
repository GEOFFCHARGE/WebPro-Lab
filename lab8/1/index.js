const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const conn = require("./database");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const createSql =
    `CREATE TABLE IF NOT EXISTS Users (
        username VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL,
        email VARCHAR(20) NOT NULL,
        firstname VARCHAR(20) NOT NULL,
        lastname VARCHAR(20) NOT NULL,
        age INT NOT NULL,
        address VARCHAR(100) NOT NULL,
        phone VARCHAR(10) NOT NULL
    );`;
    conn.query(createSql, (err, result) => {
        if (err) throw err;
        console.log("Table created or already exists");
        res.sendFile(path.join(__dirname, "/public/html/register.html"));
    });
});

app.get("/formget", (req, res) => {
    const { username, password, email, firstname, lastname, age, address, phone } = req.query;
    const insertSql = "INSERT INTO Users (username, password, email, firstname, lastname, age, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    conn.query(insertSql, [username, password, email, firstname, lastname, age, address, phone], (err, result) => {
        if (err) throw err;
        res.redirect("/showdata");
    });
});

app.get("/showdata", (req, res) => {
    const showSql = "SELECT * FROM Users;";
    conn.query(showSql, (err, result) => {
        if (err) throw err;
        res.render("show", { data: result });
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

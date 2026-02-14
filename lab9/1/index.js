const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const app = express();

let db = new sqlite3.Database("userdata.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
});

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let sql = `SELECT * FROM users`;
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.render("list", { data: rows });
    });
});

app.get("/detail/:id", (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ${req.params.id};`;
    db.all(sql, (err, row) => {
        if (err) {
            console.log(err.message);
        }
        console.log(row);
        res.render("detail", { data : row[0] });
    });
});

app.listen(port, () => {
    console.log("Server started.");
});

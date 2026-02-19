let express = require("express");
let path = require("path");
let port = 3000;
let sqlite3 = require("sqlite3").verbose();
let app = express();

let db = new sqlite3.Database("invoices.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
});

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let sqlCreate =
    `CREATE TABLE IF NOT EXISTS invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer VARCHAR(255) NOT NULL,
        product VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        status VARCHAR(255) DEFAULT "รอดำเนินการ"
    );`;
    db.run(sqlCreate, (err, rows) => {
        if (err) {
            return console.log(err.message);
        }
    });
    let sqlSelect = `SELECT id, customer, product, status FROM invoices;`;
    db.all(sqlSelect, (err, rows) => {
        if (err) {
            return console.log(err.message);
        }
        res.render("show", { data: rows });
    });
});

app.get("/insert", (req, res) => {
    let { customer, product, address, phone } = req.query;
    let sqlInsert = `INSERT INTO invoices (customer, product, address, phone) VALUES (?, ?, ?, ?);`;
    db.run(sqlInsert, [customer, product, address, phone], (err, rows) => {
        if (err) {
            return console.log(err.message);
        }
        res.redirect("/");
    });
});

app.get("/update/:id", (req, res) => {
    let sqlSelect = `UPDATE invoices SET status = ? WHERE id = ?;`;
    db.all(sqlSelect, [req.query.status, req.params.id], (err, rows) => {
        if (err) {
            return console.log(err.message);
        }
        res.redirect("/");
    });
});

app.listen(port, () => {
    console.log("Server started.");
});

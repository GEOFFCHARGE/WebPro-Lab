const express = require("express");
const cookieParser = require("cookie-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const port = 3000;

const db = new sqlite3.Database("customers.db", (err) => {
    if (err) throw err;
    console.log("Connected to the SQLite database.");
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    let sql = `SELECT * FROM customers ORDER BY RANDOM() LIMIT 1`;
    db.get(sql, (err, row) => {
        if (err) throw err;
        res.render("form", { data: row });
    });
});

app.get("/set-cookie", (req, res) => {
    try {
        res.cookie("info", req.query, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            secure: false
        });
        res.render("form", { data: {} });
    }
    catch (err) {
        console.error('Error setting cookie:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/get-cookie", (req, res) => {
    try {
        res.render("form", { data: req.cookies.info || {} });
    }
    catch (err) {
        console.error('Error reading cookies:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/clear-cookie", (req, res) => {
    res.clearCookie("info", {
        httpOnly: true,
        secure: false,
        sameSite: "Strict"
    });
    res.render("form", { data: {} });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

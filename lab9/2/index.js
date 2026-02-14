let express = require("express");
let path = require("path");
let port = 3000;
let sqlite3 = require("sqlite3").verbose();
let app = express();

let db = new sqlite3.Database("questions.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
});

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let sql = `SELECT * FROM questions`;
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return;
        }
        res.render("show", { data: rows });
    });
});

app.get("/formget", (req, res) => {
    let score = 0;
    let total = 0;
    let selects = req.query;
    let sql = `SELECT QID, Correct FROM questions`;
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return;
        }
        rows.forEach((row) => {
            if (selects[row.QID] === row.Correct) {
                score++;
            }
            total++;
        });
        res.render("score", { data: [score, total] });
    });
});

app.listen(port, () => {
    console.log("Server started.");
});

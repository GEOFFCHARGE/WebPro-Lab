let express = require("express");
let path = require("path");
let port = 3000;
let sqlite3 = require("sqlite3").verbose();

let app = express();

let db = new sqlite3.Database("todolist.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
});

let sqlCreate =
    `CREATE TABLE IF NOT EXISTS Todolist (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Title VARCHAR(255) NOT NULL,
        Description VARCHAR(255) NOT NULL,
        Deadline VARCHAR(255) NOT NULL,
        Status INTEGER DEFAULT 0
    );`
db.run(sqlCreate, (err, rows) => {
    if (err) {
        return console.log(err.message);
    }
});

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    let endpoint = "http://localhost:3000/data";
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            res.render("show", { data: wsdata });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/form.html"));
});

app.get("/create", (req, res) => {
    let { title, description, deadline } = req.query;
    let insertSql = `INSERT INTO Todolist (Title, Description, Deadline) VALUES (?, ?, ?);`;
    db.run(insertSql, [title, description, deadline], (err) => {
        if (err) {
            console.log(err.message);
        }
        res.redirect("/");
    });
});

app.get("/update/:id", (req, res) => {
    let status = req.query.status == "on" ? 1 : 0;
    let id = req.params.id;
    let updateSql = `UPDATE Todolist SET Status = ? WHERE ID = ?;`;
    db.all(updateSql, [status, id], (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        res.redirect("/");
    });
});

app.get("/data", (req, res) => {
    let selectSql = `SELECT * FROM Todolist;`;
    db.all(selectSql, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        res.send(JSON.stringify(rows));
    });
});

app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});

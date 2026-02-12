const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const conn = require("./database");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/signin.html"));
});

app.get("/notfound", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/notfound.html"));
});

app.get("/wrongpass", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/html/wrongpass.html"));
});

app.get("/formget", (req, res) => {
    const { identify, password } = req.query;
    const sql = `SELECT * FROM Users WHERE username = ? OR email = ?;`;
    conn.query(sql, [identify, identify], (err, result) => {
        if (err) throw err;
        else if (result.length == 0) {
            console.log("ไม่พบบัญชีผู้ใช้");
            res.redirect("/notfound");
        }
        else if (result[0].password !== password) {
            console.log("รหัสผ่านไม่ถูกต้อง");
            res.redirect("/wrongpass");
        }
        else {
            console.log("ตรงกับที่มีในฐานข้อมูล");
            res.render("show", { data: result[0] });
        }
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

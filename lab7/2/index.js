const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/home.html"));
});

app.get("/ramen", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/ramen.html"));
});

app.get("/charsiu", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/charsiu.html"));
});

app.get("/tikkamasala", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/tikkamasala.html"));
});

app.get("/lasagne", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/lasagne.html"));
});

app.get("/ratatouille", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/ratatouille.html"));
});

app.get("/tacos", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/tacos.html"));
});

app.listen(port, () => {
    console.log("Directory: " + process.cwd());
    console.log("Server is running on port " + port + ", press Ctrl-C to terminate...");
})

const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/home.html"));
});

app.get("/dog", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/dog.html"));
});

app.get("/bird", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/bird.html"));
});

app.get("/cat", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/cat.html"));
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "public/html/about.html"));
});

app.listen(port, () => {
    console.log("Directory: " + process.cwd());
    console.log("Server is running on port " + port + ", press Ctrl-C to terminate...");
})

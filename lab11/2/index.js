const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3000;

app.use(session({
    secret: "your-secret-key-for-your-store",
    resave: false,
    saveUninitialized: true,
}));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/menu")
});

app.get("/menu", (req, res) => {
    let endpoint = "http://webdev.it.kmitl.ac.th:4000/restaurant";
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            res.render("menu", { data: wsdata });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/add-to-cart/:item", (req, res) => {
    let item = req.params.item;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    let endpoint = `http://webdev.it.kmitl.ac.th:4000/detail/${item}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            req.session.cart.push(wsdata);
            res.redirect("/menu");
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/cart", (req, res) => {
    let cart = req.session.cart || [];
    res.render("cart", { data: cart });
});

app.get("/clear-cart", (req, res) => {
    req.session.cart = [];
    res.redirect("/cart");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

setTheme(getTheme());

function getTheme() {
    let theme = localStorage.getItem("theme") || "light";
    return theme;
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    changeColor(theme);
}

function changeColor(theme) {
    let h1 = document.querySelectorAll("h1");
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");
    let p = document.querySelectorAll("p");
    let a = document.querySelectorAll("a");
    let li = document.querySelectorAll("li");
    let color1 = document.querySelectorAll(".color1");
    let color2 = document.querySelectorAll(".color2");
    let badge = document.querySelectorAll(".badge");
    let textColor = [h1, h2, h3, p, a, li];
    textColor.forEach(function (tag) {
        tag.forEach(function (node) {
            node.style.color = theme == "light" ? "#000000": "#ffffff";
        });
    });
    color1.forEach(function (node) {
        node.style.backgroundColor = theme == "light" ? "#f5f5f5": "#252526";
    });
    color2.forEach(function (node) {
        node.style.backgroundColor = theme == "light" ? "#f9f9f9": "#1e1e1e";
    });
    badge.forEach(function (node) {
        node.style.color = theme == "light" ? "#ffffff": "#000000";
    });
    changeButton(theme == "light" ? "โหมดมืด": "โหมดสว่าง");
}

function changeButton(text) {
    document.getElementById("button").innerText = text;
}

function changeTheme() {
    setTheme(getTheme() == "light" ? "dark": "light");
}

setTheme(getTheme());

function getTheme() {
    let theme = localStorage.getItem("theme") || "light";
    return theme;
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    changeColor(theme);
    changeButton(theme == "light" ? "โหมดกลางคืน": "โหมดกลางวัน");
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
    h1.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    h2.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    h3.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    p.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    a.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    li.forEach(function (node) {
        node.style.color = theme == "light" ? "#000000": "#ffffff";
    });
    color1.forEach(function (node) {
        node.style.backgroundColor = theme == "light" ? "#ffffff": "#1e1e1e";
    });
    color2.forEach(function (node) {
        node.style.backgroundColor = theme == "light" ? "#fafafa": "#252526";
    });
}

function changeButton(text) {
    let title = document.getElementById("title");
    title.removeChild(title.lastElementChild);
    let button = document.createElement("button");
    let txt = document.createTextNode(text);
    button.append(txt);
    button.setAttribute("id", "button");
    button.setAttribute("onclick", "changeTheme()");
    title.appendChild(button);
}

function changeTheme() {
    setTheme(getTheme() == "light" ? "dark": "light");
}

let list = document.getElementById("list");
let count = localStorage.getItem("count") || 0;

displayItem();

function addItem() {
    let input = document.getElementById("input");
    let movies = JSON.parse(localStorage.getItem("movies")) || {};
    movies[count] = input.value;
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("count", ++count);
    input.value = "";
    displayItem();
}

function removeItem(id) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    delete movies[id];
    localStorage.setItem("movies", JSON.stringify(movies));
    JSON.stringify(movies)  == "{}" ? removeAll(): displayItem();
}

function removeAll() {
    localStorage.clear();
    localStorage.setItem("count", 0);
    count = localStorage.getItem("count");
    displayItem();
}

function displayItem() {
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
        for (let id in movies) {
            let div = document.createElement("div");
            div.setAttribute("class", "movie");
            div.setAttribute("id", id);
            let p = document.createElement("p");
            let txt1 = document.createTextNode("🎬 " + movies[id]);
            p.appendChild(txt1);
            let btn = document.createElement("button");
            btn.setAttribute("class", "red");
            btn.setAttribute("onclick", "removeItem(this.parentElement.id)");
            let txt2 = document.createTextNode("ลบ");
            btn.appendChild(txt2);
            div.appendChild(p);
            div.appendChild(btn);
            list.appendChild(div);
        }
    }
    else {
        let div = document.createElement("div");
        div.setAttribute("class", "movie");
        let p = document.createElement("p");
        let txt = document.createTextNode("ยังไม่มีรายการโปรด");
        p.appendChild(txt);
        div.appendChild(p);
        list.appendChild(div);
    }
}

function students(data) {
    let count = 1;
    data.forEach(student => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");
        let img = document.createElement("img");
        img.setAttribute("src", student.gender == "Male" ? "images/male.png": "images/female.png");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let txt1 = document.createTextNode(count + ". " + student.name);
        let txt2 = document.createTextNode("Physics: " + student.physics);
        let txt3 = document.createTextNode("Mathmatics: " + student.maths);
        let txt4 = document.createTextNode("English: " + student.english);
        h2.appendChild(txt1);
        p1.appendChild(txt2);
        p2.appendChild(txt3);
        p3.appendChild(txt4);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        document.getElementById("student").appendChild(div);
        count++;
    });
}

fetch("student-score.json")
    .then(response => response.json())
    .then(data => students(data))
    .catch(error => console.log("error", error));

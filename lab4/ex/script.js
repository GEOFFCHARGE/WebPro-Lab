/* 1 */
/* function listOfMonths() {
    const months = ["January", "February",
                    "March", "April",
                    "May", "June",
                    "July", "August",
                    "September", "October",
                    "November", "December"];
    let list = document.createElement("ul");
    months.forEach(function (months) {
        let li = document.createElement("li");
        let text = document.createTextNode(months);
        li.appendChild(text);
        list.appendChild(li);
    });
    document.getElementById("pmonths").appendChild(list);
} */

/* 2 */
/* function addNode() {
    // 1. <p>Java</p>
    let pt4 = document.createElement("p");
    // 2. create text node 
    let txt = document.createTextNode("Java");
    // 3. append text node to a parent node
    pt4.appendChild(txt);
    // 4. select a parent node
    let parent1 = document.getElementById("div1");
    // 5. append element node to a parent node
    // parent1.appendChild(pt4);
    //  uncomment in step 2 //
    let childP1 = document.getElementById("p1");
    parent1.insertBefore(pt4, childP1);
}
function deleteNode() {
    let parent2 = document.getElementById("div1");
    let delPtag = document.getElementById("p2");
    parent2.removeChild(delPtag);
}
function addNewImage() {
    // <img src="http://webdev.it.kmitl.ac.th/labdocs/lab3/images/md2.png">
    let imgtag = document.createElement("img");
    imgtag.setAttribute('src', 'http://webdev.it.kmitl.ac.th/labdocs/lab3/images/md2.png');
    // set image size
    imgtag.setAttribute('width', '400px');
    // set image class
    imgtag.setAttribute('class', 'md1');
    // add IMG to parent node
    let parent3 = document.getElementById("div2");
    parent3.appendChild(imgtag);
}
function changeStyles() {
    let d = document.getElementById("div1");
    d.style.color = "blue";
    d.style.fontFamily = "Comic Sans MS";
} */

/* 3 */
const departments = ['Mathematics', 'Science', 'Language Arts', 'Social Studies'];
const subjects = [
    ["Calculus", "Physics", "English", "History"],
    ["Algebra", "Chemistry", "Literature", "Geography"],
    ["Geometry", "Biology", "Creative Writing", "Civics"],
    ["Statistics", "Earth Science", "Poetry", "Economics"],
    ["Trigonometry", "Astronomy", "Drama", "Political Science"],
    ["Pre-Calculus", "Environmental Science", "Journalism", "Sociology"],
    ["Linear Algebra", "Anatomy", "Public Speaking", "Psychology"],
    ["Differential Equations", "Genetics", "Mythology", "Anthropology"],
    ["Discrete Math", "Microbiology", "Technical Writing", "World History"],
    ["Number Theory", "Ecology", "Film Studies", "Cultural Studies"]
];

let table = document.createElement('table');
let headerRow = document.createElement('tr');
departments.forEach(function (dept) {
    let th = document.createElement('th');
    let text = document.createTextNode(dept);
    th.appendChild(text);
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

subjects.forEach(function (subjectRow) {
    let tr = document.createElement('tr');
    subjectRow.forEach(function (subject) {
        let td = document.createElement('td');
        let text = document.createTextNode(subject);
        td.appendChild(text);
        tr.appendChild(td);
    });
    table.appendChild(tr);
});

document.getElementById('div1').appendChild(table);

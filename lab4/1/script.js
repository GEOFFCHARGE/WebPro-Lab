function multiply() {
    let value = document.getElementById("value").value;
    if (1 > value || value > 12) {
        alert("Set a value between 1 and 12 only");
        return 0;
    }
    if (document.getElementsByTagName("table").length) {
        document.getElementById("multiply").removeChild(document.getElementsByTagName("table")[0]);
    }
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let txt1 = document.createTextNode("ผลคูณ");
    let txt2 = document.createTextNode("ผลลัพธ์");
    th1.appendChild(txt1);
    th2.appendChild(txt2);
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    for (let i = 1; i < 13; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let txt1 = document.createTextNode(value + " × " + i);
        let txt2 = document.createTextNode(value * i);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    document.getElementById("multiply").appendChild(table);
}

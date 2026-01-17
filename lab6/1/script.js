function employees(data) {
    let count = 1;
    let table = document.getElementById("table");
    data.forEach(employee => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let txt1 = document.createTextNode(employee.id);
        let txt2 = document.createTextNode(employee.FirstName + " " + employee.LastName);
        let txt3 = document.createTextNode(employee.Gender[0]);
        let txt4 = document.createTextNode(employee.Position);
        let txt5 = document.createTextNode(employee.Address);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        count++ % 2 ? tr.setAttribute("class", "odd"): tr.setAttribute("class", "even");
        table.appendChild(tr);
    });
}

fetch("employees.json")
    .then(response => response.json())
    .then(data => employees(data))
    .catch(error => console.log("error", error));

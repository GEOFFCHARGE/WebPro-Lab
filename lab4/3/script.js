let balance = 0;

function addRow(lists, count, type, date) {
    let row = [date, lists, type == "inc" ? count: 0, type == "inc" ? 0: count];
    let tr = document.createElement("tr");
    row.forEach(function (col) {
        let td = document.createElement("td");
        let txt = document.createTextNode(col);
        td.appendChild(txt);
        tr.appendChild(td);
    });
    let table = document.getElementById("table");
    table.appendChild(tr);
}

function updateBalance(count, type) {
    count = Number(count);
    balance = type == "inc" ? balance + count: balance - count;
    let h1 = document.createElement("h1");
    let txt = document.createTextNode(balance);
    h1.appendChild(txt);
    h1.setAttribute("id", "remove");
    let parent = document.getElementById("result");
    let remove = document.getElementById("remove");
    parent.removeChild(remove);
    parent.appendChild(h1);
}

function addItem() {
    let lists = document.getElementById("lists").value;
    let count = document.getElementById("count").value;
    let type = document.getElementById("type").value;
    let date = document.getElementById("date").value;
    if (!lists || !count || !date) {
        alert("Please fill in all fields");
        return 0;
    }
    addRow(lists, count, type, date);
    updateBalance(count, type);
}

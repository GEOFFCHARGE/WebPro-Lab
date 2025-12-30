let balance = 0;

function addRow(lists, money, type, date) {
    let row = [date, lists, type == "inc" ? money: 0, type == "inc" ? 0: money];
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

function updateBalance(money, type) {
    money = Number(money);
    balance = type == "inc" ? balance + money: balance - money;
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
    let lists = document.getElementById("lists");
    let money = document.getElementById("money");
    let type = document.getElementById("type");
    let date = document.getElementById("date");
    if (!lists.value || !money.value || !date.value) {
        alert("Please fill in all fields");
        return 0;
    }
    addRow(lists.value, money.value, type.value, date.value);
    updateBalance(money.value, type.value);
    lists.value = "";
    money.value = "";
    date.value = "";
}

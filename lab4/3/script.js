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
    let lists = document.getElementById("lists").value;
    let money = document.getElementById("money").value;
    let type = document.getElementById("type").value;
    let date = document.getElementById("date").value;
    if (!lists || !money || !date) {
        alert("ใส่ข้อมูลให้ครบก่อนกดเพิ่มรายการ");
        return 0;
    }
    addRow(lists, money, type, date);
    updateBalance(money, type);
    document.getElementById("lists").value = "";
    document.getElementById("money").value = "";
    document.getElementById("date").value = "";
}

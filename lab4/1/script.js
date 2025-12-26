function multiply() {
    let value = document.getElementById("value").value;
    if (1 > value || value > 12) {
        alert("Set a value between 1 and 12 only");
        return 0;
    }
    let table = document.getElementById("table")
    let tHead = table.getElementsByTagName("thead")[0];
    let tBody = table.getElementsByTagName("tbody")[0];
    tHead.innerHTML = "<tr><td>เลขคูณ</td><td>ผลลัพธ์</td></tr>"
    let temp = "";
    for (let i = 1; i < 8; i++) {
        temp += "<tr><td>" + value + " × " + i + "</td><td>" + (value * i) + "</td></tr>";
    }
    tBody.innerHTML = temp;
    return 1;
}

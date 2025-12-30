let language = "th";
let fnameInput = document.getElementById("fnameInput");
let lnameInput = document.getElementById("lnameInput");
let choose = document.getElementById("choose");
let change = document.getElementById("change");
let code = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function removeAllChild(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}

function createFnameInput(text) {
    let label = document.createElement("label");
    let txt = document.createTextNode(text);
    label.appendChild(txt);
    label.setAttribute("for", "fname");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "fname");
    input.setAttribute("name", "fname");
    fnameInput.appendChild(label);
    fnameInput.appendChild(input);
}

function createLnameInput(text) {
    let label = document.createElement("label");
    let txt = document.createTextNode(text);
    label.appendChild(txt);
    label.setAttribute("for", "lname");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "lname");
    input.setAttribute("name", "lname");
    lnameInput.appendChild(label);
    lnameInput.appendChild(input);
}

function createChoose(text, countries) {
    let label = document.createElement("label");
    let txt = document.createTextNode(text);
    label.appendChild(txt);
    label.setAttribute("for", "country");
    let select = document.createElement("select");
    for (let i = 0; i < countries.length; i++) {
        let option = document.createElement("option");
        let txt = document.createTextNode(countries[i]);
        option.appendChild(txt);
        option.setAttribute("value", code[i]);
        select.appendChild(option);
    }
    select.setAttribute("id", "country");
    select.setAttribute("name", "country");
    choose.appendChild(label);
    choose.appendChild(select);
}

function createButton(text) {
    let button = document.createElement("button");
    let txt = document.createTextNode(text);
    button.appendChild(txt);
    button.setAttribute("onclick", "changeLanguage()");
    change.appendChild(button);
}

function toEnglish() {
    let countries = ["Select a country", "Thailand", "Vietnam", "Laos", "Malaysia", "Singapore", "Philippines", "Myanmar", "Cambodia", "Brunei", "Indonesia"];
    createFnameInput("First Name:");
    createLnameInput("Last Name:");
    createChoose("Country:", countries);
    createButton("Change to Thai");
    return "en";
}

function toThai() {
    let countries = ["เลือกประเทศ", "ไทย", "เวียดนาม", "ลาว", "มาเลเซีย", "สิงคโปร์", "ฟิลิปปินส์", "เมียนมาร์", "กัมพูชา", "บรูไน", "อินโดนีเซีย"];
    createFnameInput("ชื่อ:");
    createLnameInput("นามสกุล:");
    createChoose("ประเทศ:", countries);
    createButton("เปลี่ยนเป็นภาษาอังกฤษ");
    return "th";
}

toThai();

function changeLanguage() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
    removeAllChild(fnameInput);
    removeAllChild(lnameInput);
    removeAllChild(choose);
    removeAllChild(change);
    language = language == "th" ? toEnglish(): toThai();
    document.getElementById("fname").value = fname;
    document.getElementById("lname").value = lname;
    document.getElementById("country").value = country;
}

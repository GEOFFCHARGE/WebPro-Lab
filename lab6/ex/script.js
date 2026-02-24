/* 1 */
/* let person = {
    "firstname": "John",
    "lastname": "Doe",
    "age": 30,
    "cars": ["Toyota", "BMW", "BVD", "Honda", "Hyndai"]
};
let text = person.firstname + " " + person.lastname + " is " + person.age + " years old<br>";
person.cars.forEach((car) => {
    text += "-" + car + "<br>";
});
document.getElementById("out").innerHTML = text; */

/* 2ab */
/* function heroes(data) {
    let text = data.squadName + "<br>";
    text += data.homeTown + "<br>";
    data.members.forEach(member => {
        text += "-- " + member.name + " (" + member.age + ")<br>";
        member.powers.forEach((power) => {
            text += "*" + power + "<br>";
        });
    });
    document.getElementById("div1").innerHTML = text;
} 

fetch("superheroes.json")
    .then(response => response.json())
    .then(data => heroes(data))
    .catch(error => console.log("error", error));
*/

/* 2c */
function orders(data) {
    document.getElementById("id").innerHTML = data.orderId;
    document.getElementById("date").innerHTML = data.orderDate;
    document.getElementById("cust").innerHTML = data.customer.name;
    document.getElementById("mail").innerHTML = data.customer.email;
    data.items.forEach(item => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let txt1 = document.createTextNode(parseInt(item.productId.slice(5)));
        let txt2 = document.createTextNode(item.name);
        let txt3 = document.createTextNode(item.quantity);
        let txt4 = document.createTextNode("$" + item.price);
        let txt5 = document.createTextNode("$" + item.quantity * item.price);
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
        document.getElementById("tb").appendChild(tr);
    });
    document.getElementById("ship").innerHTML = data.shipping.address.street + ", " + data.shipping.address.city + ", " + data.shipping.address.state + " " + data.shipping.address.zipCode;
}

fetch("order.json")
    .then(response => response.json())
    .then(data => orders(data))
    .catch(error => console.log("error", error));

/* 3 */
/* function SaveForm() {
    let fname = document.getElementById("FirstName").value;
    let lname = document.getElementById("LastName").value;
    let country = document.getElementById("Country").value;
    localStorage.setItem("userFirstName", fname);
    localStorage.setItem("userLastName", lname);
    localStorage.setItem("userCountry", country);
    alert("Data saved");
}

function LoadData(){
    let fn = localStorage.getItem("userFirstName");
    let ln = localStorage.getItem("userLastName");
    let cty = localStorage.getItem("userCountry");
    document.getElementById("FirstName").value = fn;
    document.getElementById("LastName").value = ln;
    document.getElementById("Country").value = cty;
    localStorage.clear();
} */

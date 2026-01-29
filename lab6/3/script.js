function questions(data) {
    let count = 1;
    data.forEach(quest => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let i1 = document.createElement("input");
        let i2 = document.createElement("input");
        let i3 = document.createElement("input");
        i1.setAttribute("type", "radio");
        i1.setAttribute("id", count + "a");
        i1.setAttribute("name", count);
        i1.setAttribute("value", "a");
        i2.setAttribute("type", "radio");
        i2.setAttribute("id", count + "b");
        i2.setAttribute("name", count);
        i2.setAttribute("value", "b");
        i3.setAttribute("type", "radio");
        i3.setAttribute("id", count + "c");
        i3.setAttribute("name", count);
        i3.setAttribute("value", "c");
        if (quest.answers.correct == "a") {
            i1.checked = true;
        }
        else if (quest.answers.correct == "b") {
            i2.checked = true;
        }
        else {
            i3.checked = true;
        }
        let l1 = document.createElement("label");
        let l2 = document.createElement("label");
        let l3 = document.createElement("label");
        l1.setAttribute("for", count + "a");
        l2.setAttribute("for", count + "b");
        l3.setAttribute("for", count + "c");
        let txt1 = document.createTextNode(count + ". " + quest.question);
        let txt2 = document.createTextNode("A. " + quest.answers.a);
        let txt3 = document.createTextNode("B. " + quest.answers.b);
        let txt4 = document.createTextNode("C. " + quest.answers.c);
        h2.appendChild(txt1);
        l1.appendChild(txt2);
        l2.appendChild(txt3);
        l3.appendChild(txt4);
        div.appendChild(h2);
        div.appendChild(i1);
        div.appendChild(l1);
        div.appendChild(document.createElement("br"));
        div.appendChild(i2);
        div.appendChild(l2);
        div.appendChild(document.createElement("br"));
        div.appendChild(i3);
        div.appendChild(l3);
        div.appendChild(document.createElement("br"));
        document.getElementById("quiz").appendChild(div);
        count++;
    });
}

fetch("questionAnswerData.json")
    .then(response => response.json())
    .then(data => questions(data))
    .catch(error => console.log("error", error));

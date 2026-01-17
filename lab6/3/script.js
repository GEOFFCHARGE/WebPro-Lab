function questions(data) {
    let count = 1;
    let quiz = document.getElementById("quiz");
    data.forEach(quest => {
        let h2 = document.createElement("h2");
        let inp1 = document.createElement("input");
        let inp2 = document.createElement("input");
        let inp3 = document.createElement("input");
        inp1.setAttribute("type", "radio");
        inp1.setAttribute("id", count + "a");
        inp1.setAttribute("name", count);
        inp1.setAttribute("value", "a");
        inp2.setAttribute("type", "radio");
        inp2.setAttribute("id", count + "b");
        inp2.setAttribute("name", count);
        inp2.setAttribute("value", "b");
        inp3.setAttribute("type", "radio");
        inp3.setAttribute("id", count + "c");
        inp3.setAttribute("name", count);
        inp3.setAttribute("value", "c");
        if (quest.answers.correct == "a") {
            inp1.checked = true;
        }
        else if (quest.answers.correct == "b") {
            inp2.checked = true;
        }
        else {
            inp3.checked = true;
        }
        let lab1 = document.createElement("label");
        let lab2 = document.createElement("label");
        let lab3 = document.createElement("label");
        lab1.setAttribute("for", count + "a");
        lab2.setAttribute("for", count + "b");
        lab3.setAttribute("for", count + "c");
        let txt1 = document.createTextNode(count + ". " + quest.question);
        let txt2 = document.createTextNode("A. " + quest.answers.a);
        let txt3 = document.createTextNode("B. " + quest.answers.b);
        let txt4 = document.createTextNode("C. " + quest.answers.c);
        h2.appendChild(txt1);
        lab1.appendChild(txt2);
        lab2.appendChild(txt3);
        lab3.appendChild(txt4);
        quiz.appendChild(h2);
        quiz.appendChild(inp1);
        quiz.appendChild(lab1);
        quiz.appendChild(document.createElement("br"));
        quiz.appendChild(inp2);
        quiz.appendChild(lab2);
        quiz.appendChild(document.createElement("br"));
        quiz.appendChild(inp3);
        quiz.appendChild(lab3);
        quiz.appendChild(document.createElement("br"));
        count++;
    });
}

fetch("questionAnswerData.json")
    .then(response => response.json())
    .then(data => questions(data))
    .catch(error => console.log("error", error));

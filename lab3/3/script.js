let score1 = document.getElementById('s1');
let score2 = document.getElementById('s2');
let score3 = document.getElementById('s3');
let score4 = document.getElementById('s4');
let score5 = document.getElementById('s5');
let score6 = document.getElementById('s6');
let score7 = document.getElementById('s7');
let score8 = document.getElementById('s8');
let score = [score1, score2, score3, score4, score5, score6, score7, score8];
for (let i = 0; i < 8; i++) {
    score[i].innerText = Math.floor(Math.random() * 61) + 40;
}

function grading() {
    let grade1 = document.getElementById('g1');
    let grade2 = document.getElementById('g2');
    let grade3 = document.getElementById('g3');
    let grade4 = document.getElementById('g4');
    let grade5 = document.getElementById('g5');
    let grade6 = document.getElementById('g6');
    let grade7 = document.getElementById('g7');
    let grade8 = document.getElementById('g8');
    let grade = [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8];
    for (let i = 0; i < 8; i++) {
        if (score[i].innerText >= 80) {
            grade[i].innerText = "A";
        }
        else if (score[i].innerText >= 70) {
            grade[i].innerText = "B";
        }
        else if (score[i].innerText >= 60) {
            grade[i].innerText = "C";
        }
        else if (score[i].innerText >= 50) {
            grade[i].innerText = "D";
        }
        else {
            grade[i].innerText = "F";
        }
    }
}

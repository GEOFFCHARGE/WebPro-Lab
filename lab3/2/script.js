function shuffleImg() {
    let img1 = document.getElementById('1');
    let img2 = document.getElementById('2');
    let img3 = document.getElementById('3');
    let img4 = document.getElementById('4');
    let img5 = document.getElementById('5');
    let img6 = document.getElementById('6');
    img1.src = "images/" + Math.floor(Math.random() * 10) + ".png";
    img2.src = "images/" + Math.floor(Math.random() * 10) + ".png";
    img3.src = "images/" + Math.floor(Math.random() * 10) + ".png";
    img4.src = "images/" + Math.floor(Math.random() * 10) + ".png";
    img5.src = "images/" + Math.floor(Math.random() * 10) + ".png";
    img6.src = "images/" + Math.floor(Math.random() * 10) + ".png";
}

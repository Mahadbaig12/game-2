let currmole;
let nothing;
let score = 0;
let gameover = false;

window.onload = function () {
    setGame();
}

function setGame() {

    for (i = 0; i < 9; i++) {

        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selecttile);
        document.getElementById("borad").appendChild(title);
    }

    setInterval(setmole, 1000);
    setInterval(nothing1, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole() {
if(gameover) {
    return;
}


    if (currmole) {
        currmole.innerHTML = "";

    }
    let mole = document.createElement("img");
    mole.src = "images.jpg";

    let lot = getRandomTile();
    if (nothing && nothing.id == lot) {
        return;
    }
    currmole = document.getElementById(lot);
    currmole.appendChild(mole);
}

function nothing1() {
    if(gameover){
        return;
    }
    if (nothing) {
        nothing.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "download.jpg";

    let num = getRandomTile();
    if (currmole && currmole.id == num) {
        return;

    }
    nothing = document.getElementById(num);
    nothing.appendChild(plant);
}

function selecttile(){
    if(gameover){
        return;
    }
    if(this == currmole){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == nothing){
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameover = true;
    }
}
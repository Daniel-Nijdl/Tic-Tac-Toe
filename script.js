"use strict";

let playerTurn = 0;
let xWins = 0;
let oWins = 0;
let player = "X";
let isPlaying = true
document.getElementsByClassName("gameBoard")[0].style.cursor = "url('images/xCursor.png'), auto";


let buttons = [document.getElementById(`button11`), document.getElementById(`button12`), document.getElementById(`button13`), document.getElementById(`button21`), document.getElementById(`button22`), document.getElementById(`button23`), document.getElementById(`button31`), document.getElementById(`button32`), document.getElementById(`button33`)]


function chooseSpot(spot) {
    if (isPlaying == false) {
        return;

    }
    if (document.getElementById(`button${spot}`).classList.contains("filledX") || document.getElementById(`button${spot}`).classList.contains("filledO")) {
        return;
    } else {
        document.getElementById(`button${spot}`).textContent = player;
        document.getElementById(`button${spot}`).classList.add(`filled${player}`);
    }

    if (player == "X") {
        player = "O";
        document.getElementById("player").textContent = "Player: O";
        document.getElementsByClassName("gameBoard").style.cursor = "url('images/cursorO2.png'), auto";

    } else {
        player = "X";
        document.getElementById("player").textContent = "Player: X";
        document.getElementsByClassName("gameBoard").style.cursor = "url('images/xCursor.png'), auto";
    }

    playerTurn++;
    document.getElementById("playerTurn").textContent = `Turn: ${playerTurn}`;
    checkIfWon();
}

function checkIfWon() {

    // Left 3 Verticle
    if (buttons[0].classList.contains("filledX") && buttons[3].classList.contains("filledX") && buttons[6].classList.contains("filledX")) {
        buttons[0].classList.add("winSpot");
        buttons[3].classList.add("winSpot");
        buttons[6].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[0].classList.contains("filledO") && buttons[3].classList.contains("filledO") && buttons[6].classList.contains("filledO")) {
        buttons[0].classList.add("winSpot");
        buttons[3].classList.add("winSpot");
        buttons[6].classList.add("winSpot");
        winner("O");
        return;
    }

    // Middle 3 Verticle
    if (buttons[1].classList.contains("filledX") && buttons[4].classList.contains("filledX") && buttons[7].classList.contains("filledX")) {
        buttons[1].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[7].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[1].classList.contains("filledO") && buttons[4].classList.contains("filledO") && buttons[7].classList.contains("filledO")) {
        buttons[1].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[7].classList.add("winSpot");
        winner("O");
        return;
    }

    // Right 3 Veticle
    if (buttons[2].classList.contains("filledX") && buttons[5].classList.contains("filledX") && buttons[8].classList.contains("filledX")) {
        buttons[2].classList.add("winSpot");
        buttons[5].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[2].classList.contains("filledO") && buttons[5].classList.contains("filledO") && buttons[8].classList.contains("filledO")) {
        buttons[2].classList.add("winSpot");
        buttons[5].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("O");
        return;
    }

    // Top 3 Horizontal
    if (buttons[0].classList.contains("filledX") && buttons[1].classList.contains("filledX") && buttons[2].classList.contains("filledX")) {
        buttons[0].classList.add("winSpot");
        buttons[1].classList.add("winSpot");
        buttons[2].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[0].classList.contains("filledO") && buttons[1].classList.contains("filledO") && buttons[2].classList.contains("filledO")) {
        buttons[0].classList.add("winSpot");
        buttons[1].classList.add("winSpot");
        buttons[2].classList.add("winSpot");
        winner("O");
        return;
    }

    // Middle 3 Horizontal
    if (buttons[3].classList.contains("filledX") && buttons[4].classList.contains("filledX") && buttons[5].classList.contains("filledX")) {
        buttons[3].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[5].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[3].classList.contains("filledO") && buttons[4].classList.contains("filledO") && buttons[5].classList.contains("filledO")) {
        buttons[3].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[5].classList.add("winSpot");
        winner("O");
        return;
    }

    // Bottom 3 Hortizontal
    if (buttons[6].classList.contains("filledX") && buttons[7].classList.contains("filledX") && buttons[8].classList.contains("filledX")) {
        buttons[6].classList.add("winSpot");
        buttons[7].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[6].classList.contains("filledO") && buttons[7].classList.contains("filledO") && buttons[8].classList.contains("filledO")) {
        buttons[6].classList.add("winSpot");
        buttons[7].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("O");
        return;
    }

    // Top Left to Bottom Right Diagonal
    if (buttons[0].classList.contains("filledX") && buttons[4].classList.contains("filledX") && buttons[8].classList.contains("filledX")) {
        buttons[0].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[0].classList.contains("filledO") && buttons[4].classList.contains("filledO") && buttons[8].classList.contains("filledO")) {
        buttons[0].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[8].classList.add("winSpot");
        winner("O");
        return;
    }

    //  Bottom Left to Top Right Diagonal
    if (buttons[6].classList.contains("filledX") && buttons[4].classList.contains("filledX") && buttons[2].classList.contains("filledX")) {
        buttons[6].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[2].classList.add("winSpot");
        winner("X");
        return;
    }

    if (buttons[6].classList.contains("filledO") && buttons[4].classList.contains("filledO") && buttons[2].classList.contains("filledO")) {
        buttons[6].classList.add("winSpot");
        buttons[4].classList.add("winSpot");
        buttons[2].classList.add("winSpot");
        winner("O");
        return;
    }
    if (playerTurn == 9) {
        document.getElementById("player").textContent = "Draw";
    }
}

function winner(winner) {
    document.getElementById("player").textContent = "Winner"
    document.getElementsByClassName("button");
    if (winner == "O") {
        oWins++;
        document.getElementById("oWins").textContent = `O - ${oWins} wins`;
    } else if (winner == "X") {
        xWins++;
        document.getElementById("xWins").textContent = `X - ${xWins} wins`
    }
    isPlaying = false
}

function reset() {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("buttons")[i].textContent = "";
        document.getElementsByClassName("buttons")[i].classList.remove("winSpot");
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = "";
        buttons[i].classList.remove("filledX");
        buttons[i].classList.remove("filledO");
    }
    playerTurn = 0;
    player = "X";
    isPlaying = true
    document.getElementById("player").textContent = `Player: ${player}`;
    document.getElementById("player").textContent = `Turn: ${playerTurn}`;
}

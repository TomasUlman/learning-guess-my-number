'use strict';

const number = document.querySelector('.number');
const scoreTab = document.querySelector('.score');
const guessInput = document.querySelector('.guess');
const guessButton = document.querySelector('.check');
const body = document.querySelector('body');
let secretNumber = Math.floor((Math.random() * 20) + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('❌ No number!');
    } else if (guess < 1 || guess > 20) {
        console.log(guess);
        displayMessage('❌ Guess number 1 - 20!');
    } else {
        guessCheck(guess);
    }
});

function guessCheck(guessedNumber) {
    if (guessedNumber === secretNumber) {
        displayMessage("🎉 Correct number!");
        number.textContent = guessedNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        guessInput.setAttribute("disabled", "");
        guessButton.setAttribute("hidden", "");
    } else {
        displayMessage(guessedNumber > secretNumber ? '❌ Too high!' : '❌ Too low!');
        scoreCheck();
    }
}

function scoreCheck() {
    if (score == 1) {
        displayMessage("☠ Game over!");
        number.textContent = secretNumber;
        body.style.backgroundColor = '#e70c0c';
        number.style.width = '30rem';
        guessInput.setAttribute("disabled", "");
        guessButton.setAttribute("hidden", "");
        scoreTab.textContent = "0";
    } else {
        score--;
        scoreTab.textContent = score;
    }
}

document.querySelector('.again').addEventListener('click', function () {
    if (highScore < score) {
        highScore = score;
    }
    score = 20;
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    guessInput.removeAttribute("disabled", "");
    guessInput.value = "";
    guessButton.removeAttribute("hidden", "");
    document.querySelector('.highscore').textContent = highScore;
    secretNumber = Math.floor((Math.random() * 20) + 1);
    console.log(secretNumber);
    number.textContent = "?";
    displayMessage("Start guessing...");
});

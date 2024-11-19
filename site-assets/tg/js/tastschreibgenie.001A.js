/* Credit SHXCAT @ Github. Version 19-11-24/18-09 */
/* Dono't Use/Edit/Distribute this code! */
const words = ["Katze", "Hund", "Apfel", "Birne", "Schule", "Nomen", "Adjektiv"]; // EDIT!
let currentWord = "";
let lastWord = "";
let score = 0;
let gameActive = false;

const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score-display");

startBtn.addEventListener("click", startGame);

function startGame() {
    if (!gameActive) {
        gameActive = true;
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        inputField.value = "";
        inputField.disabled = false;
        inputField.focus();
        nextWord();
    }
}

inputField.addEventListener("input", checkInput);

function checkInput() { 
    if (inputField.value === currentWord) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        inputField.value = "";
        nextWord();
    }
}

function nextWord() {
    do {
        currentWord = words[Math.floor(Math.random() * words.length)];
    } while (currentWord === lastWord);
    lastWord = currentWord;
    wordDisplay.textContent = currentWord;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !gameActive) {
        startGame();
    }
});

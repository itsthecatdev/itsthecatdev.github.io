/* Credit SHXCAT @ Github. Version 17-12-24/20-46 */
/* Dono't Use/Edit/Distribute this code! */
const words = ["Katze", "Hund", "Apfel", "Birne", "Schule", "Nomen", "Adjektiv"];
let currentWord = "";
let lastWord = "";
let score = 0;
let gameActive = false;

//log to console Hello world
console.log("You are on BetaChannel! visit https://itsthecatdev.github.io/projects/tastschreibgenie/ for default root!");

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
// hide elements with id "LOADING-ICON" after 10 seconds.
setTimeout(() => {
    document.getElementById("LOAD-ICON").style.display = "none";
    document.getElementById("connection-text").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}, 5000); 

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

/* Credit SHXCAT @ Github. Version 19-11-24/18-09 */
/* Dono't Use/Edit/Distribute this code! */

// JS/HTML/CSS version list
const VCSS = "1"
const VJS = "1"
const VHTML = "1"
const Vtype = "alpha"

const wordLists = {
    "haustiere": ["Katze", "Hund", "Schlange", "Fische", "Hamster", "Wellensittich", "Maus"],
    "schule": [
        "Mathematik", "Geschichte", "Biologie", "Geographie", "Chemie", "Physik",
        "Heft", "Stift", "Radiergummi", "Lineal", "Rucksack", "Pinsel",
        "Morgen", "Mittag", "Abend", "Pause", "Stunde", "Hausaufgabe",
        "schreiben", "lesen", "lernen", "fragen", "rechnen", "erklären",
        "Klassenzimmer", "Tafel", "Aufgabe", "Prüfung", "Lehrer", "Schüler"
    ],
    "asdfghjkl": [
        "Hals", "Hallo", "Hase", "Salat", "Glas", "Gala", "Hafsa", "Hasel",
        "Dachs", "Lassa", "Lass", "Fals", "Dass", "Kass", "Hafs", "Klass",
        "Falsch", "Flass", "Hals", "Fass", "Hack"
    ],
    "grundreihe": [
        "asdf", "asdfg", "asdfgh", "asdfghj", "asdfghjk", "asdfghjkl", "jkl", "jklö",
        "klö", "lö", "asdfg", "asdfklö", "asdfjklö"
    ],
    "oberreihe": [
        "qwert", "qwertz", "qwer", "wert", "wertz", "qwerz", "qwerty",
        "wert", "rtyu", "yuiop", "tyui", "qwertzui", "qwertzuiop"
    ],
    "unterreihe": [
        "zxcv", "zxcvb", "zxcvbn", "zxcvbnm", "bnm", "cvb", "xvbn",
        "zxc", "cvbn", "cvbnm", "mn", "mnb"
    ],
    "gemischt": [
        "Haus", "Fisch", "Tisch", "Kopf", "Wald", "Hand", "Kuh",
        "Pferd", "Maus", "Sonne", "Mond", "Tastatur", "Kabel", "Lampe"
    ],
    "kurzeWorter": ["As", "Saft", "Kaffee", "Hut", "Los", "Haus", "Kuss", "Fass"],
    "langeWorter": [
        "Schreibtisch", "Hausaufgabe", "Fahrradkette", "Schulaufgabe", "Taschenlampe",
        "Wissenschaft", "Rechenmaschine", "Schülervertretung"
    ]
};

let currentWord = "";
let lastWord = "";
let score = 0;
let gameActive = false;

const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score-display");
const versionDisplay = document.getElementById("version-id");
const versionDisplay2 = document.getElementById("version-id2");

let words = [];
let wordListName = "deutsch-einfach"; // Default name if no match found

// Extract the word list identifier from the URL
function getWordListFromURL() {
    const url = window.location.pathname;
    const listId = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
    return wordLists[listId] ? listId : "deutsch-einfach";
}

// Initialize the word list and update version info
function initializeGame() {
    wordListName = getWordListFromURL();
    words = wordLists[wordListName] || [];
    if (words.length === 0) {
        alert("No valid word list found for this URL.");
        return;
    }
    updateVersionDisplay();
    startBtn.disabled = false;
}

// Update the version display with the word list name
function updateVersionDisplay() {
    versionDisplay.textContent = `${wordListName}`;
    versionDisplay2.textContent = `${Vtype} ${VCSS}.${VJS}.${VHTML}`;
}

startBtn.addEventListener("click", startGame);

function startGame() {
    if (!gameActive && words.length > 0) {
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

// Run the initialization
initializeGame();
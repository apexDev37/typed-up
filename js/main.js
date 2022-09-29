window.addEventListener('load', init)

// Global variables
// Game levels
const gameLevels = {
    easy: 5,
    medium: 4,
    hard: 3,
}

// Set current game level
const currentGameLevel = gameLevels.easy;
let time = currentGameLevel;
let score = 0;
let highScore = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const resultMsg = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Array to words used in the game
// Currently static - update to fetch from an api
const words = [
    'captious',
    'bibulous',
    'malapropism',
    'tricorn',
    'tenebrous',
    'braggadocio',
    'embonpoint',
    'pabulum',
    'valetudinarian',
    'legerdemain',
    'estivation',
    'myrmidon',
    'estivation',
    'terpsichorean',
    'deracinate',
    'oneiromancy',
    'tatterdemalion',
    'caitiff',
    'funambulist',
    'uxoricide',
    'antediluvian',
    'xanthosis',
    'chiaroscuro',
    'logorrhea',
    'succedaneum',
    'autochthonous',
    'appoggiatura',
    'recalcitrant',
    'ostensible',
    'pejorative',
    'recalcitrant'
];

// Js functions

// Initialize WordBeater Game
function init() {
    console.log("WordGame initialized");

    // Load random word from array
    showRandomWord(words);

    // Check and verify user input
    wordInput.addEventListener('input', startMatchOnUserInput)

    // Call countdown every second
    setInterval(countdown, 1000); 

    // Check game status
    setInterval(checkGameStatus, 50);
    
}

// Begin match on user word input
function startMatchOnUserInput() {
    // Function to match user input to generated random word

    if (userInputMarchesWord()) {
        console.log('Match!')
        isPlaying = true;
        time = currentGameLevel + 1;
        showRandomWord(words);

        wordInput.value = '';
        resultMsg.innerHTML = '';

        score++; 
    } 

    if (score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

function userInputMarchesWord() {
    // Returns a boolean if user input matches generated value

    if (wordInput.value === currentWord.innerHTML) {
        console.log('User input matches current word');
        resultMsg.innerHTML = 'Correct!';
        return true;
    } else {
        console.log('User input does not match current word');
        resultMsg.innerHTML = '';
        return false;
    }
}

function showRandomWord(words) {
    // Function to generate a random word from words array

    console.log("In show random word method...");
    console.log("Selecting word randomly from words array...");

    const randomIndex = Math.floor(Math.random() * (words.length));
    const randomWord = words[randomIndex];
    currentWord.innerHTML = randomWord;
} 

function countdown() {
    // Function that acts as a countdown timer for game

    if (time > 0) {
        //  Run the countdown
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }

    // Display the time countdown
    timeDisplay.innerHTML = time;
}

function checkGameStatus() {
    // Function to verify and output the state of the game

    if (!isPlaying && time === 0) {
        resultMsg.innerHTML = "Game Over!";
        score = -1;
    }
}


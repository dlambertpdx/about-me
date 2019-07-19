// What do I need to import from other js files?
import userAttempts from './user-attempts.js';

// What state do I need to track?
let randomNumber = Math.floor(Math.random() * 20) + 1; // generate random number
let attempts = 0;
// What do I need from the DOM (elements)
const guessInput = document.getElementById('userGuess'); // user input
const guessSubmit = document.getElementById('submitGuess'); // user button
const correctGuess = document.getElementById('correctResult'); // display correct
const tooLowOrHigh = document.getElementById('tooLowTooHigh'); // display wrong
const userTries = document.getElementById('numOfTries'); // number of user attemps
const gameOver = document.getElementById('over'); // game over image
const gameWon = document.getElementById('winner'); // win image

// What events do I need to listen to?
guessSubmit.addEventListener('click', () => {
    let userGuess = Number(guessInput.value);
    if(userGuess > randomNumber) {
        tooLowOrHigh.textContent = 'Sorry, your guess is too high!';
    }
    else if(userGuess < randomNumber) {
        tooLowOrHigh.textContent = 'Sorry, your guess is too low!';
    }
    else {
        correctGuess.textContent = 'You got it!';
        gameWon.classList.remove('hidden');
        guessSubmit.disabled = true;
    }

    // limit user attempts
    attempts += 1;
    userTries.textContent = 'Number of tries: ' + userAttempts(attempts) + ' of 4.';
    if(attempts === 4) {
        gameOver.classList.remove('hidden');
        guessSubmit.disabled = true;
    }
});

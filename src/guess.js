/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// What do I need to import from other js files?
import compareNumbers from './make-guess.js';

// What state do I need to track?
let randomNumber = Math.floor(Math.random() * 20) + 1;
let guessCount = 1;

console.log('random number: ' + randomNumber);

// What do I need from the DOM (elements)
const guessInput = document.getElementById('userGuess');
const guessSubmit = document.getElementById('submitGuess');
const guessResult = document.getElementById('guessResult');
const correctGuess = document.getElementById('correctResult');
const tooLowOrHigh = document.getElementById('tooLowTooHigh');

// What events do I need to listen to?
guessSubmit.addEventListener('click', () => {
    let userGuess = Number(guessInput.value);
    console.log(userGuess);
    if(userGuess > randomNumber) {
        tooLowOrHigh.textContent = 'Sorry, your guess is too high!';
    }
    else if(userGuess < randomNumber) {
        tooLowOrHigh.textContent = 'Sorry, your guess is too low!';
    }
    else {
        correctGuess.textContent = 'You got it!';
    }

});

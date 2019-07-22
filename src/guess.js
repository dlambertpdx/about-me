// What do I need to import from other js files?
import compareNumbers from './make-guess.js';

// What state do I need to track?
let correctNumber = Math.floor(Math.random() * 20) + 1; // generate random number
let attempts = 4;
// What do I need from the DOM (elements)
const guessInput = document.getElementById('userGuess'); // user input
const guessSubmit = document.getElementById('submitGuess'); // user button
const tooLowOrHigh = document.getElementById('tooLowTooHigh'); // display too low, too high, win or lose
const gameOver = document.getElementById('over'); // game over image
const gameWon = document.getElementById('winner'); // win image

// What events do I need to listen to?
guessSubmit.addEventListener('click', () => {
    let userGuess = Number(guessInput.value);
    const result = compareNumbers(userGuess, correctNumber);

    if(result === 0) {
        gameWon.classList.remove('hidden');
        tooLowOrHigh.textContent = 'You win!';
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else if(result === 1) {
        tooLowOrHigh.textContent = 'Your guess is too high!';
    } else {
        tooLowOrHigh.textContent = 'Your guess is too low!';
    }

    attempts -= 1;
    if(attempts === 0) {
        gameOver.classList.remove('hidden');
        tooLowOrHigh.textContent = 'You\'re out of guesses!';
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    }

});

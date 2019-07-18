import getPlay from './get-play.js';

// Computer Choice
const playGame = document.getElementById('play-game');
const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');

// User Choice
const chooseRock = document.getElementById('choose-rock');
const choosePaper = document.getElementById('choose-paper');
const chooseScissors = document.getElementById('choose-scissors');

// Result
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const message = document.getElementById('message');

playGame.addEventListener('click', () => {
    const computerMove = getPlay(); // random number function
    const userMove = document.querySelector('input:checked');

    // game logic
    if(computerMove === userMove) {
        return 'It\'s a tie!';
    }
    if(userMove === chooseRock) {
        if(computerMove === computerPaper) {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
    if(userMove === choosePaper) {
        if(computerMove === computerScissors) {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
    if(userMove === chooseScissors) {
        if(computerMove === computerRock) {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }

});
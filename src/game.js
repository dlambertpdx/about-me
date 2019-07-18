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

let wins = 0;
let losses = 0;

playGame.addEventListener('click', () => {
    const computerMove = getPlay(); // random number function
    const userMove = document.querySelector('input:checked');
    userMove.textContent = 'You chose ' + userMove;

    // game logic
    if(computerMove === userMove) {
        return message.textContent = 'It\'s a tie!';
    }
    if(userMove === chooseRock) {
        if(computerMove === computerPaper) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove === choosePaper) {
        if(computerMove === computerScissors) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove === chooseScissors) {
        if(computerMove === computerRock) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }



});
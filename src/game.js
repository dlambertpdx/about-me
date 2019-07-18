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

    console.log('user chose: ' + userMove.value);

    console.log('computer chose:' + computerMove);



    // game logic
    if(computerMove === userMove) {
        return message.textContent = 'It\'s a tie!';
    }
    if(userMove === chooseRock) {
        if(computerMove === computerMove.paper) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
            computerPaper.classList.remove('invisible');
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove === choosePaper) {
        if(computerMove === computerMove.scissors) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
            computerScissors.classList.remove('invisible');
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove === chooseScissors) {
        if(computerMove === computerMove.rock) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
            computerRock.classList.remove('invisible');
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }



});
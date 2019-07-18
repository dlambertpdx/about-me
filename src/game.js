import getPlay from './get-play.js';

// Computer Choice
const playGame = document.getElementById('play-game');
// const computerRock = document.getElementById('computer-rock');
// const computerPaper = document.getElementById('computer-paper');
// const computerScissors = document.getElementById('computer-scissors');
// User Choice
const computerChoice = document.getElementById('computer-choice');
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
    computerChoice.classList.remove('invisible');
    const src = 'assets/RPS/' + computerMove + '.jpg';
    computerChoice.src = src;
    console.log('you chose ' + userMove.value + ' & computer chose ' + computerMove);

    // game logic
    if(computerMove.value === userMove.value) {
        message.textContent = 'It\'s a tie!';
    }
    if(userMove.value === chooseRock) {
        if(computerMove === computerMove.paper) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove.value === choosePaper) {
        if(computerMove === computerMove.scissors) {
            message.textContent = 'You lost!';
            losses++;
            lossCount.textContent = losses;
        } else {
            message.textContent = 'You won!';
            wins++;
            winCount.textContent = wins;
        }
    }
    if(userMove.value === chooseScissors) {
        if(computerMove === computerMove.rock) {
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
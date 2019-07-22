import getPlay from './get-play.js';

const playGame = document.getElementById('play-game');
const computerChoice = document.getElementById('computer-choice');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const message = document.getElementById('message');

let wins = 0;
let losses = 0;
let ties = 0;

playGame.addEventListener('click', () => {
    const computerMove = getPlay();
    const userMove = document.querySelector('input:checked').value;

    computerChoice.classList.remove('invisible');
    const src = 'assets/RPS/' + computerMove + '.jpg';
    computerChoice.src = src;

    let score;

    if(userMove === computerMove) {
        score = 'tie';
    } else if(userMove === 'rock' && computerMove === 'paper' ||
    userMove === 'paper' && computerMove === 'scissors' ||
    userMove === 'scissors' && computerMove === 'rock') {
        score = 'lost';
    } else {
        score = 'won';
    }

    if(score === 'tie') {
        message.textContent = 'It\'s a tie!';
        ties++;
        tieCount.textContent = ties;
    } else if(score === 'lost') {
        message.textContent = 'You lost!';
        losses++;
        lossCount.textContent = losses;

    } else {
        message.textContent = 'You won!';
        wins++;
        winCount.textContent = wins;
    }
});
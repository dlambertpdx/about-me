import isYes from './is-yes.js';
const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');

quizButton.onclick = function() {
    let player = '';
    const firstName = prompt("What's your first name?");
    player += firstName;
    alert('Hi ' + player + ' would you like to take the quiz?');
    const questionOne = prompt(
        'A subspecies of the Atlas Moth may have been the inspiration for Mothra (Y/N)'
    );
    const questionTwo = prompt(
        'A subspecies of the Atlas Moth may have been the inspiration for Mothra (Y/N)'
    );
    const questionThree = prompt(
        'A subspecies of the Atlas Moth may have been the inspiration for Mothra (Y/N)'
    );

    let answer = 0;
    const correctAnswer = true;
    if(isYes(questionOne) === correctAnswer) {
        answer += 1;
    }
    if(isYes(questionTwo) === correctAnswer) {
        answer += 1;
    }
    if(isYes(questionThree) === correctAnswer) {
        answer += 1;
    }

    let totalScore = 3;
    let percent = parseInt((answer / totalScore) * 100);
    let result =
        'Good job ' +
        player +
        '! Your score is ' +
        answer +
        ' out of ' +
        totalScore +
        ". That's " +
        percent +
        '% ! You know a lot about Atlas Moths!';

    quizResult.textContent = result;
};

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
        'Atlas moths have a life cycle of 4 stages (Y/N)'
    );
    const questionThree = prompt(
        'Atlas Moths are big and scary! (Y/N)'
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
        'Nice try ' +
        player +
        '! Your score is ' +
        answer +
        ' out of ' +
        totalScore +
        ". That's " +
        percent +
        '% ! ';
    if(answer >= 2) {
        result += 'You know a lot about Atlas Moths!';
    } else {
        result += 'Perhaps you need to read more about Atlas Moths.';
    }


    quizResult.textContent = result;
};

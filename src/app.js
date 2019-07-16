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

    let result =
        'Good job ' +
        player +
        '! Your score is ' +
        score +
        ' out of ' +
        totalScore +
        ". That's " +
        percent +
        '% ! You know a lot about Atlas Moths!';
};

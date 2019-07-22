export default function getPlay() {
    // Generates a random number between 0 and 2 inclusive
    const randomNumber = Math.floor(Math.random() * 3);

    // Calls the getPlayFromNumber function and returns the result
    const play = getPlayFromNumber(randomNumber);

    return play;

}

export function getPlayFromNumber(randomNumber) {
    // TDD a function that takes a number which is 0, 1, or 2 and returns rock, paper, or scissors accordingly.
    if(randomNumber === 0) {
        return 'rock';
    } else if(randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



function compareNumbers(guess, correctNumber) {
    // something to test
    if (guess === correctNumber) {
        return 0;
    }
    else if (guess >= correctNumber) {
        return 1;
    } else {
        return -1;
    }

}

export default compareNumbers;
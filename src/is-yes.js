function isYes(answer) {
    answer = answer.toLowerCase();
    if(answer === 'yes') {
        return true;
    }
    else if(answer === 'y') {
        return true;
    }
    else {
        return false;
    }

}

export default isYes;
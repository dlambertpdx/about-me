import { getPlayFromNumber } from '../src/get-play.js';

const test = QUnit.test;
QUnit.module('Rock-Paper-Scissors');

test('rock ', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const rock = 0;
    const expected = 'rock';

    //Act
    // Call the function you're testing and set the result to a const
    const result = getPlayFromNumber(rock);

    //Assert
    assert.equal(result, expected);
});

test('paper', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const paper = 1;
    const expected = 'paper';

    //Act
    // Call the function you're testing and set the result to a const
    const result = getPlayFromNumber(paper);

    //Assert
    assert.equal(result, expected);
});

test('scissors', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const scissors = 2;
    const expected = 'scissors';

    //Act
    // Call the function you're testing and set the result to a const
    const result = getPlayFromNumber(scissors);

    //Assert
    assert.equal(result, expected);
});
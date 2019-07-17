import compareNumbers from '../src/make-guess.js';
import userAttempts from '../src/user-attempts.js';

const test = QUnit.test;

test('guess equals correct number', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const correctNumber = 10;
    const expected = 0;

    //Act
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('guess more than correct number', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 20;
    const correctNumber = 10;
    const expected = 1;

    //Act
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('guess less than correct number', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const correctNumber = 20;
    const expected = -1;

    //Act
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('user attempts', (assert) => {
    // Arrange
    const attempts = 3;
    const expected = 3;

    // Act
    const result = userAttempts(attempts);

    // Assert
    assert.equal(result, expected);
});
// STEP 1
// Create halfNumber().
// Divide the number by 2 and return the result.

function halfNumber(number) {
    let result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

// STEP 2
// Create squareNumber().
// Square the number and return the result.

function squareNumber(number) {
    let result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
}

// STEP 3
// Create percentOf().
// Find what percentage the first number is of the second number.

function percentOf(number1, number2) {
    let result = (number1 / number2) * 100;
    console.log(number1 + " is " + result + "% of " + number2 + ".");
    return result;
}

// STEP 4
// Create findModulus().
// Find the modulus (remainder) of the first number and second number.

function findModulus(number1, number2) {
    let result = number1 % number2;
    console.log(result + " is the modulus of " + number1 + " and " + number2 + ".");
    return result;
}

// STEP 5
// Call each function to test them.

halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(4, 10);
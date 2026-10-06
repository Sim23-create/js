// 1. // ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;

        case "subtract":
            return x - y;

        case "multiply":
            return x * y;

        case "divide":
            return x / y;

        default:
            return null;
    }
}

do {
    // 2. // COLLECT FIRST NUMBER FROM USER
    let firstNumber = Number(prompt("Enter the first number:"));

    // 3. // COLLECT SECOND NUMBER FROM USER
    let secondNumber = Number(prompt("Enter the second number:"));

    // 4. // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = prompt(
        "Enter an operation: add, subtract, multiply, or divide"
    );

    // 5. // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let result = calculate(firstNumber, secondNumber, operation);

    if (result === null) {
        alert("Invalid operation. Please enter add, subtract, multiply, or divide.");
    } else {
        alert("The result is: " + result);
    }

} while (
    operation !== "add" &&
    operation !== "subtract" &&
    operation !== "multiply" &&
    operation !== "divide"
);

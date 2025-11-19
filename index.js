class Calculator {
    static sum(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }

    static mult(a, b) {
        return a * b;
    }

    static div(a, b) {
        return a / b;
    }
}

function userInput() {
    let operator = "";
    let firstNum = 0;
    let secondNum = 0;
    let result = 0;

    while (operator !== "x") {
        if (operator === "") operator = prompt("введите действие");
        if (result === 0) firstNum = parseInt(prompt("первое число"));
        secondNum = parseInt(prompt("второе число"));

        if (operator === "+") result = Calculator.sum(firstNum, secondNum);
        if (operator === "-") result = Calculator.sub(firstNum, secondNum);
        if (operator === "/") result = Calculator.div(firstNum, secondNum);                
        if (operator === "*") result = Calculator.mult(firstNum, secondNum);

        firstNum = result;
        console.log(result);

        operator = prompt("введите действие");
    }

    return result;
}

function output() {

}

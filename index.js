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
    let operatorUsed = "";
    let nextNum = false;
    let toCalc = false;
    let firstNum = "";
    let secondNum = "";
    let result = 0;

    const nums = [...document.querySelectorAll(".num")];
    
    nums.forEach(num => {
        num.addEventListener("click", () => {
            if (nextNum === false) {
                firstNum += num.value;
                output(num.value);
            }

            if (nextNum === true) {
                secondNum += num.value;
                output(num.value);
            }
        });
    });

    const operators = [...document.querySelectorAll(".operator")];

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            if (nextNum === false) {
                nextNum = true;
                console.log(firstNum);
            } else if (nextNum === true) {
                console.log(secondNum);
            }

            if (toCalc === false) {
                operatorUsed = operator.value;
                console.log(operatorUsed);
                output(operatorUsed);
                toCalc = true;
            } else if (toCalc === true) {
                if (operatorUsed === "+") {
                    result = Calculator.sum(parseInt(firstNum), parseInt(secondNum));
                }
                console.log(result);
                firstNum = result.toString();
                secondNum = "";

                operatorUsed = operator.value;
                outputResult(result);
                console.log(operatorUsed);
                output(operatorUsed);
            }

            
        });
    });
}

userInput();

function output(value) {
    const display = document.querySelector(".values");
    display.textContent += value;
}

function outputResult(value) {
    const display = document.querySelector(".values");
    display.textContent = value;
}

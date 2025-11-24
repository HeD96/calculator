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
    let next = false;
    let firstNum = "";
    let secondNum = "";
    let result = 0;

    const nums = [...document.querySelectorAll(".num")];
    
    nums.forEach(num => {
        num.addEventListener("click", () => {
            if (next === false) {
                firstNum += num.value;
            }

            if (next === true) {
                secondNum += num.value;
            }
        });
    });

    const operators = [...document.querySelectorAll(".operator")];

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            if (next === false) {
                next = true;
                console.log(firstNum);
            } else if (next === true) {
                next = false;
                console.log(secondNum);
            }

            operatorUsed = operator.value;
            console.log(operatorUsed);
        });
    });
}

userInput();

function output(value) {
    const display = document.querySelector(".values");
    display.textContent += value;
}

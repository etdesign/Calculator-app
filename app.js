import { Calculator } from "./calculator.js";
let operator = 0;
let digit = 0;
let decimal = 0;

const calculatorDisplay = document.getElementById("calculator-display");
const calculator = new Calculator(calculatorDisplay);

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const backButton = document.querySelector(".back");
const decimalButton = document.querySelector(".decimal");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addToInput(button.value);
    digit = 1;
    console.log("button");
  });
});

decimalButton.addEventListener("click", () => {
  if (digit > 0 && decimal == 0) {
  calculator.addToInput('.');
  decimal = 1;
}
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === 0 && digit === 1) {
      calculator.addOperator(button.value);
      operator = 1;
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 1) {
      calculator.calculate();
      calculator.addOperator(button.value);
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 0) {
      calculator.back();
      calculator.addOperator(button.value);
    }
  });
});

clearButton.addEventListener("click", () => {
  digit = 0;
  operator = 0;
  decimal = 0;
  calculator.clear();
});

equalsButton.addEventListener("click", () => {
  if (operator == 1 && digit == 1) {
    calculator.calculate();
    operator = 0;
    digit = 1;
    decimal = 0;
  }
});

backButton.addEventListener("click", () => {
  calculator.back();
  const display = calculatorDisplay.value;
  if (display.length > 0) {
    if (display[display.length - 1].match(/\d/)) {
      digit = 1;
    } else {
      digit = 0;
      operator = 0;
      decimal = 0;
    }
  } else {
    digit = 0;
    operator = 0;
    decimal = 0;
  }
});

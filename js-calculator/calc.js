const app = document.querySelector("#app");
const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector(".clear-btn");
const resultBtn = document.querySelector(".result-btn");
const input = document.querySelector(".calc-result");
const display = document.querySelector(".calc-display");

let beforeValue = 0;
let currentValue = 0;
let currentResult = 0;

function handleNumberBtn() {
  let currentNumber = this.innerText;
  if (input.value == "0") {
    input.value = "";
    input.value = `${input.value + currentNumber}`;
    currentValue = input.value;
    return currentValue;
  } else {
    if (currentResult !== 0) {
      input.value = "";
      currentResult = 0;
      input.value = `${input.value + currentNumber}`;
      currentValue = input.value;
      return currentValue;
    } else {
      input.value = `${input.value + currentNumber}`;
      currentValue = input.value;
      return currentValue;
    }
  }
}

function handleOperatorBtn() {
  let currentOperator = this.innerText;
  display.value = `${input.value} ${currentOperator}`;
  beforeValue = currentValue;
  input.value = 0;
  return beforeValue;
}

function handleResult() {
  display.value = `${display.value} ${currentValue}`;
  if (display.value !== "") {
    input.value = eval(display.value);
    currentResult = input.value;
    return currentResult;
  }
}

function handleClear() {
  input.value = "0";
  display.value = "";
}

Array.from(numberBtn).forEach((item) => {
  item.addEventListener("click", handleNumberBtn);
});

Array.from(operatorBtn).forEach((item) => {
  item.addEventListener("click", handleOperatorBtn);
});

clearBtn.addEventListener("click", handleClear);
resultBtn.addEventListener("click", handleResult);

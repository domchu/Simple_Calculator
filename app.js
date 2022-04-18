"use strict";
let result = document.querySelector(".result");
let firstNumber = document.querySelector(".firstNumber");
let secondNumber = document.querySelector(".secondNumber");
let operator = document.querySelector(".operator");
let calBtn = document.querySelector(".calbtn");

calBtn.addEventListener("click", () => {
  let operatorValue = operator.value;
  let firstNumberValue = firstNumber.value;
  firstNumberValue = Number(firstNumberValue);
  let secondNumberValue = secondNumber.value;
  secondNumberValue = Number(secondNumberValue);

  if (operator.value === "+") {
    result.textContent = firstNumberValue + secondNumberValue;
  }
  if (operator.value === "-") {
    result.textContent = firstNumberValue - secondNumberValue;
  }
  if (operator.value === "/") {
    result.textContent = firstNumberValue / secondNumberValue;
  }
  if (operator.value === "*") {
    result.textContent = firstNumberValue * secondNumberValue;
  }
  if (operator.value === "**") {
    result.textContent = firstNumberValue ** secondNumberValue;
  }
  if (operator.value === "%") {
    result.textContent = firstNumberValue % secondNumberValue;
  }
});

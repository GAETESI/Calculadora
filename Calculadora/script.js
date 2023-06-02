function press(number) {
    var display = document.getElementById("display");
    display.innerHTML += number;
}

function setOP(operator) {
    var display = document.getElementById("display");
    display.innerHTML += operator;
}

function clr() {
    var display = document.getElementById("display");
    display.innerHTML = "0";
}

function calculate() {
var display = document.getElementById("display");
    var result = eval(display.innerHTML);
    display.innerHTML = result;
}

var display = document.getElementById("display");
var firstNumber = null;
var operator = null;
var clearDisplay = false;

function press(number) {
if (display.innerHTML === "0" || clearDisplay) {
    display.innerHTML = number;
    clearDisplay = false;
} else {
    display.innerHTML += number;
}
}

function setOP(op) {
operator = op;
firstNumber = parseFloat(display.innerHTML);
clearDisplay = true;
}

function calculate() {
var secondNumber = parseFloat(display.innerHTML);
var result = null;

switch (operator) {
    case "+":
    result = firstNumber + secondNumber;
    break;
    case "-":
    result = firstNumber - secondNumber;
    break;
    case "*":
      result = firstNumber * secondNumber;
    break;
    case "/":
    result = firstNumber / secondNumber;
    break;
    default:
    return;
}

display.innerHTML = result;
firstNumber = result;
}

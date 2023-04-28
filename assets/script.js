// {}

const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
    if (number === "." && currDisplay.innerHTML.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerText === "") return;
    getComputedStyle(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}
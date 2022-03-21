const zeroButton = document.getElementById('0');
const oneButton = document.getElementById('1');
const twoButton = document.getElementById('2');
const threeButton = document.getElementById('3');
const fourButton = document.getElementById('4');
const fiveButton = document.getElementById('5');
const sixButton = document.getElementById('6');
const sevenButton = document.getElementById('7');
const eightButton = document.getElementById('8');
const nineButton = document.getElementById('9');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const numbersDisplay = document.getElementById('display');

zeroButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('0')
});
oneButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('1')
});
twoButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('2')
});
threeButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('3')
});
fourButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('4')
});
fiveButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('5')
});
sixButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('6')
});
sevenButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('7')
});
eightButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('8')
});
nineButton.addEventListener('click', () => {
    if (operatorAdded) clearDisplay();
    showOnDisplay('9')
});
addButton.addEventListener('click', () => {
    setOperation('+')
    showOnDisplay('+')
});
subtractButton.addEventListener('click', () => {
    setOperation('-')
    showOnDisplay('-')
});
multiplyButton.addEventListener('click', () => {
    setOperation('*')
    showOnDisplay('*')
});
divideButton.addEventListener('click', () => {
    setOperation('/')
    showOnDisplay('/')
});
clearButton.addEventListener('click', () => {
    clearDisplay();
    resetValues();
});
equalsButton.addEventListener('click', () => {
    preCalculation();
});

function clearDisplay() {
    numbersDisplay.innerText = '';
    shouldResetDisplay = false;
}

function resetValues() {
    operatorAdded = false;
    operatorAdded = false
    operatorUsed = null;
    firstNumber = null;
    secondNumber = null;
    clearDisplay();
}

function showOnDisplay(number) {
    console.log(shouldResetDisplay)
    if (numbersDisplay.innerText === '0' || shouldResetDisplay){
        clearDisplay();
    }
    numbersDisplay.innerText += number;
}

function setOperation(operator) {
    if (operatorUsed !== null) preCalculation()
    firstNumber = parseInt(numbersDisplay.innerText);
    operatorAdded = true;
    operatorUsed = operator;
    shouldResetDisplay = true;
}

function preCalculation( ) {
    if (operatorUsed === null || shouldResetDisplay) return;
    if (operatorUsed === '/' && numbersDisplay.innerText === '0') {
        alert('Please don\'t try to divide by zero.')
        return;
    }
    secondNumber = parseInt(numbersDisplay.textContent);

    //insert function for rounding the result here
    numbersDisplay.innerText = operator(operatorUsed, firstNumber, secondNumber);
}



function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
}

function operator(operator, x, y) {
    console.log(arguments)
    switch (operator) {
        case ('+'):
            return add(x, y);
        case ('-'):
            return subtract(x, y);
        case ('*'):
            return multiply(x, y);
        case ('/'):
            return divide(x, y);
    }

}

let operatorAdded = false
let operatorUsed = null;
let shouldResetDisplay = false;
let firstNumber = null;
let secondNumber = null;
//test
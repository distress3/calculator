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
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('0')
});
oneButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('1')
});
twoButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('2')
});
threeButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('3')
});
fourButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('4')
});
fiveButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('5')
});
sixButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('6')
});
sevenButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('7')
});
eightButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('8')
});
nineButton.addEventListener('click', () => {
    if (checkForOperatorInDisplay === true){
        numbersDisplay.innerText = '';
    }
    showOnDisplay('9')
});
addButton.addEventListener('click', () => {
    storeNumber();
    numbersDisplay.innerText = '';
    showOnDisplay('+')
    operatorAdded = true;
    operatorUsed = '+';
});
subtractButton.addEventListener('click', () => {
    storeNumber();
    numbersDisplay.innerText = '';
    showOnDisplay('-')
    operatorAdded = true;
    operatorUsed = '-';
});
multiplyButton.addEventListener('click', () => {
    storeNumber();
    numbersDisplay.innerText = '';
    showOnDisplay('*')
    operatorAdded = true;
    operatorUsed = '*';
});
divideButton.addEventListener('click', () => {
    storeNumber();
    numbersDisplay.innerText = '';
    showOnDisplay('/')
    operatorAdded = true;
    operatorUsed = '/';
});
clearButton.addEventListener('click', () => {
    clearDisplay();
    operatorAdded = false;
    operatorUsed = null;
});
equalsButton.addEventListener('click', () => {
    if (operatorAdded){
        clearDisplay();
        let result = operator(operatorUsed, firstNumber, secondNumber);
        showOnDisplay(result);
    };
});

function clearDisplay() {
    //set value of variable storing digits to 0
    operatorAdded = false;
    numbersDisplay.innerText = '';
}

function checkForOperatorInDisplay() {
    let dis = numbersDisplay.innerText;
    if (dis == '+' || dis == '-' || dis == '*' || dis == '/'){
        return true;
    } else {
        return false;
    }
}

function showOnDisplay(str) {
    if (operatorAdded === true && (str === '+' || str === '-' || str === '*' || str === '/')){
        return;
    }
    numbersDisplay.innerText += str;
};

function storeNumber(){
    if (firstNumber === null && parseInt(numbersDisplay.innerText) > 0){
        let firstNumber = parseInt(numbersDisplay.innerText);
        console.log(firstNumber);
    } else if (firstNumber > null && parseInt(numbersDisplay.innerText) > 0) {
        let secondNumber = parseInt(numbersDisplay.innerText);
        console.log(secondNumber);
    }
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
let firstNumber = null;
let secondNumber = null;
let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function clearEntry() {
    currentNumber = '';
    updateDisplay();
}

function deleteNumber() {
    currentNumber = currentNumber.toString().slice(0, -1);
    updateDisplay();
}

function toggleSign() {
    if (currentNumber) {
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        updateDisplay();
    }
}

function reciprocal() {
    if (currentNumber) {
        currentNumber = (1 / parseFloat(currentNumber)).toString();
        updateDisplay();
    }
}

function square() {
    if (currentNumber) {
        currentNumber = (parseFloat(currentNumber) ** 2).toString();
        updateDisplay();
    }
}

function squareRoot() {
    if (currentNumber) {
        currentNumber = Math.sqrt(parseFloat(currentNumber)).toString();
        updateDisplay();
    }
}

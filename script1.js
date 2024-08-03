function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value === '0' ? number : display.value + number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function appendDot() {
    const display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function toggleScientific() {
    const buttonsContainer = document.querySelector('.buttons');
    const scientificButtons = document.createElement('div');
    scientificButtons.classList.add('scientific-buttons');
    scientificButtons.innerHTML = `
        <button onclick="appendScientific('Math.sin')">sin</button>
        <button onclick="appendScientific('Math.cos')">cos</button>
        <button onclick="appendScientific('Math.tan')">tan</button>
        <button onclick="appendScientific('Math.log')">log</button>
        <button onclick="appendScientific('Math.exp')">exp</button>
        <button onclick="appendScientific('factorial')">n!</button>
    `;
    buttonsContainer.appendChild(scientificButtons);
}

function appendScientific(func) {
    const display = document.getElementById('display');
    if (func === 'factorial') {
        display.value = `${factorial(parseInt(display.value))}`;
    } else {
        display.value = `${func}(${display.value})`;
    }
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const display = document.getElementById('display');

function updateDisplay(value) {
    display.value = value;
    const backspaceButton = document.getElementById('backspace');


    if (display.value.length > 0) {
        backspaceButton.style.display = 'block';
    } else {
        backspaceButton.style.display = 'none';
    }
}

function backspace() {
    updateDisplay(display.value.slice(0, -1));
}

function incrementDisplay(input) {
    if (display.value === 'Error') {
        updateDisplay(input);
    } else {
        updateDisplay(display.value + input);
    }
}

function clearDisplay() {
    updateDisplay('');
}

function calculate() {
    try {
        updateDisplay(eval(display.value).toString());
    } catch (error) {
        updateDisplay('Error');
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        incrementDisplay(key);
    } else if (key === 'x' || key === 'X') {
        incrementDisplay('*');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
}

document.addEventListener('keydown', handleKeyPress);
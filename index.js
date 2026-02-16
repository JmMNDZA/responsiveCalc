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

historyArray = [];

function calculate() {
    expression = display.value;
    try {
        let result = eval(expression).toString();
        updateDisplay(result);
        
        let historyEntry = expression + " = " + result;
        historyArray.push(historyEntry); 
        
        const historyList = document.getElementById('historyList');
        const listItem = document.createElement('li');
        listItem.textContent = historyEntry;
        historyList.appendChild(listItem);
    } catch (error) {
        updateDisplay('Error');
    }
    toggleHistoryButton();
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

function toggleHistoryButton() {
    const historyButton = document.getElementById('history');
    //historyButton.style.display = 'block';
        if (display.value === 'Error') {
        historyButton.style.display = 'none';
    } else {
        historyButton.style.display = 'block';
    }
}
function toggleHistoryPanel() {
    historyPanel = document.getElementById('historyPanel');
    if (historyPanel.style.display === 'none') {
        historyPanel.style.display = 'block';
    } else {
        historyPanel.style.display = 'none';
    }
}
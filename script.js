const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
    if (display.value.length > 15) {
        display.value = display.value.slice(0, 15);
        alert('Maximum input length reached (15 characters).');
    }
}

function clearDisplay() {
    display.value = '';
}
    
function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '(', ')'].includes(key)) {
        appendValue(key);
        if(display.value[0] == ')') {
            display.value = display.value.slice(1);
            alert('Invalid input: Expression cannot start with a closing parenthesis.');
        }
    } 
    else if (key === 'Enter' || key === '=') {
        calculate();
    } 
    else if (key === 'Backspace' || key === 'Delete') {
        deleteValue();
    }
    else if (key === 'Escape' || key === 'C' || key === 'c') {
        clearDisplay();
    }
});

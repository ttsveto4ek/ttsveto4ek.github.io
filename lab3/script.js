let operand = 0;
let operation_click;
let result_num;
let operator;
let block_input;
let regex = new RegExp('^[+-]?\\d+[.,]?\\d?$')

document.addEventListener('keypress', function (event) {
    numberChoose(event.key);
})

function chooseOperator(operation) {
    if (!check()) {
        warnMessage("Введите число!")
    } else if (operation_click === true && operator === operation) operation_click = false;
    else if (!block_input) {
        const inputField = document.getElementById('input_field');
        operation_click = true;
        operator = operation;
        operand = inputField.innerText;
    }
}

function numberChoose(num) {
    const inputField = document.getElementById('input_field')
    if (result_num === true) {
        clear_input();
        result_num = false;
    }
    if (inputField.innerText === '0' || operation_click === true) {
        inputField.innerText = num;
        operation_click = false;
    } else if (!block_input) {
        inputField.innerText += num;
    }
}

function remove_last() {
    const inputField = document.getElementById('input_field')
    if (inputField.innerText.length === 1) inputField.innerText = '0';
    else inputField.innerText = inputField.innerText.slice(0, -1);
}

function clear_input() {
    const inputField = document.getElementById('input_field');
    inputField.innerText = '0';
}

function res() {
    if (!check()) {
        warnMessage("Введите число!")
    } else {
        const inputField = document.getElementById('input_field')
        result_num = true;
        switch (operator) {
            case 'plus':
                inputField.innerText = eval(operand + "+" + inputField.innerText);
                break;
            case 'minus' :
                inputField.innerText = eval(operand + "-" + inputField.innerText);
                break;
            case 'multiply' :
                inputField.innerText = eval(operand + "*" + inputField.innerText);
                break;
            case 'divide' :
                inputField.innerText = eval(operand + "/" + inputField.innerText);
                break;
        }
    }
}

function warnMessage(message) {
    const inputField = document.getElementById('input_field')
    inputField.className = "input-group-text bg-warning mb-1 text-center";
    inputField.innerText = message;
    block_input = true;
    setTimeout(function () {
        inputField.className = "input-group-text mb-1 text-center";
        clear_input();
        block_input = false;
    }, 1500);
}

function check() {
    const inputField = document.getElementById('input_field')
    return regex.test(inputField.innerText);
}

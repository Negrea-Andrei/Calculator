/*Create variables for the numbers that are gonna be use in the mathematical operations */
/*Create a variable for the symbol that is gonna represent what mathematical operation the numbers are gonna be used on */
let currentValue = '';
let currentOperand = '';
let preValue = '';
let preOperand = '';

/*Create variables to the 2 screens that are gonna display the current number that is being added to the operation and for the previous number that was added for the operation */
const previousDisplay = document.querySelector('.pre_screen')
const currentDisplay = document.querySelector('.current_screen')

/*Create variable for the buttons that represent the numbers on the calculator */
const numbers = document.querySelectorAll('.number');

/*Create variable for the buttons that represent the operators on the calculator */
const symbol = document.querySelectorAll('.symbol')

/*Create variables for the delete button, clear button and dot button */
const del = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const dot = document.querySelector('.dot');

/*Added EventListeners for the number buttons so that the current value gets updated after each number pressed*/
/*No number above 999999 will be accepted */
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (currentValue.length <= 6) {
            currentValue += number.innerHTML
            currentDisplay.textContent = currentValue
        }
    });
})


/*Added EventListeners for the operator buttons so that the operand changes after an operand is pressed*/
symbol.forEach(sign => {
    sign.addEventListener('click', () => {
        /* If the sign is not '=' then the equation is not going to be finished */
        if (sign.textContent !== '=') {
            calculate()
            preValue = Number(currentValue);
            currentOperand = sign.textContent
            currentDisplay.textContent = currentValue
            currentValue = ''
            previousDisplay.textContent = preValue + currentOperand
        }
        /* If sign is '=' then the equation is finished and the values are reset */
        else {
            calculate()
            preValue =''
            currentOperand = ''
            currentDisplay.textContent = currentValue
            previousDisplay.textContent = preValue
        }
    })
})

/*Add eventListener to initialize currentValue and preValue to '' */
clear.addEventListener('click', () => {
    preValue = '';
    currentValue = '';
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = preValue
})

/*Delete the last number of the current value */
del.addEventListener('click', () => {
    let arrayNumber = currentValue.split('')
    arrayNumber.pop();
    currentValue = arrayNumber.join('')
    currentDisplay.textContent = currentValue
})

/*Add one dot to the number */
dot.addEventListener('click', () => {
    let arrayNumber = currentValue.split('');
    let doted = arrayNumber.some(element => element == ".");
    if (!doted) {
        arrayNumber.push('.')
    }
    currentValue = arrayNumber.join('')
    currentDisplay.textContent = currentValue
    console.log(currentValue)
})

/*Create a function that is going to handle mathematical equations and return the new value */
function calculate() {
    if (currentOperand == '+') {
        currentValue = Number(preValue) + Number(currentValue)
    }
    else if (currentOperand == "-") {
        currentValue = Number(preValue) - Number(currentValue)
    }
    else if (currentOperand == '*') {
        currentValue = Number(preValue) * Number(currentValue)
    }
    else if (currentOperand == '/') {
        currentValue = (Number(preValue) * 100000) / (Number(currentValue) * 100000)
    }
}



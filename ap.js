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

        /*Change the value of the operands for the mathematical equations*/
        preOperand = currentOperand;
        currentOperand = sign.innerHTML;

        /*Change what currentDisplay and previousDisplay show by assigning the currentValue to the preValue and initializing currentValue to nothing */
        /*To make sure the operand is not displayed alone i created a statement that will prevent the currentValue to be equal to nothing */
        /* Set the numbers to a positive value */
        if (preValue == '' && currentOperand !== '-') {

            /*For the first values introduce it will initialize the numbers and operands that are going to be used */
            preValue = currentValue;
            currentValue = "";
            currentDisplay.textContent = currentValue;
            previousDisplay.textContent = preValue + currentOperand
        }

        /* Set the first value as a negative value */
        else if (preValue == '' && currentOperand === '-') {

            /*For the first values introduce it will initialize the numbers and operands that are going to be used */
            currentValue += currentOperand;
            currentDisplay.textContent = currentValue
            if (currentValue !== '-') {
                preValue = currentValue;
                currentValue = ""
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue 
            }
        }

        /*Calculate the value of the number after preValue and currentValue have been subjected to the mathematical operation with the specified operand */
        else {

            /*If the operand is '+' */
            if (preOperand == '+') {
                preValue = Number(preValue) + Number(currentValue);
                currentValue = "";
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue + currentOperand
            }

            /*If the operand is '*' */
            else if (preOperand == '*') {
                preValue = Number(preValue) * Number(currentValue);
                currentValue = "";
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue + currentOperand
            }

            /*If the operand is '/' */
            else if (preOperand == '/') {
                /* Make sure the operant won't divide with '0'*/
                if (preValue == 0 || currentValue == 0) {
                    preValue = 'ERROR'
                    currentValue = "ERROR"
                    currentDisplay.textContent = currentValue;
                    previousDisplay = preValue
                }
                else {
                    preValue = (Number(preValue) * 100000) / (Number(currentValue) * 100000);
                    currentValue = "";
                    currentDisplay.textContent = currentValue;
                    previousDisplay.textContent = preValue + currentOperand
                }
            }

            /*If the operand is '-' */
            else if (preOperand == '-') {
                preValue = Number(preValue) - Number(currentValue);
                currentValue = "";
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue + currentOperand
            }

            else if (currentOperand == "=") {

            }
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
    currentDisplay.innerHTML = currentValue
})

/*Add one dot to the number */
dot.addEventListener('click', () => {
    let arrayNumber = currentValue.split('');
    let doted = arrayNumber.some(element => element == ".");
    if (!doted) {
        arrayNumber.push('.')
    }
    currentValue = arrayNumber.join('')
    currentDisplay.innerHTML = currentValue
    console.log(currentValue)
})



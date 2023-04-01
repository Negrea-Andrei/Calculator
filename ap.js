/*Create variables for the numbers that are gonna be use in the mathematical operations */
/*Create a variable for the symbol that is gonna represent what mathematical operation the numbers are gonna be used on */ 
let currentValue = '';
let currentOperand = '';
let preValue = '';

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
numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentValue += number.innerHTML
        currentDisplay.textContent = currentValue});              
})


/*Added EventListeners for the operator buttons so that the operand changes after an operand is pressed*/
symbol.forEach(sign => {
    sign.addEventListener('click', () => {
        currentOperand = sign.innerHTML;
        /*Change what currentDisplay and previousDisplay show by assigning the currentValue to the preValue and initializing currentValue to nothing */
        /*To make sure the operand is not displayed by its one i created a statement that will prevent the currentValue to be equal to nothing */
        if (preValue == '') {
            preValue = Number(currentValue);
            currentValue = "";
            currentDisplay.textContent = currentValue;
            previousDisplay.textContent = preValue + " " + currentOperand
        }
        else {
            if( currentOperand == '+') {
                preValue = Number(preValue) + Number(currentValue);
                currentValue = "";
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue + " " + currentOperand
            }
            else if( currentOperand == '*') {
                preValue = Number(preValue) * Number(currentValue);
                currentValue = "";
                currentDisplay.textContent = currentValue;
                previousDisplay.textContent = preValue + " " + currentOperand
            }
        }
    })
})





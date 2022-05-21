class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
    
}
//function add(firstOperand, secondOperand) {
//    value = firstOperand + secondOperand;
//    return value;
//}
//
//function subtract(firstOperand, secondOperand) {
//    value = firstOperand - secondOperand;
//    return value;
//}
//
//function multiply(firstOperand, secondOperand) {
//    value = firstOperand * secondOperand;
//    return value;
//}
//
//function divide(firstOperand, secondOperand) {
//    value = firstOperand / secondOperand;
//    return value;
//}
//
//
//function operate(operate, firstOperand, secondOperand) {
//    switch (operator) {
//        case "+":
//            return add(firstOperand, secondOperand);
//        case "-":
//            return sub(firstOperand, secondOperand);
//        case "x":
//            return multiply(firstOperand, secondOperand);
//        case "/":
//            return divide(firstOperand, secondOperand);
//    }
//}
//
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
  })
})
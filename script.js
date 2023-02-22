const digits = document.querySelectorAll('.digits')
const display = document.querySelector('#display-result')
const equal = document.querySelector('.equal')
const operators = document.querySelector('#right-column')
const clear = document.querySelector('.clear')
const power = document.querySelector('#power-off')
const audio = document.querySelector('audio')
const screen = document.querySelector('#display')

let num = 0;
let operator = ''

//defining sum substract, divide and product
function sum(one, two) {
    let final = one + two
    display.textContent = final
    num = final
}

function substract(one, two) {
    let final = one - two
    display.textContent = final
    num = final
}

function division(one, two) {
    let final = one / two
    display.textContent = final
    num = final
}

function multiply(one, two) {
    let final = one * two
    display.textContent = final
    num = final
}
//functions for events

function addFirstNumber(operatorValue) {
    num = Number.parseInt(display.textContent, 10)
    operator = operatorValue
}


function displayResult(result) {
    display.textContent = result
    operator = ''
}

function clearResult() {
    display.textContent = 0
    num = 0
    operator = ''
}

function powerOff() {
    display.textContent = 0
    num = 0
    operator = ''
    display.classList.toggle('hide')
    screen.classList.toggle('powerOff')
    screen.classList.toggle('powerOn')

    // audio play and disabling button for 0.5sec

    audio.volume = 0.1
    audio.play()
    power.setAttribute('disabled', 'disabled')
    setTimeout(() => {
        power.removeAttribute('disabled')
    }, 500)
    
}

//*****************************************/

digits.forEach(digit => {
    
    digit.addEventListener('click', event => {
        console.log(`${num}`)
        //let hideStatus = display.classList.contains('hide');
        if (event.target.classList.contains('digits') && display.textContent === `${num}`) {
            display.textContent = ''
        }
        display.textContent += event.target.textContent
    })
})

operators.addEventListener('click', event => {
    
    if (!operator) {
        addFirstNumber(event.target.textContent)
        console.log(num, operator)
    } else {
        operator = event.target.textContent
        operate(num, Number.parseInt(display.textContent, 10), event.target.textContent)
    }
})

equal.addEventListener('click', event => {
    operate(num, Number.parseInt(display.textContent, 10), operator)
    operator = ''
})

clear.addEventListener('click', clearResult)


power.addEventListener('click', powerOff)



function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            sum(num1, num2, operator)
            break;
        case '-': 
            substract(num1, num2, operator)
            break;
        case '/':
            division(num1, num2, operator)
            break;
        case '*': 
            multiply(num1, num2, operator)
            break;

    }       
}



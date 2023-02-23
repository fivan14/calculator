const digits = document.querySelectorAll('.digits')
const display = document.querySelector('#display-result')
const equal = document.querySelector('.equal')
const operators = document.querySelector('#right-column')
const clear = document.querySelector('.clear')
const power = document.querySelector('#power-off')
const audio = document.querySelector('audio')
const screen = document.querySelector('#display')

let num = 0;
let num2 = 0;
let operator = ''

// function blinking zero display


// function is float

function isFloat(value) {
    if (typeof value === 'number' &&
        !Number.isNaN(value) &&
        !Number.isInteger(value)
    ) {
        return true;
    }
    return false;
}

//defining sum substract, divide and product
function sum(one, two) {
    return one + two
}

function substract(one, two) {
    return one - two
}

function division(one, two) {
    return one / two
}

function multiply(one, two) {
    return  one * two
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
    if (!display.classList.contains('pulse')) {
        display.classList.toggle('pulse')
    }
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

    if (!display.classList.contains('pulse')) {
        display.classList.toggle('pulse')
    }
}

//*****************************************/

digits.forEach(digit => {

    digit.addEventListener('click', event => {
        if (display.textContent.length === 8 && display.textContent != `${num}`) {
            return true
        } else {
            if (display.classList.contains('pulse')) {
                display.classList.toggle('pulse')
            }
            console.log(`${num}`)
            //let hideStatus = display.classList.contains('hide');
            if (event.target.classList.contains('digits') && display.textContent === `${num}`) {
                display.textContent = ''
            }
            display.textContent += event.target.textContent
        }
    })
})

/*
when operator is clicked, check if there is already operator
if (true) add number from display to num variable, 
and add operator to operator variable
*/

operators.addEventListener('click', event => {

        if (event.target.classList.contains('operations')) {
            if (!operator) {
                addFirstNumber(event.target.textContent)
                console.log(num, operator)
            } else {
                let operatorSign = event.target.textContent
                let final = operate(num, Number.parseFloat(display.textContent), operatorSign)
        
                // check if result fit the screen if not
        
                if (`${final}`.length > 8 && isFloat(final)) {
                    display.textContent = final.toFixed(2)
                    num = final.toFixed(2)
                    console.log({num})
                    operator = event.target.textContent
                } else {
                    display.textContent = final
                    num = final
                    operator = event.target.textContent
                }
            }
        }
})

equal.addEventListener('click', event => {
    let final = operate(num, Number.parseFloat(display.textContent), operator)

    if (`${final}`.length > 8 && isFloat(final)) {
        display.textContent = final.toFixed(2)
        num = final.toFixed(2)
        operator = ''
    } else if (`${final}`.length > 8) {
        let str = `${final.toExponential()}`.split('e')
        display.textContent = str[0].substring(0, 4) + 'e' + str[1]
        num = final
        operator = ''
    } else {
        display.textContent = final
        num = final
        operator = ''
    }
})

clear.addEventListener('click', clearResult)


power.addEventListener('click', powerOff)



function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return sum(num1, num2, operator)
        case '-': 
            return substract(num1, num2, operator)
        case '/':
            return division(num1, num2, operator)
        case '*': 
            return multiply(num1, num2, operator)

    }       
}

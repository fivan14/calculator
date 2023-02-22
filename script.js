const valueButtons = document.querySelector('#left-column')
const display = document.querySelector('#display-result')
const equal = document.querySelector('.equal')
const operators = document.querySelector('#right-column')
const clear = document.querySelector('.clear')

let num = 0;
let operator = ''

//defining sum substract, divide and product


//defining function operate()



valueButtons.addEventListener('click', event => {
    
    console.log(event.target.classList.contains('digits'))
    if (event.target.classList.contains('digits')) {
        if (display.textContent === `${num}`) {
            display.textContent = ''
    
        }
        display.textContent += event.target.textContent
    }

})


operators.addEventListener('click', event => {
    
    if (!operator) {
        num = Number.parseInt(display.textContent, 10)
        console.log({num})
        operator = event.target.textContent
    } else {
        let final = num + Number.parseInt(display.textContent, 10)
        display.textContent = final
        num = final
        operator = event.target.textContent
    }
})

equal.addEventListener('click', event => {
    let final = num + Number.parseInt(display.textContent)
    display.textContent = final
    num = final
    operator = ''
})

clear.addEventListener('click', () => {
    display.textContent = 0
    num = 0
    operator = ''
})
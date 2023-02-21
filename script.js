const valueButtons = document.querySelector('#second-row')
const display = document.querySelector('#display-result')

valueButtons.addEventListener('click', event => {
    if (display.textContent === 'calculator') {
        display.textContent = ''

    }
    console.log(event.target.textContent)
    display.textContent += event.target.textContent
})
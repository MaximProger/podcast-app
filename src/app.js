import {Question} from './question'
import {isValid} from './utils'
import './style.css'

const form = document.getElementById('form');
const input = form.querySelector('#question__input');
const sumbitBtn = form.querySelector('#submit');

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
    sumbitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        sumbitBtn.disabled = true
        // Async request to server
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            sumbitBtn.disabled = false
        })

    }

    console.log(input.value)
}
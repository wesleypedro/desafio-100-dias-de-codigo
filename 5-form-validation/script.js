const isValidEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

let isValidForm = false;

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('hidden')
}

const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const inputCPF = document.querySelector('input[name="cpf"]')

const isValidateElem = (elem) => {
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('hidden')
    isValidForm = false
}

const validateInput = () => {
    isValidForm = true
    if(!inputName.value) {
        isValidateElem(inputName)
    }
    
    if(!isValidEmail(inputEmail.value)) {
        isValidateElem(inputEmail)
    }
    
    if(!isValidCPF(inputCPF.value)) {
        isValidateElem(inputCPF)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()

    if(isValidForm) {
        // Onde faria o POST para o backend
        form.remove()
        message.classList.remove('hidden')
        console.log("Validou e enviou!")
    }
})

inputName.addEventListener("input", () => {
    resetInput(inputName)
})

inputEmail.addEventListener("input", () => {
    resetInput(inputEmail)
})

inputCPF.addEventListener("input", () => {
    resetInput(inputCPF)
})
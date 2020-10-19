const forms = document.querySelectorAll('[data-validation]')

const messages = {
    valueMissing: () => 'Mandatory',
    patternMismatch: () => 'Format Error',
    tooShort: (target) => `At least it should be ${target.minLength}`
}

const validityKeys = Object.keys(messages)

forms.forEach(form => {
    form.addEventListener('input', (e) => {
        const {target} = e

        const errorsEl = target.parentElement.querySelectorAll('small')
        errorsEl.forEach(el => el.remove())

        validityKeys.forEach(key => {
            if (target.validity[key]) {
                appendError(target, key)
            }
        })
    })
})

function appendError(target, key) {
    const errorEl = document.createElement('small')
                errorEl.innerText = messages[key](target)
                target.parentElement.appendChild(errorEl)
}
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__save-button',
    buttonDisabledClass: 'popup__save-button_inactive'

}

function disableSubmit(e) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}

function enableValidatuion(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach(form => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        })
        addInputLisners(form, config);
        toggleButton(form, config);
    })

}


function handleFormInput(e, config) {
    const input = e.target;
    const inputId = input.id;
    const errorElem = document.querySelector(`#${inputId}-error`);
    

    if (input.validity.valid) {
        input.classList.remove(config.errorClass);
        errorElem.textContent = '';
    } else {
        input.classList.add(config.errorClass);
        errorElem.textContent = input.validationMessage;

    }


}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);

}

function addInputLisners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (e) => {
            handleFormInput(e, config);
        })

    })
}

enableValidatuion(formValidationConfig);
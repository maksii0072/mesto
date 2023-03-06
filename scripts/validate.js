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
/**
 * функция получает формы после чего производится взоимодействие с ними
 *
 * @param {*} config 
 */

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
/**
 * Функция обработчик которая делает проверку input  после чего добавляет класс ошибки 
 * @param {*} e 
 * @param {*} config 
 */

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
/**
 * Функция которая  делает проверку на валидность формы после чего делвет ее активной или не активной
 * @param {*} form 
 * @param {*} config 
 */
function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);

}
/**
 * Функция которая добавляет input(м) слушатель
 * @param {*} form 
 * @param {*} config 
 */
function addInputLisners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (e) => {
            handleFormInput(e, config);
        })

    })
}

enableValidatuion(formValidationConfig);
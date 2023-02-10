const popup = document.querySelector('.popup'),
    popupCloseBtn = document.querySelector('.popup__close'),
    profileEditBtn = document.querySelector('.profile__edit-button');
// =========== форма ===================
const formElement = document.querySelector('.popup__form'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputAbout = document.querySelector('.popup__input_type_about'),
    profileDescription = document.querySelector('.profile__description'),
    profileTitle = document.querySelector('.profile__title'),
    saveBtn = document.querySelector('.popup__save-button');

function openPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileTitle.textContent;
    inputAbout.value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputAbout.value;
    closePopup();
}


formElement.addEventListener('submit', handleFormSubmit);
profileEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
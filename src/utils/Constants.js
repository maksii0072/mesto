    // переременные валидации 
    export const formValidationConfig = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        buttonSelector: '.popup__save-button',
        buttonDisabledClass: 'popup__save-button_inactive',
        errorClass: 'popup__input_type_error'
    }

    const editButton = document.querySelector('.profile__edit-button'),
        editAvatarButton = document.querySelector('.profile__avatar-button'),
        addButton = document.querySelector('.profile__add-button'),
        profilePopup = document.querySelector('.popup_profile'),
        inputNameForm = document.querySelector('.popup__input_type_name'),
        inputAboutForm = document.querySelector('.popup__input_type_about'),
        profileForm = document.querySelector('.popup__form'),
        addPopupCards = document.querySelector('.popup_card'),
        formElementCard = document.querySelector('.popup__form-card'),

        avatarForm = document.querySelector('.popup__form-avatar'),
        deleteButton = document.querySelector('.element__trash');

    console.log(deleteButton);

    export {
        editButton,
        addButton,
        profilePopup,
        inputNameForm,
        inputAboutForm,
        profileForm,
        formElementCard,
        addPopupCards,
        deleteButton,
        avatarForm,
        editAvatarButton
    };
    // переременные валидации 
    export const formValidationConfig = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        buttonSelector: '.popup__save-button',
        buttonDisabledClass: 'popup__save-button_inactive',
        errorClass: 'popup__input_type_error'
    }

      const editBatton = document.querySelector('.profile__edit-button'),
            addBatton = document.querySelector('.profile__add-button'),
            profilePopup = document.querySelector('#popup_type-profile'),
            inputNameForm = document.querySelector('.popup__input_type_name'),
            inputAboutForm = document.querySelector('.popup__input_type_about'),
            profileForm = document.querySelector('.popup__form'),
            addPopupCards = document.querySelector('#popup-cards'),
            formElementCard = document.querySelector('#popup__form-card'),
            editAvatarButton = document.querySelector('.profile__avatar-button'),
            avatarForm = document.querySelector('.popup__form-avatar'),
            deleteButton = document.querySelector('.element__trash');
            
    export {
        editBatton,
        addBatton,
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

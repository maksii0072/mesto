import Card from './Card.js';
import {
    FormValidator
} from './FormValidator.js';
import {
    formValidationConfig
} from '../components/formValidationConfig.js';
import {
    initialCards
} from '../components/initialCards.js';

window.addEventListener('DOMContentLoaded', () => {


    //  ============== переменные popup info (profile) ===================
    const profilePopup = document.querySelector('#popup_type-profile'),
        allPopups = document.querySelectorAll('.popup'),
        btnPopupСloses = document.querySelectorAll('.popup__close');

    const elementFormPopup = document.querySelector('#popup__form'),
        inputNameForm = document.querySelector('.popup__input_type_name'),
        inputAboutForm = document.querySelector('.popup__input_type_about');

    const profileEditBtn = document.querySelector('.profile__edit-button'),
        profileTitle = document.querySelector('.profile__title'),
        profileDescription = document.querySelector('.profile__description'),
        profileAddBtn = document.querySelector('.profile__add-button');

    const formElementCard = document.querySelector('#popup__form-card');
    const addPopupCards = document.querySelector('#popup-cards');

        const inputTextForm = document.querySelector('.popup__input_type_link-name'),
        inputUrlForm = document.querySelector('.popup__input_type_link-url');

    // ======= переменные для popup open images ===================

    const popupImages = document.querySelector('#popup_img'),
        images = document.querySelector('.popup__img-photo'),
        imagesCaption = document.querySelector('.popup__img-caption');


    const containerElements = document.querySelector('.elements');


// ===============================================================

    const popupEditProfileValidation = new FormValidator(formValidationConfig, profilePopup)
    popupEditProfileValidation.enableValidation()

    const popupAddCardValidation = new FormValidator(
        formValidationConfig,
        addPopupCards
    )
    popupAddCardValidation.enableValidation()


    //  Open popup 
    function openPopup(popup) {
        popup.classList.add('popup_opened');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handlerEscClose)
    }

    // Close popup
    function closePopup(popup) {
        popup.classList.remove('popup_opened');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handlerEscClose)

    }

    function handlerEscClose(e) {
        if (e.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            closePopup(openedPopup);
        }

    }

    allPopups.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close')) {
                closePopup(item);

            }
        });
    });



    const updateProfileData = (e) => {
        e.preventDefault();
        profileTitle.textContent = inputNameForm.value;
        profileDescription.textContent = inputAboutForm.value;
        popupEditProfileValidation.disableSubmitButton()
        closePopup(profilePopup);
    };

    // popup close Buttons================================
    btnPopupСloses.forEach((btn) => btn.addEventListener("click", evt => closePopup(evt.target.closest('.popup'))));

    // popup Open Buttons
    profileEditBtn.addEventListener('click', () => {
        inputNameForm.value = profileTitle.textContent;
        inputAboutForm.value = profileDescription.textContent;
        openPopup(profilePopup);
    });
    profileAddBtn.addEventListener('click', () => {
        openPopup(addPopupCards);
        formElementCard.reset();
        popupAddCardValidation.disableSubmitButton()
    });

    profilePopup.addEventListener('submit', updateProfileData);


    function openImage(card, link) {
        images.src = link;
        images.alt = card;
        imagesCaption.textContent = card;

        openPopup(popupImages);
    }

    // -------- New Card (Экземпляр) ---------

    function createCard(value) {
        const card = new Card(value, '.card__template', openImage).generateCard()
        return card
    }


    function renderCard(card, containerElements) {
        containerElements.prepend(card);
    }

    function render() {
        initialCards.reverse().forEach((value) => {
            const newCard = createCard(value)
            if (newCard) renderCard(newCard, containerElements)
        })
    }
    render()


    addPopupCards.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = inputTextForm.value
        const link = inputUrlForm.value
        const newCard = createCard({
            name,
            link
        })
        if (newCard) renderCard(newCard, containerElements)

        closePopup(addPopupCards)
    })
})
//  ============== переменные popup info (profile) ===================

const profilePopup = document.querySelector('#popup'),
    popupCloseBtn = document.querySelector('.popup__close-profile'),
    saveBtn = document.querySelector('.popup__save-button');

const formElement = document.querySelector('#popup__form'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputAbout = document.querySelector('.popup__input_type_about');

const profileEditBtn = document.querySelector('.profile__edit-button'),
    profileTitle = document.querySelector('.profile__title'),
    profileDescription = document.querySelector('.profile__description'),
    profileAddBtn = document.querySelector('.profile__add-button');

// ======= переменные для получения данных  popup add images===================

const popupCards = document.querySelector('#popup-cards'),
    popupFormCard = document.querySelector('#popup__form-card'),
    popupCloseBtnAdd = document.querySelector('.popup__close_add_card'),
    popupSaveBtnAdd = document.querySelector('.popup__save-button_add_card');

const formElementCard = document.querySelector('.popup__form-card'),
    inputText = document.querySelector('#text-input'),
    inputUrl = document.querySelector('#url-input');

// ======= переменные для popup open images ===================

const popupImages = document.querySelector('#popup_img'),
    images = document.querySelector('.popup__img-photo'),
    imagesCaption = document.querySelector('.popup__img-caption'),
    popupCloseBtnImageFull = document.querySelector('.popup__close_img_full');

// ================ переменные для template ==========================

const tamplate = document.querySelector('#tamplate').content;
const containerElements = document.querySelector('.elements');







// ============== функции которые открывают закрывают popup =============== 


const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    inputName.value = profileTitle.textContent;
    inputAbout.value = profileDescription.textContent;
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputAbout.value;
    closePopup(profilePopup);

}
// ==================== Массив с данными =======================

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// ========================= Создание карточки ===============================

const createCard = (item) => {
    const tamplateElem = tamplate.querySelector('.element').cloneNode(true);
    const elementImage = tamplateElem.querySelector('.element__img');
    const elementDescription = tamplateElem.querySelector('.element__description');

    elementImage.src = item.link;
    elementImage.alt = item.name;
    elementDescription.textContent = item.name;

    tamplateElem
        .querySelector('.element__like-button')
        .addEventListener('click', (e) => {
            const target = e.target;
            target.classList.toggle('elements__like-btn_active')
        });
    tamplateElem
        .querySelector('.element__trash')
        .addEventListener('click', (e) => {
            const target = e.target;
            target.closest('.element').remove();

        });
    elementImage
        .addEventListener('click', () => {
            images.src = item.link;
            images.alt = item.name;
            imagesCaption.textContent = item.name;

            openPopup(popupImages);
        })
    return tamplateElem;
};

popupCloseBtnImageFull.addEventListener('click', () => {
    closePopup(popupImages);
})



const addCard = (item, container) => {
    const newCard = createCard(item);
    container.prepend(newCard);
}

initialCards.forEach(function (item) {
    addCard(item, containerElements);

});


const cardFormSubmitHandler = (e) => {
    e.preventDefault();
    addCard(
        (item = {
            name: inputText.value,
            link: inputUrl.value
        }),
        containerElements
    )
    e.target.reset();
    closePopup(popupCards);
};
formElementCard.addEventListener("submit", cardFormSubmitHandler);


formElement.addEventListener('submit', handleFormSubmit);

profileEditBtn.addEventListener('click', () => {

    openPopup(profilePopup);
});
popupCloseBtn.addEventListener('click', () => {

    closePopup(profilePopup);

});
// ========================================================
profileAddBtn.addEventListener('click', () => {
    openPopup(popupCards);
});
popupCloseBtnAdd.addEventListener('click', () => {
    closePopup(popupCards);
});
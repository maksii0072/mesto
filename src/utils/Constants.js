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
            formElementCard = document.querySelector('#popup__form-card');

    export {
        editBatton,
        addBatton,
        profilePopup,
        inputNameForm,
        inputAboutForm,
        profileForm,
        formElementCard,
        addPopupCards
    };

    // ==================== Массив с данными =======================

 export const initialCards = [{
    name: 'Горный Алтай',
    link: 'https://w-dog.ru/wallpapers/9/19/531620289590164/ozero-nebo-voda-les-gory-otrazhenie-novaya-zelandiya.jpg'
},
{
    name: 'Карелия',
    link: 'https://mayel.ru/wp-content/uploads/2020/10/winter.jpg'
},
{
    name: 'Норвегия',
    link: 'https://img1.fonwall.ru/o/al/sea-water-ocean-architecture-iwsh.jpeg?route=mid&h=750'
},
{
    name: 'Нью-Йорк',
    link: 'https://img1.fonwall.ru/o/dw/architecture-skyline-building-city-itar.jpeg?route=mid&h=750'
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




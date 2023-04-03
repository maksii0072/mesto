// import '../pages/index.css';
import {
    Card
} from '../components/Card.js';
import {
    FormValidator
} from '../components/FormValidator.js';
import {
    formValidationConfig,
    initialCards
} from '../utils/Constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';


import {
    editBatton,
    addBatton,
    inputNameForm,
    inputAboutForm,
    profileForm,
    formElementCard

} from '../utils/Constants.js'


const popupWithImage = new PopupWithImage('#popup_img');
popupWithImage.setEventListeners();

const userData = new UserInfo({
    nameSelector: '.profile__title',
    professionSelector: '.profile__description'
});


const popupWithProfile = new PopupWithForm({popupSelector: '#popup_type-profile',
 handlerSubmit: item => {
  userData.setUserInfo(item)
}});  
popupWithProfile.setEventListeners();



const popupCreateCard = new PopupWithForm({popupSelector: '#popup-cards',
handlerSubmit: (item) => {
  const card = newCard(item);
  cardSection.addItem(card);
}})

popupCreateCard.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: (item) => {
  const card = newCard(item);
  cardSection.addItem(card);
}}, '.elements')

cardSection.setItems();

function newCard(item) {
    const card = new Card ({title: item.name, link: item.link, handleCardClick: () => {
      popupWithImage.open(item);
    }}, '.card__template')
    const generatedCard = card.createCard();
    return generatedCard;
  }

  function showPopupProfile() {
    const user = userData.getUserInfo();
    inputNameForm.value = user.name;
    inputAboutForm.value = user.about;
    ProfileValidation.setButtonStateActive();
    ProfileValidation.clearErrors();
    popupWithProfile.open();
};

function showPopupCard() {
  popupCreateCard.open();
};


const ProfileValidation = new FormValidator(profileForm,formValidationConfig,
    );
const CardValidation = new FormValidator(formElementCard,formValidationConfig,
    );
ProfileValidation.enableValidation();
CardValidation.enableValidation();
addBatton.addEventListener('click', showPopupCard);
editBatton.addEventListener('click', showPopupProfile);

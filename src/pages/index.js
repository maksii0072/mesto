import '../pages/index.css';
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
  const card = createNewCard(item);
  cardSection.addItem(card);
}})

popupCreateCard.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: (item) => {
  const card = createNewCard(item);
  cardSection.addItem(card);
}}, '.elements')

cardSection.setItems();

function createNewCard(item) {
    const card = new Card ({title: item.name, link: item.link, handleCardClick: () => {
      popupWithImage.openPopup(item);
    }}, '.template')
    const generatedCard = card.createCard();
    return generatedCard;
  }

  function showPopupProfile() {
    const user = userData.getUserInfo();
    inputNameForm.value = user.name;
    inputAboutForm.value = user.about;
    profileValidation.setButtonStateActive();
    profileValidation.clearErrors();
    popupWithProfile.openPopup();

};

function showPopupCard() {
  popupCreateCard.openPopup();
};


const profileValidation = new FormValidator(profileForm,formValidationConfig,
    );
const cardValidation = new FormValidator(formElementCard,formValidationConfig,
    );
profileValidation.enableValidation();
cardValidation.enableValidation();

addBatton.addEventListener('click', showPopupCard);
editBatton.addEventListener('click', showPopupProfile);

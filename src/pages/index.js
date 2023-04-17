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
import Api from '../components/Api.js';
import PopupSubmit from '../components/PopupSubmit.js';

import {
    editBatton,
    addBatton,
    inputNameForm,
    inputAboutForm,
    profileForm,
    formElementCard,
    editAvatarButton,
    avatarForm

} from '../utils/Constants.js'

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-64',
    token: 'bcbd9dc3-00dc-4c20-aa46-951a51156104'
  })


const popupWithImage = new PopupWithImage('#popup_img');
popupWithImage.setEventListeners();


const popupWithAvatar = new PopupWithForm({popupSelector: '#popup_avatar',
handlerSubmit: item => {
  api.editProfileAvatar(item)
    .then(res => {
      userData.setUserAvatar(res)
      popupWithAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
}})
popupWithAvatar.setEventListeners();

const userData = new UserInfo({
    professionSelector: '.profile__description',
    avatarSelector: '#profile__avatar'
});


const popupWithProfile = new PopupWithForm({popupSelector: '#popup_type-profile',
 handlerSubmit: item => {
    const submitText = popupWithProfile.getSubmitText();
    popupWithProfile.setLoadingText('Сохранение...');
    api.editProfile(item)
     .then(res => {
       userData.setUserInfo(res)
       popupWithProfile.close();
     })
     .catch(err => {
       console.log(err);
     })
     .finally(() => {
       popupWithProfile.setLoadingText(submitText);
     })
}});  
popupWithProfile.setEventListeners();

const popupDeleteCard = new PopupSubmit({popupSelector: '.popup_delete-card', handleSubmit: (card) => {
    const submitText = popupDeleteCard.getSubmitText();
    popupDeleteCard.setLoadingText('Удаление...');
    api.deleteCard(card.getCardId())
      .then(res => {
        card.deleteCard();
        popupDeleteCard.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupDeleteCard.setLoadingText(submitText);
      })
  }})
  
  popupDeleteCard.setEventListeners();

const popupCreateCard = new PopupWithForm({popupSelector: '#popup-cards',
handlerSubmit: (item) => {
    const submitText = popupCreateCard.getSubmitText();
    popupCreateCard.setLoadingText('Создание...')
    api.addCard(item)
    .then(res => {
      const card = newCard(res);
      cardSection.addItem(card);
      popupCreateCard.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupCreateCard.setLoadingText(submitText);
    })
}})

popupCreateCard.setEventListeners();

const cardSection = new Section({ renderer: (item) => {
  const card = createNewCard(item);
  cardSection.addItem(card);
}}, '.elements')


function createNewCard(item) {
    const card = new Card ({
        title: item.name,
        link: item.link,
        ownerId: item.owner._id,
        userId: userData.getUserId(),
        cardId: item._id,
        handleCardClick: () => {
      popupWithImage.openPopup(item);
    },
    handleDeleteButton: () => {
        popupDeleteCard.open(card);
      }, 
      likes: item.likes,
      handleLikeClick: () => {
        const likedCard = card.ownLike();
        const toggleLikeApi = likedCard ? api.unlikeCard(card.getCardId()) : api.likeCard(card.getCardId());
        toggleLikeApi
          .then(res => {
            card.setLikes(res.likes);
            card.renderLikes();
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, '#template')
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

function showPopupAvatar() {
    AvatarValidation.setButtonStateDisabled();
    AvatarValidation.clearErrors();
    popupWithAvatar.open();
  }
  
  Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([profileInfo, initialCards]) => {
    userData.setUserInfo(profileInfo);
    userData.setUserAvatar(profileInfo);
    cardSection.setItems(initialCards);
  })
  .catch(err => {
    console.log(err);
  })


const profileValidation = new FormValidator(profileForm,formValidationConfig,
    );
const cardValidation = new FormValidator(formElementCard,formValidationConfig,
    );
const AvatarValidation = new FormValidator(avatarForm, validationConfig);

profileValidation.enableValidation();
cardValidation.enableValidation();
AvatarValidation.enableValidation();

editAvatarButton.addEventListener('click', showPopupAvatar);
addBatton.addEventListener('click', showPopupCard);
editBatton.addEventListener('click', showPopupProfile);

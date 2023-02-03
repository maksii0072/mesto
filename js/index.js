const popup = document.querySelector(".popup"),
  popupCloseBtn = document.querySelector(".popup__close"),
  profileEditBtn = document.querySelector(".profile__edit-button");
// =========== форма ===================
const formElement = document.querySelector(".popup__container"),
  nameInput = document.querySelector(".popup__input-name"),
  inputAbout = document.querySelector(".popup__input-about"),
  profileTitle = document.querySelector(".profile__title"),
  profileDescription = document.querySelector(".profile__description"),
  saveBtn = document.querySelector(".popup__save-button");

function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditBtn.addEventListener("click", function () {
  openPopup();
});
popupCloseBtn.addEventListener("click", function () {
  closePopup();
});

function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = inputAbout.value;

  closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);

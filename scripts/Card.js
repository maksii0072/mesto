export default class Card {
    constructor(data, templateSelector, clickImageHandle) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._clickImageHandle = clickImageHandle;
    }

    generateCard = () => {
        this._cardElement = document
            .querySelector(this._templateSelector)
            .content
            .cloneNode(true);
        this._like = this._cardElement.querySelector('.element__like-button');
        this._text = this._cardElement.querySelector('.element__description');
        this._cardImg = this._cardElement.querySelector('.element__img');
        this._cardDelete = this._cardElement.querySelector('.element__trash');

        this._fillCard()
        this._setEventHandlers();

        return this._cardElement
    }

    _likeCard = () => {
        this._like.classList.toggle('elements__like-btn_active')

    }

    _deleteCard = () => {
        this._cardDelete.closest('.element').remove()
    }

    _fillCard = () => {
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
        this._text.textContent = this._name;
    }

    _setEventHandlers = () => {
        this._cardDelete.addEventListener('click', () =>
            this._deleteCard()
        )
        this._like.addEventListener('click', () =>
            this._likeCard()
        )
        this._cardImg.addEventListener('click', () =>
            this._clickImageHandle(this._name, this._link)
        )
    }

}
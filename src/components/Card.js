export class Card {
    constructor({
        title,
        link,
        handleCardClick
    }, cardSelector) {
        this._title = title;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;


    }

    _getTemplate() {
        const template = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return template;
    }

    _deleteCard(e) {
        e.target.closest('.element').remove();
    }

    _addLike(e) {
        e.target.classList.toggle('elements__like-btn_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', this._addLike);
        this._element.querySelector('.element__trash').addEventListener('click', this._deleteCard);
        this._cardImage.addEventListener('click', this._handleCardClick);
    }

    createCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardTitle = this._element.querySelector('.element__description');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._cardTitle.textContent = this._title;
        this._setEventListeners();
       
        return this._element;

    }

}
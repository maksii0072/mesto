export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._closeBtn = this._popup.querySelector('.popup__close');
        this._handlerEscClose = this._handlerEscClose.bind(this);
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handlerEscClose);
    }

    _handlerEscClose(e) {
        if (e.key === 'Escape') {
            this.closePopup();
        }
    }
    setEventListeners() {
        this._popup.addEventListener('click', e => {
            if (e.target.classList.contains('popup__close') || e.target.classList.contains('popup')) {
                this.closePopup();
            
            }
        });
    }
}
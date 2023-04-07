import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({
        popupSelector,
        handlerSubmit
        
    }) {
        super(popupSelector);
        this._handlerSubmit = handlerSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');

    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }


    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', e => {
            e.preventDefault();
            this._handlerSubmit(this._getInputValues());


            this.closePopup();
        })


    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }
}
import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__img-photo');
        this._popupTitle = this._popup.querySelector('.popup__img-caption');
    }

    openPopup(item) {
        this._popupImage.src = item.link;
        this._popupImage.alt = item.name;
        this._popupTitle.textContent = item.name;
        super.openPopup();
    }
}
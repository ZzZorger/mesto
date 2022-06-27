import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgPopupTitle = this._popup.querySelector('.img-popup__title');
    this._imgPopupImg = this._popup.querySelector('.img-popup__img');
  }
  openPopup(cardTitle, cardImage) {
    this._imgPopupTitle.textContent = cardTitle;
    this._imgPopupTitle.alt = cardTitle;
    this._imgPopupImg.src = cardImage;
    super.openPopup();
  }
}
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  openPopup(cardTitle, cardImage) {
    this._imgPopupTitle = this._popupSelector.querySelector('.img-popup__title');
    this._imgPopupImg = this._popupSelector.querySelector('.img-popup__img');
    this._imgPopupTitle.textContent = cardTitle;
    this._imgPopupTitle.alt = cardTitle;
    this._imgPopupImg.src = cardImage;
    super.openPopup();
  }
}
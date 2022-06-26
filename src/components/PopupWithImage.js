import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  openPopup(cardTitle, cardImage) {
    this._imgPopupTitle.textContent = cardTitle;
    this._imgPopupTitle.alt = cardTitle;
    this._imgPopupImg.src = cardImage;
    super.openPopup();
  }
}
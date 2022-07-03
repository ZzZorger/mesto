import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, cardElement) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save-button');
    this._cardElement = cardElement;
  }
  deleteCard(id) {
    this._card = document.getElementById(id);
    console.log(id, this._card)
    this._card.parentElement.remove();
    this.closePopup();
  }
  setEventListeners(id) {
    super.setEventListeners();
    this._button.addEventListener('click', () => this.deleteCard(id));
  }
}
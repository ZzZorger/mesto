import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, api) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save-button');
    this._api = api;
  }
  deleteCard(id) {
    this._card = document.getElementById(id);
    this._card.parentElement.remove();
    this._api.deleteCard(id)
    this.closePopup();
  }
  setEventListeners(id) {
    super.setEventListeners();
    this._button.addEventListener('click', () => this.deleteCard(id));
  }
}
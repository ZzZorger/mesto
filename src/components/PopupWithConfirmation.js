import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitFormHandler, api }) {
    
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._api = api;
  }
  deleteCard(id) {
    // this._card = document.getElementById(id);
    // this._card.parentElement.remove();
    this._api.deleteCard(id)
    this.closePopup();
  }
  setEventListeners(id) {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {  
      evt.preventDefault();
      this._submitFormHandler(id);
    });
  }
}
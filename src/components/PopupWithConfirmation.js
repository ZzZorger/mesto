import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitConfirmPopup }) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save-button');
    this._submitConfirmPopup = submitConfirmPopup;
  }

  initializeCard(card) {
    this._card = card;
  }
  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {  
      this._submitConfirmPopup(this._card)
    });
  }
}
import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitConfirmPopup }) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save-button');
    this._submitConfirmPopup = submitConfirmPopup;
  }

  setEventListeners(id) {
    super.setEventListeners();
    this._button.removeEventListener('click', () => {  
      this._submitConfirmPopup(id)
    });
    this._button.addEventListener('click', () => {  
      this._submitConfirmPopup(id)
    });
  }
}
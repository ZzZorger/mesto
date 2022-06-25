import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitFormHandler }) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._listInput = this._popupSelector.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    this._formValues = {};
    this._listInput.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  closePopup() {
    this._form.reset();
    super.closePopup();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
      this.closePopup();
    });
  }
}
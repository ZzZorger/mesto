import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitFormHandler }) {
    super(popupSelector);
    this._submitFormHandler = submitFormHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._listInput = this._popup.querySelectorAll('.popup__input');
    this._formSubmitButton = this._form.querySelector('.popup__save-button');
    this._formSubmitButtonText = this._formSubmitButton.textContent;
  }
  _getInputValues() {
    this._formValues = {};
    this._listInput.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  renderSaving(isLoading) {
    if (isLoading) {
      this._formSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formSubmitButton.textContent = this._formSubmitButtonText;
    }
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues(), this._formSubmitButton);
    });
  }
}
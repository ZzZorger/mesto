import Popup from "./Popup.js";
import {
  popupProfileName,
  popupProfilePlace,
  profileName,
  profileJob
}
  from '../utils/constants.js';


export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._submitForm = submitFormHandler;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._listInput = this._popupSelector.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    // popupProfileName.value = profileName.textContent;
    // popupProfilePlace.value = profileJob.textContent;
    const inputValues = {};
    this._listInput.forEach((item, index) => {
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }
  _submitPopupHandler() {
    this.preventDefault();
    console.log(this._getInputValues());
    this.closePopup();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', _submitPopupHandler);
  }
}
export default class FormValidator {
  constructor(popupData, formElement) {
    this._formSelector = popupData.formSelector;
    this._inputSelector = popupData.inputSelector;
    this._submitButtonSelector = popupData.submitButtonSelector;
    this._inactiveButtonClass = popupData.inactiveButtonClass;
    this._inputErrorClass = popupData.inputErrorClass;
    this._errorClass = popupData.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _hideInputError(_inputElement) {
    const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
    _inputElement.classList.remove(this._inputErrorClass);
    _errorElement.classList.remove(this._errorClass);
    _errorElement.textContent = '';
  };
  _showInputError(_inputElement, _errorMessage) {
    const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
    _inputElement.classList.add(this._inputErrorClass);
    _errorElement.textContent = _errorMessage;
    _errorElement.classList.add(this._errorClass);
  };
  _hasInvalidInput() {
    return this._inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    })
  };
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.deactivButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };
  _isValid(_inputElement) {
    if (!_inputElement.validity.valid) {
      this._showInputError(_inputElement, _inputElement.validationMessage);
    } else {
      this._hideInputError(_inputElement);
    }
  };
  _setEventListeners() {
    this._inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => {
        this._isValid(_inputElement);
        this._toggleButtonState();
      });
    });

  };
  deactivButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  };
}
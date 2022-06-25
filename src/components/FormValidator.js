export default class FormValidator {
  constructor(popupData, formElement) {
    this._formSelector = popupData.formSelector;
    this._inputSelector = popupData.inputSelector;
    this._submitButtonSelector = popupData.submitButtonSelector;
    this._inactiveButtonClass = popupData.inactiveButtonClass;
    this._inputErrorClass = popupData.inputErrorClass;
    this._errorClass = popupData.errorClass;
    this._formElement = formElement;
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
  _hasInvalidInput(_inputList) {
    return _inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    })
  };
  _toggleButtonState(_inputList, _buttonElement) {
    if (this._hasInvalidInput(_inputList)) {
      _buttonElement.classList.add(this._inactiveButtonClass);
      _buttonElement.disabled = true;
    } else {
      _buttonElement.classList.remove(this._inactiveButtonClass);
      _buttonElement.disabled = false;
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
    const _inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const _buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    _inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => {
        this._isValid(_inputElement);
        this._toggleButtonState(_inputList, _buttonElement);
      });
    });

  };
  enableValidation() {
    this._setEventListeners();
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((_formElement) => {
      _formElement.addEventListener('submit', () => this._setEventListeners());
    });
  };
}
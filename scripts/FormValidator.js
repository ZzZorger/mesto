
export const popupData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_type_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_type_active'
  };
  class FormValidator {
    constructor(popupData, formElement) {
      this._formSelector = popupData.formSelector;
      this._inputSelector = popupData.inputSelector;
      this._submitButtonSelector = popupData.submitButtonSelector;
      this._inactiveButtonClass = popupData.inactiveButtonClass;
      this._inputErrorClass = popupData.inputErrorClass;
      this._errorClass = popupData.errorClass;
      this._formElement = formElement;
    }
    // Функция, которая добавляет класс с ошибкой
    _showInputError (_inputElement, _errorMessage) {
      const _errorElement = formElement.querySelector(`.${_inputElement.id}-error`);
      _inputElement.classList.add(_inputErrorClass);
      _errorElement.textContent = _errorMessage;
      _errorElement.classList.add(_errorClass);
    };

    // Функция, которая удаляет класс с ошибкой
    _hideInputError (_inputElement) {
      const _errorElement = _formElement.querySelector(`.${_inputElement.id}-error`);
      _inputElement.classList.remove(_inputErrorClass);
      _errorElement.classList.remove(_errorClass);
      _errorElement.textContent = '';
    };

    // Функция, которая проверяет валидность поля
    _isValid (_inputElement) {
      if (!_inputElement.validity.valid) {
        _showInputError(_formElement, _inputElement, _inputElement.validationMessage, );
      } else {
        _hideInputError(_formElement, _inputElement, );
      }
    };

    _hasInvalidInput (_inputList) {
      return _inputList.some((_inputElement) => {
        return !_inputElement.validity.valid;
      })
    };
    _toggleButtonState (_inputList, _buttonElement) {
      if (_hasInvalidInput(_inputList)) {
        _buttonElement.classList.add(_inactiveButtonClass);
        _buttonElement.disabled = true;
      } else {
        _buttonElement.classList.remove(_inactiveButtonClass);
        _buttonElement.disabled = false;
      }
    };

    _setEventListeners () {
      const _inputList = Array.from(_formElement.querySelectorAll(_inputSelector));
      const _buttonElement = _formElement.querySelector(_submitButtonSelector);
      _inputList.forEach((_inputElement) => {
        _inputElement.addEventListener('input', () => {
          _isValid(_inputElement)
          _toggleButtonState(_inputList, _buttonElement);
        });
      });
    };
    enableValidation () {
      const formList = Array.from(document.querySelectorAll(_formSelector));
      formList.forEach((_formElement) => {
        _formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        _setEventListeners();
      });
    };
  }
  // const formList = Array.from(document.querySelectorAll(settings.formSelector));
  // formList.forEach((formElement) => {
  //       formElement.addEventListener('submit', (evt) => {
  //         evt.preventDefault();
  //       });
  //       _setEventListeners(formElement, settings);
  //     });

  
// import {imgPopup} from './index.js'
//   const formValidator = new FormValidator(popupData, imgPopup)
//   console.log(formValidator)


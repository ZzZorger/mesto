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
  // // Функция, которая добавляет класс с ошибкой
  // _showInputError (_inputElement, _errorMessage) {
  //   const _errorElement = formElement.querySelector(`.${_inputElement.id}-error`);
  //   _inputElement.classList.add(_inputErrorClass);
  //   _errorElement.textContent = _errorMessage;
  //   _errorElement.classList.add(_errorClass);
  // };

  // // Функция, которая удаляет класс с ошибкой
  // _hideInputError (_inputElement) {
  //   const _errorElement = _formElement.querySelector(`.${_inputElement.id}-error`);
  //   _inputElement.classList.remove(_inputErrorClass);
  //   _errorElement.classList.remove(_errorClass);
  //   _errorElement.textContent = '';
  // };

  // // Функция, которая проверяет валидность поля
  // _isValid (_inputElement) {
  //   if (!_inputElement.validity.valid) {
  //     _showInputError(_formElement, _inputElement, _inputElement.validationMessage, );
  //   } else {
  //     _hideInputError(_formElement, _inputElement, );
  //   }
  // };

  _hasInvalidInput (_inputList) {
    return _inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    })
  };
  // _toggleButtonState (_inputList, _buttonElement) {
  //   if (_hasInvalidInput(_inputList)) {
  //     _buttonElement.classList.add(_inactiveButtonClass);
  //     _buttonElement.disabled = true;
  //   } else {
  //     _buttonElement.classList.remove(_inactiveButtonClass);
  //     _buttonElement.disabled = false;
  //   }
  // };

  // _setEventListeners () {
  //   const _inputList = Array.from(_formElement.querySelectorAll(_inputSelector));
  //   const _buttonElement = _formElement.querySelector(_submitButtonSelector);
  //   _inputList.forEach((_inputElement) => {
  //     _inputElement.addEventListener('input', () => {
  //       _isValid(_inputElement)
  //       _toggleButtonState(_inputList, _buttonElement);
  //     });
  //   });
  // };
  // enableValidation () {
  //   const formList = Array.from(document.querySelectorAll(_formSelector));
  //   formList.forEach((_formElement) => {
  //     _formElement.addEventListener('submit', (evt) => {
  //       evt.preventDefault();
  //     });
  //     _setEventListeners();
  //   });
  // };
  _hideInputError (_inputElement) {
    const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
    _inputElement.classList.remove(this._inputErrorClass);
    _errorElement.classList.remove(this._errorClass);
    _errorElement.textContent = '';
  };
  _showInputError (_inputElement, _errorMessage) {
    const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
    _inputElement.classList.add(this._inputErrorClass);
    _errorElement.textContent = _errorMessage;
    _errorElement.classList.add(this._errorClass);
  };
  _toggleButtonState (_inputList, _buttonElement) {
    if (this._hasInvalidInput(_inputList)) {
      _buttonElement.classList.add(this._inactiveButtonClass);
      _buttonElement.disabled = true;
    } else {
      _buttonElement.classList.remove(this._inactiveButtonClass);
      _buttonElement.disabled = false;
    }
  };
  _isValid (_inputElement) {
    if (!_inputElement.validity.valid) {
      this._showInputError(_inputElement, _inputElement.validationMessage);
    } else {
      this._hideInputError(_inputElement);
    }
  };
  _setEventListeners () {
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
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((_formElement) => {
          _formElement.addEventListener('submit', () => this._setEventListeners());
    });
  };
}

export default FormValidator;
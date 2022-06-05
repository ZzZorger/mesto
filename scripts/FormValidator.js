
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
    showInputError (formElement, inputElement, errorMessage, settings) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(settings.errorClass);
    };

    // Функция, которая удаляет класс с ошибкой
    hideInputError (formElement, inputElement, settings) {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(settings.inputErrorClass);
      errorElement.classList.remove(settings.errorClass);
      errorElement.textContent = '';
    };

    // Функция, которая проверяет валидность поля
    isValid (formElement, inputElement, settings) {
      if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
      } else {
        hideInputError(formElement, inputElement, settings);
      }
    };

    hasInvalidInput (inputList) {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      })
    };
    toggleButtonState (inputList, buttonElement, settings) {
      if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    };

    setEventListeners (formElement, settings) {
      const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
      const buttonElement = formElement.querySelector(settings.submitButtonSelector);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement, settings)
          toggleButtonState(inputList, buttonElement, settings);
        });
      });
    };

  }
// // Функция, которая добавляет класс с ошибкой
// const showInputError = (formElement, inputElement, errorMessage, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(settings.errorClass);
// };

// // Функция, которая удаляет класс с ошибкой
// export const hideInputError = (formElement, inputElement, settings) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   errorElement.classList.remove(settings.errorClass);
//   errorElement.textContent = '';
// };

// // Функция, которая проверяет валидность поля
// const isValid = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, settings);
//   } else {
//     hideInputError(formElement, inputElement, settings);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// };
// export const toggleButtonState = (inputList, buttonElement, settings) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(settings.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(settings.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//   const buttonElement = formElement.querySelector(settings.submitButtonSelector);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, settings)
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

enableValidation(popupData);
// profilePopupForm.addEventListener('submit', handleSubmitProfileForm);
// cardPopupForm.addEventListener('submit', handleSubmitCardForm);
// const profilePopupFieldset = profilePopup.querySelector('.popup__fieldset');
// const cardPopupFieldset = cardPopup.querySelector('.popup__fieldset');

// function validate(element) {
//   const errorElement = document.querySelector(`error-${element}`)
//   if(!element.checkValidity()) {
//     errorElement.textContent = element.validationMessage;
//   }
// }

// function handleSubmitProfileForm(evt) {
//   evt.preventDefault();
//   const inputs = Array.from(profilePopupFieldset.elements);
//   inputs.forEach((element) => {
//       validate(element);
//   })
// }

// function handleSubmitCardForm(evt) {
//   evt.preventDefault();
//   const inputs = Array.from(cardPopupFieldset.elements);
//   inputs.forEach((element) => {
//       validate(element);
//   })
// }

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_type_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_type_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
    });
  });
};
 
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// Вызовем функцию isValid на каждый ввод символа
// formInput.addEventListener('input', isValid);

// popupProfileName.addEventListener('input', () => isValid(popupProfileName));
// popupProfilePlace.addEventListener('input', () => isValid(popupProfilePlace));
// popupCardName.addEventListener('input', () => isValid(popupCardName));
// popupCardPlace.addEventListener('input', () => isValid(popupCardPlace));

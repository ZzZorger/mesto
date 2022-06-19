export const popups = document.querySelectorAll('.popup');
export const classNameElements = '.elements';
export const templateId = '#card-template';
export const profilePopup = document.querySelector('.popup-profile');
export const cardPopup = document.querySelector('.popup-card');
export const popupProfileEditButton = document.querySelector('.profile__edit-button');
export const profilePopupForm = profilePopup.querySelector('.popup__form');
export const popupAddCardButton = document.querySelector('.profile__add-button');
export const cardPopupForm = cardPopup.querySelector('.popup__form');
export const popupCardSubmitButton = cardPopup.querySelector('.popup__save-button');
export const popupProfileName = profilePopup.querySelector('.popup__input_type_name');
export const profileName = document.querySelector('.profile__name');
export const popupProfilePlace = profilePopup.querySelector('.popup__input_type_place');
export const profileJob = document.querySelector('.profile__job');
export const popupCardName = cardPopup.querySelector('.popup__input_type_name');
export const popupCardPlace = cardPopup.querySelector('.popup__input_type_place');

// export const cardContainer = document.querySelector('.elements');
export const imgPopup = document.querySelector('.img-popup');
export const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
export const imgPopupTitle = imgPopup.querySelector('.img-popup__title');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const popupData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_type_active'
};
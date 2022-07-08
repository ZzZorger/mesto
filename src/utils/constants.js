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
export const popupProfilePlace = profilePopup.querySelector('.popup__input_type_place');
export const popupCardName = cardPopup.querySelector('.popup__input_type_name');
export const popupCardPlace = cardPopup.querySelector('.popup__input_type_place');
export const profilePopupClass = '.popup-profile';
export const cardPopupClass = '.popup-card';
export const cardImgPopupClass = '.card__img';
export const imgPopup = document.querySelector('.img-popup');
export const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
export const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__job');
export const profileImg = document.querySelector('.profile__image');
export const confirmPopupClass = '.popup-confirm';
export const confirmPopup = document.querySelector(confirmPopupClass);
export const confirmPopupButton = confirmPopup.querySelector('.popup__save-button');
export const confirmButton = document.querySelector('.popup__confirm');
export const baseUrl = 'https://nomoreparties.co/v1/cohort-44';
export const avatarEditionClass = '.profile__avatar';
export const avatarEditionButton = document.querySelector(avatarEditionClass);
export const avatarPopupClass = '.popup-avatar';
const avatarPopup = document.querySelector(avatarPopupClass);
export const avatarPopupForm = avatarPopup.querySelector('.popup__form');

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
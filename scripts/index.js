import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';
import {
  initialCards,
  classNameElements,
  templateId,
  popupProfileEditButton,
  profilePopupForm,
  popupAddCardButton,
  cardPopupForm,
  popupData,
  popupCardSubmitButton,
  popupProfileName,
  profileName,
  popupProfilePlace,
  profileJob,
  profilePopupClass,
  cardPopupClass
}
from "./utils/constants.js";


const userInfo = new UserInfo(profileName, profileJob);
const newProfilePopup = new Popup(profilePopupClass);
const popupWithImage = new PopupWithImage('.img-popup');

function handleCardClick(name, link) {
  popupWithImage.openPopup(name, link)
}

// Обработка карточек классом Card и добавление в разметку классом Section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateId, handleCardClick).generateCard();
    defaultCardList.addItem(card);
  }
}, classNameElements);


// Функция активации валидации
function activationValidation(popupData, formElement) {
  new FormValidator(popupData, formElement).enableValidation();
}

function openProfilePopupHandler() {
  popupProfileName.value = userInfo.getUserData().userName;
  popupProfilePlace.value = userInfo.getUserData().userInfo;
  newProfilePopup.setEventListeners();
  newProfilePopup.openPopup();
}

// Cабмит форм
const profileForm = new PopupWithForm({
  popupSelector: profilePopupClass,
  submitFormHandler: (input) => {
    userInfo.setUserData(input['profile-name'], input['profile-about'])
  }
})
const cardForm = new PopupWithForm({
  popupSelector: cardPopupClass,
  submitFormHandler: (input) => {
    const card = new Card(input['card-name'], input['card-url'], templateId, handleCardClick).generateCard();
    defaultCardList.addItem(card);
  }
})

function openCardPopupReset() {
  cardPopupForm.reset();
  popupCardSubmitButton.classList.add(popupData.inactiveButtonClass);
  popupCardSubmitButton.disabled = true;
}
function openCardPopupHandler() {
  openCardPopupReset();
  const newCardPopup = new Popup(cardPopupClass);
  newCardPopup.setEventListeners();
  newCardPopup.openPopup()
}

popupWithImage.setEventListeners();
defaultCardList.renderItems();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);
debugger
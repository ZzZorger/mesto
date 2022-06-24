import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
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


// Обработка карточек классом Card и добавление в разметку классом Section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateId).generateCard();
    defaultCardList.addItem(card);
  }
}, classNameElements);
defaultCardList.renderItems();

// Функция активации валидации
function activationValidation(popupData, formElement) {
  new FormValidator(popupData, formElement).enableValidation();
}

function openProfilePopupHandler() {
  const userInfo = new UserInfo(profileName, profileJob);
  popupProfileName.value = userInfo.getUserData().userName;
  popupProfilePlace.value = userInfo.getUserData().userInfo;
  const newProfilePopup = new Popup(profilePopupClass);
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
    const card = new Card(input['card-name'], input['card-url'], templateId).generateCard();
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

profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
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
  from "../utils/constants.js";

// Объявление классов
//
const userInfo = new UserInfo(profileName, profileJob);
const newProfilePopup = new Popup(profilePopupClass);
const popupWithImage = new PopupWithImage('.img-popup');
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

// Объявление функций
//
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

// Активации валидации
function activationValidation(popupData, formElement) {
  new FormValidator(popupData, formElement).enableValidation();
}
// Открыть попап редактирования профиля
function openProfilePopupHandler() {
  popupProfileName.value = userInfo.getUserData().userName;
  popupProfilePlace.value = userInfo.getUserData().userInfo;
  newProfilePopup.setEventListeners();
  activationValidation(popupData, profilePopupForm);
  newProfilePopup.openPopup();
}
// Настройка сброса формы попапа создания карточки
function openCardPopupReset() {
  cardPopupForm.reset();
  popupCardSubmitButton.classList.add(popupData.inactiveButtonClass);
  popupCardSubmitButton.disabled = true;
}
// Открыть попап создания карточки
function openCardPopupHandler() {
  openCardPopupReset();
  const newCardPopup = new Popup(cardPopupClass);
  newCardPopup.setEventListeners();
  activationValidation(popupData, cardPopupForm);
  newCardPopup.openPopup()
}

// Настройка слушателей
//
popupWithImage.setEventListeners();
defaultCardList.renderItems();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);


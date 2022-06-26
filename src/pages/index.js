import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
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
  popupProfilePlace,
  profilePopupClass,
  cardPopupClass
}
  from "../utils/constants.js";

// Объявление классов
//
const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__job' });
const popupWithImage = new PopupWithImage('.img-popup');
const profileForm = new PopupWithForm({
  popupSelector: profilePopupClass,
  submitFormHandler: (input) => userInfo.setUserData(input)
});
const cardForm = new PopupWithForm({
  popupSelector: cardPopupClass,
  submitFormHandler: (input) => createCard(input['card-name'], input['card-url'], templateId, handleCardClick)
});
// Обработка карточек классом Card и добавление в разметку классом Section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => createCard(item.name, item.link, templateId, handleCardClick)
}, classNameElements);

// Объявление функций
//
// Слушатель открытия попапа с картинкой
function handleCardClick(name, link) {
  popupWithImage.openPopup(name, link)
}
// Создать карточку
function createCard(name, link, template, handleCardClick) {
  const card = new Card(name, link, template, handleCardClick).generateCard();
  defaultCardList.addItem(card);
}
// Валидация
function activationValidation(popupData, formElement) {
  new FormValidator(popupData, formElement).enableValidation();
}
// Открыть попап редактирования профиля
function openProfilePopupHandler() {
  const getUserData = userInfo.getUserData();
  popupProfileName.value = getUserData.userName;
  popupProfilePlace.value = getUserData.userInfo;
  activationValidation(popupData, profilePopupForm);
  profileForm.openPopup();
}
// Настройка сброса формы попапа создания карточки
function openCardPopupReset() {
  cardPopupForm.reset();
  new FormValidator(popupData, cardPopupForm).deactivButton();
}
// Открыть попап создания карточки
function openCardPopupHandler() {
  openCardPopupReset();
  activationValidation(popupData, cardPopupForm);
  cardForm.openPopup();
}

// Настройка слушателей
//
popupWithImage.setEventListeners();
defaultCardList.renderItems();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import {
  classNameElements,
  templateId,
  popupProfileEditButton,
  profilePopupForm,
  popupAddCardButton,
  cardPopupForm,
  popupData,
  popupProfileName,
  popupProfilePlace,
  profilePopupClass,
  cardPopupClass,
  confirmPopupClass,
  avatarEditionButton,
  avatarPopupClass,
  avatarPopupForm
}
  from "../utils/constants.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

// API
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8',
    'Content-Type': 'application/json'
  }
});

// Объявление классов
const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__job', avatar: '.profile__image' });
const popupWithImage = new PopupWithImage('.img-popup');
const profileValidation = new FormValidator(popupData, profilePopupForm);
const cardValidation = new FormValidator(popupData, cardPopupForm);
const avatarValidation = new FormValidator(popupData, avatarPopupForm);
const confirmPopup = new PopupWithConfirmation({
  popupSelector: confirmPopupClass,
  api: api
});
const profileForm = new PopupWithForm({
  popupSelector: profilePopupClass,
  submitFormHandler: (input) => profileSubmitHandler(input)
});
const avatarForm = new PopupWithForm({
  popupSelector: avatarPopupClass,
  submitFormHandler: (input) => avatarSubmitHandler(input)
})
const cardList = new Section({
  renderer: (card, userID) => createCard(card, userID),
  containerSelector: classNameElements
});
const cardForm = new PopupWithForm({
  popupSelector: cardPopupClass,
  submitFormHandler: (input) => cardSubmitHandler(input)
});

// Открыть попап редактирования профиля
function openProfilePopupHandler() {
  const getUserData = userInfo.getUserData();
  popupProfileName.value = getUserData.userName;
  popupProfilePlace.value = getUserData.userInfo;
  profileForm.openPopup();
}
// Открыть попап создания карточки
function openCardPopupHandler() {
  cardValidation.deactivButton();
  cardForm.openPopup();
}
// Открыть попап карточки
function handleCardClick(name, link) {
  popupWithImage.openPopup(name, link)
}
// Открыть попап удаления карточки
function confirmDeletePopup(id) {
  confirmPopup.openPopup();
  confirmPopup.setEventListeners(id);
}
// Сабмит формы профиля
function profileSubmitHandler(input) {
  profileForm.renderSaving(true);
  api.patchProfileData(input)
    .then(items => {
      userInfo.setUserData(items);
    })
    .then(() => {
      profileForm.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      profileForm.renderSaving(false);
    })
}
// Сабмит формы аватара
function avatarSubmitHandler(input) {
  avatarForm.renderSaving(true);
  api.patchProfileAvatar(input)
    .then(items => {
      userInfo.setUserData(items);
    })
    .then(() => {
      avatarForm.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      avatarForm.renderSaving(false);
    })
}
// Сабмит формы создания карточки
function cardSubmitHandler(input) {
  cardForm.renderSaving(true);
  api.postCard(input)
    .then(item => {
      createCard(item)
    })
    .then(() => {
      cardForm.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      cardForm.renderSaving(false);
    })
}
// Создать карточку (функция рендера класса Section)
function createCard(item, userID) {
  const card = new Card({
    item: {
      _id: item._id,
      name: item.name,
      link: item.link,
      likes: item.likes,
      ownerData: item.owner,
      userID: userID
    },
    template: templateId,
    handleCardClick: handleCardClick,
    confirmDeletePopup: confirmDeletePopup,
    containerSelector: classNameElements,
    api: api
  }).generateCard();
  cardList.addItem(card);
}
// Добавление карточек в разметку
Promise.all([api.getCardsData(), api.getServerData()])
  .then((item) => {
    userInfo.setUserData(item[1]);
    cardList.renderItems(item[0], item[1]._id);
  })
  .catch((err) => {
    console.log(err)
  })


// Включение валидации
profileValidation.enableValidation();
cardValidation.enableValidation();
avatarValidation.enableValidation();
// Настройка слушателей
profileForm.setEventListeners();
avatarForm.setEventListeners();
cardForm.setEventListeners();
popupWithImage.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
avatarEditionButton.addEventListener('click', () => avatarForm.openPopup());
popupAddCardButton.addEventListener('click', openCardPopupHandler);
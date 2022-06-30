import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import {
  initialCards,
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
  profileName,
  profileAbout,
  profileImg
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
const profileValidation = new FormValidator(popupData, profilePopupForm);
const cardValidation = new FormValidator(popupData, cardPopupForm);
// API
const apiUserData = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-44/users/me',
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
  }
});
const apiCardsData = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44/cards',
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
  }
});

// API генерация карточек
apiCardsData.getServerData()
.then(item => {
const defaultCardList = new Section({
  items: item,
  renderer: (item) => createCard(item.name, item.link, templateId, handleCardClick)
}, classNameElements);
function createCard(name, link, template, handleCardClick) {
  const card = new Card(name, link, template, handleCardClick).generateCard();
  defaultCardList.addItem(card);
}
defaultCardList.renderItems();
})



// Обработка карточек классом Card и добавление в разметку классом Section
// const defaultCardList = new Section({
//   items: initialCards,
//   renderer: (item) => createCard(item.name, item.link, templateId, handleCardClick)
// }, classNameElements);

// Объявление функций
//
// Слушатель открытия попапа с картинкой
function handleCardClick(name, link) {
  popupWithImage.openPopup(name, link)
}
// Создать карточку
// function createCard(name, link, template, handleCardClick) {
//   const card = new Card(name, link, template, handleCardClick).generateCard();
//   defaultCardList.addItem(card);
//   // renderdefaultCardList.addItem(card);
// }
// Валидация
profileValidation.enableValidation();
cardValidation.enableValidation();

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

// Установка данных с сервера
apiUserData.getServerData()
  .then(items => {
    profileName.textContent = items.name;
    profileAbout.textContent = items.about;
    profileImg.src = items.avatar;
  })


// Настройка слушателей
//
popupWithImage.setEventListeners();
// defaultCardList.renderItems();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
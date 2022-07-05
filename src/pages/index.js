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
  baseUrl
}
  from "../utils/constants.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


// API
const apiUserData = new Api({
  baseUrl: `${baseUrl}/users/me`
});
const apiCardsData = new Api({
  baseUrl: `${baseUrl}/cards`
});
const apiPatchUserData = new Api({
  method: 'PATCH',
  baseUrl: `${baseUrl}/users/me`
})
const apiPostCard = new Api({
  method: 'POST',
  baseUrl: `${baseUrl}/cards`
})
const apiDeleteCard = new Api({
  method: 'DELETE',
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44/cards'
})
// Объявление классов
//
const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__job' });
const popupWithImage = new PopupWithImage('.img-popup');
const profileValidation = new FormValidator(popupData, profilePopupForm);
const cardValidation = new FormValidator(popupData, cardPopupForm);
const confirmPopup = new PopupWithConfirmation(confirmPopupClass, apiDeleteCard);
// API установка данных профиля
apiUserData.getServerData()
.then(items => {
  userInfo.setUserData(items);
})

const profileForm = new PopupWithForm({
  popupSelector: profilePopupClass,
  submitFormHandler: (input) => {
    apiPatchUserData.patchProfileData(input)
    .then(items => {
      userInfo.setUserData(items);
    })
  }
});

function createCard(options) {
  const card = new Card(options).generateCard();
  const section = new Section(options).addItem(card);
}

apiCardsData.getServerData()
.then(item => {
  // console.log(item)
  const defaultCardList = new Section({
    items: item, 
    renderer: (item) => createCard(item), 
    containerSelector: classNameElements
  });
  function createCard(item) {
    // console.log(item)
    const card = new Card({
        item: {
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          ownerData: item.owner
        },
        template: templateId,
        handleCardClick: handleCardClick,
        confirmDeletePopup: confirmDeletePopup,
        containerSelector: classNameElements
      }).generateCard();
    defaultCardList.addItem(card);
  }
  defaultCardList.renderItems();
})

const cardForm = new PopupWithForm({
  popupSelector: cardPopupClass,
  submitFormHandler: (input) => {
    apiPostCard.postCard(input)
    .then(item => {
      createCard({
        item: {
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes
        },
        template: templateId,
        handleCardClick: handleCardClick,
        confirmDeletePopup: confirmDeletePopup,
        containerSelector: classNameElements
      })
    })
  }
});

const userIdPromis = apiUserData.getServerData()
.then(item => {
  return item._id
  // cardsArray.forEach(items => {
  //   const id = items.owner._id;
  //   if ()
  // })
})
const cardsOwnerIdPromis = apiCardsData.getServerData()
.then(item => {
  // return item
  item.forEach(data => {
    // const id = data.owner._id;
    return data
  })
})
// console.log(cardsOwnerIdPromis)
const promises = [userIdPromis, cardsOwnerIdPromis]
Promise.all(promises)
.then((res) => {
  console.log(res)
})
// Объявление функций
//
// Слушатель открытия попапа с картинкой
function handleCardClick(name, link) {
  popupWithImage.openPopup(name, link)
}
function confirmDeletePopup(id) {
  confirmPopup.openPopup();
  confirmPopup.setEventListeners(id);
}

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

// Настройка слушателей
//
popupWithImage.setEventListeners();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
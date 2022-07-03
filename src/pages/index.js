import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import {
  // initialCards,
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
  profileImg,
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
const cardForm = new PopupWithForm({
  popupSelector: cardPopupClass,
  submitFormHandler: (input) => createCard(input['card-name'], input['card-url'], templateId, handleCardClick)
});
const profileValidation = new FormValidator(popupData, profilePopupForm);
const cardValidation = new FormValidator(popupData, cardPopupForm);
const confirmPopup = new PopupWithConfirmation(confirmPopupClass);
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

// API генерация начальных карточек
apiCardsData.getServerData()
  .then(item => {
    const defaultCardList = new Section({
      items: item,
      renderer: (item) => createCard({item}, templateId, handleCardClick, confirmDeletePopup)
    }, classNameElements);
    function createCard({item}, template, handleCardClick, confirmDeletePopup) {
      const card = new Card({item}, template, handleCardClick, confirmDeletePopup).generateCard();
      defaultCardList.addItem(card);
    }
    defaultCardList.renderItems();
  })
// apiPatchUserData.patchProfileData('Юрий Алексеевич Гагарин', 'Лётчик-космонавт', 'https://histrf.ru/images/biographies/12/gStuerWbjg8H4QDdyRY7TdtXconTX2duaHXOUz8f.jpg');
// apiPostCard.postCard('фывфыв', 'https://shwanoff.ru/wp-content/uploads/2019/02/z_1FfKLtsns.jpg');
//


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
function confirmDeletePopup(id) {
  confirmPopup.openPopup();
  console.log(id)
  // confirmPopup.setEventListeners(id);
// console.log(func)

  // console.log(id)
  // confirmButton.addEventListener('click', confirmPopup.deleteCard(id))
  // console.log(this)
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

// Настройка слушателей
//
popupWithImage.setEventListeners();
// defaultCardList.renderItems();
profileForm.setEventListeners();
cardForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
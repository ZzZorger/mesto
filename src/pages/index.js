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
  baseUrl,
  avatarEditionButton,
  avatarPopupClass,
  profileImg,
  avatarPopupForm
}
  from "../utils/constants.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';



// API запросы
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
const apiDelete = new Api({
  method: 'DELETE',
  baseUrl: `${baseUrl}/cards`
})
const apiLikeCard = new Api({
  method: 'PUT',
  baseUrl: `${baseUrl}/cards`
})
const apiPatchUserAvatar = new Api({
  method: 'PATCH',
  baseUrl: `${baseUrl}/users/me/avatar`
})

// Функция сабмита формы профиля
function profileSubmitHandler(input) {
  profileForm.renderSaving(true);
  apiPatchUserData.patchProfileData(input)
    .then(items => {
      userInfo.setUserData(items);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      profileForm.renderSaving(false);
      profileForm.closePopup();
    })
}

// Функция сабмита формы аватара
function avatarSubmitHandler(input) {
  avatarForm.renderSaving(true);
  apiPatchUserAvatar.patchProfileData(input)
    .then(items => {
      profileImg.src = items.avatar;
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      avatarForm.renderSaving(false);
      avatarForm.closePopup();
    })
}

// Объявление классов
//
const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__job' });
const popupWithImage = new PopupWithImage('.img-popup');
const profileValidation = new FormValidator(popupData, profilePopupForm);
const cardValidation = new FormValidator(popupData, cardPopupForm);
const avatarValidation = new FormValidator(popupData, avatarPopupForm);
const confirmPopup = new PopupWithConfirmation({
  popupSelector: confirmPopupClass,
  api: apiDelete
});
const profileForm = new PopupWithForm({
  popupSelector: profilePopupClass,
  submitFormHandler: (input) => profileSubmitHandler(input)
});
const avatarForm = new PopupWithForm({
  popupSelector: avatarPopupClass,
  submitFormHandler: (input) => avatarSubmitHandler(input)
})

// Установка данных профиля
apiUserData.getServerData()
  .then(items => {
    userInfo.setUserData(items);
    profileImg.src = items.avatar
  })

// Создание карточек
Promise.all([apiCardsData.getServerData(), apiUserData.getServerData()])
  .then((item) => {
    const userID = item[1]._id;
    const cardArray = item[0];
    function handleCardClick(name, link) {
      popupWithImage.openPopup(name, link)
    }
    function confirmDeletePopup(id) {
      confirmPopup.openPopup();
      confirmPopup.setEventListeners(id);
    }
    const defaultCardList = new Section({
      items: cardArray,
      renderer: (cardOptions) => createCard(cardOptions),
      containerSelector: classNameElements
    });


    // Функция создания карточки
    function createCard(item) {
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
        apiLike: apiLikeCard,
        apiUnlike: apiDelete
      }).generateCard();
      defaultCardList.addItem(card);
    }
    defaultCardList.renderItems();

    const cardForm = new PopupWithForm({
      popupSelector: cardPopupClass,
      submitFormHandler: (input) => cardSubmitHandler(input)
    });
    // Функция сабмита формы карточки
    function cardSubmitHandler(input) {
      cardForm.renderSaving(true);
      apiPostCard.postCard(input)
        .then(item => {
          createCard(item)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
        .finally(() => {
          cardForm.renderSaving(false);
          cardForm.closePopup();
        })
    }

    function openCardPopupHandler() {
      cardValidation.deactivButton();
      cardForm.openPopup();
    }
    cardForm.setEventListeners();
    popupAddCardButton.addEventListener('click', openCardPopupHandler);
  })
  .catch((err) => {
    console.log(err)
  })

// Валидация
profileValidation.enableValidation();
cardValidation.enableValidation();
avatarValidation.enableValidation();


// Открыть попап редактирования профиля
function openProfilePopupHandler() {
  const getUserData = userInfo.getUserData();
  popupProfileName.value = getUserData.userName;
  popupProfilePlace.value = getUserData.userInfo;
  profileForm.openPopup();
}


// Настройка слушателей
popupWithImage.setEventListeners();
profileForm.setEventListeners();
avatarForm.setEventListeners();
popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
avatarEditionButton.addEventListener('click', () => avatarForm.openPopup());
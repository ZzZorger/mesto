import { Card } from "./Card.js";

const popups = document.querySelectorAll('.popup');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
const imgPopup = document.querySelector('.img-popup');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-card');
const profilePopupClose = profilePopup.querySelector('.close-button');
const cardPopupClose = cardPopup.querySelector('.close-button');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const popupProfileName = profilePopup.querySelector('.popup__input_type_name');
const popupProfilePlace = profilePopup.querySelector('.popup__input_type_place');
const popupCardName = cardPopup.querySelector('.popup__input_type_name');
const popupCardPlace = cardPopup.querySelector('.popup__input_type_place');
const profileCardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const cardPopupSubmit = cardPopup.querySelector('.popup__save-button');
const cardPopupInputsArray = Array.from(cardPopupForm.querySelectorAll('.popup__input'));
const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
const imgPopupCloseBtn = imgPopup.querySelector('.close-button');
const initialCards = [
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

// Функция открытия попапов
function openPopup(popupName) {
  popupName.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}
// Функция закрытия попапов
function closePopup(popupName) {
  popupName.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
}
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('close-button')) {
          closePopup(popup)
        }
    })
})


// Функция удалить карточку
// const deleteProfileCardHandler = (evt) => {
//   evt.target.closest('.card').remove();
// };
// Функция лайкнуть карточку
// const likeProfileCardHandler = (evt) => {
//   evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
// }

// Функция создать карточку
// const generateProfileCard = (cardData) => {
//   const newProfileCard = profileCardTemplate.cloneNode(true);
//   const titleProfileCard = newProfileCard.querySelector('.card__name');
//   titleProfileCard.textContent = cardData.name;
//   const pictureProfileCard = newProfileCard.querySelector('.card__img');
//   pictureProfileCard.src = cardData.link;
//   pictureProfileCard.alt = cardData.name;
//   const deleteProfileCard = newProfileCard.querySelector('.card__delete-button');
//   deleteProfileCard.addEventListener('click', deleteProfileCardHandler);
//   const likeProfileCard = newProfileCard.querySelector('.card__like-button');
//   likeProfileCard.addEventListener('click', likeProfileCardHandler);
//   pictureProfileCard.addEventListener('click', () => openImgPopupHandler(pictureProfileCard.alt, pictureProfileCard.src));
//   return newProfileCard;
// }

// Функция открыть картинку
// const openImgPopupHandler = (cardTitle, cardImage) => {
//   imgPopupTitle.textContent = cardTitle;
//   imgPopupSrc.alt = cardTitle;
//   imgPopupSrc.src = cardImage;
//   openPopup(imgPopup);
// }
// Добавление карточки
// const renderAddCard = (cardData) => {
//   cardContainer.prepend(generateProfileCard(cardData));
// }
// Переработка начальных карточек
// initialCards.forEach((cardData) => {
//   const card = new Card(cardData.name, cardData.link);
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
// });
// Функция закрытия при нажатии на Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

function openProfilePopupHandler() {
  popupProfileName.value = profileName.textContent;
  popupProfilePlace.value = profileJob.textContent;
  hideInputError(profilePopupForm, popupProfileName, popupData);
  hideInputError(profilePopupForm, popupProfilePlace, popupData);
  openPopup(profilePopup);
}
function submitProfilePopupHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfilePlace.value;
  closePopup(profilePopup);
}
function submitCardPopupHandler(evt) {
  evt.preventDefault();
  renderAddCard({ name: popupCardName.value, link: popupCardPlace.value });
  closePopup(cardPopup);
}

function openCardPopupHandler() {
  cardPopupForm.reset();
  hideInputError(cardPopupForm, popupCardName, popupData);
  hideInputError(cardPopupForm, popupCardPlace, popupData);
  toggleButtonState(cardPopupInputsArray, cardPopupSubmit, popupData);
  openPopup(cardPopup);
}


popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
profilePopupForm.addEventListener('submit', submitProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
cardPopupForm.addEventListener('submit', submitCardPopupHandler);
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

const popups = document.querySelectorAll('.popup');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
const classNameElements = '.elements';
const templateId = '#card-template';
const imgPopup = document.querySelector('.img-popup');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-card');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const popupProfileName = profilePopup.querySelector('.popup__input_type_name');
const popupProfilePlace = profilePopup.querySelector('.popup__input_type_place');
const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
const popupCardName = cardPopup.querySelector('.popup__input_type_name');
const popupCardPlace = cardPopup.querySelector('.popup__input_type_place');
const popupCardSubmitButton = cardPopup.querySelector('.popup__save-button');
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
const popupData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_type_active'
};

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
    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('close-button')) {
      closePopup(popup);
    }
  });
})
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

// Обработка карточек классом Card
// function renderAddCard(item) {
//   const cardElment = new Card(item.name, item.link, '#card-template').generateCard();
//   cardContainer.prepend(cardElment);
// }
// initialCards.forEach((item) => {
//   renderAddCard(item);
// });

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateId).generateCard();
    defaultCardList.addItem(card);
  }
}, classNameElements);
defaultCardList.renderItems();


// renderAddCard(initialCards, '.elements');
// popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
// defaultCardList.addItem();

// Функция активации валидации
function activationValidation(popupData, formElement) {
  new FormValidator(popupData, formElement).enableValidation();
}

function openProfilePopupHandler() {
  popupProfileName.value = profileName.textContent;
  popupProfilePlace.value = profileJob.textContent;
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
function openCardPopupReset() {
  cardPopupForm.reset();
  popupCardSubmitButton.classList.add(popupData.inactiveButtonClass);
  popupCardSubmitButton.disabled = true;
}
function openCardPopupHandler() {
  openCardPopupReset();
  openPopup(cardPopup);
}

popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
profilePopupForm.addEventListener('submit', submitProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
cardPopupForm.addEventListener('submit', submitCardPopupHandler);
activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);

export {
  openPopup,
  cardContainer,
  imgPopup,
  imgPopupSrc,
  imgPopupTitle,
  popupData,
};
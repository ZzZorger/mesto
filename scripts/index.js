import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popups = document.querySelectorAll('.popup');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
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
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('close-button')) {
          closePopup(popup)
        }
    })
})
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

// Обработка карточек классом Card
function renderAddCard(item) {
  const card = new Card(item.name, item.link);
	const cardElment = card.generateCard();
  cardContainer.prepend(cardElment);
}
initialCards.forEach((item) => {
  renderAddCard(item);
});

function activationValidation(popupData, formElement) {
  const validation = new FormValidator(popupData, formElement);
  const activation = validation.enableValidation();
}

activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);

function openProfilePopupHandler() {
  popupProfileName.value = profileName.textContent;
  popupProfilePlace.value = profileJob.textContent;
  // hideInputError(profilePopupForm, popupProfileName, popupData);
  // hideInputError(profilePopupForm, popupProfilePlace, popupData);
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
  // hideInputError(cardPopupForm, popupCardName, popupData);
  // hideInputError(cardPopupForm, popupCardPlace, popupData);
  // toggleButtonState(cardPopupInputsArray, cardPopupSubmit, popupData);
  openPopup(cardPopup);
}


popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
profilePopupForm.addEventListener('submit', submitProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
cardPopupForm.addEventListener('submit', submitCardPopupHandler);

export {
  openPopup,
  cardContainer,
  imgPopup,
  imgPopupSrc,
  imgPopupTitle,
  popupData,
};
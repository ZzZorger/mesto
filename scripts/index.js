import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import {
  popups,
  initialCards,
  classNameElements,
  templateId,
  profilePopup,
  cardPopup,
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
  popupCardName,
  popupCardPlace,
  profilePopupClass
}
from "./utils/constants.js";

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
// const openPopupClass = new Popup(profilePopupClass);

// Обработка карточек классом Card и добавление в разметку классом Section
const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, templateId).generateCard();
    defaultCardList.addItem(card);
  }
}, classNameElements);
defaultCardList.renderItems();

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
  defaultCardList.addItem(new Card(popupCardName.value, popupCardPlace.value, templateId).generateCard());
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
// popupProfileEditButton.addEventListener('click', new Popup(profilePopupClass).openPopup());
profilePopupForm.addEventListener('submit', submitProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
cardPopupForm.addEventListener('submit', submitCardPopupHandler);
activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);

export {
  openPopup
};
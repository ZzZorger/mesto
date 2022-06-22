import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
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
  profileName,
  popupProfilePlace,
  profileJob,
  popupCardName,
  popupCardPlace,
  profilePopupClass,
  cardPopupClass
}
from "./utils/constants.js";
import PopupWithImage from './components/PopupWithImage.js';

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
  new Popup(profilePopupClass).setEventListeners();
  new Popup(profilePopupClass).openPopup();
}
function submitProfilePopupHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfilePlace.value;
  new Popup(profilePopupClass).closePopup()
}
function submitCardPopupHandler(evt) {
  evt.preventDefault();
  defaultCardList.addItem(new Card(popupCardName.value, popupCardPlace.value, templateId).generateCard());
  new Popup(cardPopupClass).closePopup()
}
function openCardPopupReset() {
  cardPopupForm.reset();
  popupCardSubmitButton.classList.add(popupData.inactiveButtonClass);
  popupCardSubmitButton.disabled = true;
}
function openCardPopupHandler() {
  openCardPopupReset();
  new Popup(cardPopupClass).setEventListeners();
  new Popup(cardPopupClass).openPopup()
}

// const img = document.querySelector('.card__img')
// console.log(img)
// img.addEventListener('click',  () => new PopupWithImage('.img-popup').openPopup(img.alt, img.src))

popupProfileEditButton.addEventListener('click', openProfilePopupHandler);
profilePopupForm.addEventListener('submit', submitProfilePopupHandler);
popupAddCardButton.addEventListener('click', openCardPopupHandler);
cardPopupForm.addEventListener('submit', submitCardPopupHandler);

activationValidation(popupData, profilePopupForm);
activationValidation(popupData, cardPopupForm);
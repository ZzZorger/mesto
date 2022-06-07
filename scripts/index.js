const popups = document.querySelectorAll('.popup');
const popupProfileEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
export const cardContainer = document.querySelector('.elements');
export const imgPopup = document.querySelector('.img-popup');
const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-card');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const popupProfileName = profilePopup.querySelector('.popup__input_type_name');
const popupProfilePlace = profilePopup.querySelector('.popup__input_type_place');
export const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
export const imgPopupTitle = imgPopup.querySelector('.img-popup__title');


// Функция открытия попапов
export function openPopup(popupName) {
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


// // Функция удалить карточку
// export const deleteProfileCardHandler = (evt) => {
//   evt.target.closest('.card').remove();
// };
// // Функция лайкнуть карточку
// export const likeProfileCardHandler = (evt) => {
//   evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
// }

// // Функция открыть картинку
// export const openImgPopupHandler = (cardTitle, cardImage) => {
//   imgPopupTitle.textContent = cardTitle;
//   imgPopupSrc.alt = cardTitle;
//   imgPopupSrc.src = cardImage;
//   openPopup(imgPopup);
// }

// Добавление карточки
// const renderAddCard = (cardData) => {
//   cardContainer.prepend(generateProfileCard(cardData));
// }

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
  // renderAddCard({ name: popupCardName.value, link: popupCardPlace.value });
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
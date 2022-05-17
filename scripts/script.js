const popupProfileEditButton = document.querySelector('.profile__edit-button')
const popupAddCardButton = document.querySelector('.profile__add-button')
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
function popupOpen(popupName) {
  popupName.classList.add('popup_is-opened');
}
// Функция закрытия попапов
function popupClose(popupName) {
  popupName.classList.remove('popup_is-opened');
}
// Функция удалить карточку
const deleteProfileCardHandler = (evt) => {
  evt.target.closest('.card').remove();
};
// Функция лайкнуть карточку
const likeProfileCardHandler = (evt) => {
  evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}
// Функция закрытия при нажатии на оверлей
function popupOverlayClickHandler(evt) {
  if (evt.target === evt.currentTarget) {
    popupClose(evt.target);
  }
}
// Функция создать карточку
const generateProfileCard = (cardData) => {
  const newProfileCard = profileCardTemplate.cloneNode(true);
  const titleProfileCard = newProfileCard.querySelector('.card__name');
  titleProfileCard.textContent = cardData.name;
  const pictureProfileCard = newProfileCard.querySelector('.card__img');
  pictureProfileCard.src = cardData.link;
  pictureProfileCard.alt = cardData.name;
  const deleteProfileCard = newProfileCard.querySelector('.card__delete-button');
  deleteProfileCard.addEventListener('click', deleteProfileCardHandler);
  const likeProfileCard = newProfileCard.querySelector('.card__like-button');
  likeProfileCard.addEventListener('click', likeProfileCardHandler);
  pictureProfileCard.addEventListener('click', () => imgPopupOpenHandler(pictureProfileCard.alt, pictureProfileCard.src));
  return newProfileCard;
}
// Функция открыть картинку
const imgPopupOpenHandler = (cardTitle, cardImage) => {
  const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
  const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
  const imgPopupCloseBtn = imgPopup.querySelector('.close-button');
  imgPopupTitle.textContent = cardTitle;
  imgPopupSrc.alt = cardTitle;
  imgPopupSrc.src = cardImage;
  popupOpen(imgPopup);
  imgPopupCloseBtn.addEventListener('click', () => popupClose(imgPopup));
  escClosePopupHandler(imgPopup);
}
// Добавление карточки
const renderAddCard = (cardData) => {
  cardContainer.prepend(generateProfileCard(cardData));
}
// Переработка начальных карточек
initialCards.forEach((cardData) => {
  renderAddCard(cardData);
});
// Функция закрытия при нажатии на Esc
function escClosePopupHandler(popupName, popupForm = 'null') {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popupClose(popupName);
      if (popupForm !== 'null') {
        popupForm.reset();
      }
    }
  });
}
function profilePopupOpenHandler() {
  popupProfileName.value = profileName.textContent;
  popupProfilePlace.value = profileJob.textContent;
  escClosePopupHandler(profilePopup, profilePopupForm);
  hideInputError(profilePopupForm, popupProfileName);
  hideInputError(profilePopupForm, popupProfilePlace);
  popupOpen(profilePopup);
}
function profilePopupCloseHandler() {
  popupClose(profilePopup);
  profilePopupForm.reset();
}
function cardPopupCloseHandler() {
  popupClose(cardPopup);
  cardPopupForm.reset();
}
function profilePopupSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfilePlace.value;
  popupClose(profilePopup);
}
function cardPopupSubmitHandler(evt) {
  evt.preventDefault();
  renderAddCard({ name: popupCardName.value, link: popupCardPlace.value });
  cardPopupCloseHandler();
}

function cardPopupOpenHandler() {
  escClosePopupHandler(cardPopup, cardPopupForm);
  hideInputError(cardPopupForm, popupCardName);
  hideInputError(cardPopupForm, popupCardPlace);
  toggleButtonState(cardPopupInputsArray, cardPopupSubmit);
  popupOpen(cardPopup);
}

function cardPopupOverlayClickHandler(evt) {
  if (evt.target === evt.currentTarget) {
    popupClose(evt.target);
    cardPopupForm.reset();
  }
}

popupProfileEditButton.addEventListener('click', profilePopupOpenHandler);
profilePopupClose.addEventListener('click', profilePopupCloseHandler);
profilePopupForm.addEventListener('submit', profilePopupSubmitHandler);
profilePopup.addEventListener('click', popupOverlayClickHandler);
popupAddCardButton.addEventListener('click', cardPopupOpenHandler);
cardPopupClose.addEventListener('click', cardPopupCloseHandler);
cardPopupForm.addEventListener('submit', cardPopupSubmitHandler);
cardPopup.addEventListener('click', cardPopupOverlayClickHandler);
imgPopup.addEventListener('click', popupOverlayClickHandler);


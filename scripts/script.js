const popupProfileEditButton = document.querySelector('.profile__edit-button')
const popupAddCardButton = document.querySelector('.profile__add-button')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
const body = document.querySelector('.body');
const imgPopup = document.querySelector('.img-popup');
const popupWindow = document.querySelector('.popup');
const popupWindowClose = popupWindow.querySelector('.close-button');
const popupForm = popupWindow.querySelector('.popup__form');
const popupSaveBtn = popupWindow.querySelector('.popup__save-button');
const popupTitle = popupWindow.querySelector('.popup__title');
const popupProfileName = popupWindow.querySelector('.popup__input_type_name');
const popupProfilePlace = popupWindow.querySelector('.popup__input_type_place');
const profileCardTemplate = document.querySelector('#card-template').content.querySelector('.card');
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


// Функция удалить карточку
const deleteProfileCardHandler = (evt) => {
  evt.target.closest('.card').remove();
};
// Функция лайкнуть карточку
const likeProfileCardHandler = (evt) => {
  evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}
// Функция закрытия ImgPopup
function imgPopupAddCardClose() {
  imgPopup.classList.remove('img-popup_is-opened');
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
  pictureProfileCard.addEventListener('click', imgPopupOpenHandler);
  return newProfileCard;
}
// Функция открыть картинку
const imgPopupOpenHandler = (evt) => {
  const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
  const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
  const imgPopupCloseBtn = imgPopup.querySelector('.close-button');
  imgPopup.classList.add('img-popup_is-opened');
  imgPopupSrc.src = evt.target.closest('.card__img').src;
  imgPopupSrc.alt = evt.target.closest('.card').querySelector('.card__name').textContent;
  imgPopupTitle.textContent = evt.target.closest('.card').querySelector('.card__name').textContent;
  imgPopupCloseBtn.addEventListener('click', imgPopupAddCardClose);
}
// Добавление карточки
const renderAddCard = (cardData) => {
  cardContainer.prepend(generateProfileCard(cardData));
}
// Переработка начальных карточек
initialCards.forEach((cardData) => {
  renderAddCard(cardData);
});
// Функция открыть попап профиля
function popupProfileOpen() {
  popupProfileName.value = profileName.textContent;
  popupProfilePlace.value = profileJob.textContent;
  popupSaveBtn.textContent = 'Сохранить';
  popupTitle.textContent = 'Редактировать профиль';
  popupWindow.classList.add('popup-profile', 'popup_is-opened');
}
// Функция открыть попап карточки
function popupAddCardOpen() {
  popupProfileName.placeholder = 'Название';
  popupProfilePlace.placeholder = 'Ссылка на картинку';
  popupSaveBtn.textContent = 'Создать';
  popupTitle.textContent = 'Новое место';
  popupWindow.classList.add('popup-card', 'popup_is-opened');
}
// Функция закрыть попап
function popupClose() {
  popupWindow.classList.remove('popup_is-opened', 'popup-card', 'popup-profile');
  popupForm.reset();
}
// Функция сохранить попап
function popupSubmit(evt) {
  evt.preventDefault();
  if (popupWindow.classList.contains('popup-profile') == true) {
    profileName.textContent = popupProfileName.value;
    profileJob.textContent = popupProfilePlace.value;
  } else if (popupWindow.classList.contains('popup-card') == true) {
    renderAddCard({ name: popupProfileName.value, link: popupProfilePlace.value });
  }
  popupClose();
}

popupProfileEditButton.addEventListener('click', popupProfileOpen);
popupWindowClose.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSubmit);
popupAddCardButton.addEventListener('click', popupAddCardOpen);

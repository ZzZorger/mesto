const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const popupForm = popup.querySelector('.popup__form');
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
const cardTemplate = document.querySelector('#card-template').content;
const elements = document.querySelector('.elements');
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const popupAddCard = document.querySelector('.popup-add-card');
const popupAddCardOpenButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');

// Фукнция открытия popup
function popupOpen() {
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileJob.textContent;
  popupProfileEdit.classList.add('popup_is-opened');
}

// Фукнция закрытия popup
function popupClose() {
  popupProfileEdit.classList.remove('popup_is-opened');
}

// Функция сохранения данных при нажатии на кнопку
function popupSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileJob.textContent = popupInputJob.value;
  popupClose();
}

// Функция открытия popupAddCard
function popupAddCardOpen() {
  popupAddCard.classList.add('popup_is-opened');
}
function popupAddCardClose() {
  popupAddCard.classList.remove('popup_is-opened');
}

// Размещение стартового набора карточек
for (let i = 0; i <= initialCards.length - 1; i = i + 1) {
  const userElement = cardTemplate.querySelector('.card').cloneNode(true);
  userElement.querySelector('.card__img').src = initialCards[i].link;
  userElement.querySelector('.card__img').alt = initialCards[i].name;
  userElement.querySelector('.card__name').textContent = initialCards[i].name;
  elements.append(userElement);
}


popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSubmitHandler);
popupAddCardOpenButton.addEventListener('click', popupAddCardOpen);
popupAddCardCloseButton.addEventListener('click', popupAddCardClose);

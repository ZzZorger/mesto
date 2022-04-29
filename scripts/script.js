const popupProfileEditButton = document.querySelector('.profile__edit-button')
const popupAddCardButton = document.querySelector('.profile__add-button')
const popupContainer = document.querySelector('.body');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
const initialPopupData = [
  {
    title: 'Редактировать профиль',
    nameValue: 'Жак-Ив Кусто',
    namePlaceholder: '',
    placeValue: 'Исследователь океана',
    placePlaceholder: '',
    submitButtonText: 'Сохранить',
    specClass: 'popup-profile-edit'
  },
  {
    title: 'Новое место',
    nameValue: '',
    namePlaceholder: 'Название',
    placeValue: '',
    placePlaceholder: 'Ссылка на картинку',
    submitButtonText: 'Создать',
    specClass: 'popup-add-card'
  },
];
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
// Шаблоны
const popupTemplate = document.querySelector('#popup').content.querySelector('.popup');
const profileCardTemplate = document.querySelector('#card-template').content.querySelector('.card');


// Заполнение шаблонов
// popups
const generatePopup = function (popupData) {
  const newPopup = popupTemplate.cloneNode(true);
  const popupTitle = newPopup.querySelector('.popup__title');
  popupTitle.textContent = popupData.title;
  const popupNameField = newPopup.querySelector('.popup__input_type_name');
  popupNameField.value = popupData.nameValue;
  popupNameField.placeholder = popupData.namePlaceholder;
  const popupPlaceField = newPopup.querySelector('.popup__input_type_place');
  popupPlaceField.value = popupData.placeValue;
  popupPlaceField.placeholder = popupData.placePlaceholder;
  const popupSubmitButton = newPopup.querySelector('.popup__save-button');
  popupSubmitButton.textContent = popupData.submitButtonText;
  newPopup.classList.add(popupData.specClass);
  return newPopup;
}
// Карточки
const generateProfileCard = (cardData) => {
  const newProfileCard = profileCardTemplate.cloneNode(true);

  const titleProfileCard = newProfileCard.querySelector('.card__name');
  titleProfileCard.textContent = cardData.name;
  const pictureProfileCard = newProfileCard.querySelector('.card__img');
  pictureProfileCard.src = cardData.link;

  return newProfileCard
}



// Добавление popup
const renderPopup = (popupData) => {
  popupContainer.append(generatePopup(popupData));
}
// Добавление карточки
const renderAddCard = (cardData) => {
  cardContainer.prepend(generateProfileCard(cardData));
}

// Переработка начальных popup
initialPopupData.forEach((popupData) => {
  renderPopup(popupData);
});
// Переработка карточек
initialCards.forEach((cardData) => {
  renderAddCard(cardData);
});

// Инициализация элементов новых popup
// Редактирование профиля
const popupProfileEdit = document.querySelector('.'+initialPopupData[0].specClass);
const popupProfileEditCloseButton = popupProfileEdit.querySelector('.popup__close-button');
const popupProfileName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupProfilePlace = popupProfileEdit.querySelector('.popup__input_type_place');
const popupProfileEditForm = popupProfileEdit.querySelector('.popup__form');
// Добавление карточки
const popupAddCard = document.querySelector('.'+initialPopupData[1].specClass);
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupCardName = popupAddCard.querySelector('.popup__input_type_name');
const popupCardPlace = popupAddCard.querySelector('.popup__input_type_place');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');



//Хэндлеры
// Фукнция открытия popupProfileEdit
function popupProfileEditOpen() {
  popupProfileEdit.classList.add('popup_is-opened');
}
// Фукнция закрытия popupProfileEdit
function popupProfileEditClose() {
  popupProfileEdit.classList.remove('popup_is-opened');
}
// Фукнция открытия popupAddCard
function popupAddCardOpen() {
  popupAddCard.classList.add('popup_is-opened');
}
// Фукнция закрытия popupAddCard
function popupAddCardClose() {
  popupAddCard.classList.remove('popup_is-opened');
}

// Функция сохранения данных popupProfileEdit при нажатии на кнопку
function popupProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfilePlace.value;
  popupProfileEditClose();
}
// Переменная для кнопки добавления карточек
const popupAddCardSubmitHandler = (evt) => {
  evt.preventDefault();
  renderAddCard({ name: popupCardName.value, link: popupCardPlace.value });
  popupCardName.value = "";
  popupCardPlace.value = "";
};



// Обработчики событий
popupProfileEditButton.addEventListener('click', popupProfileEditOpen);
popupProfileEditCloseButton.addEventListener('click', popupProfileEditClose);
popupAddCardButton.addEventListener('click', popupAddCardOpen);
popupAddCardCloseButton.addEventListener('click', popupAddCardClose);
popupProfileEditForm.addEventListener('submit', popupProfileSubmitHandler);
popupAddCardForm.addEventListener('submit', popupAddCardSubmitHandler);


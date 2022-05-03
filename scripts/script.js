const popupProfileEditButton = document.querySelector('.profile__edit-button')
const popupAddCardButton = document.querySelector('.profile__add-button')
const popupContainer = document.querySelector('.body');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardContainer = document.querySelector('.elements');
const body = document.querySelector('.body');
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
const imgPopupTemplate = document.querySelector('#img-popup').content.querySelector('.img-popup');

// Добавить imgpopup

// Функция удалить карточку
const deleteProfileCardHandler = (evt) => {
  evt.target.closest('.card').remove();
};
// Функция лайкнуть карточку
const likeProfileCardHandler = (evt) => {
  evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
}


// Функция для добавления карточек
const popupAddCardSubmitHandler = (evt) => {
  evt.preventDefault();
  renderAddCard({ name: popupCardName.value, link: popupCardPlace.value });
  popupCardName.value = "";
  popupCardPlace.value = "";
  popupAddCardClose();
};

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
  const deleteProfileCard = newProfileCard.querySelector('.card__delete-button');
  deleteProfileCard.addEventListener('click', deleteProfileCardHandler);
  const likeProfileCard = newProfileCard.querySelector('.card__like-button');
  likeProfileCard.addEventListener('click', likeProfileCardHandler);
  pictureProfileCard.addEventListener('click', imgPopupOpenHandler);
  return newProfileCard;
}

// Функция открыть картинку
const imgPopupOpenHandler = (evt) => {
  const imgPopup = imgPopupTemplate.cloneNode(true);

  // const imgPopup = document.querySelector('.img-popup');
  const imgPopupSrc = imgPopup.querySelector('.img-popup__img');
  const imgPopupTitle = imgPopup.querySelector('.img-popup__title');
  const imgPopupCloseBtn = imgPopup.querySelector('.popup__close-button');
  imgPopup.classList.add('img-popup_is-opened');
  imgPopupSrc.src = evt.target.closest('.card__img').src;
  imgPopupSrc.alt = evt.target.closest('.card').querySelector('.card__name').textContent;
  imgPopupTitle.textContent = evt.target.closest('.card').querySelector('.card__name').textContent;
  // Функция закрытия ImgPopup
  function imgPopupAddCardClose() {
    imgPopup.classList.remove('img-popup_is-opened');
    imgPopup.remove();
  }
  imgPopupCloseBtn.addEventListener('click', imgPopupAddCardClose);
  body.append(imgPopup);

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
const popupProfileEdit = document.querySelector('.' + initialPopupData[0].specClass);
const popupProfileEditCloseButton = popupProfileEdit.querySelector('.popup__close-button');
const popupProfileName = popupProfileEdit.querySelector('.popup__input_type_name');
const popupProfilePlace = popupProfileEdit.querySelector('.popup__input_type_place');
const popupProfileEditForm = popupProfileEdit.querySelector('.popup__form');
// Добавление карточки
const popupAddCard = document.querySelector('.' + initialPopupData[1].specClass);
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


// Обработчики событий
popupProfileEditButton.addEventListener('click', popupProfileEditOpen);
popupProfileEditCloseButton.addEventListener('click', popupProfileEditClose);
popupAddCardButton.addEventListener('click', popupAddCardOpen);
popupAddCardCloseButton.addEventListener('click', popupAddCardClose);
popupProfileEditForm.addEventListener('submit', popupProfileSubmitHandler);
popupAddCardForm.addEventListener('submit', popupAddCardSubmitHandler);




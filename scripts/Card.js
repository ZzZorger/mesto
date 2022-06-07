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

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  // Функция создать карточку
  generateProfileCard (cardData) {
  const newProfileCard = profileCardTemplate.cloneNode(true);
  const titleProfileCard = newProfileCard.querySelector('.card__name');
  titleProfileCard.textContent = _name;
  const pictureProfileCard = newProfileCard.querySelector('.card__img');
  pictureProfileCard.src = _link;
  pictureProfileCard.alt = _name;
  const deleteProfileCard = newProfileCard.querySelector('.card__delete-button');
  deleteProfileCard.addEventListener('click', deleteProfileCardHandler);
  const likeProfileCard = newProfileCard.querySelector('.card__like-button');
  likeProfileCard.addEventListener('click', likeProfileCardHandler);
  pictureProfileCard.addEventListener('click', () => openImgPopupHandler(pictureProfileCard.alt, pictureProfileCard.src));
  return newProfileCard;
  }
}
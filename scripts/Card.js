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
export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this.element = this._getTemplate();
    console.log(this.element)
    this._element.querySelector('.card__img').src = this._link;
    // this._element.querySelector('.card__img').alt = this._name;
    // this._element.querySelector('.card__name').textContent = this._name;
    // this._element.querySelector('.card__delete-button').addEventListener('click', deleteProfileCardHandler);
    // this._element.querySelector('.card__like-button').addEventListener('click', likeProfileCardHandler);
    // const pictureProfileCard = this._element.querySelector('.card__img');
    // pictureProfileCard.addEventListener('click', () => openImgPopupHandler(pictureProfileCard.alt, pictureProfileCard.src));
    // return this._element;
  }
}

// Переработка начальных карточек
initialCards.forEach((cardData) => {
  const card = new Card(cardData.name, cardData.link);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
});
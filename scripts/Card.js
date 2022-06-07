import {cardContainer, openPopup} from '../scripts/index.js';

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
    const cardElment = document
    .querySelector('#card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElment;
  }
  // _deleteProfileCardHandler (evt) {
  //   evt.target.closest('.card').remove();
  // };
  _deleteProfileCardHandler (evt) {
    evt.target.closest('.card').remove();
  };
  // _likeProfileCardHandler (evt) {
  //   evt.target.closest('.card__like-button').classList.toggle('card__like-button_active');
  // }
  // _openImgPopupHandler = (cardTitle, cardImage) => {
  //   imgPopupTitle.textContent = cardTitle;
  //   imgPopupSrc.alt = cardTitle;
  //   imgPopupSrc.src = cardImage;
  //   openPopup(imgPopup);
  // }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__delete-button').addEventListener('click', _deleteProfileCardHandler());
    // this._element.querySelector('.card__like-button').addEventListener('click', _likeProfileCardHandler());
    const pictureProfileCard = this._element.querySelector('.card__img');
    // pictureProfileCard.addEventListener('click', () => _openImgPopupHandler(pictureProfileCard.alt, pictureProfileCard.src));
    return this._element;
  }
}

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link);
	const cardElment = card.generateCard();
  cardContainer.prepend(cardElment);
});


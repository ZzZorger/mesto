import {
  openPopup, 
  imgPopup, 
  imgPopupTitle, 
  imgPopupSrc
} 
from '../scripts/index.js';

class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElment = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElment;
  }

  _deleteProfileCardHandler () {
    this._element.querySelector('.card__delete-button').parentNode.remove();
  }

  _likeProfileCardHandler () {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _openImgPopupHandler (cardTitle, cardImage) {
    imgPopupTitle.textContent = cardTitle;
    imgPopupSrc.alt = cardTitle;
    imgPopupSrc.src = cardImage;
    openPopup(imgPopup);
  }

  _setEventListeners() {
    this._element.querySelector('.card__delete-button').addEventListener('click', () => this._deleteProfileCardHandler());
    this._element.querySelector('.card__like-button').addEventListener('click', () => this._likeProfileCardHandler());
    const _pictureProfileCard = this._element.querySelector('.card__img');
    _pictureProfileCard.addEventListener('click', () => this._openImgPopupHandler(_pictureProfileCard.alt, _pictureProfileCard.src));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
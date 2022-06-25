export default class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardDelete.parentNode.remove();
  }

  _likeProfileCardHandler () {
    this._cardLike.classList.toggle('card__like-button_active');
  }

  _setEventListeners() {
    this._cardDelete.addEventListener('click', () => this._deleteProfileCardHandler());
    this._cardLike.addEventListener('click', () => this._likeProfileCardHandler());
    this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link))
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    this._cardDelete = this._element.querySelector('.card__delete-button');
    this._cardLike = this._element.querySelector('.card__like-button');

    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
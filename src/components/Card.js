export default class Card {
  constructor(options) {
    this._id = options.item._id;
    this._name = options.item.name;
    this._link = options.item.link;
    this._likes = options.item.likes;
    this._cardSelector = options.template;
    this._handleCardClick = options.handleCardClick;
    this._confirmDeletePopup = options.confirmDeletePopup;
    // console.log(options)
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _likeProfileCardHandler() {
    this._cardLike.classList.toggle('card__like-button_active');
  }

  _setEventListeners() {
    this._cardDelete.addEventListener('click', () => this._confirmDeletePopup(this._id));
    this._cardLike.addEventListener('click', () => this._likeProfileCardHandler());
    this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link))
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    this._cardDelete = this._element.querySelector('.card__delete-button');
    this._cardLike = this._element.querySelector('.card__like-button');
    this._cardLikeNumber = this._element.querySelector('.card__like-number');

    this._cardImg.src = this._link;
    this._cardImg.id = this._id;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardLikeNumber.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }
}
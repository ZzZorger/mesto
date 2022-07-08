export default class Card {
  constructor(options) {
    this._id = options.item._id;
    this._name = options.item.name;
    this._link = options.item.link;
    this._likes = options.item.likes;
    this._cardSelector = options.template;
    this._handleCardClick = options.handleCardClick;
    this._confirmDeletePopup = options.confirmDeletePopup;
    this._ownerID = options.item.ownerData._id;
    this._userID = options.item.userID;
    this._apiLike = options.apiLike;
    this._apiUnlike = options.apiUnlike;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _likeProfileCardHandler(id) {
    const likesIdArray = []
    for (var i = 0; i < this._likes.length; i++) {
      likesIdArray.push(this._likes[i]._id)
    }
    if (likesIdArray.includes(this._userID)) {
      this._apiUnlike.putLike(id)
        .then((res) => {
          this._cardLikeNumber.textContent = res.likes.length
          this._likes = res.likes
          this._cardLike.classList.remove('card__like-button_active');
        })
    }
    else {
      this._apiLike.putLike(id)
        .then(res => {
          this._cardLikeNumber.textContent = res.likes.length
          this._likes = res.likes
          this._cardLike.classList.add('card__like-button_active');
        })
    }
  }

  _setEventListeners() {
    this._cardDelete.addEventListener('click', () => this._confirmDeletePopup(this._id));
    this._cardLike.addEventListener('click', () => this._likeProfileCardHandler(this._id));
    this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link))
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.card__img');
    this._cardName = this._element.querySelector('.card__name');
    this._cardLike = this._element.querySelector('.card__like-button');
    this._cardLikeNumber = this._element.querySelector('.card__like-number');
    this._cardDelete = this._element.querySelector('.card__delete-button');
    if (this._userID !== this._ownerID) {
      this._cardDelete.remove()
    }
    this._likes.forEach(like => {
      if (like._id === this._userID) {
        this._cardLike.classList.add('card__like-button_active');
      }
    })
    this._cardImg.src = this._link;
    this._cardImg.id = this._id;
    this._cardImg.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardLikeNumber.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }
}
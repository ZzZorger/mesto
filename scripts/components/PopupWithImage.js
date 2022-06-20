import Popup from "./Popup.js";
import {  
  imgPopupTitle, 
  imgPopupSrc
} 
from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._cardTitle = this._element.querySelector('.img-popup__img');
    // this._cardImage = this._card.querySelector('.img-popup__title');
    // console.log(this._cardTitle)
  }
  openPopup(cardTitle, cardImage) {
    imgPopupTitle.textContent = cardTitle;
    imgPopupSrc.alt = cardTitle;
    imgPopupSrc.src = cardImage;
    super.openPopup();
  }
}
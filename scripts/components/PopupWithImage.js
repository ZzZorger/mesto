import Popup from "./Popup.js";
import {  
  imgPopupTitle, 
  imgPopupSrc
} 
from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);

    this._text = data.text;
    this._image = data.image;
  }
  openPopup() {
    imgPopupTitle.textContent = this._text;
    imgPopupSrc.alt = this._text;
    imgPopupSrc.src = this._image;
    this._popupSelector.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._closeByEscape);
  }
}
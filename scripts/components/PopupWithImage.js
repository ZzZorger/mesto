import Popup from "./Popup.js";
import {  
  imgPopupTitle, 
  imgPopupSrc
} 
from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  openPopup(cardTitle, cardImage) {
    imgPopupTitle.textContent = cardTitle;
    imgPopupSrc.alt = cardTitle;
    imgPopupSrc.src = cardImage;
    super.openPopup();
  }
}
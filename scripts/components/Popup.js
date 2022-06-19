export default class Popup {
    constructor(popupSelector) {
      this._popupSelector = document.querySelector(popupSelector);
    }
    openPopup() {
      this._popupSelector.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._closeByEscape);
    }
    closePopup() {
      this._popupSelector.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', this._closeByEscape);
    }
    _closeByEscape(evt) {
      if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
      }
    }
    setEventListeners() {
      this._popupSelector.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('close-button')) {
          closePopup(this._popupSelector);
        }
      });
    }
  }
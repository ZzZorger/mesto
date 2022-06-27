export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeByEscape = this._closeByEscape.bind(this);
  }
  openPopup() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._closeByEscape);
  }
  closePopup() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._closeByEscape);
  }
  _closeByEscape(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('close-button')) {
        this.closePopup();
      }
    });
  }
}
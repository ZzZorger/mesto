export default class Section {
  constructor(options) {
    this._renderer = options.renderer;
    this._container = document.querySelector(options.containerSelector);
  }
  renderItems(cards, userID) {
    cards.forEach(card => {
      this._renderer(card, userID);
    })
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
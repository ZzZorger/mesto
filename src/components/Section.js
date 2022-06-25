export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._initialArray.forEach(items => {
      this._renderer(items);
    })
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
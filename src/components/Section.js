export default class Section {
  constructor(options) {
    this._initialArray = options.items;
    this._renderer = options.renderer;
    this._container = document.querySelector(options.containerSelector);
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
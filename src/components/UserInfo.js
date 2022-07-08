export default class UserInfo {
  constructor({ name, info, avatar }) {
    this._nameSelector = document.querySelector(name);
    this._infoSelector = document.querySelector(info);
    this._imgSelector = document.querySelector(avatar);
  }
  getUserData() {
    this._formValues = {
      userName: this._nameSelector.textContent,
      userInfo: this._infoSelector.textContent,
      userAvatar: this._imgSelector.src
    }
    return this._formValues;
  }
  setUserData(input) {
    this._nameSelector.textContent = input.name;
    this._infoSelector.textContent = input.about;
    this._imgSelector.src = input.avatar;
  }
}
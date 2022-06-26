export default class UserInfo {
  constructor({ name, info }) {
    this._nameSelector = document.querySelector(name);
    this._infoSelector = document.querySelector(info);
  }

  getUserData() {
    this._formValues = {
      userName: this._nameSelector.textContent,
      userInfo: this._infoSelector.textContent
    }
    return this._formValues;
  }
  setUserData(input) {
    this._nameSelector.textContent = input['profile-name'];
    this._infoSelector.textContent = input['profile-about'];
  }
}
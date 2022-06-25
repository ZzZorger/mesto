export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
  }

  getUserData() {
    this._formValues = {
      userName: this._nameSelector.textContent, 
      userInfo: this._infoSelector.textContent
    }
    return this._formValues;
  }
  setUserData(userName, userInfo) { 
    this._nameSelector.textContent = userName;
    this._infoSelector.textContent = userInfo;
  }
}
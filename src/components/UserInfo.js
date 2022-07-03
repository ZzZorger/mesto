// export default class UserInfo {
//   constructor({ name, info, items }) {
//     this._nameSelector = document.querySelector(name);
//     this._infoSelector = document.querySelector(info);
//     // this._api = api;
//     this._items = items;
//     // console.log(this._items.name, this._nameSelector.textContent, this._formValues)
//   }

//   getUserData() {
//     this._formValues = {
//       // userName: this._nameSelector.textContent,
//       // userInfo: this._infoSelector.textContent
//       userName: this._items.name,
//       userInfo: this._items.about
//     }
//     return this._formValues;
//   }
//   setUserData = () => {
//     // console.log(this._items.name, this._nameSelector.textContent)
//     this._nameSelector.textContent = this._items.name;
//     this._infoSelector.textContent = this._items.about;
//   }
// }
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
    // this._nameSelector.textContent = input['profile-name'];
    // this._infoSelector.textContent = input['profile-about'];
    this._nameSelector.textContent = input.name;
    this._infoSelector.textContent = input.about;
  }
}
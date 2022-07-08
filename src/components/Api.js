export default class Api {
  constructor(options) {
    this._server = options.baseUrl;
    //'https://nomoreparties.co/v1/cohort-44'
    this._authorization = options.headers.authorization;
    this._contentType = options.headers['Content-Type'];
    // this._method = options.method;
    // this._options = options;
  }
  getServerData() {
    return fetch(`${this._server}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._authorization
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getCardsData() {
    return fetch(`${this._server}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._authorization
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  patchProfileData(input) {
    return fetch(`${this._server}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: input.name,
        about: input.about,
        avatar: input.url
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  postCard(input) {
    return fetch(`${this._server}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        name: input.name,
        link: input.url
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  deleteCard(id) {
    return fetch(`${this._server}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  putLike(id) {
    return fetch(`${this._server}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  putUnlike(id) {
    return fetch(`${this._server}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  patchProfileAvatar(input) {
    return fetch(`${this._server}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
      },
      body: JSON.stringify({
        avatar: input.url
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

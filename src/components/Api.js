export default class Api {
  constructor(options) {
    this._server = options.baseUrl;
    this._authorization = '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8';
    this._method = options.method;
    this._options = options;
  }
  getServerData() {
    return fetch(this._server, {
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
    return fetch(this._server, {
      method: this._method,
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
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
    return fetch(this._server, {
      method: this._method,
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
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
    return fetch(`${this._server}/${id}`, {
      method: this._method,
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
    return fetch(`${this._server}/${id}/likes`, {
      method: this._method,
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
    return fetch(this._server, {
      method: this._method,
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: input
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

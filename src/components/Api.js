export default class Api {
  constructor(options) {
    this._server = options.baseUrl;
    this._authorization = options.headers.authorization;
    // console.log(this._authorization)
  }

  // _serverRequest() {
  //   return fetch(this._server, {
  //     headers: {
  //       authorization: this._authorization
  //     }
  //   })
  // }

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
        return Promise.reject(res.status)
      })
  }

  // getUserData() {
  // return fetch(this._server, {
  //   headers: {
  //     authorization: this._authorization
  //   }
  // })
  //   .then(res => res.json())
  //   .then((result) => {
  //     console.log(result.name);
  //   });
  // }

  // initialCards() {
  //   this._request()
  //     .then(res => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }
}

// Выгрузка с сервера данных пользователя
// fetch('https://nomoreparties.co/v1/cohort-44/users/me', {
//   headers: {
//     authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });
// console.log(fetch('https://nomoreparties.co/v1/cohort-44/users/me')) // Сайт с карточками

// Выгрузка начальных карточек
// fetch('https://mesto.nomoreparties.co/v1/cohort-44/cards', {
//   headers: {
//     authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });
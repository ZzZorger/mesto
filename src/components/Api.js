export default class Api {
  constructor(options) {
    this._server = options.server;
    this._authorization = '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8';
  }
  
}

// Выгрузка с сервера данных пользователя
fetch('https://nomoreparties.co/v1/cohort-44/users/me', {
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });
// console.log(fetch('https://nomoreparties.co/v1/cohort-44/users/me')) // Сайт с карточками

// Выгрузка начальных карточек
fetch('https://mesto.nomoreparties.co/v1/cohort-44/cards', {
  headers: {
    authorization: '17e41917-a2e7-4ed8-bcef-86b0aad6a6d8'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });
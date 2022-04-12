const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__save');
const cardButton = document.querySelector('.card__button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
document.querySelector('.popup__name').value = profileName.textContent;
document.querySelector('.popup__job').value = profileJob.textContent;


// Фукнция открытия popup
function popupOpenToggle() {
  popup.classList.toggle('popup_is-opened');
}

// Фукнция закрытия popup
function popupOpenToggle() {
  popup.classList.toggle('popup_is-opened');
  document.querySelector('.popup__name').value = profileName.textContent;
  document.querySelector('.popup__job').value = profileJob.textContent;
}

// Функция сохранения имени и работы профиля
function popupSaveButtonToggle() {
  profileName.innerHTML = document.querySelector('.popup__name').value;
  profileJob.innerHTML = document.querySelector('.popup__job').value;
  popup.classList.toggle('popup_is-opened');
}

popupSaveButton.addEventListener('click', popupSaveButtonToggle);
popupOpenButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);

//
// Выход из popup при клике вне области контента
//
// function cardButtonActiveToggle() {
//   cardButton.classList.toggle('card__button_active');
// }
//
// cardButton.addEventListener('click', cardButtonActiveToggle);
// function popupOverlayClickHandler(evt) {
//   if (evt.target === evt.currentTarget) {
//     popupOpenToggle();
//   }
// }
// popup.addEventListener('click', popupOverlayClickHandler);
//


const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
popup.querySelector('.popup__input_type_name').value = profileName.textContent;
popup.querySelector('.popup__input_type_job').value = profileJob.textContent;

// Фукнция открытия popup
function popupOpenToggle() {
  popup.classList.toggle('popup_is-opened');
  popup.querySelector('.popup__input_type_name').value = profileName.textContent;
  popup.querySelector('.popup__input_type_job').value = profileJob.textContent;
}

// Фукнция закрытия popup
function popupOpenToggle() {
  popup.classList.toggle('popup_is-opened');
}

// Функция сохранения данных при нажатии на кнопку
function popupSaveButtonToggle() {
  profileName.textContent = document.querySelector('.popup__input_type_name').value;
  profileJob.textContent = document.querySelector('.popup__input_type_job').value;
  popup.classList.toggle('popup_is-opened');
}

// Сохранение данных при нажатии клавиши Enter
document.querySelector('.popup__input_type_name').addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    popupSaveButtonToggle();
  }
});
document.querySelector('.popup__input_type_job').addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    popupSaveButtonToggle();
  }
});

popupOpenButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);
popupSaveButton.addEventListener('click', popupSaveButtonToggle);
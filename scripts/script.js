const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const popupForm = popup.querySelector('.popup__form');

// Фукнция открытия popup
function popupOpen() {
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileJob.textContent;
  popup.classList.add('popup_is-opened');
}

// Фукнция закрытия popup
function popupClose() {
  popup.classList.remove('popup_is-opened');
}

// Функция сохранения данных при нажатии на кнопку
function popupSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileJob.textContent = popupInputJob.value;
  popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSubmitHandler);

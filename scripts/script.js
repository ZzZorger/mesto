const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const popupInputNameValue = popup.querySelector('.popup__input_type_name');
const popupInputJobValue = popup.querySelector('.popup__input_type_job');
const popupForm = popup.querySelector('.popup__form');

// Фукнция открытия popup
function popupOpen() {
  popupInputNameValue.value = profileName.textContent;
  popupInputJobValue.value = profileJob.textContent;
  popup.classList.add('popup_is-opened');
}

// Фукнция закрытия popup
function popupClose() {
  popup.classList.remove('popup_is-opened');
}

// Функция сохранения данных при нажатии на кнопку
function popupSubmitHandler() {
  profileName.textContent = popupInputName.value;
  profileJob.textContent = popupInputJob.value;
  popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
// Сохранение данных при нажатии клавиши Enter
popupForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  popupSubmitHandler();
});

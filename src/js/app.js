/* eslint-disable max-len */
import ButtonPusher from './ButtonPusher';
// элементы для модуля Collapse
const collapseButton = document.querySelector('.collapse-button');
const collapseContainer = document.querySelector('.collapse-container');
const chatContainerForm = document.querySelector('.chat-container-form');
// элементы для модуля Chat
const chatButtonCycle = document.querySelector('.chat-button-cycle');
const chatButtonClose = document.querySelector('.chat-button-close');
// элементы для модуля Liker
const likerButton = document.querySelector('.liker-button');
const likesBox = document.querySelector('.likes-box');
const buttonPusher = new ButtonPusher(likesBox); // создаём экземпляр и передаём контейнер для лайков

// код для Collapse

collapseButton.addEventListener('click', () => {
  const normal = collapseContainer.classList.contains('collapse-container-anim-normal');
  const reverse = collapseContainer.classList.contains('collapse-container-anim-reverse');
  if (!normal && !reverse) { // для первого запуска когда все классы с анимацией отсутствуют
    collapseContainer.classList.add('collapse-container-anim-normal'); // раскрываем список
  } else if (normal) { // для случая когда список уже был раскрыт
    collapseContainer.classList.remove('collapse-container-anim-normal');// удаляем класс с анимацией раскрытия
    collapseContainer.classList.add('collapse-container-anim-reverse');// добавляем клас с анимацией закрытия
  } else { // для случая когда список был закрыт
    collapseContainer.classList.remove('collapse-container-anim-reverse');// удаляем класс с анимацией закрытия
    collapseContainer.classList.add('collapse-container-anim-normal');// добавляем класс с анимацией раскрытия
  }
});

// код для Chat

chatButtonCycle.addEventListener('click', () => {
  console.log('cycle button pushed');
  chatButtonCycle.classList.add('chat-button-cycle-squeeze');// добавляем класс с анимацией сжатия круглой красной кнопки
  chatContainerForm.classList.add('chat-container-form-expand');// добавляем класс с анимацией раскрытия контейнера с формой
  // оба скласса присвоены и не меняют своей последовательности (типо используется самый последний применённый), поэтому надо удалить
  chatContainerForm.classList.remove('chat-container-form-squeeze');// удаляем класс с анимацией сжатия контейнера с формой
  chatButtonCycle.classList.remove('chat-button-cycle-expand');// удаляем класс с анимацией раскрытия круглой красной кнопки
});

chatButtonClose.addEventListener('click', () => {
  console.log('close button pushed');
  chatContainerForm.classList.add('chat-container-form-squeeze');// добавляем класс с анимацией сжатия контейнера с формой
  chatButtonCycle.classList.add('chat-button-cycle-expand');// добавляем класс с анимацией раскрытия круглой красной кнопки
});

// код для Liker

likerButton.addEventListener('mousedown', () => { // нажимаем на кнопку и лайки летят
  buttonPusher.pushDown();// для понимания что кнопка нажата
  buttonPusher.buttonPress();// выполнения функции создания лайков если кнопка нажата
});

likerButton.addEventListener('mouseup', () => { // отжимаем кнопку и лайки перестают летать
  buttonPusher.pushUp();// для понимания что кнопка отжата
  buttonPusher.deleteInterval();// удаляем интервал для исполнения функции создания лайков
});

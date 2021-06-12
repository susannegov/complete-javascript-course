'use strict';

// select modal, overlay, close modal, and show modal
// queryselector all show all classes saved as nodeList

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openWindow);
}

btnsCloseModal.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);

// 3 types of event keyup (release), keydown, keypress
// when pass parameter e, it passes a key object
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
    closeWindow();
  }
});

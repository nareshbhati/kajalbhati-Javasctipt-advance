'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// open modal
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
// close modal
closeModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

//keypress
document.addEventListener('keydown', function (event) {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
  console.log(event.key);
  // console.log('key pressed');
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closedModal();
});

const modal = document.querySelector('[data-modal]');
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

console.log(document.forms);

const mobMenu = document.querySelector('[data-menu]');

const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobMenu.classList.toggle('is-open');
}

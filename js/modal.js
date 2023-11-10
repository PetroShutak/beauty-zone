const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const submitButton = document.getElementById('submitButton');

const toggleModal = () => {
  modal.classList.toggle('modal__hidden');
  document.body.classList.toggle('modal-open');
};

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

window.addEventListener('click', event => {
  if (event.target === modal) {
    toggleModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleModal();
  }
});

submitButton.addEventListener('click', () => {
  loader.style.display = 'block';
  setTimeout(() => {
    toggleModal();
  }, 2000);
});

// burger menu

const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger_close');
const burgerMenu = document.querySelector('.burger_modal_container');
const navBurger = document.querySelector('.burger_nav');

const toggleBurger = () => {
  burgerMenu.classList.toggle('modal__hidden');
  document.body.classList.toggle('modal-open');
};

const hideBurgerMenu = () => {
  burgerMenu.classList.add('modal__hidden');
  document.body.classList.remove('modal-open');
};

burger.addEventListener('click', toggleBurger);
burgerClose.addEventListener('click', toggleBurger);

const burgerLinks = document.querySelectorAll('.burger_nav a');

burgerLinks.forEach(link => {
  link.addEventListener('click', hideBurgerMenu);
});

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

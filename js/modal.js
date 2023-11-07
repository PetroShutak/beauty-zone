const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const submitButton = document.getElementById('submitButton');

function openModal() {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
  loader.style.display = 'none';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

submitButton.addEventListener('click', () => {
  loader.style.display = 'block';
  setTimeout(() => {
    closeModal();
  }, 2000);
});

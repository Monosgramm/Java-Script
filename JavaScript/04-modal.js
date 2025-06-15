const button = document.querySelector('[data-modal-button]');
const buttonClose = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

button.addEventListener('click', function() {
	modal.classList.remove('hidden');
});

buttonClose.addEventListener('click', function() {
	modal.classList.add('hidden');
});
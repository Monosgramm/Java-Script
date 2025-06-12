"use strict!";

const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener("click", function(){
	console.log('click!');
	content.classList.toggle('content-hidden');

	if (content.classList.contains('content-hidden')) {
		button.textContent = 'Open Block';
	} else {
		button.textContent = 'Close Block';
	}

	/* alternate
	if (content.classList.toggle('content-hidden')) {
		button.textContent = 'Open Block';
	} else {
		button.textContent = 'Close Block';
	}
	*/
});



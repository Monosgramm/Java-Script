"use strict!";

//Found all tab headers by data attribute;
const tabHeaders = document.querySelectorAll('[data-tab]');

//Found all content boxes
const contentBoxes = document.querySelectorAll('[data-tab-content]');

//We went through all the items and printed them out to the console separately.
tabHeaders.forEach (function(item) {
	item.addEventListener('click', function() {
		//1. Hide all content Box
		contentBoxes.forEach(function (item) {
			item.classList.add('tab-content-hidden');
		});

		//2. Select the desired content box and display it
		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('tab-content-hidden');
	});
});
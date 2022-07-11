'use strict';
const arrows = document.querySelectorAll('.down');
const menus = document.querySelectorAll('.small__menu');
const openMenu = document.querySelector('.bar');
const closeMenu = document.querySelector('.close');
const modal = document.querySelector('.modal__wrapper');
const overlay = document.querySelector('.overlay');
const modalOpened = document.querySelector('.body');
const autoClose = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};
autoClose();

openMenu.addEventListener('click', () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
	modalOpened.classList.add('modal__opened');
});

closeMenu.addEventListener('click', () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
	modalOpened.classList.remove('modal__opened');
	removeMenu();
	resetArrow();
});
const removeMenu = function () {
	menus.forEach((menu) => menu.classList.add('hide'));
};
const resetArrow = () => {
	arrows.forEach((arrow) => {
		arrow.setAttribute('src', 'images/icon-arrow-down.svg');
	});
};
// removeMenu();
window.addEventListener('load', removeMenu());
arrows.forEach((arrow) => {
	arrow.addEventListener('click', function (e) {
		if (e.target.nextElementSibling.classList.contains('hide')) {
			// console.log(e.target.nextElementSibling, e);
			e.target.nextElementSibling.classList.remove('hide');
			e.target.setAttribute('src', 'images/icon-arrow-up.svg');
		} else {
			e.target.nextElementSibling.classList.add('hide');
			e.target.setAttribute('src', 'images/icon-arrow-down.svg');
		}
	});
});

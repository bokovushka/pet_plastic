// menu
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.menu-btn');
	let menuBtnmobile = document.querySelector('.menu-btn-m');
	let menu = document.querySelector('.m-wrap');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menuBtnmobile.classList.toggle('active');
		menu.classList.add('active');
		body_lock.classList.add('lock');
	})
	menuBtnmobile.addEventListener('click', function () {
		menuBtn.classList.remove('active');
		menuBtnmobile.classList.remove('active');
		menu.classList.remove('active');
		body_lock.classList.remove('lock');
	})
});


// tabs
$('.tab-view li').click(function () {
	$('.tab-view li').removeClass("active");
	$(this).addClass("active");
	$('.tab-view__content .tab-view__info').hide();
	$($('.tab-view__info')[$(this).index()]).show();
}).eq(1).trigger('click');

//mask phone
jQuery(function ($) {
	$("#tel").mask("+380(99) 999-99-99");
});


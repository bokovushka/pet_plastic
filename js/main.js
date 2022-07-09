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
$('.nav-menu .anchor').click(function () {
	$('.menu-btn').removeClass("active");
	$('.menu-btn-m').removeClass("active");
	$('.m-wrap').removeClass("active");
	$('body').removeClass("lock");
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

//href link
$(document).ready(function () {
	$('.anchor').bind("click", function (e) {
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 40,
				},
				800
			);
		e.preventDefault();
	});
	return false;
});
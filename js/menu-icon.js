$(document).ready(function(){
	$('.icon-menu').click(function(){
		$(this).toggleClass('open');
	});
});

function menuIcon() {
    document.querySelector('.icon-menu').classList.toggle('open')
}
$(document).ready(function(){
	if (screen.width > 768) {
		$(".project-card").flip({
			axis: 'y',
			trigger: 'hover',
			speed: 600
		});
	}

	if (screen.width <= 768) {
		$(".project-card").flip({
			axis: 'y',
			trigger: 'click',
			speed: 600
		});
	}

	$('.navbar-toggle-button').click(function() {
		$('.mobile-navbar').toggleClass('mobile-navbar-open');
		$(this).find('i').toggleClass('fa-bars fa-times')
	});

	$('.navbar-link').click(function() {
		$('.mobile-navbar').toggleClass('mobile-navbar-open');
	});

	$('a[href^="#"]').on('click',function(e){
		e.preventDefault();

		var target = this.hash; 
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target; 
		});
	});

});

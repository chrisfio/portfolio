
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
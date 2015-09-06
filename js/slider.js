$(document).ready(function(){
	var $images = $('#slider').children("img");

	var startSlider = function() {
		var sliderLength = $images.length;	
		runSlider(sliderLength,sliderLength);
	};

	var runSlider = function(current,loopPoint) {
		var loopImage = setTimeout(function() {
			runSlider(((current + 1) % loopPoint),loopPoint);
		},6000);

		var pauseSlider = function() {
			clearTimeout(loopImage);
		};

		var resumeSlider = function() {
			var loopImage = setTimeout(function() {
				runSlider(((current + 1) % loopPoint),loopPoint);
			},6000);
		};

		$('#slider').off('hover');
		$('#slider').hover(pauseSlider,resumeSlider);
		$images.eq((current - 1) % loopPoint).fadeOut(1000);
		setTimeout(function() {
			$images.eq(current % loopPoint).fadeIn(1000);
		},1000);
		loopImage();	
	};

	startSlider();
});
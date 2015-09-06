$(document).ready(function(){
	var $images = $('#slider').children("img");

	var startSlider = function() {
		var sliderLength = $images.length;	
		runSlider(sliderLength,sliderLength);
	};

	var runSlider = function(current,loopPoint) {
		$images.eq((current - 1) % loopPoint).fadeOut(1000);
		setTimeout(function() {
			$images.eq(current % loopPoint).fadeIn(1000);
		},1000);
		var loopImage = setTimeout(function() {
			runSlider(((current + 1) % loopPoint),loopPoint);
		},6000);
		loopImage();	
	};

	$('#slider').hover(pauseSlider,resumeSlider);

	var pauseSlider = function() {

	};

	var resumeSlider = function() {

	};

	startSlider();
});
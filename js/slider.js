$(document).ready(function(){
	var $images = $('#slider').children("img");

	var startSlider = function() {
		var sliderLength = $images.length;	
		runSlider(sliderLength,sliderLength);
	};

	var runSlider = function(current,loopPoint) {
		$images.eq((current - 1) % loopPoint).fadeOut(300);
		$images.eq(current % loopPoint).fadeIn(300);
		setTimeout(runSlider(((current + 1) % loopPoint),loopPoint),3000);	
	};

	startSlider();
});
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

		var prevImage = function() {
			clearTimeout(loopImage);
			var safeCurrent = current - 1;
			if (safeCurrent < 0) {
				safeCurrent = safeCurrent + loopPoint;
			};
			alert(safeCurrent);
			runSlider(((safeCurrent - 1) % loopPoint),loopPoint);
		};

		var nextImage = function() {
			clearTimeout(loopImage);
			var safeCurrent = current + 1;
			if (safeCurrent > loopPoint) {
				safeCurrent = safeCurrent - loopPoint;
			};
			alert(safeCurrent);
			runSlider(((current + 1) % loopPoint),loopPoint);
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
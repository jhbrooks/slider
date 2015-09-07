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
			runSlider(((current + 1) % loopPoint),loopPoint);
		};

		var prevImage = function() {
			clearTimeout(loopImage);
			var safePrev = current - 1;
			if (safePrev < 0) {
				safePrev = safePrev + loopPoint;
			};
			runSlider((safePrev % loopPoint),loopPoint);
		};

		var nextImage = function() {
			clearTimeout(loopImage);
			var safeNext = current + 1;
			if (safeNext >= loopPoint) {
				safeNext = safeNext - loopPoint;
			};
			runSlider((safeNext % loopPoint),loopPoint);
		};

		var safeFade = current - 1;

		if (safeFade < 0) {
				safeFade = safeFade + loopPoint;
		};

		$('#slider').off('hover');
		$('#slider').hover(pauseSlider,resumeSlider);
		$('a').off('click');
		$('a').click(function(event){
			event.preventDefault();
			if ($(this).hasClass('left')) {
				prevImage();
			} else {
				nextImage();
			};
		});
		
		$images.eq((safeFade) % loopPoint).fadeOut(1000);
		setTimeout(function() {
			$images.eq(current % loopPoint).fadeIn(1000);
		},1000);	
	};

	startSlider();
});
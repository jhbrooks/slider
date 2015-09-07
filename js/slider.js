$(document).ready(function(){
	var $images = $('#slider').children("img");
	var sliderLength = $images.length;

	var runSlider = function(current,loopPoint) {
		var loopImage = setTimeout(function() {
			$images.eq(current % loopPoint).fadeOut(1000);
			setTimeout(function() {
				$images.eq((current + 1) % loopPoint).fadeIn(1000);
			},1000);
			runSlider(((current + 1) % loopPoint),loopPoint);
		},6000);
		
		var pauseSlider = function() {
			clearTimeout(loopImage);
		};

		var resumeSlider = function() {
			runSlider((current % loopPoint),loopPoint);
		};
		
		var prevImage = function() {
			clearTimeout(loopImage);
			var safePrev = current - 1;
			if (safePrev < 0) {
				safePrev = safePrev + loopPoint;
			};
			$images.eq(current % loopPoint).fadeOut(1000);
			setTimeout(function() {
				$images.eq(safePrev % loopPoint).fadeIn(1000);
			},1000);
			runSlider((safePrev % loopPoint),loopPoint);
		};

		var nextImage = function() {
			clearTimeout(loopImage);
			var safeNext = current + 1;
			if (safeNext >= loopPoint) {
				safeNext = safeNext - loopPoint;
			};
			$images.eq(current % loopPoint).fadeOut(1000);
			setTimeout(function() {
				$images.eq(safeNext % loopPoint).fadeIn(1000);
			},1000);
			runSlider((safeNext % loopPoint),loopPoint);
		};
		
		$('#slider').off('mouseenter');
		$('#slider').off('mouseleave');
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
	};

	$images.eq(0).fadeIn(1000);
	setTimeout(function() {
		runSlider(0,sliderLength);
	}, 1000);
});
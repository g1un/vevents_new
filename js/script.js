$(document).ready(function() {

	//slider
	var slider = {
		"container": function(sliderId) {
			return $(sliderId);
		},
		// "item": $(".js-slider-item"),
		"options": function(sliderId) {
			return {
				slide: sliderId + " .js-slider-item",
				// appendArrows: sliderId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav _prev"></button>',
				nextArrow: '<button type="button" class="slider-nav _next"></button>'
			}
		},
		"run": function(sliderId) {
			this.container(sliderId).slick(this.options(sliderId));
		}
	};

	slider.run('#promo');
	slider.run('#news');

	//select
	var select = $('.js-select select');
	select.styler();
});
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
				nextArrow: '<button type="button" class="slider-nav _next"></button>',
				responsive: [{
					breakpoint: 601,
					settings: {
						dots: true,
						arrows: false
					}
				}]
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
	// select.styler();
	select.selectmenu({
		appendTo: '.js-select'
	});

	//close button action
	var close = {
		"closeBtn": $('.js-close'),
		"run": function() {
			this.closeBtn.on('click', function() {
				var closeObject = $(this).closest('.js-close-object');
				var bodyUnscroll = (closeObject.attr('data-html-unscroll') == "true");
				if(!closeObject.hasClass('_show')) {
					closeObject.addClass('_show');
					bodyUnscroll ? $('html').addClass('_unscroll') : '';
				} else {
					closeObject.removeClass('_show');
					bodyUnscroll ? $('html').removeClass('_unscroll') : '';
				}
			});
		}
	};
	close.run();

	//open button action
	var open = {
		"openBtn": $('[data-open-btn]'),
		"run": function() {
			this.openBtn.on('click', function() {
				var $this = $(this);
				var openObject = $($this.attr('data-open-btn'));
				var bodyUnscroll = (openObject.attr('data-html-unscroll') == "true");
				if(!openObject.hasClass('_show')) {
					openObject.addClass('_show');
					bodyUnscroll ? $('html').addClass('_unscroll') : '';
				} else {
					openObject.removeClass('_show');
					bodyUnscroll ? $('html').removeClass('_unscroll') : '';
				}
			});
		}
	};
	open.run();
});
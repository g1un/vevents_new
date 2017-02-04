$(document).ready(function() {

	//slider
	var slider = {
		"container": function(sliderId) {
			return $(sliderId);
		},
		// "item": $(".js-slider-item"),
		"options": function(sliderId, optionsType) {
			if(optionsType == 'case') {
				return {
					slide: sliderId + " .js-slider-item",
					prevArrow: '<button type="button" class="slider-nav _prev"></button>',
					nextArrow: '<button type="button" class="slider-nav _next"></button>',
					dots: true,
					responsive: [{
						breakpoint: 601,
						settings: {
							// dots: true,
							arrows: false
						}
					}]
				}
			} else {
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
			}
		},
		"run": function(sliderId, optionsType) {
			this.container(sliderId).slick(this.options(sliderId, optionsType));
		}
	};

	slider.run('#promo');
	slider.run('#news');
	slider.run('#case-slider', 'case');

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

	//case fixed slider
	var caseSlider = {
		"scrollPosition": $(window).scrollTop(),
		"caseContentHeight": $('.js-case-content').outerHeight(),
		"viewportHeight": $(window).height(),
		"slider": $('.js-case-slider'),
		"action": function() {
			$(window).scroll(function() {
				// if($(window).scrollTop() >= ($('.js-case-content').outerHeight() + 2*$('.js-case-content').offset().top - $(window).height())) {
				// 	$('.js-case-slider').addClass('_down');
				// } else {
				// 	$('.js-case-slider').removeClass('_down');
				// }
				// console.log($(window).width());
				// console.log($(window).outerWidth());
				if($(window).outerWidth() <= 1000) return;
				if(($(window).scrollTop() + $(window).height() > $('.footer').offset().top)) {
					$('.js-case-slider').addClass('_down');
				} else {
					$('.js-case-slider').removeClass('_down');
				}
			})
		}
	};
	caseSlider.action();
});
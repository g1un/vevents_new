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
	slider.run('#news-slider');
	slider.run('#case-slider', 'case');
	slider.run('#cases-slider', 'case');
	slider.run('#news-page-slider', 'case');

	//select
	var select = $('.js-select select');
	select.selectmenu({
		appendTo: '.js-select'
	});

	//main page select (list hiding/showing)
	var selectCases = {
		"select": $('[data-cases-select]'),
		"cases": $('[data-cases-list]'),
		"switch": function() {
			var _this = this;
			$('[data-cases-list="' + select.val() + '"]').show();
			_this.select.selectmenu({
				change: function( event, data ) {
					_this.cases.hide();
					$('[data-cases-list="' + data.item.value + '"]').show();
				}
			});
		}
	};
	selectCases.switch();

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
		"caseContentHeight": $('.js-grid-content').outerHeight(),
		"viewportHeight": $(window).height(),
		"slider": $('.js-grid-slider'),
		"action": function() {
			if($(window).outerWidth() <= 999) return;
			if(($(window).scrollTop() + $(window).height() > $('.footer').offset().top)) {
				$('.js-grid-slider').addClass('_down');
			} else {
				$('.js-grid-slider').removeClass('_down');
			}
			$(window).scroll(function() {
				if($(window).outerWidth() <= 999) return;
				if(($(window).scrollTop() + $(window).height() > $('.footer').offset().top)) {
					$('.js-grid-slider').addClass('_down');
				} else {
					$('.js-grid-slider').removeClass('_down');
				}
			})
		},
		"resize": function() {
			var _action = this.action;
			$(window).resize(function() {
				_action();
			})
		}
	};
	caseSlider.action();
	caseSlider.resize();

	//aside navigation
	var asideNav = {
		"links": $('.js-aside-nav [data-link]'),
		"action": function() {
			var _this = asideNav;
			var scrollPos = $(window).scrollTop();
			var windowHeight = $(window).height();
			var documentHeight = $(document).height();
			var linksLength = _this.links.length;
			for(var i=(linksLength-1); i>=0; i--) {
				var btn = $(_this.links[i]);
				var id = btn.attr('data-link');
				var section = $('#' + id);
				var sectionPos = section.offset().top;
				if(i == linksLength - 1) {
					if(scrollPos + windowHeight == documentHeight || scrollPos >= sectionPos) {
						_this.links.removeClass('_active');
						btn.addClass('_active');
						return;
					}
				} else if(scrollPos+96 >= sectionPos) {
					_this.links.removeClass('_active');
					btn.addClass('_active');
					return;
				}
			}
		},
		"run": function() {
			var _action = this.action;
			_action();
			$(window).scroll(function() {
				_action();
			})
		},
		"navTo": function() {
			var body = $("html, body");
			this.links.each(function() {
				$(this).on('click', function(e) {
					e.preventDefault();
					var sectionY = $('#' + $(this).attr('data-link')).offset().top - 48;
					body.animate(
						{scrollTop: sectionY}, (Math.abs($(window).scrollTop() - sectionY))/2
					);
				});
			});
		}
	};
	asideNav.run();
	asideNav.navTo();

	//scrollUp link
	var scrollUp = {
		"link": $('.js-scrollup'),
		"run": function() {
			var _this = this;
			_this.link.on('click', function(e) {
				e.preventDefault();
			});
			$(window).scroll(function() {
				if($(window).scrollTop() + $(window).height() == $(document).height()) {
					if(!_this.link.hasClass('_scrollup')) {
						_this.link.addClass('_scrollup');
						_this.link.text('Scroll Up');
						_this.link.on('click', function() {
							$('html, body').animate(
								{scrollTop: 0}, $(document).height() / 2
							);
						});
					}
				} else {
					if(_this.link.hasClass('_scrollup')) {
						_this.link.removeClass('_scrollup');
						_this.link.text('Scroll Down');
						_this.link.off('click');
						_this.link.on('click', function(e) {
							e.preventDefault();
						});
					}
				}
			});
		}
	};
	scrollUp.run();

	//news switcher
	var newsSwitcher = {
		"btn": $('[data-news-btn]'),
		"content": $('[data-news-content]'),
		"newsList": $('[data-news-list]'),
		"backBtn": $('[data-news-back]'),
		"slider": $('[data-news-slider]'),
		"toggle": function() {
			var _newsList = this.newsList;
			var _allBtns = this.btn;
			var _allContents = this.content;
			var _slider = this.slider;
			this.btn.on('click', function(e) {
				e.preventDefault();
				var _thisBtn = $(this);
				// $(this).toggleClass('_active');
				var showContent = $('[data-news-content="' + $(this).attr('data-news-btn') + '"]');
				if(!_thisBtn.hasClass('_active')) {
					_slider.addClass('_hidden');
					_allBtns.removeClass('_active');
					_thisBtn.addClass('_active');
					_allContents.removeClass('_show');
					showContent.addClass('_show');
					_newsList.addClass('_hidden-md');
					if($(window).outerWidth() <= 999) {
						// $('html, body').animate( {scrollTop: 0}, 250 );
						$('html, body').scrollTop(0);
					}
				} else {
					_slider.removeClass('_hidden');
					_thisBtn.removeClass('_active');
					showContent.removeClass('_show');
					_newsList.removeClass('_hidden-md');
				}
			});
			this.close();
		},
		"close": function() {
			var _newsList = this.newsList;
			var _btn = this.btn;
			var _slider = this.slider;
			this.backBtn.on('click', function(e) {
				e.preventDefault();
				_btn.removeClass('_active');
				_slider.removeClass('_hidden');
				_newsList.removeClass('_hidden-md');
				$('[data-news-content="' + $(this).attr('data-news-back') + '"]').removeClass('_show');
			});
		}
	};
	newsSwitcher.toggle();

	//form
	var formPopup = {
		"form": $('.js-form'),
		"formOpenBtn": $('.js-form-open'),
		"formCloseBtn": $('.js-form-close'),
		"clubBlur": $('.js-blur'),
		"footer": $('.footer'),
		"run": function() {
			var _this = this;
			this.formOpenBtn.on('click', function(e) {
				e.preventDefault();
				_this.form.addClass('_show');
				_this.form.fadeIn(300);
				_this.clubBlur.addClass('blur');
				_this.footer.addClass('blur');
				$('html').addClass('_unscroll-md');
			});
			this.formCloseBtn.on('click', function() {
				_this.form.removeClass('_show');
				_this.form.fadeOut(300);
				$('html').removeClass('_unscroll-md');
				_this.clubBlur.removeClass('blur');
				_this.footer.removeClass('blur');
			});
		}
	};
	formPopup.run();

	//Parallax
	if($('#parallax').length) {
		// init controller
		var controller = new ScrollMagic.Controller();
		// build tween
		var tween = new TimelineMax()
			.add([
				TweenMax.to('#parallax span:nth-child(2n)', 1, {y: 200}),
				TweenMax.to('#parallax span:nth-child(2n+1)', 1, {y: 300})
			]);
		// build scenes
		var scene = new ScrollMagic.Scene({triggerElement: "#parallax", duration: $('#parallax').height()})
			.setTween(tween)
			// .addIndicators() //debugging
			.addTo(controller);
	}
});
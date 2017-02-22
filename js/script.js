$(document).ready(function() {

	//slider
	var slider = {
		"container": function(sliderId) {
			return $(sliderId);
		},
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
							arrows: false
						}
					}]
				}
			} else if(optionsType == 'news') {
				return {
					slide: sliderId + " .js-slider-item",
					prevArrow: '<div class="slider-nav _prev js-slider-prev"><p></p></div>',
					nextArrow: '<div class="slider-nav _next js-slider-next"><p></p></div>',
					fade: true,
					responsive: [{
						breakpoint: 601,
						settings: {
							dots: true,
							arrows: false
						}
					}]
				}
			} else {
				return {
					slide: sliderId + " .js-slider-item",
					prevArrow: '<div class="slider-nav _prev js-slider-prev"><p></p></div>',
					nextArrow: '<div class="slider-nav _next js-slider-next"><p></p></div>',
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
	slider.run('#news-slider', 'news');
	slider.run('#case-slider', 'case');
	slider.run('#cases-slider', 'case');
	slider.run('#news-page-slider', 'case');

	//slider arrows with names
	var namedArrows = {
		"slider": $('.js-slider-arrow-names'),
		"naming": function() {
			var _this = this;
			var _slider = _this.slider;

			var appendText = function() {
				var prev = _this.slider.find('.js-slider-prev');
				var next = _this.slider.find('.js-slider-next');
				var _currentSlide = _slider.find('.js-slider-item.slick-active');
				var slides = _currentSlide.parent().find('.js-slider-item');
				var slidesLength = slides.length;
				var _prevSlide = _currentSlide.prev();
				var _nextSlide = _currentSlide.next();

				//if prev/next exist
				var _prevSlideText = _prevSlide.length ? _prevSlide.find('h4').text() : $(slides[slidesLength - 1]).find('h4').text();
				var _nextSlideText = _nextSlide.length ? _nextSlide.find('h4').text() : $(slides[0]).find('h4').text();

				_prevSlideText = _prevSlideText.split(' ');
				prev.find('p').empty();
				$.each(_prevSlideText, function(i, v) {
					prev.find('p').append($('<span>').text(v));
				});

				_nextSlideText = _nextSlideText.split(' ');
				next.find('p').empty();
				$.each(_nextSlideText, function(i, v) {
					next.find('p').append($('<span>').text(v));
				});
			};
			appendText();

			_slider.on('afterChange breakpoint', function(event, slick, currentSlide, nextSlide, breakpoint){
				appendText();
			});
		}
	};
	namedArrows.naming();

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
		},

		//arrows
		"arrowing": function() {
			var _slider = this.slider;
			if(_slider.length) {
				$(document).keydown(function(e) {
					switch(e.which) {
						case 37: // left
							_slider.slick('slickPrev');
							break;

						case 39: // right
							_slider.slick('slickNext');
							break;

						default: return; // exit this handler for other keys
					}
				});
			}
		}
	};
	caseSlider.action();
	caseSlider.resize();
	caseSlider.arrowing();

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
				TweenMax.to('#parallax span', 1, {y: 100})
			]);
		// build scenes
		var scene = new ScrollMagic.Scene({triggerElement: "#parallax", duration: $('#parallax').height()})
			.setTween(tween)
			// .addIndicators() //debugging
			.addTo(controller);
	}

	//scrollReveal
	if($('.js-sr:not(.footer):not(.principles)').length) {
		window.sr = ScrollReveal().reveal(
			'.js-sr',
			{
				mobile: false,
				distance: '100px',
				scale: 1,
				viewFactor: 0.1
			}
		);
	}
});
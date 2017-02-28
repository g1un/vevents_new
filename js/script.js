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

	var newsArrows = {
		titles: [],
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function() {
			this.$el = $('.js-slider-arrow-names');
			this.$slides = this.$el.find('.js-slider-item:not(.slick-cloned)');
			this.$firstSlide = $(this.$slides[0]);
			this.$lastSlide = $(this.$slides[this.$slides.length - 1]);
		},
		bindEvents: function() {
			this.$el.on('afterChange breakpoint', this.render.bind(this));
		},
		render: function() {
			this.getTitles();
			this.$prev = this.$el.find('.js-slider-prev p');
			this.$next = this.$el.find('.js-slider-next p');
			this.$prev.html(this.titles[0]);
			this.$next.html(this.titles[1]);
		},
		getTitles: function(event, slick, currentSlide, nextSlide, breakpoint) {
			var $activeSlide = this.$el.find('.js-slider-item.slick-active');
			var $prevSlide = $activeSlide.prev();
			var $nextSlide = $activeSlide.next();
			this.titles = [];
			this.titles
				.push(
					($prevSlide.length ? $prevSlide : this.$lastSlide).find('h4').text(),
					($nextSlide.length ? $nextSlide : this.$firstSlide).find('h4').text()
				);
			for(var i = 0; i < this.titles.length; i++) {
				this.titles[i] = this.wrapWord.bind(this.titles[i]);
			}
		},
		wrapWord: function() {
			return '<span>' + this.replace(/ /g, '</span><span>') + '</span>';
		}
	};
	newsArrows.init();

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

	//formErrors
	var formErrors = {
		list: [],
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function() {
			this.$el = $('.js-form form');
			this.$errors = this.$el.find('.help-block-error');
			this.$labels = this.$el.find('.js-form-label');
			this.$message = this.$el.find('.js-form-errors');
		},
		bindEvents: function() {
			this.$el.on('afterValidateAttribute beforeSubmit', this.getList.bind(this, e));
		},
		render: function() {
			this.$message.empty();
			for(var i = 0; i < this.list.length; i++) {
				this.$message.append(this.list[i]);
			}
		},
		getList: function(e) {
			var _this = this;
			setTimeout(function() {
				_this.list = [];
				for(var i = 0; i < _this.$errors.length; i++) {
					if(_this.$errors[i].innerText != '') {
						_this.list.push('<p class="help-block _sm">' + _this.$labels[i].innerText + ': ' + _this.$errors[i].innerText + '</p>');
					}
				}
				_this.render();
			}, 1);
		}
	};
	formErrors.init();

	//hashPopup
	var hashPopup = {
		hashValue: window.location.hash,
		init: function() {
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$html = $('html');
			this.$blur = this.$html.find('.js-blur, .footer');
			this.$el = this.$html.find(this.hashValue);
			this.$close = this.$el.find('.js-popup-close');
		},
		bindEvents: function() {
			if(this.$el.length > 0) {
				this.$el.addClass('_show');
				this.$html.addClass('_unscroll-md');
				this.$blur.addClass('blur');
				this.$close.on('click', this.closePopup.bind(this));
			}
		},
		closePopup: function() {
			this.$el.removeClass('_show');
			this.$html.removeClass('_unscroll-md');
			this.$blur.removeClass('blur');
		}
	};
	hashPopup.init();

	//share
	var shareButtons = {
		pUrl: location.href,
		pTitle: document.title,
		vk: {
			url: 'http://vkontakte.ru/share.php?'
		},
		fb: {
			url: 'https://www.facebook.com/sharer/sharer.php?s=100'
		},
		init: function() {
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$el = $('.js-share');
			this.$fb = this.$el.find('.js-share-fb');
			this.$vk = this.$el.find('.js-share-vk');
		},
		bindEvents: function() {
			this.$fb.on('click', this.getData.bind(this, 'fb'));
			this.$vk.on('click', this.getData.bind(this, 'vk'));
		},
		getData: function(net, e) {
			e.preventDefault();
			switch(net) {
				case 'fb':
					url = this.fb.url;
					url += '&p[title]=' + encodeURIComponent(this.pTitle);
					url += '&p[summary]=' + encodeURIComponent('');
					url += '&p[url]=' + encodeURIComponent(this.pUrl);
					url += '&p[images][0]=' + encodeURIComponent('');
					this.share(url);
					break;
				case 'vk':
					url = this.vk.url;
					url += 'url=' + encodeURIComponent(this.pUrl);
					url += '&title=' + encodeURIComponent(this.pTitle);
					url += '&description=' + encodeURIComponent('');
					url += '&image=' + encodeURIComponent('');
					url += '&noparse=false';
					this.share(url);
					break;
				default:
					return;
				break;
			}
		},
		share: function(url) {
			window.open(url,'','toolbar=0,status=0');
		}
	};
	shareButtons.init();

	//animated label
	var textLabel = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function() {
			this.$el = $('.js-form');
			this.$inputs = this.$el.find('.js-form-text input, .js-form-text textarea');
			this.$labels = this.$el.find('.js-form-text label');
		},
		bindEvents: function() {
			this.$inputs.change(this.render.bind(this));
			this.$labels.on('click', this.inputFocus.bind(this));
			this.$inputs.focus(this.inputFocus.bind(this));
			this.$inputs.blur(this.inputBlur.bind(this));
		},
		inputFocus: function(e) {
			this.currentElements.$control(e).addClass('_focused');
			var $input = this.currentElements.$input(e);
			if(!$input.is(":focus")) $input.focus();
		},
		inputBlur: function(e) {
			this.currentElements.$control(e).removeClass('_focused');
		},
		currentElements: {
			$control: function(e) {
				return $(e.target).closest('.js-form-text');
			},
			$input: function(e) {
				return this.$control(e).find('input');
			}
		},
		render: function() {
			for(var i = 0; i < this.$inputs.length; i++) {
				if(this.$inputs[i].value != '') {
					$(this.$inputs[i]).closest('.js-form-text').addClass('_has-value');
				} else {
					$(this.$inputs[i]).closest('.js-form-text').removeClass('_has-value');
				}
			}
		}
	};
	textLabel.init();

	//@todo
	//make it more general

	// js-no-link
	(function() {
		$('.js-no-link>a').on('click', function(e) {
			e.preventDefault();
		});
	})();

	//lazyload
	var lazyload = (function() {

		//cacheDom
		var $el = $('[data-lazyload]');
		var $slides = $el.find('.js-slider-item');
		var $slideBgs = $el.find('[data-src]');
		var $firstSlide = $($slides[1]);
		var $lastSlide = $($slides[$slides.length - 2]);
		var $firstClone = $($slides[0]);
		var $lastClone = $($slides[$slides.length - 1]);
		var $firstBg = $firstClone.find('[data-src]');
		var $lastBg = $lastClone.find('[data-src]');
		var clone = [false, false];
		var $activeSlide, $activeBg, path;
		var images = [];
		var loadingImages = [];
		var j = 0;

		//bind events
		$el.on('afterChange', load);

		load();

		//load
		function load() {
			$activeSlide = $el.find('.slick-active');
			$activeBg = $activeSlide.find('[data-src]');
			path = $activeBg.attr('data-src');

			if(!$activeSlide.hasClass('_loaded')) {
				$activeBg.hide();
				$activeBg.css('background-image', 'url("' + path + '")');
				$activeBg.imagesLoaded({background: true}, render);
			} else {
				$activeSlide.removeClass('_loading');
			}

			refreshClone($activeSlide, path);
		}

		//render
		function render() {
			$activeSlide.removeClass('_loading');
			$activeBg
				.fadeIn()
				.removeAttr('data-src');
			var i = 0;
			continueLoad(i);
			// addOnload(i);
		}

		//refreshClone
		function refreshClone($activeSlide, path) {
			if(!clone[0] && $activeSlide.index('.js-slider-item') == 1) {
				if(!$lastClone.hasClass('_loaded')) {
					$lastBg
						.css('background-image', 'url("' + path + '")')
						.removeAttr('data-src');
					clone[0] = true;
				} else {
					clone[0] = true;
				}
			}

			if(!clone[1] && $activeSlide.index('.js-slider-item') == $slides.length - 2) {
				if(!$firstClone.hasClass('_loaded')) {
					$firstBg
						.css('background-image', 'url("' + path + '")')
						.removeAttr('data-src');
					clone[1] = true;
				} else {
					clone[1] = true;
				}
			}
		}

		//continueLoad
		function continueLoad(i) {
			var limit = $slides.length;
			if(i >= limit) return false;

			if($($slides[i]).find('[data-src]').length) {
				var img = new Image();
				img.src = $($slideBgs[i]).attr('data-src');
				images.push(img);

				// loadingImages.push(i);

				// console.log(images, i, loadingImages);
				addOnload(i, img);
			} else {
				$($slides[i]).addClass('_loaded');
				$($slides[i]).removeClass('_loading');

				// console.log('else', i, loadingImages);
				i++;
				continueLoad(i);
			}

			// i++;
			// continueLoad(i);
			// console.log(i, loadingImages);
		}

		//add onload
		function addOnload(i, img) {
			// console.log(i);
			// var limit = loadingImages.length;
			// if(i >= limit) return false;

			// images[loadingImages[i]].onload = loadImage(i);
			img.onload = loadImage(i);

			// i++;
			// addOnload(i);
		}

		//loadImage
		function loadImage(i) {
			// var j = loadingImages[i];
			// console.log('i=' + i + ', lI='+loadingImages[i]);
			// loadingImages.shift();
			if($($slides[i]).find('[data-src]').length) {
				$($slideBgs[i]).css('background-image', 'url("' + $($slideBgs[i]).attr('data-src') + '")');
				$($slideBgs[i]).removeAttr('data-src');
			}
			$($slides[j]).addClass('_loaded');
			$($slides[j]).removeClass('_loading');

			i++;
			continueLoad(i);
		}
	})();

	// (function() {
	// 	var $slides = $('.js-slider-item');
	// 	for(var i = 0; i < $slides.length; i++) {
	// 		if($($slides[i]).hasClass('slick-active')) {
	// 			var $activeSlide = $($slides[i]);
	// 			break;
	// 		}
	// 	}
	// 	var $activeBg = $activeSlide.find('[data-src]');
	// 	var path = $activeBg.attr('data-src');
	// 	$activeBg.hide();
	// 	$activeBg.css('background-image', 'url("' + path + '")');
	// 	$activeBg.imagesLoaded({ background: true }, function() {
	// 		$activeSlide.removeClass('_loading');
	// 		$activeBg.fadeIn();
	// 		$activeBg.removeAttr('data-src');
	// 	});
	//
	// 	//clone
	// 	var clone = [false, false];
	// 	if(!clone[0] && $activeSlide.index('.js-slider-item') == 1) {
	// 		$($slides[$slides.length-1]).html($activeSlide.html());
	// 		$($slides[$slides.length-1]).find('[data-src]')
	// 			// .css('background-image', 'url("' + $($slides[$slides.length-1]).find('[data-src]').attr('data-src') + '")')
	// 			.removeAttr('data-src')
	// 			.show();
	// 		clone[0] = true;
	// 	}
	//
	//
	// 	$('.js-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 		for(var i = 0; i < $slides.length; i++) {
	// 			if($($slides[i]).hasClass('slick-active')) {
	// 				var $activeSlide = $($slides[i]);
	// 				break;
	// 			}
	// 		}
	// 		// var $nextSlide = $activeSlide.next();
	// 		var $activeBg = $activeSlide.find('[data-src]');
	// 		var path = $activeBg.attr('data-src');
	// 		$activeBg.hide();
	// 		$activeBg.css('background-image', 'url("' + path + '")');
	// 		$activeBg.imagesLoaded({ background: true }, function() {
	// 			$activeSlide.removeClass('_loading');
	// 			$activeBg.fadeIn();
	// 			$activeBg.removeAttr('data-src');
	// 		});
	//
	//
	// 		if(!clone[1] && $activeSlide.index('.js-slider-item') == $slides.length - 2) {
	// 			$($slides[0]).html($($slides[$slides.length - 2]).html());
	// 			$($slides[0]).find('[data-src]')
	// 			// .css('background-image', 'url("' + $($slides[0]).find('[data-src]').attr('data-src') + '")')
	// 				.removeAttr('data-src')
	// 				.show();
	// 			clone[1] = true;
	// 		}
	//
	// 	});
	// })();
	// $('.case__slide-image').Lazy();
});
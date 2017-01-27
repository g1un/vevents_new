/*script*/
$(document).ready( function () {
	// alert(window.devicePixelRatio + ' ' + screen.width + ' ' + screen.height + ' ' + window.orientation);
	// alert(window.devicePixelRatio + ' ' + window.innerWidth + ' ' + window.innerHeight + ' ' + window.orientation);
});

//slider
$('.js-slider-2').each(function (idx, item) {
	var carouselId = "slider-" + idx;
	this.id = carouselId;

	if($(this).hasClass('js-slider-not-infinite')) {
		$(this).slick({
			slide: "#" + carouselId + " .js-slider-item",
			appendArrows: "#" + carouselId + " .js-slider-nav",
			prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
			nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
			infinite: false,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
		$("#" + carouselId + " .js-slider-nav").appendTo($(this));
		$(this).on('breakpoint', function(event, slick, breakpoint){
			$("#" + carouselId + " .js-slider-nav").appendTo($(this));
		});
	} else {
		$(this).slick({
			slide: "#" + carouselId + " .js-slider-item",
			appendArrows: "#" + carouselId + " .js-slider-nav",
			prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
			nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
			infinite: true,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
		$("#" + carouselId + " .js-slider-nav").appendTo($(this));
		$(this).on('breakpoint', function(event, slick, breakpoint){
			$("#" + carouselId + " .js-slider-nav").appendTo($(this));
		});
	}
});

//formstyler
$('.js-select select').styler();

//scrollbar
$('.jq-selectbox__dropdown ul').enscroll({
	verticalTrackClass: 'scrollbar__track',
	verticalHandleClass: 'scrollbar__handle',
	drawScrollButtons: true,
	scrollUpButtonClass: 'scrollbar__up',
	scrollDownButtonClass: 'scrollbar__down'
});

//inputmask
$(".js-tel").mask("+7(999)999-99-99");
$(".js-login-code").mask("9 9 9 9");

//close
$('.js-close').on('click', function () {
	if($(this).parent().hasClass('js-block')) {
		var parent = $(this).parent();
		parent
			.removeClass('show')
			.css('top', -parent.outerHeight());
		setTimeout(function() {
			parent.hide();
		}, 500);
	} else {
		$(this).parent().hide();
		if($(this).closest('.js-logo-cite').length) {
			$('body').removeClass('overflow-hidden');
		}
	}
});

//js-up-message-close
var upMessage = {
	closer: $('.js-up-message-close'),
	upMessage: function() { return this.closer.parent(); },
	body: $('body'),
	bodyPadding: function() {
		this.body.addClass('padding');
	},
	slideUp: function() {
		var _this = this;
		this.upMessage()[0].style.marginTop = null;
		this.body.removeClass('padding');
		setTimeout(function() {
			_this.upMessage().hide();
		}, 1000);
	},
	slideDown: function() {
		this.upMessage().css('margin-top', 0);
	},
	run: function() {
		var _this = this;
		this.bodyPadding();
		this.slideDown();
		this.closer.on('click', function() {
			_this.slideUp();
		});
	}
};

//menu
$('.js-menu').css('top', -$('.js-menu').outerHeight());
$('.js-btn-menu')
	.on('click', function () {
		var $this = $('.js-menu');
		if($this.hasClass('show')) {
			$this
				.removeClass('show')
				.css('top', -$this.outerHeight());
			setTimeout(function() {
				$this.hide();
			}, 500);
		} else {
			$this
				.addClass('show')
				.show()
				.css('top', 0);
		}
		$('.js-block').not($this).each(function() {
			$(this).css('top', -$(this).outerHeight());
			$(this).hide();
			$(this).removeClass('show');
		})
	})
	.hover(
		function() {
			$(this).addClass('hover');
			$(this).removeClass('blur');
		},
		function() {
			$(this).addClass('blur');
			$(this).removeClass('hover');
		}
	);


//city
$('.js-city').css('top', -$('.js-city').outerHeight());
$('.js-btn-city').on('click', function (e) {
	e.preventDefault();
	var $this = $('.js-city');
	if($this.hasClass('show')) {
		$this
			.removeClass('show')
			.css('top', -$this.outerHeight());
		setTimeout(function() {
			$this.hide();
		}, 500);
	} else {
		$this
			.addClass('show')
			.show()
			.css('top', 0);
	}
	// $('.js-block').not($this).each(function() {
	// 	$(this).css('top', -$(this).outerHeight());
	// 	$(this).hide();
	// 	$(this).removeClass('show');
	// })
});

//login
$('.js-login').css('top', -$('.js-login').outerHeight());
$('.js-btn-login').on('click', function (e) {
	e.preventDefault();
	var $this = $('.js-login');
	if($this.hasClass('show')) {
		$this
			.removeClass('show')
			.css('top', -$this.outerHeight());
		setTimeout(function() {
			$this.hide();
		}, 500);
	} else {
		$this
			.addClass('show')
			.show()
			.css('top', 0);
	}
	$('.js-block').not($this).each(function() {
		$(this).css('top', -$(this).outerHeight());
		$(this).hide();
		$(this).removeClass('show');
	});
});

//cite
$('.js-logo').on('click', function (e) {
	$('.js-logo-cite').show();
	$('body').addClass('overflow-hidden');
});


//slider with repair places change
if($('.js-places-slider').length) {
	var sliderPlaces = $('.js-places-slider');
	sliderPlaces.slick({
		slide: ".js-places-slider .js-slider-item",
		appendArrows: ".js-places-slider .js-slider-nav",
		prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
		nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
		slidesToShow: 1,
		autoplay: true
	});

	var sliderPlacesArray = ["в спортзале", "дома", "в офисе"];
	var sliderPlacesText = $('.js-places-text');

	sliderPlaces.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlide = $('.js-places-slider .slick-current');

		if(currentSlide.hasClass('intro-slider__gym')) {
			sliderPlacesText.text(sliderPlacesArray[0]);
		} else
		if(currentSlide.hasClass('intro-slider__home')) {
			sliderPlacesText.text(sliderPlacesArray[1]);
		} else
		if(currentSlide.hasClass('intro-slider__office')) {
			sliderPlacesText.text(sliderPlacesArray[2]);
		}
	});
}

//prices slider
if($('.js-prices-slider').length) {
	var sliderPrices = $('.js-prices-slider');
	sliderPrices.slick({
		slide: ".js-prices-slider .js-slider-item",
		appendArrows: ".js-prices-slider .js-slider-nav",
		prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
		nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
		asForNav: '.js-prices-nav',
		infinite: true,
		slidesToShow: 1
	});

	var pricesNavDot = $('.js-prices-nav a');
	pricesNavDot.on('click', function (e) {
		e.preventDefault();
		pricesNavDot.removeClass('active');
		$(this).addClass('active');
		sliderPrices.slick('slickGoTo', $(this).parent().index());
	});

	sliderPrices.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlide = $('.js-prices-slider .slick-current');
		var defectInfoWrapper = $('.js-defect-info');

		if(currentSlide.hasClass('prices__watch')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[0]).addClass('active');
			$('.prices-device__watch').show();
		} else
		if(currentSlide.hasClass('prices__iphone')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[1]).addClass('active');
			$('.prices-device__iphone').show();
		} else
		if(currentSlide.hasClass('prices__ipad')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[2]).addClass('active');
			$('.prices-device__ipad').show();
		}
	});
}

//prices info
if($('.js-defect-points').length) {
	var defectPoint = $('.js-defect-points li');
	var defectInfo = $('.js-defect-info .two-columns');

	defectPoint.hover(
		function() {
			defectInfo.hide();
			$(defectInfo[$(this).index()]).show();
			$(defectInfo[$(this).index()]).children('p').show();
		},
		function() {
			defectInfo.show();
			$(defectInfo[$(this).index()]).children('p').hide();
		}
	);
}

//js-up
$('.js-up').on('click', function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

/*/script*/
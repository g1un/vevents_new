<<<<<<< 7a5ab0434ffe0c0e923b734bef194d16e8872093
$(document).ready(function(){var s={container:function(s){return $(s)},options:function(s,t){return"case"==t?{slide:s+" .js-slider-item",prevArrow:'<button type="button" class="slider-nav _prev"></button>',nextArrow:'<button type="button" class="slider-nav _next"></button>',dots:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]}:"news"==t?{slide:s+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',fade:!0,responsive:[{breakpoint:768,settings:{dots:!0,arrows:!1,adaptiveHeight:!0}}]}:{slide:s+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',responsive:[{breakpoint:768,settings:{dots:!0,arrows:!1}}]}},run:function(s,t){this.container(s).slick(this.options(s,t))}};s.run("#promo"),s.run("#news-slider","news"),s.run("#case-slider","case"),s.run("#cases-slider","case"),s.run("#news-page-slider","case");var t={titles:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-slider-arrow-names"),this.$slides=this.$el.find(".js-slider-item:not(.slick-cloned)"),this.$firstSlide=$(this.$slides[0]),this.$lastSlide=$(this.$slides[this.$slides.length-1])},bindEvents:function(){this.$el.on("afterChange breakpoint",this.render.bind(this))},render:function(){this.getTitles(),this.$prev=this.$el.find(".js-slider-prev p"),this.$next=this.$el.find(".js-slider-next p"),this.$prev.html(this.titles[0]),this.$next.html(this.titles[1])},getTitles:function(s,t,e,i,n){var o=this.$el.find(".js-slider-item.slick-active"),l=o.prev(),r=o.next();this.titles=[],this.titles.push((l.length?l:this.$lastSlide).find("h4").text(),(r.length?r:this.$firstSlide).find("h4").text());for(var a=0;a<this.titles.length;a++)this.titles[a]=this.wrapWord.bind(this.titles[a])},wrapWord:function(){return"<span>"+this.replace(/ /g,"</span><span>")+"</span>"}};t.init();var i=$(".js-select select");i.selectmenu({appendTo:".js-select"});var n={select:$("[data-cases-select]"),cases:$("[data-cases-list]"),switch:function(){var s=this;$('[data-cases-list="'+i.val()+'"]').show(),s.select.selectmenu({change:function(t,e){s.cases.hide(),$('[data-cases-list="'+e.item.value+'"]').show()}})}};n.switch();var o={closeBtn:$(".js-close"),run:function(){this.closeBtn.on("click",function(){var s=$(this).closest(".js-close-object"),t="true"==s.attr("data-html-unscroll");s.hasClass("_show")?(s.removeClass("_show"),t?$("html").removeClass("_unscroll"):""):(s.addClass("_show"),t?$("html").addClass("_unscroll"):"")})}};o.run();var l={openBtn:$("[data-open-btn]"),run:function(){this.openBtn.on("click",function(){var s=$(this),t=$(s.attr("data-open-btn")),e="true"==t.attr("data-html-unscroll");t.hasClass("_show")?(t.removeClass("_show"),e?$("html").removeClass("_unscroll"):""):(t.addClass("_show"),e?$("html").addClass("_unscroll"):"")})}};l.run();var r={scrollPosition:$(window).scrollTop(),caseContentHeight:$(".js-grid-content").outerHeight(),viewportHeight:$(window).height(),slider:$(".js-grid-slider"),action:function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"),$(window).scroll(function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"))}))},resize:function(){var s=this.action;$(window).resize(function(){s()})},arrowing:function(){var s=this.slider;s.length&&$(document).keydown(function(t){switch(t.which){case 37:s.slick("slickPrev");break;case 39:s.slick("slickNext");break;default:return}})}};r.action(),r.resize(),r.arrowing();var a={links:$(".js-aside-nav [data-link]"),action:function(){for(var s=a,t=$(window).scrollTop(),e=$(window).height(),i=$(document).height(),n=s.links.length,o=n-1;o>=0;o--){var l=$(s.links[o]),r=l.attr("data-link"),c=$("#"+r),h=c.offset().top;if(o==n-1){if(t+e==i||t>=h)return s.links.removeClass("_active"),void l.addClass("_active")}else if(t+96>=h)return s.links.removeClass("_active"),void l.addClass("_active")}},run:function(){var s=this.action;s(),$(window).scroll(function(){s()})},navTo:function(){var s=$("html, body");this.links.each(function(){$(this).on("click",function(t){t.preventDefault();var e=$("#"+$(this).attr("data-link")).offset().top-48;s.animate({scrollTop:e},Math.abs($(window).scrollTop()-e)/2)})})}};a.run(),a.navTo();var c={link:$(".js-scrollup"),run:function(){var s=this;s.link.on("click",function(s){s.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()?s.link.hasClass("_scrollup")||(s.link.addClass("_scrollup"),s.link.html("<span></span>Back to top"),s.link.on("click",function(){$("html, body").animate({scrollTop:0},$(document).height()/2)})):s.link.hasClass("_scrollup")&&(s.link.removeClass("_scrollup"),s.link.html("<span></span>Scroll Down"),s.link.off("click"),s.link.on("click",function(s){s.preventDefault()}))})}};c.run();var h={btn:$("[data-news-btn]"),content:$("[data-news-content]"),newsList:$("[data-news-list]"),backBtn:$("[data-news-back]"),slider:$("[data-news-slider]"),toggle:function(){var s=this.newsList,t=this.btn,e=this.content,i=this.slider;this.btn.on("click",function(n){n.preventDefault();var o=$(this),l=$('[data-news-content="'+$(this).attr("data-news-btn")+'"]');o.hasClass("_active")?(i.removeClass("_hidden"),o.removeClass("_active"),l.removeClass("_show"),s.removeClass("_hidden-md")):(i.addClass("_hidden"),t.removeClass("_active"),o.addClass("_active"),e.removeClass("_show"),l.addClass("_show"),s.addClass("_hidden-md"),$(window).outerWidth()<=999&&$("html, body").scrollTop(0))}),this.close()},close:function(){var s=this.newsList,t=this.btn,e=this.slider;this.backBtn.on("click",function(i){i.preventDefault(),t.removeClass("_active"),e.removeClass("_hidden"),s.removeClass("_hidden-md"),$('[data-news-content="'+$(this).attr("data-news-back")+'"]').removeClass("_show")})}};h.toggle();var d={form:$(".js-form"),formOpenBtn:$(".js-form-open"),formCloseBtn:$(".js-form-close"),clubBlur:$(".js-blur"),footer:$(".footer"),run:function(){var s=this;this.formOpenBtn.on("click",function(t){t.preventDefault(),s.form.addClass("_show"),s.form.fadeIn(300),s.clubBlur.addClass("blur"),s.footer.addClass("blur"),$("html").addClass("_unscroll-md")}),this.formCloseBtn.on("click",function(){s.form.removeClass("_show"),s.form.fadeOut(300),$("html").removeClass("_unscroll-md"),s.clubBlur.removeClass("blur"),s.footer.removeClass("blur")})}};if(d.run(),$("#parallax").length){var u=new ScrollMagic.Controller,f=(new TimelineMax).add([TweenMax.to("#parallax span",1,{y:100})]);new ScrollMagic.Scene({triggerElement:"#parallax",duration:$("#parallax").height()}).setTween(f).addTo(u)}$(".js-sr:not(.footer):not(.principles)").length&&(window.sr=ScrollReveal().reveal(".js-sr",{mobile:!1,distance:"100px",scale:1,viewFactor:.1}));var p={list:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form form"),this.$errors=this.$el.find(".help-block-error"),this.$labels=this.$el.find(".js-form-label"),this.$message=this.$el.find(".js-form-errors")},bindEvents:function(){this.$el.on("afterValidateAttribute beforeSubmit",this.getList.bind(this,e))},render:function(){this.$message.empty();for(var s=0;s<this.list.length;s++)this.$message.append(this.list[s])},getList:function(s){var t=this;setTimeout(function(){t.list=[];for(var s=0;s<t.$errors.length;s++)""!=t.$errors[s].innerText&&t.list.push('<p class="help-block _sm">'+t.$labels[s].innerText+": "+t.$errors[s].innerText+"</p>");t.render()},1)}};p.init();var v={hashValue:window.location.hash,init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$html=$("html"),this.$blur=this.$html.find(".js-blur, .footer"),this.$el=this.$html.find(this.hashValue),this.$close=this.$el.find(".js-popup-close")},bindEvents:function(){this.$el.length>0&&(this.$el.addClass("_show"),this.$html.addClass("_unscroll-md"),this.$blur.addClass("blur"),this.$close.on("click",this.closePopup.bind(this)))},closePopup:function(){this.$el.removeClass("_show"),this.$html.removeClass("_unscroll-md"),this.$blur.removeClass("blur")}};v.init();var m={pUrl:location.href,pTitle:document.title,vk:{url:"http://vkontakte.ru/share.php?"},fb:{url:"https://www.facebook.com/sharer/sharer.php?s=100"},init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$el=$(".js-share"),this.$fb=this.$el.find(".js-share-fb"),this.$vk=this.$el.find(".js-share-vk")},bindEvents:function(){this.$fb.on("click",this.getData.bind(this,"fb")),this.$vk.on("click",this.getData.bind(this,"vk"))},getData:function(s,t){switch(t.preventDefault(),s){case"fb":url=this.fb.url,url+="&p[title]="+encodeURIComponent(this.pTitle),url+="&p[summary]="+encodeURIComponent(""),url+="&p[url]="+encodeURIComponent(this.pUrl),url+="&p[images][0]="+encodeURIComponent(""),this.share(url);break;case"vk":url=this.vk.url,url+="url="+encodeURIComponent(this.pUrl),url+="&title="+encodeURIComponent(this.pTitle),url+="&description="+encodeURIComponent(""),url+="&image="+encodeURIComponent(""),url+="&noparse=false",this.share(url);break;default:return}},share:function(s){window.open(s,"","toolbar=0,status=0")}};m.init();var w={init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form"),this.$inputs=this.$el.find(".js-form-text input, .js-form-text textarea"),this.$labels=this.$el.find(".js-form-text label")},bindEvents:function(){this.$inputs.change(this.render.bind(this)),this.$labels.on("click",this.inputFocus.bind(this)),this.$inputs.focus(this.inputFocus.bind(this)),this.$inputs.blur(this.inputBlur.bind(this))},inputFocus:function(s){this.currentElements.$control(s).addClass("_focused");var t=this.currentElements.$input(s);t.is(":focus")||t.focus()},inputBlur:function(s){this.currentElements.$control(s).removeClass("_focused")},currentElements:{$control:function(s){return $(s.target).closest(".js-form-text")},$input:function(s){return this.$control(s).find("input")}},render:function(){for(var s=0;s<this.$inputs.length;s++)""!=this.$inputs[s].value?$(this.$inputs[s]).closest(".js-form-text").addClass("_has-value"):$(this.$inputs[s]).closest(".js-form-text").removeClass("_has-value")}};w.init(),function(){function s(){e.fadeOut(),t.removeClass("_unscroll-md")}var t=$("html"),e=t.find(".js-popup-simple"),i=e.find(".js-close");e.hasClass("_show")&&$(window).outerWidth()>=768&&(e.fadeIn(),t.addClass("_unscroll-md")),i.on("click",s)}()});
=======
$(document).ready(function(){var t={container:function(t){return $(t)},options:function(t,s){return"case"==s?{slide:t+" .js-slider-item",prevArrow:'<button type="button" class="slider-nav _prev"></button>',nextArrow:'<button type="button" class="slider-nav _next"></button>',dots:!0,responsive:[{breakpoint:601,settings:{arrows:!1}}]}:"news"==s?{slide:t+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',fade:!0,responsive:[{breakpoint:601,settings:{dots:!0,arrows:!1}}]}:{slide:t+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',responsive:[{breakpoint:601,settings:{dots:!0,arrows:!1}}]}},run:function(t,s){this.container(t).slick(this.options(t,s))}};t.run("#promo"),t.run("#news-slider","news"),t.run("#case-slider","case"),t.run("#cases-slider","case"),t.run("#news-page-slider","case");var s={titles:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-slider-arrow-names"),this.$slides=this.$el.find(".js-slider-item:not(.slick-cloned)"),this.$firstSlide=$(this.$slides[0]),this.$lastSlide=$(this.$slides[this.$slides.length-1])},bindEvents:function(){this.$el.on("afterChange breakpoint",this.render.bind(this))},render:function(){this.getTitles(),this.$prev=this.$el.find(".js-slider-prev p"),this.$next=this.$el.find(".js-slider-next p"),this.$prev.html(this.titles[0]),this.$next.html(this.titles[1])},getTitles:function(t,s,e,i,n){var o=this.$el.find(".js-slider-item.slick-active"),r=o.prev(),l=o.next();this.titles=[],this.titles.push((r.length?r:this.$lastSlide).find("h4").text(),(l.length?l:this.$firstSlide).find("h4").text());for(var a=0;a<this.titles.length;a++)this.titles[a]=this.wrapWord.bind(this.titles[a])},wrapWord:function(){return"<span>"+this.replace(/ /g,"</span><span>")+"</span>"}};s.init();var i=$(".js-select select");i.selectmenu({appendTo:".js-select"});var n={select:$("[data-cases-select]"),cases:$("[data-cases-list]"),switch:function(){var t=this;$('[data-cases-list="'+i.val()+'"]').show(),t.select.selectmenu({change:function(s,e){t.cases.hide(),$('[data-cases-list="'+e.item.value+'"]').show()}})}};n.switch();var o={closeBtn:$(".js-close"),run:function(){this.closeBtn.on("click",function(){var t=$(this).closest(".js-close-object"),s="true"==t.attr("data-html-unscroll");t.hasClass("_show")?(t.removeClass("_show"),s?$("html").removeClass("_unscroll"):""):(t.addClass("_show"),s?$("html").addClass("_unscroll"):"")})}};o.run();var r={openBtn:$("[data-open-btn]"),run:function(){this.openBtn.on("click",function(){var t=$(this),s=$(t.attr("data-open-btn")),e="true"==s.attr("data-html-unscroll");s.hasClass("_show")?(s.removeClass("_show"),e?$("html").removeClass("_unscroll"):""):(s.addClass("_show"),e?$("html").addClass("_unscroll"):"")})}};r.run();var l={scrollPosition:$(window).scrollTop(),caseContentHeight:$(".js-grid-content").outerHeight(),viewportHeight:$(window).height(),slider:$(".js-grid-slider"),action:function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"),$(window).scroll(function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"))}))},resize:function(){var t=this.action;$(window).resize(function(){t()})},arrowing:function(){var t=this.slider;t.length&&$(document).keydown(function(s){switch(s.which){case 37:t.slick("slickPrev");break;case 39:t.slick("slickNext");break;default:return}})}};l.action(),l.resize(),l.arrowing();var a={links:$(".js-aside-nav [data-link]"),action:function(){for(var t=a,s=$(window).scrollTop(),e=$(window).height(),i=$(document).height(),n=t.links.length,o=n-1;o>=0;o--){var r=$(t.links[o]),l=r.attr("data-link"),c=$("#"+l),d=c.offset().top;if(o==n-1){if(s+e==i||s>=d)return t.links.removeClass("_active"),void r.addClass("_active")}else if(s+96>=d)return t.links.removeClass("_active"),void r.addClass("_active")}},run:function(){var t=this.action;t(),$(window).scroll(function(){t()})},navTo:function(){var t=$("html, body");this.links.each(function(){$(this).on("click",function(s){s.preventDefault();var e=$("#"+$(this).attr("data-link")).offset().top-48;t.animate({scrollTop:e},Math.abs($(window).scrollTop()-e)/2)})})}};a.run(),a.navTo();var c={link:$(".js-scrollup"),run:function(){var t=this;t.link.on("click",function(t){t.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()?t.link.hasClass("_scrollup")||(t.link.addClass("_scrollup"),t.link.text("Scroll Up"),t.link.on("click",function(){$("html, body").animate({scrollTop:0},$(document).height()/2)})):t.link.hasClass("_scrollup")&&(t.link.removeClass("_scrollup"),t.link.text("Scroll Down"),t.link.off("click"),t.link.on("click",function(t){t.preventDefault()}))})}};c.run();var d={btn:$("[data-news-btn]"),content:$("[data-news-content]"),newsList:$("[data-news-list]"),backBtn:$("[data-news-back]"),slider:$("[data-news-slider]"),toggle:function(){var t=this.newsList,s=this.btn,e=this.content,i=this.slider;this.btn.on("click",function(n){n.preventDefault();var o=$(this),r=$('[data-news-content="'+$(this).attr("data-news-btn")+'"]');o.hasClass("_active")?(i.removeClass("_hidden"),o.removeClass("_active"),r.removeClass("_show"),t.removeClass("_hidden-md")):(i.addClass("_hidden"),s.removeClass("_active"),o.addClass("_active"),e.removeClass("_show"),r.addClass("_show"),t.addClass("_hidden-md"),$(window).outerWidth()<=999&&$("html, body").scrollTop(0))}),this.close()},close:function(){var t=this.newsList,s=this.btn,e=this.slider;this.backBtn.on("click",function(i){i.preventDefault(),s.removeClass("_active"),e.removeClass("_hidden"),t.removeClass("_hidden-md"),$('[data-news-content="'+$(this).attr("data-news-back")+'"]').removeClass("_show")})}};d.toggle();var h={form:$(".js-form"),formOpenBtn:$(".js-form-open"),formCloseBtn:$(".js-form-close"),clubBlur:$(".js-blur"),footer:$(".footer"),run:function(){var t=this;this.formOpenBtn.on("click",function(s){s.preventDefault(),t.form.addClass("_show"),t.form.fadeIn(300),t.clubBlur.addClass("blur"),t.footer.addClass("blur"),$("html").addClass("_unscroll-md")}),this.formCloseBtn.on("click",function(){t.form.removeClass("_show"),t.form.fadeOut(300),$("html").removeClass("_unscroll-md"),t.clubBlur.removeClass("blur"),t.footer.removeClass("blur")})}};if(h.run(),$("#parallax").length){var u=new ScrollMagic.Controller,f=(new TimelineMax).add([TweenMax.to("#parallax span",1,{y:100})]);new ScrollMagic.Scene({triggerElement:"#parallax",duration:$("#parallax").height()}).setTween(f).addTo(u)}$(".js-sr:not(.footer):not(.principles)").length&&(window.sr=ScrollReveal().reveal(".js-sr",{mobile:!1,distance:"100px",scale:1,viewFactor:.1}));var v={list:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form form"),this.$errors=this.$el.find(".help-block-error"),this.$labels=this.$el.find(".js-form-label"),this.$message=this.$el.find(".js-form-errors")},bindEvents:function(){this.$el.on("afterValidateAttribute beforeSubmit",this.getList.bind(this,e))},render:function(){this.$message.empty();for(var t=0;t<this.list.length;t++)this.$message.append(this.list[t])},getList:function(t){var s=this;setTimeout(function(){s.list=[];for(var t=0;t<s.$errors.length;t++)""!=s.$errors[t].innerText&&s.list.push('<p class="help-block _sm">'+s.$labels[t].innerText+": "+s.$errors[t].innerText+"</p>");s.render()},1)}};v.init();var p={hashValue:window.location.hash,init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$html=$("html"),this.$blur=this.$html.find(".js-blur, .footer"),this.$el=this.$html.find(this.hashValue),this.$close=this.$el.find(".js-popup-close")},bindEvents:function(){this.$el.length>0&&(this.$el.addClass("_show"),this.$html.addClass("_unscroll-md"),this.$blur.addClass("blur"),this.$close.on("click",this.closePopup.bind(this)))},closePopup:function(){this.$el.removeClass("_show"),this.$html.removeClass("_unscroll-md"),this.$blur.removeClass("blur")}};p.init();var m={pUrl:location.href,pTitle:document.title,vk:{url:"http://vkontakte.ru/share.php?"},fb:{url:"https://www.facebook.com/sharer/sharer.php?s=100"},init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$el=$(".js-share"),this.$fb=this.$el.find(".js-share-fb"),this.$vk=this.$el.find(".js-share-vk")},bindEvents:function(){this.$fb.on("click",this.getData.bind(this,"fb")),this.$vk.on("click",this.getData.bind(this,"vk"))},getData:function(t,s){switch(s.preventDefault(),t){case"fb":url=this.fb.url,url+="&p[title]="+encodeURIComponent(this.pTitle),url+="&p[summary]="+encodeURIComponent(""),url+="&p[url]="+encodeURIComponent(this.pUrl),url+="&p[images][0]="+encodeURIComponent(""),this.share(url);break;case"vk":url=this.vk.url,url+="url="+encodeURIComponent(this.pUrl),url+="&title="+encodeURIComponent(this.pTitle),url+="&description="+encodeURIComponent(""),url+="&image="+encodeURIComponent(""),url+="&noparse=false",this.share(url);break;default:return}},share:function(t){window.open(t,"","toolbar=0,status=0")}};m.init();var w={init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form"),this.$inputs=this.$el.find(".js-form-text input, .js-form-text textarea"),this.$labels=this.$el.find(".js-form-text label")},bindEvents:function(){this.$inputs.change(this.render.bind(this)),this.$labels.on("click",this.inputFocus.bind(this)),this.$inputs.focus(this.inputFocus.bind(this)),this.$inputs.blur(this.inputBlur.bind(this))},inputFocus:function(t){this.currentElements.$control(t).addClass("_focused");var s=this.currentElements.$input(t);s.is(":focus")||s.focus()},inputBlur:function(t){this.currentElements.$control(t).removeClass("_focused")},currentElements:{$control:function(t){return $(t.target).closest(".js-form-text")},$input:function(t){return this.$control(t).find("input")}},render:function(){for(var t=0;t<this.$inputs.length;t++)""!=this.$inputs[t].value?$(this.$inputs[t]).closest(".js-form-text").addClass("_has-value"):$(this.$inputs[t]).closest(".js-form-text").removeClass("_has-value")}};w.init(),function(){$(".js-no-link>a").on("click",function(t){t.preventDefault()})}();(function(){function t(){i=r.find(".slick-active"),n=i.find("[data-src]"),o=n.attr("data-src"),n.hide(),n.css("background-image",'url("'+o+'")'),n.imagesLoaded({background:!0},s),e(i,o)}function s(){i.removeClass("_loading"),n.fadeIn().removeAttr("data-src")}function e(t,s){u[0]||1!=t.index(".js-slider-item")||(h.css("background-image",'url("'+s+'")').removeAttr("data-src"),u[0]=!0),u[1]||t.index(".js-slider-item")!=l.length-2||(d.css("background-image",'url("'+s+'")').removeAttr("data-src"),u[1]=!0)}var i,n,o,r=$("[data-lazyload]"),l=r.find(".js-slider-item"),a=($(l[1]),$(l[l.length-2]),$(l[0])),c=$(l[l.length-1]),d=a.find("[data-src]"),h=c.find("[data-src]"),u=[!1,!1];r.on("afterChange",t),t()})()});
>>>>>>> lazyload & active like hover in nav

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
		// var images = [];
		// var loadingImages = [];
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
				$activeBg
					.removeAttr('data-src')
					.css('background-image', 'url("' + path + '")');
				var img = new Image();
				img.src = path;
				img.onload = function() { render($activeSlide, $activeBg) }.bind(this);
				// $activeBg.imagesLoaded({background: true}, render($activeSlide, $activeBg));
			} else {
				$activeSlide.removeClass('_loading');
			}

			refreshClone($activeSlide, path);
		}

		//render
		function render(slide, bg) {
			console.log('loaded: ' + slide.index('.js-slider-item'));
			slide.removeClass('_loading');
			bg.fadeIn();

			var i = 0;
			// continueLoad(i);
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
				$($slideBgs[i]).removeAttr('data-src');

				img.onload = function() { loadImage(i, img.src) };
			} else {
				$($slides[i]).addClass('_loaded');
				$($slides[i]).removeClass('_loading');

				i++;
				continueLoad(i);
			}
		}

		//loadImage
		function loadImage(i, src) {
			if(!$($slides[i]).hasClass('_loaded')) {
				$($slideBgs[i]).css('background-image', 'url("' + src + '")');
			}
			$($slides[j]).addClass('_loaded');
			$($slides[j]).removeClass('_loading');
			$($slideBgs[i]).show();

			i++;
			continueLoad(i);
		}
	})();
});
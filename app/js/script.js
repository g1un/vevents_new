$(document).ready(function(){var s={container:function(s){return $(s)},options:function(s,t){return"case"==t?{slide:s+" .js-slider-item",prevArrow:'<button type="button" class="slider-nav _prev"></button>',nextArrow:'<button type="button" class="slider-nav _next"></button>',dots:!0,responsive:[{breakpoint:601,settings:{arrows:!1}}]}:{slide:s+" .js-slider-item",prevArrow:'<button type="button" class="slider-nav _prev"></button>',nextArrow:'<button type="button" class="slider-nav _next"></button>',responsive:[{breakpoint:601,settings:{dots:!0,arrows:!1}}]}},run:function(s,t){this.container(s).slick(this.options(s,t))}};s.run("#promo"),s.run("#news-slider"),s.run("#case-slider","case"),s.run("#cases-slider","case"),s.run("#news-page-slider","case");var t=$(".js-select select");t.selectmenu({appendTo:".js-select"});var n={closeBtn:$(".js-close"),run:function(){this.closeBtn.on("click",function(){var s=$(this).closest(".js-close-object"),t="true"==s.attr("data-html-unscroll");s.hasClass("_show")?(s.removeClass("_show"),t?$("html").removeClass("_unscroll"):""):(s.addClass("_show"),t?$("html").addClass("_unscroll"):"")})}};n.run();var o={openBtn:$("[data-open-btn]"),run:function(){this.openBtn.on("click",function(){var s=$(this),t=$(s.attr("data-open-btn")),n="true"==t.attr("data-html-unscroll");t.hasClass("_show")?(t.removeClass("_show"),n?$("html").removeClass("_unscroll"):""):(t.addClass("_show"),n?$("html").addClass("_unscroll"):"")})}};o.run();var e={scrollPosition:$(window).scrollTop(),caseContentHeight:$(".js-grid-content").outerHeight(),viewportHeight:$(window).height(),slider:$(".js-grid-slider"),action:function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"),$(window).scroll(function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"))}))},resize:function(){var s=this.action;$(window).resize(function(){s()})}};e.action(),e.resize();var l={links:$(".js-aside-nav [data-link]"),action:function(){for(var s=l,t=$(window).scrollTop(),n=$(window).height(),o=$(document).height(),e=s.links.length,a=e-1;a>=0;a--){var i=$(s.links[a]),r=i.attr("data-link"),c=$("#"+r),d=c.offset().top;if(a==e-1){if(t+n==o||t>=d)return s.links.removeClass("_active"),void i.addClass("_active")}else if(t+96>=d)return s.links.removeClass("_active"),void i.addClass("_active")}},run:function(){var s=this.action;s(),$(window).scroll(function(){s()})},navTo:function(){var s=$("html, body");this.links.each(function(){$(this).on("click",function(t){t.preventDefault();var n=$("#"+$(this).attr("data-link")).offset().top-48;s.animate({scrollTop:n},Math.abs($(window).scrollTop()-n)/2)})})}};l.run(),l.navTo();var a={link:$(".js-scrollup"),run:function(){var s=this;s.link.on("click",function(s){s.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()?s.link.hasClass("_scrollup")||(s.link.addClass("_scrollup"),s.link.text("Scroll Up"),s.link.on("click",function(){$("html, body").animate({scrollTop:0},$(document).height()/2)})):s.link.hasClass("_scrollup")&&(s.link.removeClass("_scrollup"),s.link.text("Scroll Down"),s.link.off("click"),s.link.on("click",function(s){s.preventDefault()}))})}};a.run();var i={btn:$("[data-news-btn]"),content:$("[data-news-content]"),newsList:$("[data-news-list]"),backBtn:$("[data-news-back]"),slider:$("[data-news-slider]"),toggle:function(){var s=this.newsList,t=this.btn,n=this.content,o=this.slider;this.btn.on("click",function(e){e.preventDefault();var l=$(this),a=$('[data-news-content="'+$(this).attr("data-news-btn")+'"]');l.hasClass("_active")?(o.removeClass("_hidden"),l.removeClass("_active"),a.removeClass("_show"),s.removeClass("_hidden-md")):(o.addClass("_hidden"),t.removeClass("_active"),l.addClass("_active"),n.removeClass("_show"),a.addClass("_show"),s.addClass("_hidden-md"),$(window).outerWidth()<=999&&$("html, body").scrollTop(0))}),this.close()},close:function(){var s=this.newsList,t=this.btn,n=this.slider;this.backBtn.on("click",function(o){o.preventDefault(),t.removeClass("_active"),n.removeClass("_hidden"),s.removeClass("_hidden-md"),$('[data-news-content="'+$(this).attr("data-news-back")+'"]').removeClass("_show")})}};i.toggle();var r={form:$(".js-form"),formOpenBtn:$(".js-form-open"),formCloseBtn:$(".js-form-close"),clubBlur:$(".js-blur"),footer:$(".footer"),run:function(){var s=this;this.formOpenBtn.on("click",function(t){t.preventDefault(),s.form.addClass("_show"),s.form.fadeIn(300),s.clubBlur.addClass("blur"),s.footer.addClass("blur"),$("html").addClass("_unscroll-md")}),this.formCloseBtn.on("click",function(){s.form.removeClass("_show"),s.form.fadeOut(300),$("html").removeClass("_unscroll-md"),s.clubBlur.removeClass("blur"),s.footer.removeClass("blur")})}};r.run();var c=new ScrollMagic.Controller,d=(new TimelineMax).add([TweenMax.to("#parallax span:nth-child(2n)",1,{y:200}),TweenMax.to("#parallax span:nth-child(2n+1)",1,{y:300})]);new ScrollMagic.Scene({triggerElement:"#parallax",duration:$("#parallax").height()}).setTween(d).addTo(c)});
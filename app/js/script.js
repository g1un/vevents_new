$(document).ready(function(){var s={container:function(s){return $(s)},options:function(s,t){return"case"==t?{slide:s+" .js-slider-item",prevArrow:'<button type="button" class="slider-nav _prev"></button>',nextArrow:'<button type="button" class="slider-nav _next"></button>',dots:!0,responsive:[{breakpoint:601,settings:{arrows:!1}}]}:"news"==t?{slide:s+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',fade:!0,responsive:[{breakpoint:601,settings:{dots:!0,arrows:!1}}]}:{slide:s+" .js-slider-item",prevArrow:'<div class="slider-nav _prev js-slider-prev"><p></p></div>',nextArrow:'<div class="slider-nav _next js-slider-next"><p></p></div>',responsive:[{breakpoint:601,settings:{dots:!0,arrows:!1}}]}},run:function(s,t){this.container(s).slick(this.options(s,t))}};s.run("#promo"),s.run("#news-slider","news"),s.run("#case-slider","case"),s.run("#cases-slider","case"),s.run("#news-page-slider","case");var t={titles:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-slider-arrow-names"),this.$slides=this.$el.find(".js-slider-item:not(.slick-cloned)"),this.$firstSlide=$(this.$slides[0]),this.$lastSlide=$(this.$slides[this.$slides.length-1])},bindEvents:function(){this.$el.on("afterChange breakpoint",this.render.bind(this))},render:function(){this.getTitles(),this.$prev=this.$el.find(".js-slider-prev p"),this.$next=this.$el.find(".js-slider-next p"),this.$prev.html(this.titles[0]),this.$next.html(this.titles[1])},getTitles:function(s,t,e,i,n){var o=this.$el.find(".js-slider-item.slick-active"),l=o.prev(),r=o.next();this.titles=[],this.titles.push((l.length?l:this.$lastSlide).find("h4").text(),(r.length?r:this.$firstSlide).find("h4").text());for(var a=0;a<this.titles.length;a++)this.titles[a]=this.wrapWord.bind(this.titles[a])},wrapWord:function(){return"<span>"+this.replace(/ /g,"</span><span>")+"</span>"}};t.init();var i=$(".js-select select");i.selectmenu({appendTo:".js-select"});var n={select:$("[data-cases-select]"),cases:$("[data-cases-list]"),switch:function(){var s=this;$('[data-cases-list="'+i.val()+'"]').show(),s.select.selectmenu({change:function(t,e){s.cases.hide(),$('[data-cases-list="'+e.item.value+'"]').show()}})}};n.switch();var o={closeBtn:$(".js-close"),run:function(){this.closeBtn.on("click",function(){var s=$(this).closest(".js-close-object"),t="true"==s.attr("data-html-unscroll");s.hasClass("_show")?(s.removeClass("_show"),t?$("html").removeClass("_unscroll"):""):(s.addClass("_show"),t?$("html").addClass("_unscroll"):"")})}};o.run();var l={openBtn:$("[data-open-btn]"),run:function(){this.openBtn.on("click",function(){var s=$(this),t=$(s.attr("data-open-btn")),e="true"==t.attr("data-html-unscroll");t.hasClass("_show")?(t.removeClass("_show"),e?$("html").removeClass("_unscroll"):""):(t.addClass("_show"),e?$("html").addClass("_unscroll"):"")})}};l.run();var r={scrollPosition:$(window).scrollTop(),caseContentHeight:$(".js-grid-content").outerHeight(),viewportHeight:$(window).height(),slider:$(".js-grid-slider"),action:function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"),$(window).scroll(function(){$(window).outerWidth()<=999||($(window).scrollTop()+$(window).height()>$(".footer").offset().top?$(".js-grid-slider").addClass("_down"):$(".js-grid-slider").removeClass("_down"))}))},resize:function(){var s=this.action;$(window).resize(function(){s()})},arrowing:function(){var s=this.slider;s.length&&$(document).keydown(function(t){switch(t.which){case 37:s.slick("slickPrev");break;case 39:s.slick("slickNext");break;default:return}})}};r.action(),r.resize(),r.arrowing();var a={links:$(".js-aside-nav [data-link]"),action:function(){for(var s=a,t=$(window).scrollTop(),e=$(window).height(),i=$(document).height(),n=s.links.length,o=n-1;o>=0;o--){var l=$(s.links[o]),r=l.attr("data-link"),c=$("#"+r),h=c.offset().top;if(o==n-1){if(t+e==i||t>=h)return s.links.removeClass("_active"),void l.addClass("_active")}else if(t+96>=h)return s.links.removeClass("_active"),void l.addClass("_active")}},run:function(){var s=this.action;s(),$(window).scroll(function(){s()})},navTo:function(){var s=$("html, body");this.links.each(function(){$(this).on("click",function(t){t.preventDefault();var e=$("#"+$(this).attr("data-link")).offset().top-48;s.animate({scrollTop:e},Math.abs($(window).scrollTop()-e)/2)})})}};a.run(),a.navTo();var c={link:$(".js-scrollup"),run:function(){var s=this;s.link.on("click",function(s){s.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()?s.link.hasClass("_scrollup")||(s.link.addClass("_scrollup"),s.link.html("<span></span>Back to top"),s.link.on("click",function(){$("html, body").animate({scrollTop:0},$(document).height()/2)})):s.link.hasClass("_scrollup")&&(s.link.removeClass("_scrollup"),s.link.html("<span></span>Scroll Down"),s.link.off("click"),s.link.on("click",function(s){s.preventDefault()}))})}};c.run();var h={btn:$("[data-news-btn]"),content:$("[data-news-content]"),newsList:$("[data-news-list]"),backBtn:$("[data-news-back]"),slider:$("[data-news-slider]"),toggle:function(){var s=this.newsList,t=this.btn,e=this.content,i=this.slider;this.btn.on("click",function(n){n.preventDefault();var o=$(this),l=$('[data-news-content="'+$(this).attr("data-news-btn")+'"]');o.hasClass("_active")?(i.removeClass("_hidden"),o.removeClass("_active"),l.removeClass("_show"),s.removeClass("_hidden-md")):(i.addClass("_hidden"),t.removeClass("_active"),o.addClass("_active"),e.removeClass("_show"),l.addClass("_show"),s.addClass("_hidden-md"),$(window).outerWidth()<=999&&$("html, body").scrollTop(0))}),this.close()},close:function(){var s=this.newsList,t=this.btn,e=this.slider;this.backBtn.on("click",function(i){i.preventDefault(),t.removeClass("_active"),e.removeClass("_hidden"),s.removeClass("_hidden-md"),$('[data-news-content="'+$(this).attr("data-news-back")+'"]').removeClass("_show")})}};h.toggle();var d={form:$(".js-form"),formOpenBtn:$(".js-form-open"),formCloseBtn:$(".js-form-close"),clubBlur:$(".js-blur"),footer:$(".footer"),run:function(){var s=this;this.formOpenBtn.on("click",function(t){t.preventDefault(),s.form.addClass("_show"),s.form.fadeIn(300),s.clubBlur.addClass("blur"),s.footer.addClass("blur"),$("html").addClass("_unscroll-md")}),this.formCloseBtn.on("click",function(){s.form.removeClass("_show"),s.form.fadeOut(300),$("html").removeClass("_unscroll-md"),s.clubBlur.removeClass("blur"),s.footer.removeClass("blur")})}};if(d.run(),$("#parallax").length){var u=new ScrollMagic.Controller,f=(new TimelineMax).add([TweenMax.to("#parallax span",1,{y:100})]);new ScrollMagic.Scene({triggerElement:"#parallax",duration:$("#parallax").height()}).setTween(f).addTo(u)}$(".js-sr:not(.footer):not(.principles)").length&&(window.sr=ScrollReveal().reveal(".js-sr",{mobile:!1,distance:"100px",scale:1,viewFactor:.1}));var p={list:[],init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form form"),this.$errors=this.$el.find(".help-block-error"),this.$labels=this.$el.find(".js-form-label"),this.$message=this.$el.find(".js-form-errors")},bindEvents:function(){this.$el.on("afterValidateAttribute beforeSubmit",this.getList.bind(this,e))},render:function(){this.$message.empty();for(var s=0;s<this.list.length;s++)this.$message.append(this.list[s])},getList:function(s){var t=this;setTimeout(function(){t.list=[];for(var s=0;s<t.$errors.length;s++)""!=t.$errors[s].innerText&&t.list.push('<p class="help-block _sm">'+t.$labels[s].innerText+": "+t.$errors[s].innerText+"</p>");t.render()},1)}};p.init();var v={hashValue:window.location.hash,init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$html=$("html"),this.$blur=this.$html.find(".js-blur, .footer"),this.$el=this.$html.find(this.hashValue),this.$close=this.$el.find(".js-popup-close")},bindEvents:function(){this.$el.length>0&&(this.$el.addClass("_show"),this.$html.addClass("_unscroll-md"),this.$blur.addClass("blur"),this.$close.on("click",this.closePopup.bind(this)))},closePopup:function(){this.$el.removeClass("_show"),this.$html.removeClass("_unscroll-md"),this.$blur.removeClass("blur")}};v.init();var m={pUrl:location.href,pTitle:document.title,vk:{url:"http://vkontakte.ru/share.php?"},fb:{url:"https://www.facebook.com/sharer/sharer.php?s=100"},init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$el=$(".js-share"),this.$fb=this.$el.find(".js-share-fb"),this.$vk=this.$el.find(".js-share-vk")},bindEvents:function(){this.$fb.on("click",this.getData.bind(this,"fb")),this.$vk.on("click",this.getData.bind(this,"vk"))},getData:function(s,t){switch(t.preventDefault(),s){case"fb":url=this.fb.url,url+="&p[title]="+encodeURIComponent(this.pTitle),url+="&p[summary]="+encodeURIComponent(""),url+="&p[url]="+encodeURIComponent(this.pUrl),url+="&p[images][0]="+encodeURIComponent(""),this.share(url);break;case"vk":url=this.vk.url,url+="url="+encodeURIComponent(this.pUrl),url+="&title="+encodeURIComponent(this.pTitle),url+="&description="+encodeURIComponent(""),url+="&image="+encodeURIComponent(""),url+="&noparse=false",this.share(url);break;default:return}},share:function(s){window.open(s,"","toolbar=0,status=0")}};m.init();var w={init:function(){this.cacheDom(),this.bindEvents(),this.render()},cacheDom:function(){this.$el=$(".js-form"),this.$inputs=this.$el.find(".js-form-text input, .js-form-text textarea"),this.$labels=this.$el.find(".js-form-text label")},bindEvents:function(){this.$inputs.change(this.render.bind(this)),this.$labels.on("click",this.inputFocus.bind(this)),this.$inputs.focus(this.inputFocus.bind(this)),this.$inputs.blur(this.inputBlur.bind(this))},inputFocus:function(s){this.currentElements.$control(s).addClass("_focused");var t=this.currentElements.$input(s);t.is(":focus")||t.focus()},inputBlur:function(s){this.currentElements.$control(s).removeClass("_focused")},currentElements:{$control:function(s){return $(s.target).closest(".js-form-text")},$input:function(s){return this.$control(s).find("input")}},render:function(){for(var s=0;s<this.$inputs.length;s++)""!=this.$inputs[s].value?$(this.$inputs[s]).closest(".js-form-text").addClass("_has-value"):$(this.$inputs[s]).closest(".js-form-text").removeClass("_has-value")}};w.init(),function(){function s(){e.fadeOut(),t.removeClass("_unscroll-md")}var t=$("html"),e=t.find(".js-popup-simple"),i=e.find(".js-close");e.hasClass("_show")&&$(window).outerWidth()>=768&&(e.fadeIn(),t.addClass("_unscroll-md")),i.on("click",s)}()});
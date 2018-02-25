!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){r.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.5",window.addEventListener("mousewheel",function(){});e.Controller=function(n){var o,i,l="ScrollMagic.Controller",a=t.defaults,s=this,c=r.extend({},a,n),u=[],f=!1,d=0,g="PAUSED",p=!0,h=0,v=!0,m=function(){c.refreshInterval>0&&(i=window.setTimeout(F,c.refreshInterval))},w=function(){return c.vertical?r.get.scrollTop(c.container):r.get.scrollLeft(c.container)},y=function(){return c.vertical?r.get.height(c.container):r.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(r.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,r.get.scrollTop()):c.container.scrollLeft=e},E=function(){if(v&&f){var e=r.type.Array(f)?f:u.slice(0);f=!1;var t=d;d=s.scrollPos();var n=d-t;0!==n&&(g=n>0?"FORWARD":"REVERSE"),"REVERSE"===g&&e.reverse(),e.forEach(function(t,n){T(3,"updating Scene "+(n+1)+"/"+e.length+" ("+u.length+" total)"),t.update(!0)}),0===e.length&&c.loglevel>=3&&T(3,"updating 0 Scenes (nothing added to controller)")}},R=function(){o=r.rAF(E)},b=function(e){T(3,"event fired causing an update:",e.type),"resize"==e.type&&(h=y(),g="PAUSED"),!0!==f&&(f=!0,R())},F=function(){if(!p&&h!=y()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}c.container.dispatchEvent(e)}u.forEach(function(e,t){e.refresh()}),m()},T=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this._options=c;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(r.type.Array(t))t.forEach(function(e,t){s.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==s)t.addTo(s);else if(u.indexOf(t)<0){u.push(t),u=O(u),t.on("shift.controller_sort",function(){u=O(u)});for(var n in c.globalSceneOptions)t[n]&&t[n].call(t,c.globalSceneOptions[n]);T(3,"adding Scene (now "+u.length+" total)")}}else T(1,"ERROR: invalid argument supplied for '.addScene()'");return s},this.removeScene=function(e){if(r.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=u.indexOf(e);t>-1&&(e.off("shift.controller_sort"),u.splice(t,1),T(3,"removing Scene (now "+u.length+" left)"),e.remove())}return s},this.updateScene=function(t,n){return r.type.Array(t)?t.forEach(function(e,t){s.updateScene(e,n)}):n?t.update(!0):!0!==f&&t instanceof e.Scene&&(f=f||[],-1==f.indexOf(t)&&f.push(t),f=O(f),R()),s},this.update=function(e){return b({type:"resize"}),e&&E(),s},this.scrollTo=function(t,n){if(r.type.Number(t))S.call(c.container,t,n);else if(t instanceof e.Scene)t.controller()===s?s.scrollTo(t.scrollOffset(),n):T(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if(r.type.Function(t))S=t;else{var o=r.get.elements(t)[0];if(o){for(;o.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)o=o.parentNode;var i=c.vertical?"top":"left",l=r.get.offset(c.container),a=r.get.offset(o);p||(l[i]-=s.scrollPos()),s.scrollTo(a[i]-l[i],n)}else T(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",t)}return s},this.scrollPos=function(e){return arguments.length?(r.type.Function(e)?w=e:T(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),s):w.call(s)},this.info=function(e){var t={size:h,vertical:c.vertical,scrollPos:d,scrollDirection:g,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void T(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(c.loglevel!=e&&(c.loglevel=e),s):c.loglevel},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,s.updateScene(u,!0)),s):v},this.destroy=function(e){window.clearTimeout(i);for(var t=u.length;t--;)u[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),r.cAF(o),T(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in c)a.hasOwnProperty(t)||(T(2,'WARNING: Unknown option "'+t+'"'),delete c[t]);if(c.container=r.get.elements(c.container)[0],!c.container)throw T(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";p=c.container===window||c.container===document.body||!document.body.contains(c.container),p&&(c.container=window),h=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b),c.refreshInterval=parseInt(c.refreshInterval)||a.refreshInterval,m(),T(3,"added new "+l+" controller (v"+e.version+")")}(),s};var t={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,n){t.defaults[e]=n},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(t){var o,i,l="ScrollMagic.Scene",a=n.defaults,s=this,c=r.extend({},a,t),u="BEFORE",f=0,d={start:0,end:0},g=0,p=!0,h={};this.on=function(e,t){return r.type.Function(t)?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],o=n[1];"*"!=r&&(h[r]||(h[r]=[]),h[r].push({namespace:o||"",callback:t}))})):v(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),s},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e,n){var r=e.split("."),o=r[0],i=r[1]||"";("*"===o?Object.keys(h):[o]).forEach(function(e){for(var n=h[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete h[e]})}),s):(v(1,"ERROR: Invalid event name supplied."),s)},this.trigger=function(t,n){if(t){var r=t.trim().split("."),o=r[0],i=r[1],l=h[o];v(3,"event fired:",o,n?"->":"",n||""),l&&l.forEach(function(t,r){i&&i!==t.namespace||t.callback.call(s,new e.Event(o,t.namespace,s,n))})}else v(1,"ERROR: Invalid event name supplied.");return s},s.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&s.update())}).on("shift.internal",function(e){m(),s.update()});var v=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),r.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?i!=t&&(i&&i.removeScene(s),i=t,R(),w(!0),y(!0),m(),i.info("container").addEventListener("resize",S),t.addScene(s),s.trigger("add",{controller:i}),v(3,"added "+l+" to controller"),s.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),s},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,s.update(!0)),s):p},this.remove=function(){if(i){i.info("container").removeEventListener("resize",S);var e=i;i=void 0,e.removeScene(s),s.trigger("remove"),v(3,"removed "+l+" from controller")}return s},this.destroy=function(e){return s.trigger("destroy",{reset:e}),s.remove(),s.off("*.*"),v(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(i)if(e)if(i.enabled()&&p){var t,n=i.info("scrollPos");t=c.duration>0?(n-d.start)/(d.end-d.start):n>=d.start?1:0,s.trigger("update",{startPos:d.start,endPos:d.end,scrollPos:n}),s.progress(t)}else T&&"DURING"===u&&C(!0);else i.updateScene(s,!1);return s},this.refresh=function(){return w(),y(),s},this.progress=function(e){if(arguments.length){var t=!1,n=u,r=i?i.info("scrollDirection"):"PAUSED",o=c.reverse||e>=f;if(0===c.duration?(t=f!=e,f=e<1&&o?0:1,u=0===f?"BEFORE":"DURING"):e<0&&"BEFORE"!==u&&o?(f=0,u="BEFORE",t=!0):e>=0&&e<1&&o?(f=e,u="DURING",t=!0):e>=1&&"AFTER"!==u?(f=1,u="AFTER",t=!0):"DURING"!==u||o||C(),t){var l={progress:f,state:u,scrollDirection:r},a=u!=n,d=function(e){s.trigger(e,l)};a&&"DURING"!==n&&(d("enter"),d("BEFORE"===n?"start":"end")),d("progress"),a&&"DURING"!==u&&(d("BEFORE"===u?"start":"end"),d("leave"))}return s}return f};var m=function(){d={start:g+c.offset},i&&c.triggerElement&&(d.start-=i.info("size")*c.triggerHook),d.end=d.start+c.duration},w=function(e){if(o){b("duration",o.call(s))&&!e&&(s.trigger("change",{what:"duration",newval:c.duration}),s.trigger("shift",{reason:"duration"}))}},y=function(e){var t=0,n=c.triggerElement;if(i&&n){for(var o=i.info(),l=r.get.offset(o.container),a=o.vertical?"top":"left";n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n=n.parentNode;var u=r.get.offset(n);o.isDocument||(l[a]-=i.scrollPos()),t=u[a]-l[a]}var f=t!=g;g=t,f&&!e&&s.trigger("shift",{reason:"triggerElementPosition"})},S=function(e){c.triggerHook>0&&s.trigger("shift",{reason:"containerResize"})},E=r.extend(n.validate,{duration:function(e){if(r.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return i?i.info("size")*t:0}}if(r.type.Function(e)){o=e;try{e=parseFloat(o())}catch(t){e=-1}}if(e=parseFloat(e),!r.type.Number(e)||e<0)throw o?(o=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),R=function(e){e=arguments.length?[e]:Object.keys(E),e.forEach(function(e,t){var n;if(E[e])try{n=E[e](c[e])}catch(t){n=a[e];var o=r.type.String(t)?[t]:t;r.type.Array(o)?(o[0]="ERROR: "+o[0],o.unshift(1),v.apply(this,o)):v(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{c[e]=n}})},b=function(e,t){var n=!1,r=c[e];return c[e]!=t&&(c[e]=t,R(e),n=r!=c[e]),n},F=function(e){s[e]||(s[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),b(e,t)&&(s.trigger("change",{what:e,newval:c[e]}),n.shifts.indexOf(e)>-1&&s.trigger("shift",{reason:e})),s):c[e]})};this.controller=function(){return i},this.state=function(){return u},this.scrollOffset=function(){return d.start},this.triggerPosition=function(){var e=c.offset;return i&&(c.triggerElement?e+=g:e+=i.info("size")*s.triggerHook()),e};var T,O;s.on("shift.internal",function(e){var t="duration"===e.reason;("AFTER"===u&&t||"DURING"===u&&0===c.duration)&&C(),t&&x()}).on("progress.internal",function(e){C()}).on("add.internal",function(e){x()}).on("destroy.internal",function(e){s.removePin(e.reset)});var C=function(e){if(T&&i){var t=i.info(),n=O.spacer.firstChild;if(e||"DURING"!==u){var o={position:O.inFlow?"relative":"absolute",top:0,left:0},l=r.css(n,"position")!=o.position;O.pushFollowers?c.duration>0&&("AFTER"===u&&0===parseFloat(r.css(O.spacer,"padding-top"))?l=!0:"BEFORE"===u&&0===parseFloat(r.css(O.spacer,"padding-bottom"))&&(l=!0)):o[t.vertical?"top":"left"]=c.duration*f,r.css(n,o),l&&x()}else{"fixed"!=r.css(n,"position")&&(r.css(n,{position:"fixed"}),x());var a=r.get.offset(O.spacer,!0),s=c.reverse||0===c.duration?t.scrollPos-d.start:Math.round(f*c.duration*10)/10;a[t.vertical?"top":"left"]+=s,r.css(O.spacer.firstChild,{top:a.top,left:a.left})}}},x=function(){if(T&&i&&O.inFlow){var e="DURING"===u,t=i.info("vertical"),n=O.spacer.firstChild,o=r.isMarginCollapseType(r.css(O.spacer,"display")),l={};O.relSize.width||O.relSize.autoFullWidth?e?r.css(T,{width:r.get.width(O.spacer)}):r.css(T,{width:"100%"}):(l["min-width"]=r.get.width(t?T:n,!0,!0),l.width=e?l["min-width"]:"auto"),O.relSize.height?e?r.css(T,{height:r.get.height(O.spacer)-(O.pushFollowers?c.duration:0)}):r.css(T,{height:"100%"}):(l["min-height"]=r.get.height(t?n:T,!0,!o),l.height=e?l["min-height"]:"auto"),O.pushFollowers&&(l["padding"+(t?"Top":"Left")]=c.duration*f,l["padding"+(t?"Bottom":"Right")]=c.duration*(1-f)),r.css(O.spacer,l)}},I=function(){i&&T&&"DURING"===u&&!i.info("isDocument")&&C()},N=function(){i&&T&&"DURING"===u&&((O.relSize.width||O.relSize.autoFullWidth)&&r.get.width(window)!=r.get.width(O.spacer.parentNode)||O.relSize.height&&r.get.height(window)!=r.get.height(O.spacer.parentNode))&&x()},z=function(e){i&&T&&"DURING"===u&&!i.info("isDocument")&&(e.preventDefault(),i._setScrollPos(i.info("scrollPos")-((e.wheelDelta||e[i.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){var n={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(t=r.extend({},n,t),!(e=r.get.elements(e)[0]))return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),s;if("fixed"===r.css(e,"position"))return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),s;if(T){if(T===e)return s;s.removePin()}T=e;var o=T.parentNode.style.display,i=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var l="absolute"!=r.css(T,"position"),a=r.css(T,i.concat(["display"])),u=r.css(T,["width","height"]);T.parentNode.style.display=o,!l&&t.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){T&&0===c.duration&&t.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var f=T.parentNode.insertBefore(document.createElement("div"),T),d=r.extend(a,{position:l?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(l||r.extend(d,r.css(T,["width","height"])),r.css(f,d),f.setAttribute("data-scrollmagic-pin-spacer",""),r.addClass(f,t.spacerClass),O={spacer:f,relSize:{width:"%"===u.width.slice(-1),height:"%"===u.height.slice(-1),autoFullWidth:"auto"===u.width&&l&&r.isMarginCollapseType(a.display)},pushFollowers:t.pushFollowers,inFlow:l},!T.___origStyle){T.___origStyle={};var g=T.style;i.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){T.___origStyle[e]=g[e]||""})}return O.relSize.width&&r.css(f,{width:u.width}),O.relSize.height&&r.css(f,{height:u.height}),f.appendChild(T),r.css(T,{position:l?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(O.relSize.width||O.relSize.autoFullWidth)&&r.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",I),window.addEventListener("resize",I),window.addEventListener("resize",N),T.addEventListener("mousewheel",z),T.addEventListener("DOMMouseScroll",z),v(3,"added pin"),C(),s},this.removePin=function(e){if(T){if("DURING"===u&&C(!0),e||!i){var t=O.spacer.firstChild;if(t.hasAttribute("data-scrollmagic-pin-spacer")){var n=O.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=n[e]||""}),r.css(t,margins)}O.spacer.parentNode.insertBefore(t,O.spacer),O.spacer.parentNode.removeChild(O.spacer),T.parentNode.hasAttribute("data-scrollmagic-pin-spacer")||(r.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("resize",N),T.removeEventListener("mousewheel",z),T.removeEventListener("DOMMouseScroll",z),T=void 0,v(3,"removed pin (reset: "+(e?"true":"false")+")")}return s};var A,P=[];return s.on("destroy.internal",function(e){s.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=r.get.elements(e);return 0!==n.length&&r.type.String(t)?(P.length>0&&s.removeClassToggle(),A=t,P=n,s.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?r.addClass:r.removeClass;P.forEach(function(e,n){t(e,A)})}),s):(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),s)},this.removeClassToggle=function(e){return e&&P.forEach(function(e,t){r.removeClass(e,A)}),s.off("start.internal_class end.internal_class"),A=void 0,P=[],s},function(){for(var e in c)a.hasOwnProperty(e)||(v(2,'WARNING: Unknown option "'+e+'"'),delete c[e]);for(var t in a)F(t);R()}(),s};var n={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!r.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=r.get.elements(e)[0];if(!t)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(r.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!r.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,r,o,i){t in n.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(n.defaults[t]=r,n.validate[t]=o,i&&n.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=r.extend({},this),t.apply(this,arguments)||this},r.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var o in r)this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var r=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},o=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,l){if((n=n===document?e:n)===e)l=!1;else if(!p.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&l){var s=o(n);a+="Height"===t?r(s.marginTop)+r(s.marginBottom):r(s.marginLeft)+r(s.marginRight)}return a},l=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,s=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<s.length;++t)c=e[s[t]+"RequestAnimationFrame"],u=e[s[t]+"CancelAnimationFrame"]||e[s[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),o=e.setTimeout(function(){t(n+r)},r);return a=n+r,o}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(d.log=d.log||function(){},t=0;t<f.length;t++){var g=f[t];d[g]||(d[g]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),r=f[e-1],o=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[r],d);o.unshift(n),i.apply(d,o)};var p=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};p.String=function(e){return"string"===p(e)},p.Function=function(e){return"function"===p(e)},p.Array=function(e){return Array.isArray(e)},p.Number=function(e){return!p.Array(e)&&e-parseFloat(e)+1>=0},p.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(p.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===p(t)||p.Array(t))for(var r=0,o=n.length=t.length;r<o;r++){var i=t[r];n[r]=p.DomElement(i)?i:h.elements(i)}else(p.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(p.String(t))return o(e)[l(t)];if(p.Array(t)){var n={},r=o(e);return t.forEach(function(e,t){n[e]=r[l(e)]}),n}for(var i in t){var a=t[i];a==parseFloat(a)&&(a+="px"),e.style[l(i)]=a}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e});
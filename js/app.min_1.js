!function(t,e,o){var n=t();t.fn.dropdownHover=function(o){return"ontouchstart"in document?this:(n=n.add(this.parent()),this.each(function(){function i(t){e.clearTimeout(r),e.clearTimeout(s),s=e.setTimeout(function(){n.find(":focus").blur(),f.instantlyCloseOthers===!0&&n.removeClass("open"),e.clearTimeout(s),l.attr("aria-expanded","true"),a.addClass("open"),l.trigger(u)},f.hoverDelay)}var r,s,l=t(this),a=l.parent(),d={delay:0,hoverDelay:0,instantlyCloseOthers:!0},h={delay:t(this).data("delay"),hoverDelay:t(this).data("hover-delay"),instantlyCloseOthers:t(this).data("close-others")},u="show.bs.dropdown",c="hide.bs.dropdown",f=t.extend(!0,{},d,o,h);a.hover(function(o){return a.hasClass("open")||l.is(o.target)?void(t(e).width()>767&&i(o)):!0},function(){t(e).width()>767&&(e.clearTimeout(s),r=e.setTimeout(function(){l.attr("aria-expanded","false"),a.removeClass("open"),l.trigger(c)},f.delay))}),l.hover(function(o){return!a.hasClass("open")&&!a.is(o.target)&&t(e).width()>767?!0:void(t(e).width()>767&&i(o))}),a.find(".dropdown-submenu").each(function(){var o,n=t(this);n.hover(function(){e.clearTimeout(o),n.children(".dropdown-menu").show(),n.siblings().children(".dropdown-menu").hide()},function(){var t=n.children(".dropdown-menu");o=e.setTimeout(function(){t.hide()},f.delay)})})}))},t(document).ready(function(){t('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window),$(document).ready(function(){var t=$(".agm-navbar"),e=$("body");$(window).scroll(function(){$(document).scrollTop()>120?(t.addClass("shrink animated fadeInDown"),t.addClass("navbar-fixed-top"),t.removeClass("navbar-static-top"),e.addClass("navbar-fixed-mode")):(t.removeClass("shrink animated fadeInDown"),t.addClass("navbar-static-top"),t.removeClass("navbar-fixed-top"),e.removeClass("navbar-fixed-mode"))});var o=$(".portfolio-item-more");o.on("click",function(t){$(this).parent().parent().toggleClass("open"),t.preventDefault()})}),(new WOW).init(),function($){function numberRoller(t){var e=$(".roller-title-number-"+t).attr("data-min"),o=$(".roller-title-number-"+t).attr("data-max"),n=$(".roller-title-number-"+t).attr("data-delay"),i=$(".roller-title-number-"+t).attr("data-increment"),r=o-e,s=1e3*n/r;numberRoll(t,e,o,i,s)}function numberRoll(slno,min,max,increment,timeout){max>=min?($(".roller-title-number-"+slno).html(min),min=parseInt(min)+parseInt(increment),setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout)):$(".roller-title-number-"+slno).html(max)}$(window).on("load",function(){$(document).scrollzipInit(),$(document).rollerInit()}),$(window).on("load scroll resize",function(){$(".numscroller").scrollzip({showFunction:function(){numberRoller($(this).attr("data-slno"))},wholeVisible:!1})}),$.fn.scrollzipInit=function(){$("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>")},$.fn.rollerInit=function(){var t=0;$(".numscroller").each(function(){t++,$(this).attr("data-slno",t),$(this).addClass("roller-title-number-"+t)})},$.fn.scrollzip=function(t){var e=$.extend({showFunction:null,hideFunction:null,showShift:0,wholeVisible:!1,hideShift:0},t);return this.each(function(t,o){return $(this).addClass("scrollzip"),$.isFunction(e.showFunction)&&!$(this).hasClass("isShown")&&$(window).outerHeight()+$("#scrollzipPoint").offset().top-e.showShift>$(this).offset().top+(e.wholeVisible?$(this).outerHeight():0)&&$("#scrollzipPoint").offset().top+(e.wholeVisible?$(this).outerHeight():0)<$(this).outerHeight()+$(this).offset().top-e.showShift&&($(this).addClass("isShown"),e.showFunction.call(this)),$.isFunction(e.hideFunction)&&$(this).hasClass("isShown")&&($(window).outerHeight()+$("#scrollzipPoint").offset().top-e.hideShift<$(this).offset().top+(e.wholeVisible?$(this).outerHeight():0)||$("#scrollzipPoint").offset().top+(e.wholeVisible?$(this).outerHeight():0)>$(this).outerHeight()+$(this).offset().top-e.hideShift)&&($(this).removeClass("isShown"),e.hideFunction.call(this)),this})}}(jQuery);
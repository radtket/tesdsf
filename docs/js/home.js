"use strict";function initTabs(){$(".tabgroup > div").hide(),$(".tabgroup > div:first-of-type").show(),$(".tabs a.tabs-nav-item").click(function(t){t.preventDefault();var i=$(this),e="#".concat(i.parents(".tabs").data("tabgroup")),n=i.closest("li").siblings().children("a"),a=i.attr("href");n.removeClass("active"),i.addClass("active"),$(e).children("div").hide(),$(a).show()})}function initTabsNav(){var d=$(".tabs-nav-underline"),t=$(".nav-li"),i=$(".active-nav").width(),r=$(".nav-li:first-child"),o=parseInt($(".nav-li:first-child").next().css("marginLeft").replace(/\D/g,"")),l=parseInt($(".tabs-nav-wrapper > ul").css("padding-left").replace(/\D/g,""));d.width("".concat(i,"px")),d.css("marginLeft","".concat(l,"px")),t.click(function(){var t,i,e=$(this),n=$(".active-nav"),a=n.width(),s=n.position().left,c=n.index();return n.removeClass("active-nav"),e.addClass("active-nav"),e.is(n)?0:e.index()>c?(t=n.is(r)?o+e.width()+e.position().left-l:e.position().left+e.width()-s,i="".concat(e.position().left+o,"px"),d.width("".concat(t,"px")),setTimeout(function(){return d.css("marginLeft",i),d.width("".concat(e.width(),"px"))},175)):(e.is(r)?(t=s-l+o+a,i=e.position().left):(t=a+s-e.position().left,i=e.position().left+o),d.css("marginLeft",i),d.width("".concat(t,"px")),setTimeout(function(){return d.width("".concat(e.width(),"px"))},175))})}$(".accordion").each(function(){var i=$(this).children("dd").hide();$(this).children("dd").first().slideDown("easeOutExpo"),$(this).children("dt").children("a").first().addClass("active"),$(this).children("dt").children("a").click(function(){var t=$(this).parent().next("dd");return $(this).parent().parent().find("> dt > a").removeClass("active"),$(this).addClass("active"),i.not(t).slideUp("easeInExpo"),$(this).parent().next().slideDown("easeOutExpo"),!1})}),$(document).ready(function(){$(window).trigger("resize"),initTabs(),initTabsNav()});
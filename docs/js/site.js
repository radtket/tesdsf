"use strict";function initMobileNav(){var n=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),n.on("click",function(n){n.preventDefault(),$("#js-navigation-menu").slideToggle(function(){$("#js-navigation-menu").is(":hidden")&&$("#js-navigation-menu").removeAttr("style")})})}function navbarBodyOffset(){var n=$(".navigation").height();$("body").css("padding-top","".concat(n,"px"))}function initDocumentsDropDown(){$(".dropdown-button").click(function(){$(this).siblings(".sub-nav__menu").slideToggle()})}$(document).ready(function(){$(window).trigger("resize"),initMobileNav(),initDocumentsDropDown(),navbarBodyOffset()}),$(window).resize(function(){navbarBodyOffset()});
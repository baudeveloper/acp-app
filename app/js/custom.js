//========================
// Strict Syntax Rendering
//========================
"use strict";

$(function() {

  /*
    1. SMOOTH SCROLLING: https://tinyurl.com/l4voz9b [UNIVERSAL]
    2. SEARCH IN NAVIGATION [UNIVERSAL]
    3. MENU SCROLL EFFECT [UNIVERSAL]
    4. HOME: OFF CANVAS [HOME]
    5. HOME: SITE SLIDER [HOME]
    6. JOIN US ADVISOR BUTTON [HOME]
  */

  // 1. SMOOTH SCROLLING: https://tinyurl.com/l4voz9b [UNIVERSAL]
	$("a[href*=\"#\"]")
    .not("[href=\"#\"]")
    .not("[href=\"#0\"]")
    .click(function (event) {
	if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
		var target = $(this.hash);
		target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
		if (target.length) {
			event.preventDefault();
			$("html, body").animate({
				scrollTop: target.offset().top
			}, 1000, function () {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) {
					return false;
				} else {
					$target.attr("tabindex", "-1");
					$target.focus();
				}
			});
		}
	}
});

  // 2. SEARCH IN NAVIGATION [UNIVERSAL]
	var $searchBtn = $("[data-js=\"searchBtn\"]");
	$searchBtn.on("click", function() {
		var $getSearchBox = $(this).parents(".input-group");
		if ($getSearchBox.hasClass("hide")) {
			$getSearchBox.removeClass("hide");
		} else {
			$getSearchBox.addClass("hide");
		}
	});

  // 3. MENU SCROLL EFFECT [UNIVERSAL]
	$(document).scroll(function () {
		var $primaryMenu = $("[data-js=\"primaryMenu\"]");
		$primaryMenu.toggleClass("scrolled", $(this).scrollTop() > $primaryMenu.height());
	});

  // 4. HOME: OFF CANVAS [HOME]
	var $menuBtn = $("[data-js=\"offcanvasBtn\"]");
	$menuBtn.on("click", function () {
		$(this).toggleClass("is-active");
		$(this).parents("body").toggleClass("offcanvas");
	});

  // 5. HOME: SITE SLIDER [HOME]
	var $slideItem = $("[data-js=\"slide-item\"]");
	$slideItem.each(function () {
		$(this).css("background-image", "url(" + $(this).children().attr("src") + ")");
	});

  // 6. JOIN US ADVISOR BUTTON [HOME]
	var elements = $(".sticky");
	Stickyfill.add(elements);

})();

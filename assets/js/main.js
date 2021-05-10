(function ($) {
	'use strict';

	/* Body Loader Start */
	jQuery(window).load(function () {
		jQuery('.siteloader').hide();

		if (jQuery('body').hasClass('page-template-digital-mountaineers')) {
			jQuery(".content").mCustomScrollbar();
		}

		jQuery('.lazy').lazy({
			combined: true,
			placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtd2VkZ2VzIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+PGcgbmctYXR0ci10cmFuc2Zvcm09InNjYWxlKHt7Y29uZmlnLnNjYWxlfX0pIiB0cmFuc2Zvcm09InNjYWxlKDAuNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTkuODkzIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMC43NXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmMxfX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjZTkwYzU5Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIwOS45MiA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jMn19IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjMjNjM2Q1Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI1OS45NDYgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjVzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jM319IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iI2ZmZTZmNSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDkuOTczIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmM0fX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSJyZ2JhKDk5LjYwNzg0MzEzNzI1NDklLDQ0LjMxMzcyNTQ5MDE5NjA4JSw1NS4yOTQxMTc2NDcwNTg4MiUsMC43NjgpIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
		});

	});
	/* Body Loader End */

	jQuery("a[href^='#'].i-link").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			jQuery('html, body').animate({
				scrollTop: jQuery(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

	//addpopup
	jQuery('.addpopup .close-add').click(function () {
		jQuery(this).addClass('hide');
		jQuery('.addpopup').addClass('hide');
	});

	jQuery('.more-click').click(function () {
		jQuery(this).toggleClass('open');
		jQuery(this).next('.more-content').slideToggle(300).toggleClass('open');
	});

	//sticky section
	if (jQuery(window).width() > 1025) {
		var sticky = new Sticky('[data-sticky]');
	}

	/* Add Lazy Load Start */
	jQuery('.lazy').lazy({
		combined: true,
		placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtd2VkZ2VzIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+PGcgbmctYXR0ci10cmFuc2Zvcm09InNjYWxlKHt7Y29uZmlnLnNjYWxlfX0pIiB0cmFuc2Zvcm09InNjYWxlKDAuNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTkuODkzIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMC43NXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmMxfX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjZTkwYzU5Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIwOS45MiA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jMn19IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjMjNjM2Q1Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI1OS45NDYgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjVzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jM319IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iI2ZmZTZmNSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDkuOTczIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmM0fX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSJyZ2JhKDk5LjYwNzg0MzEzNzI1NDklLDQ0LjMxMzcyNTQ5MDE5NjA4JSw1NS4yOTQxMTc2NDcwNTg4MiUsMC43NjgpIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
	});
	/* Add Lazy Load End */

	// SCROLL TO TOP 
	jQuery(function toTop() {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.back-to-top').addClass('open');
			} else {
				jQuery('.back-to-top').removeClass('open');
			}
		});

		jQuery('.back-to-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	//custom popup START
	jQuery(".popup-click").on("click", function () {
		jQuery('.popup-main').toggleClass('open');
		jQuery('body').toggleClass('open-custom-popup');
	});
	jQuery(".popup-click1").on("click", function () {
		jQuery('.popup-main1').toggleClass('open');
		jQuery('body').toggleClass('open-custom-popup');
	});
	jQuery(".close-popup").on("click", function () {
		jQuery('.popup-main').removeClass('open');
		jQuery('.popup-main1').removeClass('open');
		jQuery('body').removeClass('open-custom-popup');
	});
	//custom popup END

	/* Header Sticky Start */
	jQuery(window).load(stickyMenu);
	jQuery(window).resize(stickyMenu);
	jQuery(window).scroll(stickyMenu);
	var prevScroll = 0,
		currentSCroll = 1,
		targetScroll_ = 200;
	function stickyMenu() {
		currentSCroll = jQuery(window).scrollTop()
		if (currentSCroll < prevScroll) {
			// MOVING BOTTOM TO TOP
			if (jQuery(window).scrollTop() > targetScroll_) {
				jQuery('header').addClass('fixed-header');
			} else {
				jQuery('header').removeClass('fixed-header');
				jQuery('header').removeClass('sticky-ready');
				jQuery('header, .Twolsiteinks').removeClass('allot-position');
			}
		} else {
			// MOVING TOP TO BOTTOM
			if (jQuery('header').hasClass('allot-position')) {
				jQuery('header').addClass('sticky-ready').delay(15000, function () {
					//console.log('yes');
				});
			}
			jQuery('header').removeClass('fixed-header');
			if (jQuery(window).scrollTop() < 10) {
				jQuery('header').removeClass('sticky-ready');
				//console.log(currentSCroll);
			} else {
				jQuery('header, .Twolsiteinks').addClass('allot-position');
				//jQuery('header').addClass('sticky-ready');
			}
		}
		prevScroll = currentSCroll;
	}

	/*************Common services banner logo START**********/
	jQuery('.res-banner .logos-slider .slides').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: false,
		centerMode: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
	})
	/*************Common services banner logo END**********/

	/*************PPC testimonial slider START**********/
	jQuery('.ppc-testimonials .slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		centerMode: false,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
	});
	/*************PPC testimonial slider END**********/

	/******************************counter**************/
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	/*********************counter end*************/


	/*** viewportchecker ***/
	/******************************/
	jQuery('.animated').viewportChecker({
		classToAdd: 'visible',
		offset: 100
	});

	/*********Detect browser START**************/
	jQuery(document).ready(function () { jQuery.each(jQuery.browser, function (i) { jQuery('body').addClass(i); return false; }); var os = ['iphone', 'ipad', 'windows', 'mac', 'linux']; var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|'))); if (match) { jQuery('body').addClass(match[0]); } });
	/*********Detect browser END**************/

})(jQuery);

jQuery(window).load(function () {

	setTimeout(function () {
		jQuery(window).trigger('resize');
	}, 3000);


	/***********skroll R function**********/
	if (jQuery(window).width() > 1400) {
		var s = skrollr.init({
			forceHeight: false, smoothScrolling: true,
			smoothScrollingDuration: 500
		});
	}
});

// Footer tabBar
$(".tap-click").click(function() {
	if($(window).width() < 768) $(this).next().slideToggle();
});
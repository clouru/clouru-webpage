(function( $ ) { 
	'use strict';

	/* Body Loader Start */
	jQuery(window).load(function() {
		jQuery('.siteloader').hide();

		if( jQuery('body').hasClass('page-template-digital-mountaineers') ){
			jQuery(".content").mCustomScrollbar();
		}

		jQuery('.lazy').lazy({
			combined: true,
			placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtd2VkZ2VzIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDUwKSI+PGcgbmctYXR0ci10cmFuc2Zvcm09InNjYWxlKHt7Y29uZmlnLnNjYWxlfX0pIiB0cmFuc2Zvcm09InNjYWxlKDAuNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MCwtNTApIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTkuODkzIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMC43NXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmMxfX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjZTkwYzU5Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIwOS45MiA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jMn19IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSIjMjNjM2Q1Ij48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI1OS45NDYgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxLjVzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PHBhdGggbmctYXR0ci1maWxsLW9wYWNpdHk9Int7Y29uZmlnLm9wYWNpdHl9fSIgbmctYXR0ci1maWxsPSJ7e2NvbmZpZy5jM319IiBkPSJNNTAgNTBMNTAgMEE1MCA1MCAwIDAgMSAxMDAgNTBaIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iI2ZmZTZmNSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDkuOTczIDUwIDUwKSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIGtleVRpbWVzPSIwOzEiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48cGF0aCBuZy1hdHRyLWZpbGwtb3BhY2l0eT0ie3tjb25maWcub3BhY2l0eX19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmM0fX0iIGQ9Ik01MCA1MEw1MCAwQTUwIDUwIDAgMCAxIDEwMCA1MFoiIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiIGZpbGwtb3BhY2l0eT0iMC44IiBmaWxsPSJyZ2JhKDk5LjYwNzg0MzEzNzI1NDklLDQ0LjMxMzcyNTQ5MDE5NjA4JSw1NS4yOTQxMTc2NDcwNTg4MiUsMC43NjgpIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="            
		});

	});
	/* Body Loader End */

      jQuery("a[href^='#'].i-link").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      jQuery('html, body').animate({
	        scrollTop: jQuery(hash).offset().top
	      }, 800, function(){
	      window.location.hash = hash;
	      });
	    }
	  });

	//addpopup
	jQuery('.addpopup .close-add').click(function(){
        jQuery(this).addClass('hide');
        jQuery('.addpopup').addClass('hide');
    });

    jQuery('.more-click').click(function(){
    	 jQuery(this).toggleClass('open');
        jQuery(this).next('.more-content').slideToggle(300).toggleClass('open');
    });

    //testimonials clicks
    jQuery('#testimonials-lists').on("click", '.read-click', function(){
        jQuery(this).parents('.testimonialsBox').addClass('open');
    });

    jQuery('#testimonials-lists').on("click", '.testimonialsBox .close-btn', function(){
    	jQuery(this).parents('.testimonialsBox').removeClass('open');
    });

	//sticky section
	if (jQuery(window).width() > 1025){
		 var sticky = new Sticky('[data-sticky]');
	}

	//Increment decrement Jquery START
	 jQuery('.plus').on('click',function(){
        var $qty = jQuery(this).closest('.page-box').find('.qtyBox');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    jQuery('.minus').on('click',function(){
        var $qty=jQuery(this).closest('.page-box').find('.qtyBox');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
	//Increment decrement Jquery END
 
	if (jQuery(window).width() > 767){

		var lis = jQuery(".blog-nav ul#filter_by li");
		lis.slice(6).wrapAll("<ul class='dropdown-more'></ul>");

		jQuery('.dropdown-more').wrap('<li class="more_button" id="moreBtn">More</li>')

		

		jQuery(document).click(function(e){
	       if(e.target.id == 'moreBtn')
	       {          	
				jQuery('ul.dropdown-more').toggleClass('open');			
	       }
	       else
	       {
	           jQuery('ul.dropdown-more').removeClass("open");
	       }
	    })
	}
	

	if (jQuery(window).width() > 1024){
		// jQuery('.site-header').hover(function(e) {
		// 	jQuery('body').toggleClass('menu-opened');
		// });
		jQuery('.main-menu > li.has-submenu').hover(function(e) {
		// jQuery('.has-submenu').hover(function(e) {
			e.preventDefault()	
			jQuery('body').addClass('menu-opened');
			jQuery(this).find('.megamenu').addClass('open');
			jQuery(this).addClass('open');
			// jQuery(this).parent('li').addClass('active');
		},function(e){
			e.preventDefault()
			jQuery('body').removeClass('menu-opened');
			jQuery(this).find('.megamenu').removeClass('open');
			jQuery(this).removeClass('open');
			// jQuery(this).parent('li').removeClass('active');
		});
		jQuery('.main-menu > li.sml-menu').hover(function(e) {
			e.preventDefault()	
			jQuery('body').addClass('sml-menu-opened');
			jQuery('body').removeClass('menu-opened');
			e.stopPropagation();
		},function(e){
			e.preventDefault()
			jQuery('body').removeClass('sml-menu-opened');
		});
	}
	jQuery('.megamenu li.active').parents('li').toggleClass('active');

	//Recent Menu option
	if (jQuery(window).width() > 1024) {
		jQuery(".megamenu .detailTab .tabing").hover(function() {
	        var $this = jQuery(this);
	        var tabId = $this.attr('data-tab');
	        $this.closest('.mainTabing').find('.tabing').removeClass("current");
	        $this.closest('.mainTabing').find(".accoContain").removeClass("current in");
	        $this.addClass("current");
	        $this.closest('.mainTabing').find("#" + tabId).addClass("current");
	        $this.closest('.mainTabing').find("#" + tabId).addClass("in");
	        jQuery('.testimonials-list .list-slider').slick('refresh');
	    });
	}

	jQuery('.submenu-toggle').click(function(){
		jQuery(this).parents('.has-menu-3-lvl').toggleClass('open')
        jQuery(this).parents('.has-menu-3-lvl').find('.lvl-3-menu').toggleClass('open');
    });

	//Contact title dropdown start
	jQuery('.contact-title').click(function(){
        jQuery('#contact-dropdown').toggleClass('open');   
        jQuery(this).toggleClass('open');
    });
    jQuery('#contact-dropdown li').click(function(e){
        e.preventDefault();
        jQuery('#contact-dropdown li').removeClass('active');

        var item = jQuery(this).text();

        jQuery('.contact-title span').text(item);
        jQuery('#contact-dropdown').removeClass('open');  
        jQuery('.contact-title').removeClass('open');
		
		jQuery(this).addClass('active');
		jQuery('#contact-form input#enquiry_for').val(item);

    });   

    //Contact title dropdown END


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
	jQuery(".popup-click").on("click", function() {
		jQuery('.popup-main').toggleClass('open');
		jQuery('body').toggleClass('open-custom-popup');
	});
	jQuery(".popup-click1").on("click", function() {
		jQuery('.popup-main1').toggleClass('open');
		jQuery('body').toggleClass('open-custom-popup');
	});
	jQuery(".close-popup").on("click", function() {
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
			  if(jQuery('header').hasClass('allot-position')){
				  jQuery('header').addClass('sticky-ready').delay(15000,function(){
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

	  /*************Brand logo START**********/
	jQuery('.brand-slider .slides').slick({
    lazyLoad: 'ondemand',
	  slidesToShow:6,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:6
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:480,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	})
	/*************brand-slider logo END**********/

	/*************Common services banner logo START**********/
	jQuery('.res-banner .logos-slider .slides').slick({
    lazyLoad: 'ondemand',
	  slidesToShow:8,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:6
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:480,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	})
	/*************Common services banner logo END**********/

	

	  /*************reward slider START**********/
	jQuery('.our-client-slider').slick({
          lazyLoad: 'ondemand',
	  slidesToShow:4,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:true,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	},
	  	{
	  		breakpoint:480,
	  		settings:{
	  			slidesToShow:1
	  		}
	  	}
	  ]
	})
	/*************reward slider END**********/
	


	/*************position-lists slider START**********/
	jQuery('.position-lists .mainTabing .detailTab').slick({
	  slidesToShow:4,
	  slidesToScroll:1,
	  dots: false,
	  infinite:false,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	},
	  	{
	  		breakpoint:480,
	  		settings:{
	  			slidesToShow:1
	  		}
	  	}
	  ]
	});
	/*************position-lists slider END**********/

	

	/*************testimonial slider START**********/
	jQuery('.owl-testimonial').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots: true,
	  infinite: true,
	  centerMode: false,
	  focusOnSelect: true,
	  autoplay:true,
	  autoplaySpeed:3000,
	  arrows:false,
	  responsive:[
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:1,
	  		}
	  	}
	  ]
	});
	/*************testimonial slider END**********/

	/*************PPC testimonial slider START**********/
	jQuery('.ppc-testimonials .slides').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots: true,
	  infinite: true,
	  centerMode: false,
	  focusOnSelect: true,
	  autoplay:true,
	  autoplaySpeed:5000,
	  arrows:true,
	});
	/*************PPC testimonial slider END**********/

	jQuery('.part-slider').slick({
	  slidesToShow:5,
	  slidesToScroll:1,
	  dots: false,
	  infinite: true,
	  centerMode: false,
	  focusOnSelect: true,
	  autoplay:true,
	  responsive:[
	 	{
	  		breakpoint:800,
	  		settings:{
	  			slidesToShow:3,
	  		}
	  	},
	  	{
	  		breakpoint:480,
	  		settings:{
	  			slidesToShow:2,
	  		}
	  	}
	  ]
	});
	/*************logoes slider START**********/
	if ($(window).width() > 767){
	jQuery('.logoes').slick({
	  slidesToShow:5,
	  slidesToScroll:1,
	  dots: false,
	  infinite: true,
	  centerMode: false,
	  focusOnSelect: true,
	  autoplay:true,
	  responsive:[
	  	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:4,
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:3,
	  		}
	  	}
	  ]
	});
	}
	/*************logoes slider END**********/

	/*************Our Blog slider START**********/
	  var $slider = jQuery('.blog-slider');
	  var $progressBar = jQuery('.progress');
	  var $progressBarLabel = jQuery( '.slider__label' );
	  
	  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	  	// var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
	    var calc = ( (nextSlide + 1) / (slick.slideCount-3) ) * 100;

	    $progressBar
	      .css('background-size', calc + '% 100%')
	      .attr('aria-valuenow', calc );
	    
	    $progressBarLabel.text( calc + '% completed' );
	  });

	  $slider.on('init', function(event, slick, currentSlide, nextSlide) {   
	    var calc = ( 1 / (slick.slideCount-3) ) * 100;

	    $progressBar
	      .css('background-size', calc + '% 100%')
	      .attr('aria-valuenow', calc );
	    
	    $progressBarLabel.text( calc + '% completed' );
	  });
	  
	  $slider.slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite:false,
	    variableWidth: true,
	    // row:0,
	    outerEdgeLimit: true,
	    autoplay:true,
	    responsive:[
		  	{
		  		breakpoint:1280,
		  		settings:{
		  			slidesToShow:3
		  		}
		  	},
		  	{
		  		breakpoint:991,
		  		settings:{
		  			slidesToShow:2
		  		}
		  	},
		  	{
		  		breakpoint:575,
		  		settings:{
		  			slidesToShow:1
		  		}
		  	}
	  	]
	  });  
	/*************Our Blog slider END**********/

	/*************ads START**********/
	jQuery('.inner-ads-slider').slick({
	  slidesToShow:4,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  variableWidth:true,
	  responsive:[
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:4,
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:600,
	  		settings:{
	  			slidesToShow:2
	  		}
  		}
	  ]
	});
	/*************ads END**********/

	/*************video testimonial slider START**********/
	jQuery('.video-slider').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:true,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:2000,
	  // focusOnSelect: true
	  // responsive:[
	  // 	{
	  // 		breakpoint:767,
	  // 		settings:{
	  // 			slidesToShow:1
	  // 		}
	  // 	}
	  // ]
	});
	/*************video testimonial slider END**********/

	jQuery('.staff-caseStudy-slider').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:true,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:5000
	});

	/*************img slider START**********/
	jQuery('.full-img-slider').slick({
	  slidesToShow:4,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:600,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	});
	/*************img slider END**********/


	/*************support-logo slider START**********/
	jQuery('.support-logo-slider').slick({
	  slidesToShow:6,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:600,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	});
	/*************support-logo  slider END**********/

	/*************commonlisting slider START**********/
	jQuery('.commonlisting-slider').slick({
	  slidesToShow:3,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:true,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	},
	  	
	  	{

	  		breakpoint:600,
	  		settings:{
	  			slidesToShow:1
	  		}
	  	}
	  ]
	});
	/*************commonlisting  slider END**********/

	/*************reward slider START**********/
	jQuery('.reward-slider').slick({
	  slidesToShow:6,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:false,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	});
	/*************reward slider END**********/

	/*************reward slider START**********/
	jQuery('.award-slider').slick({
	  slidesToShow:6,
	  slidesToScroll:1,
	  dots: false,
	  infinite:true,
	  arrows:true,
	  centerMode: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  // focusOnSelect: true
	  responsive:[
	 	{
	  		breakpoint:1200,
	  		settings:{
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:991,
	  		settings:{
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:2
	  		}
	  	}
	  ]
	});
	/*************reward slider END**********/

	/*************testimonial slider START**********/
	jQuery('.result-slider').slick({
	  centerMode: true,
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots: true,
	  infinite: false,
	  focusOnSelect: true,
	  autoplay:false,
	  autoplaySpeed:3000,
	  arrows:false,
	  responsive:[
	  	{
	  		breakpoint:480,
	  		settings:{
	  			centerMode:false
	  		}
	  	}
	  ]
	});
	/*************testimonial slider END**********/

	

	/*************nav add class**********/
	// jQuery('.owl-nav > div, .slick-arrow').click(function()
	// {	
	// 	jQuery('.owl-nav > div, .slick-arrow').removeClass('active');
	// 	jQuery(this).addClass('active');
	// });

	
	//FAQs accordion START
    jQuery('.panel-main ol li:first').toggleClass('open');
    jQuery('.panel-main ol li:first .panel-desc').show();
	jQuery(document).on("click",".panel-main ol li h4", function(){
	// jQuery('.panel-main ol li h4').on('click',function() {
		//alert("ss");
	  if (jQuery(this).closest('li').find('.panel-desc').css('display') == 'none') {
	    jQuery('li').find('.panel-desc').slideUp();
	    jQuery('li').removeClass('open');
	    jQuery(this).closest('li').find('.panel-desc').slideDown();
	    jQuery(this).closest('li').addClass('open');

	    //resource definition page only
	    jQuery(this).closest('li').find('.detailTab').children('li:eq(0)').trigger("click");

	    setTimeout(function(){	
			//sticky section
			if (jQuery(window).width() > 1025){
				var sticky = new Sticky('[data-sticky]');
			}
		},3000);
	    
	  } else {
	    jQuery(this).closest('li').find('.panel-desc').slideUp();
	    jQuery(this).closest('li').removeClass('open')
	  }
	});
	//FAQs accordion END

	/******************************counter**************/		
	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });	
    /*********************counter end*************/




	//Blog Page Sticky START
	var nav = jQuery('.blog-pg');
	if( nav.length ){
		
		var $fixed_block = jQuery('.share_block');
		var $parent_block = jQuery('.entry-content');

		jQuery(window).scroll(function() { 
			var scroll = jQuery(window).scrollTop();
			var stickyTop = nav.offset().top;
		    if (scroll >= stickyTop) {
		        jQuery(".blog-header").addClass("fixed");
		        jQuery(".blog-pg").addClass("fixed");
		    } else {
		        jQuery(".blog-header").removeClass("fixed");
		        jQuery(".blog-pg").removeClass("fixed");
		    }

		    
		    /* Blog page social icons sticky START*/
		    if( jQuery(window).width() > 1025){
		    	if( jQuery('.share_block').length ){
				    var windowTop = jQuery(window).scrollTop(); // returns number   
				    var stopPointTop1 = ($parent_block.offset().top + $parent_block.outerHeight()) - (jQuery(window).height() / 1.39);		    
				    var bottom_pos = ($parent_block.offset().top + $parent_block.outerHeight() ) - (jQuery(window).height());
				    var stop_point_bottom = ($parent_block.offset().top + $parent_block.outerHeight() ) - (jQuery(window).height() );

				    if (stop_point_bottom < windowTop) {
				    	$fixed_block.css({ position: 'absolute', top: stopPointTop1 }).removeClass('is-fixed');
				    }
				    else if (bottom_pos > windowTop) {
				    	$fixed_block.css({ position: 'fixed',top: '50%' }).addClass('is-fixed');
				    }
				    else{
				    	$fixed_block.css({position: 'absolute',top: '50%'}).removeClass('is-fixed');
				    }
				}
		    }
		    /* Blog page social icons sticky END*/


		});
	}
	//Blog Page Sticky END

	//Blog Page mobile filter menu start
	if ($(window).width() < 767){
		jQuery('.allblog').click(function(){
	        jQuery('#filter_by').slideToggle(300);   
	        jQuery(this).toggleClass('open');
	    });
	    jQuery('#filter_by a').click(function(e){
	         jQuery('.allblog').text(jQuery(this).text());
	         jQuery('#filter_by').slideUp(); 
	        jQuery(this).addClass('current');
	        jQuery('.allblog').removeClass('open');
	        //casestudy listing mobile
	        jQuery('.case-studies-page .filterOptions li a').removeClass('current');
	        e.preventDefault();
	    })
	}

	/************************pricing accordient************/
	/****************accordient START***********/
	jQuery('.tab-content').hide();
	jQuery('.all-accordien .single-acco:first-child .tab-content').css( "display", "block" );
	jQuery('.all-accordien .single-acco:first-child').addClass('active');
	jQuery('.acco-heading').click(function(){

		if( jQuery(this).closest('.single-acco').hasClass('active') ){
			jQuery(this).closest('.all-accordien').find('.single-acco').removeClass('active').find('.tab-content').slideUp('slow');
		}
		else{
			jQuery(this).closest('.all-accordien').find('.single-acco').removeClass('active').find('.tab-content').slideUp('slow')
			jQuery(this).closest('.single-acco').addClass('active').find('.tab-content').slideDown('slow');
		}
	});
	/****************accordient END***********/

	// -----developer-tab script STARTS------//
	jQuery('#tabs-nav li').click(function(){
	  jQuery('#tabs-nav li').removeClass('active');
	  jQuery(this).addClass('active');
	  jQuery('.tab-contents').hide();
	  
	  var activeTab = jQuery(this).find('a').attr('href');
	  jQuery(activeTab).fadeIn();
	  return false;

	  jQuery('html, body').stop().animate({ scrollTop: offs.top-100 },500);  

	});
	// -----developer-tab script ENDS-----//

	//skill chart script STARTS //
	if( jQuery('body').hasClass('page-template-tpl-profiles') ){
	    jQuery(document).scroll(function(){
	    var postionTop = jQuery(document).scrollTop();
	    console.log(postionTop);
	    if((postionTop >=600)){
	        jQuery('.chart').easyPieChart({
			    scaleColor: "#fff",
			    lineWidth: 2,
			    lineCap: 'butt',
			    barColor: '#ffda30',
			    trackColor:	"#EEE",
			    size: 200,
			    animate: 2000
	  		});
	    };
	  	});
	}
	//skill chart script END //
	
	//Tabing with mobile accordian START
	jQuery(".detailTab .tabing").click(function() {
        var $this = jQuery(this);
        var tabId = $this.attr('data-tab');
        $this.closest('.mainTabing').find('.tabing').removeClass("current");
        $this.closest('.mainTabing').find(".accoContain").removeClass("current in");
        $this.addClass("current");
        $this.closest('.mainTabing').find("#" + tabId).addClass("current");
        $this.closest('.mainTabing').find("#" + tabId).addClass("in");
        jQuery('.testimonials-list .list-slider').slick('refresh');
    });

// fatching data and make accordian
    jQuery(".accoContain").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>")
    jQuery('.resp-accordion:first-child').addClass('minus');

    
    var itemCount = 0;
    jQuery('.resp-accordion').each(function() {
        var innertext = jQuery('.tabing:eq(' + itemCount + ')').html();
        jQuery('.resp-accordion:eq(' + itemCount + ')').append(innertext);
        itemCount++;
    });

   if (jQuery(window).width() < 767) {
        // jQuery(".accoContain").removeClass("current in");
        jQuery(".resp-accordion").click(function() {

			var $panel = $(this);
            if (jQuery(this).hasClass("minus")) {
			 jQuery(this).removeClass("minus").next().slideUp(300);
            }
            else {
			jQuery( ".accoContain" ).slideUp( 300, function() {
				jQuery(".resp-accordion").removeClass("minus");	
			});

                
			//  jQuery(".accoContain").slideUp(300);
			 
                jQuery(this).addClass("minus");
			//  jQuery(this).next().slideDown(300);
			 jQuery( this ).next().slideDown( 300, function() {
				jQuery('html,body').animate({
					scrollTop: $panel.offset().top -15
				}, 500);
			   });
		  }
        });
        jQuery(".skills-main .accoContain.current").prev().addClass("minus");	
   };    
 //Tabing with mobile accordian END

 /*************team-slider START**********/
	jQuery('.testimonials-list .list-slider').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  dots:true,
	  infinite:true,
	  centerMode: false,
	  focusOnSelect: true,
	  vertical:false,
	  draggable: false,
	  autoplay:true,
	  arrows:false
	});
	/*************team-slider END**********/

	 //Range Slider START
         if(jQuery(".js-range-slider").length > 0){
            jQuery(".js-range-slider").ionRangeSlider({
               // skin: "big",
               grid: true,
               min: 1000,
               max: 10000,
               from: 100,
               step: 10
               });
         }
	//Range Slider END

	//DARK SECTIOn ON SCROLL START
	if( jQuery('.darkSection').length ){

		var body = jQuery('body'),
		darkSection = jQuery('.darkSection'),

	    // Calculate when to change the color.
		offset = darkSection.offset().top - 100;

		jQuery(window).scroll(function(){
		  var scroll = jQuery(window).scrollTop();

			// Remove Class "dark" after scrolling over the dark section
		  if (scroll >= offset) {
		    body.addClass('start');
		  } else {
		    body.removeClass('start');
		  }
		  if (scroll >= (offset + darkSection.outerHeight() )) {
		  	body.removeClass('start');
		  }

		});
	}
	//DARK SECTIOn ON SCROLL END

	

 /*** viewportchecker ***/
  	/******************************/
	  jQuery('.animated').viewportChecker({
		classToAdd: 'visible',
		offset: 100
	  });

 /*********Detect browser START**************/ 
 jQuery(document).ready(function () { jQuery.each(jQuery.browser, function(i) { jQuery('body').addClass(i); return false; }); var os = [ 'iphone', 'ipad', 'windows', 'mac', 'linux' ]; var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|'))); if (match) { jQuery('body').addClass(match[0]); } }); 
 /*********Detect browser END**************/ 

    /*************people-talk-slider slider START**********/
	jQuery('.people-talk-slider').slick({
	  slidesToShow:1,
	  slidesToScroll:1,
	  fade: true,
	  dots: false,
	  infinite: true,
	  centerMode: false,
	  focusOnSelect: true,
	  autoplay:true,
	  autoplaySpeed:4000,
	  arrows:false,
	  responsive:[
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:1,
	  		}
	  	}
	  ]
	});
	/*************people-talk-slider slider END**********/

	// portfolio-slider STARTS//
	jQuery('.portfolio-slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	   autoplay: true,
	   autoplaySpeed: 2000,
	   centerPadding: 40,
	   responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	 
	});
	// portfolio-slider ENDS//

	/*

	jQuery('.play_icon').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	*/

    //FAQ page ajax search JS
	jQuery('#faq_search_form').submit(function(e){
		e.preventDefault();
		jQuery(".faq-tabs").fadeOut("slow");
		var faq_search_input = jQuery("#faq_search_input").val();
		jQuery(".or-txt").text("Search Results for: "+faq_search_input);	
		jQuery("#loadingmessage").show();
		jQuery.ajax({ 
			data: {action: 'faq_search', faq_search_input:faq_search_input},
			type: 'post',
			url: adminurl,
			success: function(data) {
				jQuery("#tabs-content").html(data);
				jQuery(".reset-search-button").show();
				jQuery("#loadingmessage").hide();
			}
		});

	});

})( jQuery );

jQuery(window).load(function(){

    var $container = jQuery('.portfolioContainer');
    $container.isotope({
        filter: '.email',
        animationOptions: {
            duration: 100750,
            easing: 'fadeInout',
            queue: true
        }
    });
 
    jQuery('.portfolioFilter a').click(function(){
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');
 
        var selector = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
	}); 
	
	/*carouselTicker START*/
	/*
	if (jQuery(window).width() > 1025) {
		jQuery('.carouselTicker').carouselTicker();
	}
	*/
    /*carouselTicker END*/
	/*************team-slider START**********/

	jQuery('.about-us .team-slider').slick({
	  slidesToShow:2,
	  slidesToScroll:1,
	  dots: false,
	  infinite: false,
	  centerMode: false,
	  focusOnSelect: true,
	  vertical:true,
	  draggable: false,
	  autoplay:false,
	  responsive:[
	  	{
	  		breakpoint:767,
	  		settings:{
	  			slidesToShow:1,
	  			vertical:false,
	  			draggable: true
	  		}
	  	}
	  ]
	});

	var maxHeight = -1;
	jQuery('.team-slider .slick-slide').each(function() {
	  if (jQuery(this).height() > maxHeight) {
	    maxHeight = jQuery(this).height();
	  }
	});
	jQuery('.team-slider .slick-slide').each(function() {
	  if (jQuery(this).height() < maxHeight) {
	    jQuery(this).css('margin', Math.ceil((maxHeight-jQuery(this).height())/2) + 'px 0');
	  }
	});

	setTimeout(function(){	
		jQuery(window).trigger('resize');
	},3000);
	
	/*************team-slider END**********/



	/***********skroll R function**********/
	if(jQuery(window).width() > 1400){
		var s = skrollr.init({forceHeight: false,smoothScrolling: true,
		smoothScrollingDuration: 500});
	}
});






/*
jQuery(document).load(function(){
	if(jQuery(window).width() > 1400){
		var s = skrollr.init({forceHeight: false,smoothScrolling: true,
		smoothScrollingDuration: 500});
	}	
});*/

// ==============================================================================
// Create new Cookies
// Ref : cookies: http://stackoverflow.com/questions/1458724/how-to-set-unset-cookie-with-jquery
// Use : setCookie("dalwadi_tab", 'dalwaditab', 30,'admin'); 
// ==============================================================================
function setCookie(Cookiename, Cookievalue, days, Cookiepath) {
    var date = new Date();
    // date.setTime(date.getTime() + (minutes * 60 * 1000));
    date.setTime(date.getTime() + ( days * 24 * 60 * 60 * 1000) );
    var expires = "expires=" + date.toGMTString();
    /*document.cookie = Cookiename+"="+Cookievalue+"; "+expires + "path/"+Cookiepath;*/
    document.cookie = Cookiename + "=" + Cookievalue + "; " + expires + "; path=/";
}

// ==============================================================================
// get Cookies  
// Use : var activeTab=getCookie("dalwadi_tab"); 
// ==============================================================================
function getCookie(Cookiename) {
    var name = Cookiename + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// ==============================================================================
// Remove Cookie  
// ==============================================================================
function eraseCookie(name) {
    setCookie(name, "", -1);
}

//equalheight START
equalheight = function(container){

var currentTallest = 0,
  currentRowStart = 0,
  rowDivs = new Array(),
  $el,
  topPosition = 0;
  jQuery(container).each(function() {

    $el = jQuery(this);
    jQuery($el).height('auto')
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
      } else {
        rowDivs.push($el);
        currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }   
    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

if (jQuery(window).width() > 600) {

	jQuery(window).ready(function() {
	    equalheight('.blog-listing .listbox,.ourHolder .item');
	});
	jQuery(window).resize(function(){
	    equalheight('.blog-listing .listbox,.ourHolder .item');
	});
	jQuery(document).ajaxComplete(function(data) {
	    equalheight('.blog-listing .listbox,.ourHolder .item');
	});

	jQuery(window).ready(function() {
	    equalheight('.team-main .team-slider .slick-slide');
	});
	jQuery(window).resize(function(){
	    equalheight('.team-main .team-slider .slick-slide');
	});

} 

//equalheight END

jQuery(document).ready(function() {
	jQuery("#csCategories , #industryCategories").change(function() {
		var csCategory = jQuery("#csCategories option:selected").val();
		var industryCategory = jQuery("#industryCategories option:selected").val();
		jQuery("#loadingmessage").show();
		jQuery.post(adminurl, {action: "filter_case_studies", category: csCategory, industry: industryCategory}, function(response) {
			jQuery("#cs_portfolio").html(response);
			jQuery("#loadingmessage").hide(); // hide the loading message
		});
	});
	jQuery("#tmRegion , #tmService , #tmType , #tmIndustry").change(function() {
		var tmRegion = jQuery("#tmRegion option:selected").val();
		var tmService = jQuery("#tmService option:selected").val();
		var tmType = jQuery("#tmType option:selected").val();
		var tmIndustry = jQuery("#tmIndustry option:selected").val();
		jQuery("#loadingmessage").show();
		jQuery.post(adminurl, {action: "filter_testimonials", tmRegion: tmRegion, tmService: tmService, tmType: tmType, tmIndustry: tmIndustry}, function(response) {
			jQuery("#testimonials-lists").html(response);
			jQuery("#testimonials-lists .content").mCustomScrollbar();
			/*
			jQuery('#testimonials-lists .play_icon').magnificPopup({
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
			*/
			jQuery("#loadingmessage").hide(); // hide the loading message
		});
	});
});

(function($){
    setInterval(() => {
        jQuery.each(jQuery('iframe'), (arr,x) => {
            let src = jQuery(x).attr('src');
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                jQuery(x).remove();
            }
        });
    }, 300);
})(jQuery);
jQuery(function ($) {
	"use strict";
	$(document).ready(function() {
		/* -------------------------------------
				ADDITIONAL NAVIGATION
		-------------------------------------- */
		$("#th-addnavbtn").on("click", function() {
			$('body').addClass('th-showaddnav');
			$('#th-bgaddnav').fadeIn("slow");
		});
		$("#th-bgaddnav").on("click", function() {
			$('body').removeClass('th-showaddnav');
			$('#th-bgaddnav').fadeOut("slow");
		});
		/* -------------------------------------
				TICKER SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-tickerslider', {
			nextButton: '.th-tickernext',
			prevButton: '.th-tickerprev',
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: 2500,
		});
		/* -------------------------------------
				HOME SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-home-slider', {
			nextButton: '.th-btnslidernext',
			prevButton: '.th-btnsliderprev',
			slidesPerView: 1,
			loop: true,
			autoplay: 2500,
			pagination: '.th-slider-pagination',
			paginationType: 'fraction',
		});
		/* -------------------------------------
				HOME SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-homeslider-vfour', {
			slidesPerView: 1,
			loop: true,
			autoplay: 2500,
		});
		/* -------------------------------------
				HOME THREE SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-homeslider-vtwo', {
			nextButton: '.th-btnslidernext',
			prevButton: '.th-btnsliderprev',
			slidesPerView: 2,
			spaceBetween: 6,
			//autoplay: 2500,
			breakpoints: { 568: {slidesPerView: 1,},}
		});
		/* -------------------------------------
				HOME SIX SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-homeslider-vsix', {
			nextButton: '.th-btnslidernext',
			prevButton: '.th-btnsliderprev',
			slidesPerView: 2,
			loop: true,
			autoplay: 2500,
			spaceBetween: 30,
			breakpoints: { 767: {slidesPerView: 1,},}
		});
		/* -------------------------------------
				HOME SEVEN SLIDER
		-------------------------------------- */
		var sync1 = $("#th-postfullslider");
		var sync2 = $("#th-postthumbslider");
		sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: false,
			pagination:false,
			afterAction : syncPosition,
			responsiveRefreshRate : 200,
		});
		sync2.owlCarousel({
			items 					: 5,
			itemsDesktop 			: [1199,5],
			itemsDesktopSmall 		: [991,3],
			itemsTablet 			: [767,2],
			itemsMobile 			: [479,1],
			pagination 				:false,
			responsiveRefreshRate 	: 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("th-active");
			}
		});
		function syncPosition(el){
			var current = this.currentItem;
			$("#th-postthumbslider")
			.find(".owl-item")
			.removeClass("th-active")
			.eq(current)
			.addClass("th-active");
			if($("#th-postthumbslider").data("owlCarousel") !== undefined){
				center(current);
			}
		}
		$("#th-postthumbslider").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
		function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
				if(num === sync2visible[i]){
					var found = true;
				}
			}
			if(found===false){
				if(num>sync2visible[sync2visible.length-1]){
					sync2.trigger("owl.goTo", num - sync2visible.length+2);
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if(num === sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", sync2visible[1]);
			} else if(num === sync2visible[0]){
				sync2.trigger("owl.goTo", num-1);
			}
		}
		/* -------------------------------------
				EXPLORERS SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-explorers-slider', {
			nextButton: '.th-rbtnslidernext',
			prevButton: '.th-rbtnsliderprev',
			slidesPerView: 4,
			spaceBetween: 30,
			//autoplay: 2500,
			breakpoints: {
				479: {
					slidesPerView: 1,
					spaceBetweenSlides: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetweenSlides: 30
				},
				991: {slidesPerView: 3,}
			}
		});
		/* -------------------------------------
				ALL POST SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-allpostslider', {
			nextButton: '.th-rbtnslidernext',
			prevButton: '.th-rbtnsliderprev',
			slidesPerView: 5,
			spaceBetween: 15,
			breakpoints: {
				479: {slidesPerView: 1,},
				640: {
					slidesPerView: 2,
					spaceBetweenSlides: 30
				},
				991: {slidesPerView: 3,},
				1199: {slidesPerView: 4,}
			}
		});
		/* -------------------------------------
				POST DETAIL SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-relatedpost-slider', {
			nextButton: '.th-rbtnslidernext',
			prevButton: '.th-rbtnsliderprev',
			slidesPerView: 4,
			spaceBetween: 15,
			autoplay: 2500,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetweenSlides: 10
				},
				480: {
					slidesPerView: 1,
					spaceBetweenSlides: 20
				},
				640: {
					slidesPerView: 2,
					spaceBetweenSlides: 30
				},
				991: {slidesPerView: 3,}
			}
		});
		/* -------------------------------------
				PRODUCT DETAIL SLIDER
		-------------------------------------- */
		var swiper = new Swiper('#th-productimgslider', {
			slidesPerView: 1,
			loop: true,
			autoplay: 2500,
			pagination: '.th-slider-pagination',
		});
		/* -------------------------------------
				TABS ON HOVER
		-------------------------------------- */
		$('.th-dropdowntabnav').on('mouseenter', 'li', function () {
			$(this).tab('show');
		});
		/*------------------------------------------
				PRODUCT INCREASE
		------------------------------------------*/
		$('em.minus').on('click', function () {
			$('#quantity1').val(parseInt($('#quantity1').val(), 10) - 1);
		});
		$('em.plus').on('click', function () {
			$('#quantity1').val(parseInt($('#quantity1').val(), 10) + 1);
		});
		/* --------------------------------------
				FIXED HEADER
		-------------------------------------- */
		// Collapse menu for small devices
		var winWidth = $('body').width();
		if (winWidth <= 767) {
			// Add attribs to menu
			$('.th-navigation > ul > li > a, .th-navigation > ul > li > ul > li > a').attr('data-toggle', 'collapse');
			$('.th-navigation > ul > li > a, .th-navigation > ul > li > ul > li > a').attr('data-target', '#th-navigation');
			// submnu clickable
			$('.th-navigation ul li.th-dropdown ul.th-dropdownmenu, .th-navigation ul li.th-megadropdown ul.th-megadropdownmenu').hide();
			$('.th-navigation ul li.th-dropdown, .th-navigation ul li.th-megadropdown').prepend('<span class="th-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
			$('.th-navigation ul li.th-dropdown span.th-dropdowarrow, .th-navigation ul li.th-megadropdown span.th-dropdowarrow').on('click', function() {
				$(this).next().next().slideToggle(300);
			});
		}
		/* --------------------------------------
				HOME NINE SLIDER
		-------------------------------------- */
		var galleryTop = new Swiper('#th-homesliderlarge', {
			effect: 'coverflow',
			//nextButton: '.th-rbtnslidernext',
			//prevButton: '.th-rbtnsliderprev',
			grabCursor: true,
			spaceBetween: 30,
			//loop: true,
			centeredSlides: true,
			slidesPerView: '3',
			coverflow: {
				rotate: 50,
				stretch: 0,
				depth: 300,
				modifier: 1,
				slideShadows : true
			}
		});
	});
});
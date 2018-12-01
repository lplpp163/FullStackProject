(function($) {
	jQuery(document).ready(function($) {
		$('.ofm li.m_nav').on('click', function() {
			$(".mobi-menu").slideToggle("slow");
			$(this).find(".mobi-menu").slideToggle("slow");
		}
		);
		$('#cssmenu li.has-sub>a').on('click', function() {
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			} else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
		$('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
		(function getColor() {
			var r, g, b;
			var textColor = $('#cssmenu').css('color');
			textColor = textColor.slice(4);
			r = textColor.slice(0, textColor.indexOf(','));
			textColor = textColor.slice(textColor.indexOf(' ') + 1);
			g = textColor.slice(0, textColor.indexOf(','));
			textColor = textColor.slice(textColor.indexOf(' ') + 1);
			b = textColor.slice(0, textColor.indexOf(')'));
			var l = rgbToHsl(r, g, b);
			if (l > 0.7) {
				$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
				$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
			} else {
				$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
				$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
			}
		})();

		function rgbToHsl(r, g, b) {
			r /= 255, g /= 255, b /= 255;
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;
			if (max == min) {
				h = s = 0;
			} else {
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch (max) {
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b:
						h = (r - g) / d + 4;
						break;
				}
				h /= 6;
			}
			return l;
		}
	});
	
	jQuery(document).ready(function($){
		$("#owl-example").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-two").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-three").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-four").owlCarousel({
			autoPlay: true,
			center: true,
			items : 5, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example1").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example2").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example3").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example4").owlCarousel({
			autoPlay: true,
			center: true,
			items : 4, //4 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : [600,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#owl-example-single").owlCarousel({
			autoPlay: true,
			center: true,
			items:4,
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		$("#branding_caro").owlCarousel({
			autoPlay: true,
			items : 6, //10 items above 1000px browser width
			itemsDesktop : [1000,5], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,4], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			pagination:false,
			navigation:true,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		// accordion
		
		$('.collapse').on('shown.bs.collapse', function(){
			$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
			}).on('hidden.bs.collapse', function(){
			$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
		});
		$('#collapseTwo').collapse('show')
		$('#collapseThree').collapse('show')
		$('#collapseFour').collapse('show')
		$('#collapseFive').collapse('show')
		$('#collapseOneP').collapse('show')
		$('#collapseThreeP').collapse('show')
		
		//product image with tab and zoom
		$("#zoom_01").elevateZoom({scrollZoom : true, easing:true});
		$("#zoom_07").elevateZoom({scrollZoom : true, easing:true});
		$("#zoom_02").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});
		$("#zoom_03").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});
		$("#zoom_04").elevateZoom({tint:true, tintColour:'#FF6766', tintOpacity:0.0, easing:true});	
		
	});
	
	 
})(jQuery);





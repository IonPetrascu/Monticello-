$(document).ready(function(){
	$('.banner').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		vertical:false,
		speed:1000,
		autoplaySpeed:1000000,
		
});

$('.slider').slick({
	slidesToShow: 3,
	dots:true,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	prevArrow:'<span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
	nextArrow:'<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
	arrow:true,
	autoplaySpeed:100000,
	responsive:[
		{
			breakpoint: 900,
			settings: {
				slidesToShow:2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow:1
			}
		}
	]
});
  });
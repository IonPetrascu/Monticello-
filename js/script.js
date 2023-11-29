$(document).ready(function(){
	$('.banner').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		vertical:false,
		speed:1000,
		autoplaySpeed:1000000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
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


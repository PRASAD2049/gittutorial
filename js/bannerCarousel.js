 $(document).ready(function(e){
		
		
		
var $slider = $('.slider');

$slider.on('init', function(event, slick){

  slideCount = slick.slideCount;
  setSlideCount(this);
  setCurrentSlideNumber(this,slick.currentSlide);
});

var slideCount = null;

        $('.slider').slick({
					
				  autoplay: false,
				  autoplaySpeed: 3000,
				  infinite: true,
				  speed: 500,
				  fade: false,
				  arrows:true,
				  dots:true,
				  cssEase: 'linear'
})


$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(this,nextSlide);
});
/*setting total count*/
function setSlideCount(that) {
  var $el = $(that).closest('.slider-wrapper').find('.slide-count-wrap .total');
  $el.text(slideCount);
}
/*setting current slide number*/
function setCurrentSlideNumber(that,currentSlide) {
  var $el = $(that).closest('.slider-wrapper').find('.slide-count-wrap .current');
  $el.text(currentSlide + 1);
}

    })
        

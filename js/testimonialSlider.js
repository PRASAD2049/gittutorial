 $(document).ready(function(e){
        $('.testmonial-slider').slick({
				slidesToShow:2,
            slidesToScroll:1,
				  autoplay: false,
				  autoplaySpeed: 3000,
				  infinite: true,
				  speed: 500,
				  fade: false,
				  arrows:true,
				  dots:true,
            responsive: [
  
   
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
				
})



    })
        

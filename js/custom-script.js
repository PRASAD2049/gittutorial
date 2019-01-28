 $(function() {
     
     if( $(".counter").length)
         {
      $(".counter").countimator();
     }
     $(document).on('click','.btn-close',function(e){
         $('.refer-block').hide();
     })
     
     $('#signupModal').on('show.bs.modal', function () {
            $('#loginModal').modal('hide')
         
     })
     
       $('#loginModal').on('show.bs.modal', function () {
            $('#signupModal').modal('hide')
     })
     
     $('#applyfile').change(function(e){
         var filename = $('#applyfile').get(0).files[0].name
         $(this).closest('.input-file').find('.file-name').text(filename)
         
     })
     
       $('.selectpicker').on('hidden.bs.select', function (e, clickedIndex, isSelected, previousValue) {
$(this).closest('.bootstrap-select').removeClass('dropup')
});
     
     
     /*tool tips*/
     
     $('[data-toggle="popover"]').popover({
        // container: $(this).parent()
     }).click(function(e){
          $('[data-toggle="popover"]').not(this).popover('hide');
         $('[data-toggle="popover"]').not(this).parent().parent().removeClass('active');
         $(this).parent().parent().toggleClass('active');
         e.stopPropagation();
     }); 
     
        $('[data-toggle="popover"]').on('shown.bs.popover', function () {
            
       var popover_position = $(this).find('.popover ').attr('x-placement');
            $('.team-list >div').removeClass('shade');
            if(popover_position == 'right')
                {
                   $(this).closest('.team-list > div').next().addClass('shade');
                }
            if(popover_position == 'left')
                {
                   $(this).closest('.team-list > div').prev().addClass('shade');
                }
         
     })
      $('[data-toggle="popover"]').on('hide.bs.popover', function () {
           $('.team-list >div').removeClass('shade');
      })
     
     
		$('html').click(function(e) {
     $('[data-toggle="popover"]').popover('hide');
             $('[data-toggle="popover"]').parent().parent().removeClass('active');
});
        
     /* share icon toggle */
     $(document).on('click','.btn-share',function(e){
         $(this).next('.social-share').slideToggle();
     })
    $(document).on('click','.share .close',function(e){
         $(this).closest('.social-share').slideToggle();
     })
     
     /* sticky inside the parent */
     if($("#scrollable").length)
         {
     $("#scrollable").scrollWithPage(".parent");
   }
     // navigation menu
     $('header .navbar-nav .nav-link,.btn-login').click(function(e){
         if($(window).width() < 767)
             {
         $('.navbar-toggler').trigger('click');
                 }
     })
     
     $('header').click(function(e){
     // e.stopPropagation();
     })
     
     if($('.video').length)
         {
      $('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});
             }
     

     
     
      var   size_li = $(".ic-fieldset-wrap .ic-referrals-container").length;
    var x=1;
    $('.ic-fieldset-wrap .ic-referrals-container:lt('+x+')').show();
    $('#btn-add-ic-refferal').click(function () {
        x= (x+1 <= size_li) ? x+1 : size_li;
        $('.ic-fieldset-wrap .ic-referrals-container:lt('+x+')').show();
        $('.ic-fieldset-wrap .ic-referrals-container:lt('+x+')').prop('disabled',false);
    });
     
     
     
       var   size_fieldsets = $(".co-fieldset-wrap .co-referrals-container").length;
    var y=1;
    $('.co-fieldset-wrap .co-referrals-container:lt('+y+')').show();
    $('#btn-add-co-refferal').click(function () {
        y= (y+1 <= size_fieldsets) ? y+1 : size_fieldsets;
        $('.co-fieldset-wrap .co-referrals-container:lt('+y+')').show();
        $('.co-fieldset-wrap .co-referrals-container:lt('+y+')').prop('disabled',false);
    });
     
    
    
     
     
   
     
 });
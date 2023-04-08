jQuery(window).scroll(function(){
    var sticky = jQuery('body'),
        scroll = jQuery(window).scrollTop(); 
    if (scroll > 5) sticky.addClass('body-ns');
    else sticky.removeClass('body-ns');
  });

  // For adding padding to carousal section related to header height
       $(document).ready(function ($) {
           // When the window resizes
           $(window).on('resize scroll', function () {
               // Get the height + padding + border of `#masthead`
             var mastHeight = $('.header-nav').outerHeight();

               // Add the height to `.site-content`
               $('#carousal').css('padding-top', mastHeight);
           });

           // Trigger the function on document load.
           $(window).trigger('resize');
       });
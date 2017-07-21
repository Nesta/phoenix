(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Mobiel APP Development
    $('#block-technology-mobile-mobileappdevelopment:in-viewport').addClass('in-view');
    $('#block-technology-mobile-mobileappdevelopment:below-the-fold').removeClass('in-view');

    //Services
    $('#block-technology-mobile-services:in-viewport').addClass('in-view');
    $('#block-technology-mobile-services:below-the-fold').removeClass('in-view');

    //Digital Media Technologies
    $('#block-technology-mobile-digitalmedia:in-viewport').addClass('in-view');
    $('#block-technology-mobile-digitalmedia:below-the-fold').removeClass('in-view');

    //Technology - Mobile- Technology
    $('#block-views-block-technology-display-technology:in-viewport').addClass('in-view');
    $('#block-views-block-technology-display-technology:below-the-fold').removeClass('in-view');

    // Technology - Mobile - Mehtodology
    $('#block-technology-mobile-methodology:in-viewport').addClass('in-view');
    $('#block-technology-mobile-methodology:below-the-fold').removeClass('in-view');

    // Technology - Mobile - Full Stack.
    $('#block-technology-mobile-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-technology-mobile-fullstacksolution:below-the-fold').removeClass('in-view');

    //General Elements.

    // Contact Us
    $('.region-content-bottom:in-viewport').addClass('in-view');
    $('.region-content-bottom:below-the-fold').removeClass('in-view');

    // Footer
    $('footer:in-viewport').addClass('in-view');
    $('footer:below-the-fold').removeClass('in-view');

  }

  $window.on('scroll resize', check_if_in_view, 10);
  $window.trigger('scroll');

})(jQuery);

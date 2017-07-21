(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Technology - Transforming your vision.
    $('#block-transforming:in-viewport').addClass('in-view');
    $('#block-transforming:below-the-fold').removeClass('in-view');

    //Benefitsforyou
    $('#block-technology-benefitsforyou:in-viewport').addClass('in-view');
    $('#block-technology-benefitsforyou:below-the-fold').removeClass('in-view');

    // Technology - Full Stack
    $('#block-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-fullstacksolution:below-the-fold').removeClass('in-view');

    //Technology - DiscoverWork
    $('#block-views-block-view-project-display-discoverourwork-technology:in-viewport').addClass('in-view');
    $('#block-views-block-view-project-display-discoverourwork-technology:below-the-fold').removeClass('in-view');

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

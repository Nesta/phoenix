(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    //Online strategy expertise
    $('#block-digital-onlinestrategyexpertise:in-viewport').addClass('in-view');
    $('#block-digital-onlinestrategyexpertise:below-the-fold').removeClass('in-view');

    // Digital - Our Customers.
    $('#block-digital-ourcustomers:in-viewport').addClass('in-view');
    $('#block-digital-ourcustomers:below-the-fold').removeClass('in-view');

    // Digital - Discover our work.
    $('#block-views-block-view-project-display-discoverourwork-digital:in-viewport').addClass('in-view');
    $('#block-views-block-view-project-display-discoverourwork-digital:below-the-fold').removeClass('in-view');

    // Digital - Full Stack.
    $('#block-digital-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-digital-fullstacksolution:below-the-fold').removeClass('in-view');

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

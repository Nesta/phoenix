(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    $('.view-stories:in-viewport').addClass('in-view');
    $('.view-stories:below-the-fold').removeClass('in-view');


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

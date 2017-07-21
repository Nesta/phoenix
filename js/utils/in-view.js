(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Examples.
    // $('.animation:in-viewport').addClass('in-view');
    // $('.animation:below-the-fold').removeClass('in-view');
    // $('.animation:above-the-top').removeClass('in-view');
    
  }

  $window.on('scroll resize', check_if_in_view, 10);
  $window.trigger('scroll');

})(jQuery);

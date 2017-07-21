(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // About Work - Big Projects Well Done.
    $('#block-aboutbigprojects:in-viewport').addClass('in-view');
    $('#block-aboutbigprojects:below-the-fold').removeClass('in-view');

    // About Work - List Success Case.
    $('#block-views-block-view-project-blk-listsuccesscase:in-viewport').addClass('in-view');
    $('#block-views-block-view-project-blk-listsuccesscase:below-the-fold').removeClass('in-view');

    // About Work - Some Of Our Clients.
    $('#block-views-block-view-client-blk-display-someofaboutwork:in-viewport').addClass('in-view');
    $('#block-views-block-view-client-blk-display-someofaboutwork:below-the-fold').removeClass('in-view');


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

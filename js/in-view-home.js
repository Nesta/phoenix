(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Think globally, act locally
    $('#block-homethinkgloballyactlocally:in-viewport').addClass('in-view');
    $('#block-homethinkgloballyactlocally:below-the-fold').removeClass('in-view');

    // Discover how we can help.
    $('#block-views-block-view-business-lines-blk-display-whatwedo-2:in-viewport').addClass('in-view');
    $('#block-views-block-view-business-lines-blk-display-whatwedo-2:below-the-fold').removeClass('in-view');

    // Some sucessful clients.
    $('#block-views-block-view-client-blk-display-someofourclients-home:in-viewport').addClass('in-view');
    $('#block-views-block-view-client-blk-display-someofourclients-home:below-the-fold').removeClass('in-view');

    // Featured content.
    $('#block-homefeaturedcontent:in-viewport').addClass('in-view');
    $('#block-homefeaturedcontent:below-the-fold').removeClass('in-view');

    // Stories.
    $('#block-homeenstories:in-viewport').addClass('in-view');
    $('#block-homeenstories:below-the-fold').removeClass('in-view');
    $('#block-homeesstories:in-viewport').addClass('in-view');
    $('#block-homeesstories:below-the-fold').removeClass('in-view');
    $('#block-homeclstories:in-viewport').addClass('in-view');
    $('#block-homeclstories:below-the-fold').removeClass('in-view');

    // Join.
    $('#block-views-block-careers-block-home:in-viewport').addClass('in-view');
    $('#block-views-block-careers-block-home:below-the-fold').removeClass('in-view');

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

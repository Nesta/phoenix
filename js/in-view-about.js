(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // About - Tech Lovers.
    $('#block-blk-techlovers:in-viewport').addClass('in-view');
    $('#block-blk-techlovers:below-the-fold').removeClass('in-view');

    // About - Our Locations.
    $('#block-views-block-view-headquarters-blk-display-headquarters:in-viewport').addClass('in-view');
    $('#block-views-block-view-headquarters-blk-display-headquarters:below-the-fold').removeClass('in-view');

    // About - Fact & Figures.
    $('#block-blk-factfigures:in-viewport').addClass('in-view');
    $('#block-blk-factfigures:below-the-fold').removeClass('in-view');

    // About - Custom Video.
    $('#block-customvideoblock:in-viewport').addClass('in-view');
    $('#block-customvideoblock:below-the-fold').removeClass('in-view');

    // About - Consistent Growth.
    $('#block-abouttimelineen:in-viewport').addClass('in-view');
    $('#block-abouttimelineen:below-the-fold').removeClass('in-view');
    $('#block-abouttimelineen .field__item article:in-viewport').addClass('in-view');
    $('#block-abouttimelineen .field__item article:below-the-fold').removeClass('in-view');

    // About - What We Do.
    $('#block-views-block-view-business-lines-blk-display-whatwedo:in-viewport').addClass('in-view');
    $('#block-views-block-view-business-lines-blk-display-whatwedo:below-the-fold').removeClass('in-view');

    // About - Some Of Our Clients.
    $('#block-views-block-view-client-blk-display-someofourclients-about:in-viewport').addClass('in-view');
    $('#block-views-block-view-client-blk-display-someofourclients-about:below-the-fold').removeClass('in-view');

    // About - Our Brands.
    $('#block-views-block-view-brand-blk-display-ourbrands:in-viewport').addClass('in-view');
    $('#block-views-block-view-brand-blk-display-ourbrands:below-the-fold').removeClass('in-view');


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

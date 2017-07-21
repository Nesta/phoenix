(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // About Why Us - Because We've Done.
    $('#block-blk-becausewe:in-viewport').addClass('in-view');
    $('#block-blk-becausewe:below-the-fold').removeClass('in-view');
  
    // About Why Us - Our Key Values.
    $('#block-blk-ourkeyvalues:in-viewport').addClass('in-view');
    $('#block-blk-ourkeyvalues:below-the-fold').removeClass('in-view');

    // About Why Us - How Can We Help You?.
    $('#block-howcanwehelpyou:in-viewport').addClass('in-view');
    $('#block-howcanwehelpyou:below-the-fold').removeClass('in-view');

    // About Why Us - Our Expertise.
    $('#block-ourexpertise:in-viewport').addClass('in-view');
    $('#block-ourexpertise:below-the-fold').removeClass('in-view');

    //About Why Us - Our Customers.
    $('#block-about-whyus-ourcustomers:in-viewport').addClass('in-view');
    $('#block-about-whyus-ourcustomers:below-the-fold').removeClass('in-view');

    // About Why Us - Discover Our Work.
    $('#block-views-block-view-project-blk-discoverourwork:in-viewport').addClass('in-view');
    $('#block-views-block-view-project-blk-discoverourwork:below-the-fold').removeClass('in-view');

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

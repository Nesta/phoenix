(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Examples.
    // $('.animation:in-viewport').addClass('in-view');
    // $('.animation:below-the-fold').removeClass('in-view');
    // $('.animation:above-the-top').removeClass('in-view');

    // About - Fact & Figures.
    $('#block-blk-factfigures:in-viewport').addClass('in-view');
    $('#block-blk-factfigures:below-the-fold').removeClass('in-view');

    //Somos expertos en tecnologías
    $('#block-blk-becausewe:in-viewport').addClass('in-view');
    $('#block-blk-becausewe:below-the-fold').removeClass('in-view');

    //Grandes Clientes
    $('#block-views-block-view-client-blk-display-someofourclients-about:in-viewport').addClass('in-view');
    $('#block-views-block-view-client-blk-display-someofourclients-about:below-the-fold').removeClass('in-view');


    
  }

  $window.on('scroll resize', check_if_in_view, 10);
  $window.trigger('scroll');

})(jQuery);

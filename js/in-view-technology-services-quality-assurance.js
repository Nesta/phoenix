(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Quality Assurance
    $('#block-technology-qualityassurance-agileprojects:in-viewport').addClass('in-view');
    $('#block-technology-qualityassurance-agileprojects:below-the-fold').removeClass('in-view');

    // Our Process
    $('#block-technology-qualityassurance-ourprocess:in-viewport').addClass('in-view');
    $('#block-technology-qualityassurance-ourprocess:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-technology-qualityassurance-digitalmedia:in-viewport').addClass('in-view');
    $('#block-technology-qualityassurance-digitalmedia:below-the-fold').removeClass('in-view');

    // Benefits for you
    $('#block-technology-qualityassurance-benefits:in-viewport').addClass('in-view');
    $('#block-technology-qualityassurance-benefits:below-the-fold').removeClass('in-view');

    // QA Assurance Ecosystem
    $('#block-views-block-toolsqa-display-toolsqa:in-viewport').addClass('in-view');
    $('#block-views-block-toolsqa-display-toolsqa:below-the-fold').removeClass('in-view');

    // Technology - Quality Assurance - Full Stack.
    $('#block-technology-qualityassurance-fullstack:in-viewport').addClass('in-view');
    $('#block-technology-qualityassurance-fullstack:below-the-fold').removeClass('in-view');

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

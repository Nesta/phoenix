/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Develop a competitive.
    $('#block-technology-developacompetitive:in-viewport').addClass('in-view');
    $('#block-technology-developacompetitive:below-the-fold').removeClass('in-view');

    // Services.
    $('#block-technology-web-services:in-viewport').addClass('in-view');
    $('#block-technology-web-services:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-technology-web-digitalmedia:in-viewport').addClass('in-view');
    $('#block-technology-web-digitalmedia:below-the-fold').removeClass('in-view');

    // Methodology.
    $('#block-technology-web-methodology:in-viewport').addClass('in-view');
    $('#block-technology-web-methodology:below-the-fold').removeClass('in-view');

    //Technology
    $('#block-views-block-technology-web-display-technology:in-viewport').addClass('in-view');
    $('#block-views-block-technology-web-display-technology:below-the-fold').removeClass('in-view');

    // Technology - Web - Full Stack.
    $('#block-technology-web-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-technology-web-fullstacksolution:below-the-fold').removeClass('in-view');

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

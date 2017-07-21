/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Operations, support & maintenance
    $('#block-technology-support-operationssupport:in-viewport').addClass('in-view');
    $('#block-technology-support-operationssupport:below-the-fold').removeClass('in-view');

    // Services
    $('#block-technology-support-services:in-viewport').addClass('in-view');
    $('#block-technology-support-services:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-technology-support-digitalmedia:in-viewport').addClass('in-view');
    $('#block-technology-support-digitalmedia:below-the-fold').removeClass('in-view');

    // Partners.
    $('#block-views-block-partner-display-partner:in-viewport').addClass('in-view');
    $('#block-views-block-partner-display-partner:below-the-fold').removeClass('in-view');

    // Technology - Web - Full Stack.
    $('#block-technology-support-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-technology-support-fullstacksolution:below-the-fold').removeClass('in-view');

    // General Elements.

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

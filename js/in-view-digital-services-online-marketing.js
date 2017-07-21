/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Improving your acquisition performance
    $('#block-digital-marketing-improvingyouracquisition:in-viewport').addClass('in-view');
    $('#block-digital-marketing-improvingyouracquisition:below-the-fold').removeClass('in-view');

    // Digital marketing services
    $('#block-digital-marketing-digitalmarketingservices:in-viewport').addClass('in-view');
    $('#block-digital-marketing-digitalmarketingservices:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-digital-marketing-webringseotodrupalcamp:in-viewport').addClass('in-view');
    $('#block-digital-marketing-webringseotodrupalcamp:below-the-fold').removeClass('in-view');

    // A simple working process
    $('#block-digital-marketing-asimpleworking:in-viewport').addClass('in-view');
    $('#block-digital-marketing-asimpleworking:below-the-fold').removeClass('in-view');

    // Digital - Marketing - Full Stack.
    $('#block-digital-marketing-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-digital-marketing-fullstacksolution:below-the-fold').removeClass('in-view');

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

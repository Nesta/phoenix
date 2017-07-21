/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Open Delivering experiences that matter
    $('#block-digital-ux-deliveringexperiences:in-viewport').addClass('in-view');
    $('#block-digital-ux-deliveringexperiences:below-the-fold').removeClass('in-view');

    // More than techniques, a strategy.
    $('#block-digital-ux-morethantechniquesastrategy:in-viewport').addClass('in-view');
    $('#block-digital-ux-morethantechniquesastrategy:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-digital-ux-digitalmediatechnologies:in-viewport').addClass('in-view');
    $('#block-digital-ux-digitalmediatechnologies:below-the-fold').removeClass('in-view');

    // A simple working process
    $('#block-digital-ux-asimpleworkingprocess:in-viewport').addClass('in-view');
    $('#block-digital-ux-asimpleworkingprocess:below-the-fold').removeClass('in-view');

    // Full Stack
    $('#block-digital-ux-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-digital-ux-fullstacksolution:below-the-fold').removeClass('in-view');

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

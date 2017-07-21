/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Improving your acquisition performance
    $('#block-digital-visualdesign-designingproducts:in-viewport').addClass('in-view');
    $('#block-digital-visualdesign-designingproducts:below-the-fold').removeClass('in-view');

    // Digital Media
    $('#block-digital-visualdesign-digitalmediatechnologies:in-viewport').addClass('in-view');
    $('#block-digital-visualdesign-digitalmediatechnologies:below-the-fold').removeClass('in-view');

    // A simple working process
    $('#block-digital-visualdesign-asimpleworking:in-viewport').addClass('in-view');
    $('#block-digital-visualdesign-asimpleworking:below-the-fold').removeClass('in-view');

    //Full Stack
    $('#block-digital-visualdesign-fullstacksolution:in-viewport').addClass('in-view');
    $('#block-digital-visualdesign-fullstacksolution:below-the-fold').removeClass('in-view');

    // Visual Design Services.
    $('#block-digital-visualdesign-visualdesignservices:in-viewport').addClass('in-view');
    $('#block-digital-visualdesign-visualdesignservices:below-the-fold').removeClass('in-view');

    
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

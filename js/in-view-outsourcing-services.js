/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // For our clients, only the best
    $('#block-outsourcing-forourclientsonlythebest:in-viewport').addClass('in-view');
    $('#block-outsourcing-forourclientsonlythebest:below-the-fold').removeClass('in-view');

    // Certified Methodology
    $('#block-outsourcing-certifiedmethodology:in-viewport').addClass('in-view');
    $('#block-outsourcing-certifiedmethodology:below-the-fold').removeClass('in-view');

    // IT Technical Integrators
    $('#block-outsourcing-ittechnicalintegrators:in-viewport').addClass('in-view');
    $('#block-outsourcing-ittechnicalintegrators:below-the-fold').removeClass('in-view');

    // Our Customers
    $('#block-outsourcing-ourcustomers:in-viewport').addClass('in-view');
    $('#block-outsourcing-ourcustomers:below-the-fold').removeClass('in-view');

    // Smart technology
    $('#block-views-block-technology-display-outsourcing-technology:in-viewport').addClass('in-view');
    $('#block-views-block-technology-display-outsourcing-technology:below-the-fold').removeClass('in-view');


    // Digital Media
    $('#block-outsourcing-digitalmediatechnologies:in-viewport').addClass('in-view');
    $('#block-outsourcing-digitalmediatechnologies:below-the-fold').removeClass('in-view');


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

/**
 * @file
 * Custom Code for Technology-services Web-development  Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // Let's build something together
    $('#block-contactus-letsbuildsomethingtogether:in-viewport').addClass('in-view');
    $('#block-contactus-letsbuildsomethingtogether:below-the-fold').removeClass('in-view');

    // Contact
    $('#block-contactus-contactcard:in-viewport').addClass('in-view');
    $('#block-contactus-contactcard:below-the-fold').removeClass('in-view');

    // Our office
    $('#block-contactus-ouroffices:in-viewport').addClass('in-view');
    $('#block-contactus-ouroffices:below-the-fold').removeClass('in-view');

    // Tell us about your project
    $('#block-contactus-tellusaboutyourproject:in-viewport').addClass('in-view');
    $('#block-contactus-tellusaboutyourproject:below-the-fold').removeClass('in-view');

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

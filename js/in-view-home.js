/**http://www.laopiniondemalaga.es/malaga/2017/11/10/reina-sofia-inaugura-vii-congreso/967114.html
 * @file
 * Custom Code for Home Section.
 */

(function ($) {

  var $window = $(window);

  function check_if_in_view() {

    // General Elements.

    // Contact Us.
    $('.region-content-bottom:in-viewport').addClass('in-view');
    $('.region-content-bottom:below-the-fold').removeClass('in-view');

    // Footer.
    $('footer:in-viewport').addClass('in-view');
    $('footer:below-the-fold').removeClass('in-view');

  }

  $window.on('scroll resize', check_if_in_view, 10);
  $window.trigger('scroll');

})(jQuery);

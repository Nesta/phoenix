/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
  $(document).ready(function(){

    $('h1').prependTo($('.view-careers'));
    // Careers.
  	$('.view-careers .views-row:odd').addClass('odd');
  	$('.view-careers .views-row:even').addClass('even');

  });
})(jQuery);

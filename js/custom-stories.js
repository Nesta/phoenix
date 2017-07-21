/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
  $(document).ready(function(){

    $('h1').prependTo($('.view-stories'));
    // Stories.
  	$('.view-stories .views-row:odd').addClass('odd');
  	$('.view-stories .views-row:even').addClass('even');

  });
})(jQuery);

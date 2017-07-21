/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
  $(document).ready(function(){

    $('h1').prependTo($('.view-taxonomy-term'));
    // Stories.
  	$('.view-taxonomy-term .views-row:odd').addClass('odd');
  	$('.view-taxonomy-term .views-row:even').addClass('even');

  });
})(jQuery);

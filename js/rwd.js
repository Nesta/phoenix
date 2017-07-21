/**
 * @file
 * Custom Javascript for the RWD menu behavior.
 */

 (function (Drupal, $) {

  'use strict';

  Drupal.behaviors.rwdElements = {
    attach: function (context, settings) {
      $(window).on('resize.rwdElements orientationchange', function () {
        if (window.matchMedia('(max-width: 59.375em').matches) {
          // First add ID to the main menu.
          $('#block-legal>ul.menu').attr('id','block-legalList');
          // Move the main menu together with its children.
          $('#block-legalList').appendTo('#block-blk-socialnetworks');
        }
        else {
          // Move back the lists into the desktop positions.
          $('#block-legalList').appendTo('#block-legal');
        }
        $('#block-customvideoblock').height($('#block-customvideoblock img').height());
      });

      // Trigger the check for the windows width.
      $(window).trigger('resize.rwdElements');
    }
  };
})(Drupal, jQuery);

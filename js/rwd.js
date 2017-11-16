/**
 * @file
 * Custom Javascript for the RWD menu behavior.
 */

 (function (Drupal, $) {

  'use strict';

  Drupal.behaviors.rwdElements = {
    attach: function (context, settings) {

      $(window).on('resize.rwdElements orientationchange', function () {

        if (window.matchMedia('(max-width: 48.5rem').matches) {

          // First add ID to the main menu.
          $('#block-da-vinci-main-menu>ul.menu').attr('id','block-mainMenu');
          // Move the main menu together with its children.
          $('#block-mainMenu').appendTo('#sliding-panel .region-sliding-menu');
        }
        else {
          // Move back the lists into the desktop positions.
          $('#block-mainMenu').appendTo('#block-da-vinci-main-menu');
        }
      });

      // Trigger the check for the windows width.
      $(window).trigger('resize.rwdElements');
    }
  };
})(Drupal, jQuery);

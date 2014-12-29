/**
 * @file
 * Controls the output of Masonry.
 *
 * In first place, we captured in a variable the layer which apply Masonry.
 *
 * The process of disposal of the elements in the view is faster than the load of the images.
 * This happen when our view has a lot of content without pager.
 * With imagesloaded obtain an advance about this placement, avoiding that the elements can overlap.
 *
 * With our functions, the contents will taking the place of the previous deleted content.
 *
 * The following code is the same than the last one, but with a JQuery syntax. It does not work properly if we want to use it with the “infinite scroll”.
 *
 *     var $container = $('.view-masonry').masonry({
 *         itemSelector: '.views-row',
 *         columnWidth: '.views-row'
 *         }).imagesLoaded( function() {
 *           $container.masonry();
 *         });
 *       $container.find('.views-row .close').click (function(){
 *         $(this).parent('.views-row').remove();
 *         $container.masonry();
 *       });
 */
(function ($) {
  Drupal.behaviors.da_vinciThemeMasonry = {
    attach: function (context) {
      // Functions 'Masonry remove' with javascript syntax
      var container = document.querySelector('.view-masonry');
      var msnry = new Masonry(container, {
        // We define which elements inside the view are going to be deleted.
        itemSelector: '.views-row',
        // And the width
        columnWidth: '.views-row'
      });

      imagesLoaded(container, function(){msnry.layout();}); 

      eventie.bind(container, 'click', function (event) {
        // Insert in 'custom.js' a 'close' element that act like a close of an element.
        // don't proceed if views-row was not clicked on
        if (!classie.has(event.target, 'close')) {
          return;
        }
        // Delete this element
        msnry.remove($(event.target).closest('.views-row'));
        // And recalculate its position inside the view. 
        msnry.layout();
      });
    }
  }
})(jQuery);

(function ($) {
  Drupal.behaviors.da_vinciTheme_blog = {
    attach: function (context, settings) {
      var container = document.querySelector('.view-drupalera-blog');
      var msnry = new Masonry(container, {
        columnWidth: '.views-row',
        itemSelector: '.views-row'
      });
      // layout Masonry again after all images have loaded
      imagesLoaded(container, function () {
        msnry.layout();
      });

      eventie.bind(container, 'click', function (event) {
        // don't proceed if views-row was not clicked on
        if (!classie.has(event.target, 'close')) {
          return;
        }
        // remove clicked element
        msnry.remove($(event.target).closest('li'));
        // layout remaining views-row elements
        msnry.layout();
      });
    }
  }
})(jQuery);

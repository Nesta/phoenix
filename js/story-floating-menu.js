(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      $('.field--name-field-story-featured-image img').load(function() {

        var $sidebar   = $("#floating_menu"), 
            $window    = $(window),
            offset     = $sidebar.offset(),
            topPadding = 0;



        $window.scroll(function() {

          if ($window.scrollTop() > (offset.top - 90)) {
            //$sidebar.stop().animate({marginTop: $window.scrollTop() - offset.top + topPadding + 70});
            $('#floating_menu').addClass('float_fixed');
          } 
          else {
            //$sidebar.stop().animate({marginTop: 0});
            $('#floating_menu').removeClass('float_fixed');
          }
        });
      
      });

    }
  }
})(jQuery);
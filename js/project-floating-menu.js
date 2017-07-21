(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      $('.field--name-field-project-image img').load(function() {

        var $sidebar   = $("#floating_menu"), 
            $window    = $(window),
            offset     = $sidebar.offset(),
            topPadding = 0;



        $window.scroll(function() {
          var $first       = $("#challenge"),
             offset_first = $first.offset(),
             $second       = $("#solution"),
             offset_second = $second.offset(),
             $third       = $("#results"),
             offset_third = $third.offset();
             check =  $window.scrollTop() + topPadding;

          if (check < (offset_third.top - 100)) {
            if (check < (offset_second.top - 100)) {
              $('#floating_menu li a').removeClass('active');
              $('#floating_menu li:nth-child(1) a').addClass('active');
            }
            else {
              $('#floating_menu li a').removeClass('active');
              $('#floating_menu li:nth-child(2) a').addClass('active');
            }
          }
          else {
            $('#floating_menu li a').removeClass('active');
            $('#floating_menu li:nth-child(3) a').addClass('active');
          }

          if ($window.scrollTop() > (offset_first.top - 90)) {
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
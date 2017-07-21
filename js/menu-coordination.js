(function ($) {
  $( document ).ready(function() {

    var $secondaryMenuExists = false;
    //Check if we have a secondary menu
    if ( $( "#block-secondarymenu" ).length ) {
      $secondaryMenuExists = true;
    }

    var $window = $(window);
    if ($window.scrollTop() < 50) {
      $('.layout-container > header').addClass('menu_trans');
    }
    else {
      $('.layout-container > header').addClass('menu_colored');
    }

      // Hide Header on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;

      if ($secondaryMenuExists) {
        var navbarHeight = 140;
        $('body').addClass('has-secondary-menu');
      }
      else {
        var navbarHeight = 80;
      }


      $(window).scroll(function(event){
          didScroll = true;

          var check =  $window.scrollTop();
          if (check < 50) {
            $('.layout-container > header').removeClass('menu_colored');
            $('.layout-container > header').addClass('menu_trans');
          }
          else {
            $('.layout-container > header').addClass('menu_colored');
            $('.layout-container > header').removeClass('menu_trans');
          }
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);

      function hasScrolled() {
          var st = $(this).scrollTop();
          
          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - st) <= delta)
              return;
          
          // If they scrolled down and are past the navbar, add class .nav-up.
          // This is necessary so you never see what is "behind" the navbar.
          if (st > lastScrollTop && st > navbarHeight){
              // Scroll Down
              $('.layout-container').addClass('menu-hide-scroll');
          } else {
              // Scroll Up
              if(st + $(window).height() < $(document).height()) {
                  $('.layout-container').removeClass('menu-hide-scroll');
              }
          }
          
          lastScrollTop = st;
      }
      
  });
})(jQuery);
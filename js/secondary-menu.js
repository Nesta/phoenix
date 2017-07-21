/**
 * @file
 * Custom Code for the secondary menu. As we basically have two different menu designs for mobile and desktop, this code is divided by a breakpoint and does totally different things depending on how big the screen is. One behaviour should not affect the other.
 */

(function ($) {
  function prepare_menu() {
    //Mobile/Tablet Code
    if (window.matchMedia('(max-width: 48em').matches) {

      if ( $( "#magic-line" ).length ) {
        $( "#magic-line" ).remove();
      }
    }

    //Desktop Code
    else {

      //Code taken from https://css-tricks.com/jquery-magicline-navigation/
      var $el, leftPos, newWidth,
          $mainNav = $("#block-secondarymenu .menu");
      
      if ( $( "#magic-line" ).length ) {
      //Things to do if we already have the magic line  
      }
      else {
        //If the magic line has not been created yet, add the li element to the navigation list
        $mainNav.append($("<li id='magic-line'></li>"));
        
      }
      var $magicLine = $("#magic-line");
      
      $magicLine
        .width($("#block-secondarymenu .menu .menu-item--active-trail").width())
        .css("left", $("#block-secondarymenu .menu .menu-item--active-trail").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

          
      $("#block-secondarymenu > .menu li").hover(function() {
          $el = $(this);
          leftPos = $el.position().left;
          newWidth = $el.width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });    
      });

    }
  }

  $(document).ready(function(){

    //This code is included per default on every page, but not every page has a secondary menu. So we check for that first to avoid JS errors.
    if ( $( "#block-secondarymenu" ).length ) {

      if ( $( "#block-secondarymenu .menu .menu-item--active-trail" ).length ) {

      }
      else {
        //The class '.menu-item--active-trail' is not set for the first item per default, so we do it manually to simplify the code
        $('#block-secondarymenu .menu li:first-child').addClass('menu-item--active-trail');
      }

      $(window).on('resize', prepare_menu);

      // Trigger the check for the window resize.
      $(window).trigger('resize');

			//Toggle menu class to determine if menu is open or closed
			$('#block-secondarymenu .menu .menu-item--active-trail').on('click touchstart',function (e) {
				$(this).parent().toggleClass('menu-open');
				e.preventDefault();
			});

    }
  });
})(jQuery);

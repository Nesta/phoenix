/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };
      if(isMobile.any()){
        slidingMenu = $('#navigation').html();
        $('body').append('<button type="button" class="js-menu-trigger sliding-menu-button"><img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/menu-white.png" alt="Menu Icon"></button><nav class="js-menu sliding-menu-content">'+ slidingMenu +'</nav><div class="js-menu-screen menu-screen"></div>');
      }
      $('.js-menu-trigger,.js-menu-screen', context).once('mainMenu', function () {
        $(this).click(function () {
          $('.js-menu,.js-menu-screen').toggleClass('is-visible');
        });
      });
      // On click: add class 'hide' to hide message wrapper unless the user is admin
      $('.messages').not($('.admin .messages')).click(function() {$(this).addClass('hide');});

      // Show back to top button
      $(window).scroll(function() {
        if ($(window).scrollTop() < $(window).height()*2) {
          $('.backtotop').removeClass('active');
        } else {
          $('.backtotop').addClass('active');
        }
      });
      // Back to top click event
      $(".backtotop").click(function(e) {
        e.preventDefault();
        $('body').animate({
          scrollTop: $('body').offset().top
        }, 500);
        return false;
      });
      // Add Close element to "Masonry" article
      $('.view-masonry .node-article').append('<span class="close">close</a>');
    }
  }
})(jQuery);

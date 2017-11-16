/**
 * @file
 * Your custom code into javascript behaviour.
 */

(function ($) {
  Drupal.behaviors.customTheme = {
    attach: function (context) {

      // Fade into menu.
      $('#menu-svg').on('click touchstart',function (e) {
        buttonChange();
        $('.region-sliding-menu').toggleClass('is-visible');
        $('.layout-container').toggleClass('sliding-panel-visible');
        $('body').toggleClass('frozen-body');
        e.preventDefault();
        $('.lang-selection, #block-mainnavigation-sliding').addClass("fadeOut");
        setTimeout(function(){
          $('.lang-selection, #block-mainnavigation-sliding').addClass("fadeOut");
          $('.lang-selection, #block-mainnavigation-sliding').removeClass("fadeIn");
          $('.lang-selection, #block-mainnavigation-sliding').addClass('hide-element');
        }, 500);
        setTimeout(function(){
          $('.lang-selection, #block-mainnavigation-sliding').removeClass('hide-element');
          $('.is-visible .lang-selection, .is-visible #block-mainnavigation-sliding').addClass("fadeIn");
          $('.is-visible .lang-selection, .is-visible #block-mainnavigation-sliding').removeClass("fadeOut");
        }, 500);
      });

      // Burguer Menu.
      var menu_svg = document.getElementById('menu-svg');
      var menu_settings = {
        container: menu_svg,
        renderer: 'svg',
        loop: false,
        prerender: false,
        autoplay: false,
        autoloadSegments: false,
        path: '/themes/contrib/phoenix/js/utils/menu-svg.json'
      };
      var menu_svg_init;
      var menu_svg_x = false;
      menu_svg_init = bodymovin.loadAnimation(menu_settings);

      function throwComplete() {
        isThrowing = false;
        menu_svg_init.removeEventListener('loopComplete', throwComplete);
      }

      function buttonChange() {
        if (menu_svg_x) {
          menu_svg_init.playSegments([26, 39], true);
          menu_svg_x = false
        } else {
          menu_svg_x = true;
          menu_svg_init.playSegments([0, 14], true)
        }
      }
    }
  };
})(jQuery);

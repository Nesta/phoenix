/**
 * @file
 * Custom Code for General Elements.
 */

(function ($) {
  $(document).ready(function(){

    // target blank method
		$("main a[href*='http://'], main a[href*='https://']")
				.addClass("external")
	  		.attr("target","_blank")
				.attr("title","Opens new window");
		$(".social-media a[href*='http://'], .social-media a[href*='https://']")
				.addClass("external")
	  		.attr("target","_blank")
				.attr("title","Opens new window");

    // Main Logo.
    var logo_title = $('.site-logo img').attr('alt');
    setTimeout(function(){ 
      $('.site-logo svg title').text(logo_title);
    }, 1000);
    // Fade into menu.
    $('.sliding-panel-button, .sliding-panel-fade-screen, .sliding-panel-close').on('click touchstart',function (e) {
      buttonChange();
      $('#block-da-vinci-main-menu ul.menu li:last-child, .sliding-panel-button, .sliding-panel-content, .sliding-panel-fade-screen').toggleClass('is-visible');
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
        path: '/themes/custom/da_vinci/js/utils/menu-svg.json'
    };
    var menu_svg_init;
    var menu_svg_x = false;
    menu_svg_init = bodymovin.loadAnimation(menu_settings);
    //menu_svg.onclick = buttonChange;

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

    // Fade Elements.
    $('.lang-selection, #block-mainnavigation-sliding').addClass('hide-element');

    $('#block-contactus .field--name-body').appendTo('#block-contactus');

    //Add target blank to external links
    $("a[href^='http://']").attr("target","_blank");

    // Convert PX to EM - UI.
    $('.region-convert').removeClass('region');
    $('<div class="convert-close" title="Close">X</div>').appendTo('body');
    $('.region-convert').on('click touchstart',function (e) {
      if ($('#block-convertblock').hasClass('active')) {
      }else{
        $('#block-convertblock').addClass('active');
        $('.convert-close').addClass('active');
        $('.convert-close').on('click touchstart',function (e) {
          $('#block-convertblock').removeClass('active');
          $('.convert-close').removeClass('active');
        });
      }
    });
  });

})(jQuery);

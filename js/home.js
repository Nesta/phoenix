(function ($) {
  /////////////////

  $(document).ready(function () {

    // INIT $.ready() ////////////////////////
    //
    // Detectar si es Movil
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

    var $window = $(window);
    var $doc = $(document);
    window.animatingScroll = false;

    var $main_menu = $('.main-menu');
    var $activeMenuItem = $main_menu.find('[href="' + History.getState().hash.substring(1) + '"]');
    var $main_menu_wrapper = $(".main-menu-wrapper");
    var $main_menu_logo = $main_menu_wrapper.find('.logo');

    $('#servicios-dl').attr('id','servicios');
    $('#services-dl').attr('id','services');


    /**
     * @param $el {jQuery} elemento del cual se sacan las medidas.
     */
    var calcMenuOpacity = function ($el) {
      var $posActual = $main_menu_wrapper.height() + ($window.scrollTop() - $el.height());
      var opacity = $posActual / 100;
      $main_menu_wrapper.css('background', 'rgba(0, 127, 175, ' + ((opacity > 0.7) ? 0.7 : opacity) + ')');
      $main_menu_logo.css('opacity', (opacity));
    };


    /**
     * Funcionamiento mobile del menu
     */

    $('.js-menu-trigger').on('click touchstart', function (e) {
      $('.js-menu').toggleClass('is-visible');
      $('.js-menu-screen').toggleClass('is-visible');
      e.preventDefault();
    });

    $('.js-menu-screen').on('click touchstart', function (e) {
      $('.js-menu').toggleClass('is-visible');
      $('.js-menu-screen').toggleClass('is-visible');
      e.preventDefault();
    });


    var $messages = $(".messages");
    if ($messages.hasClass('messages')) {
      $("body .parallax-content").css('transform', 'translateZ(0px)');
    }

    $messages.click(function () {
      $messages.remove();
      $("body .parallax-content").css('transform', 'translateZ(1px)');
    });


    /**
     * En este handler sucede bastante porque es el evento que nos lanza el parallax
     * cuando ha calculado los tamaños de las imagenes. En este punto las imagenes
     * tambien ya están listas. Es un buen lugar para gestionar todo lo que esté
     * de alguna forma relacionado con los parallax o con la posicion final del
     * resto de secciones que no lo son pero cuya posicion se va a haber modificado
     * por "culpa" del parallax mientras hacía sus mediciones.
     */
    $(document).bind('image-scroll.height-calculated', function (e, $phantom, $el) {
      if ($el.hasClass('home-parallax')) {
        $window.scroll(function () {
          calcMenuOpacity($phantom);
        });

        // Calculamos tambien en la carga
        calcMenuOpacity($phantom);
      }


      if ($el.hasClass('clients-parallax')) {
        floatTitle($('.clients-section-title'), $el);
      }

      if ($el.hasClass('services-parallax')) {
        floatTitle($('.consultory-section-title'), $el);
      }

      if ($el.hasClass('solutions-parallax')) {
        floatTitle($('.solutions-section-title'), $el);
      }

      if ($el.hasClass('community-parallax')) {
        floatTitle($('.cifras-section-title'), $el);
      }

      if (!isMobile.any()) {
        if ($el.hasClass('contactar-parallax')) {

          ////////////////////////////////////////////////////
          // Implementamos el inverse scroll al formulario que está dentro del parallax de contacto.
          var $section_contact = $('#' + Drupal.t('contact'));
          var half = ($section_contact.height() / 2);
          var $iv = $phantom.find('.inverse-scroll');

          $iv.css({position: 'relative', bottom: '-' + half + 'px'});

          $window.scroll(function () {
            if ($window.scrollTop() > $section_contact.offset().top - half) {
              var calc = (half + (($window.scrollTop() - ($section_contact.offset().top - half)) * -1)) * -1;
              $iv.css('bottom', calc + 'px');
            }
          });
        }
      }
    });

    ///////////////////////////////////////////////
    if ($.browser.version == '9.0') {
      $('.img-holder').parallax({
        speed: 0,
        coverRatio: 1,
        parallax: false
        //touch: false
      });
    } else {
      // Activamos parallax
      if (!isMobile.any()) {
        $('.img-holder').parallax({
          speed: 0.4,
          coverRatio: 1,
          parallax: true
          //touch: false
        });
      } else {
        $('.img-holder').parallax({
          speed: 0,
          coverRatio: 1,
          parallax: false
          //touch: false
        });
      }
    }

    ///////////////////////////////////////////////
    // Workaround!. Las listas justificadas van a fallar si no tienen un \n entre sus elementos.
    // @see _justified-list.scss
    $(".justified-list > *").after("\n");
    ///////////////////////////////////////////////


    /**
     * Mueve el scroll animadamente ;) hasta una zona de la pagina.
     *
     * @param {String} dest ancla de destino. ej: "#foo"
     * @param center {Boolean} Indica si se quiere que el contenido quede
     *        centrado verticalmente.
     * @return {Boolean} indicando si el link era de tipo hash
     *         y lo hemos intervenido o link normal y no lo hemos tocado.
     */
    var goTo = function (dest, center) {
      center || (center = false);

      // Si no es un hash, lo dejamos continuar.
      if (dest.substr(0, 1) !== "#") {
        window.location.href = dest;
        return false;
      }

      History.pushState(null, null, dest);
      var offset = $(dest).offset().top;

      // Si se nos ha pedido que el contenido vaya centrado hacemos el calculo.
      offset = center ? (offset - (($window.height() - $(dest).outerHeight()) / 2)) : offset;

      // Le sumamos un px mas por compatibilidad con browsers.
      offset = offset + 50;

      window.animatingScroll = true;

      // Al usar un doble selector ($("html, body")) el callback se
      // lanza dos veces. controlamos esa situacion con este flag.
      var justOneTriggerPlease = 0;

      $("html, body").animate({scrollTop: offset}, 1200, function () {
        if (justOneTriggerPlease == 1) {
          window.animatingScroll = false;
          $window.trigger('animating-scroll-finished');
          justOneTriggerPlease = 0;
        } else {
          justOneTriggerPlease++;
        }
      });
      return true;
    };


    /**
     * Convierte a un titulo en "flotante" sobre el parallax que tiene encima
     *
     * @param $title {jQuery}
     * @param $parallax {jQuery}
     */
    function floatTitle($title, $parallax) {
      var temporal_title_pos = (($parallax.height() / 2) + ($title.outerHeight() / 2)) * -1;

      $title.css({position: 'relative', top: temporal_title_pos + 'px'}).addClass('floating');

      $window.scroll(function () {
        // No podemos guardar de forma estática este valor.
        var altura_trigger = $parallax.offset().top;

        if ($window.scrollTop() > altura_trigger) {
          var calc = temporal_title_pos + ($window.scrollTop() - altura_trigger);
          calc = (calc > 0) ? 0 : (temporal_title_pos + ($window.scrollTop() - altura_trigger));

          $title.css('top', calc + 'px');
          if (calc === 0) $title.removeClass('floating'); else $title.addClass('floating');
        }

      });

    }


    ///////////////////////////////////////////////
    // Activamos el magic menu
    var magic_line_conf = {activeClass: 'active', followCursor: false};
    $activeMenuItem.length && (magic_line_conf['activeItem'] = $activeMenuItem.parent());
    $main_menu.magicLine(magic_line_conf);


    ///////////////////////////////////////////////
    // Gestionamos la opacidad del logo que acompaña al menu principal.

    /**
     * Todos los elementos del menu principal viajan a ancors
     */
    $main_menu_wrapper.find('li a').click(function (e) {
      e.preventDefault();
      goTo($(this).attr('href'), true);
    });


    ///////////////////////////////////
    // Gestion de los anchors .step-jumper
    $doc.click(function (e) {
      var $target = $(e.target);
      if ($target.prop("tagName") == 'I')($target = $target.parent());

      if ($target.hasClass('step-jumper')) {
        e.preventDefault();
        goTo($target.attr('href'), true);
      }

    });


    ///////////////////////////////////////////////
    // Activamos los tabs
    var $respTabs = $('.resp-tabs-wrp');
    $respTabs.easyResponsiveTabs({closed: true});

    // Conseguimos el contenido mas grande para dar dimension al default
    /* var maxHeight = Math.max.apply(null, $respTabs.find('.resp-tab-content').map(function () {
     return $(this).outerHeight();
     }).get());

     $('.default-content').height(maxHeight + 5);*/


    ///////////////////////////////////
    // Hacemos scrollspy para ir activando los elementos del menu a medida que llegamos a las secciones.

    //////////////////////////
    // Activamos el carousel
    var $thumbs = $('#thumbs');
    $thumbs.carousel({interval: false});

    // END $.ready() ////////////////////////

    // Seccion clientes - evento click para mostrar la información de cada proyecto
    $('.hover-info').on('click', function () {
      // Descomentar para prohibir más de un elemento activo a la vez
      // $('.hover').removeClass('show-info');
      $(this).find('.hover').toggleClass('show-info');
    });

    // Secccion servicios(mobile) - eventos sobre el acordeon.
    $('.resp-accordion').on('click', function () {

      // Alternamos el texto del span: "+" o "-"
      var text = $(this).find('.more span').html();
      $(this).find('.more span').text(
        text == "+" ? "-" : "+");

      // Añadimos "+" a cada pestaña cuando hacemos click en el boton de cerrado "close-tab"
      $('.close-tab').on('click', function () {
        $('.more span').text('+');
      });

    });

    $('.form-errors').on('click', function () {
      $('.form-errors').addClass('hide');
    });
  });


/////////////////
})(jQuery);

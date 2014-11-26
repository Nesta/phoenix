(function ($) {
  $(document).ready(function () {
    // INIT $.ready() ////////////////////////
    var $window = $(window);
    var $doc = $(document);

    var $main_menu = $('.main-menu');
    // Detectamos los detinos de los links
    var sections = $main_menu.find('li a').map(function () {
      if ($(this).attr('href').substring(0, 1) == "#") {
        var $el = $($(this).attr('href'));
        return [[$el, $el.offset().top]]
      }
    });

    // Ordenamos por cuan lejos está cada section
    sections.sort(function (a, b) {
      return a[1] - b[1]
    });

    var activos = {};


    function scrollSpy(center) {
      center || (center = false);

      // Algunos navegadores no son tan precisos (FF) y hay veces que le falta 1px
      // para que el offset de window sea el mismo que el de una seccion. Nos
      // aseguramos compatibilidad proporcionandole un poco de offset al calculo.
      var extraOffset = 1;

      $.each(sections, function (i, section) {
        var $section = section[0];

        // Si se nos ha pedido que el contenido vaya centrado hacemos el calculo.
        // De lo contrario solo miramos si el anchor ha llegado al topo del area visible.
        var offset = center
          ? ($window.scrollTop() + (($section.outerHeight()) / 2)) + extraOffset
          : $window.scrollTop() + extraOffset;

        if ($section.offset().top <= offset) {
          activos[$section.attr('id')] = true;
        } else {
          delete activos[$section.attr('id')];
        }

        //seteamos el ultimo elemento de la lista de activos
        if (Object.keys(activos).length) {
          var $activeMenuItem = $main_menu.find('[href="#' + Object.keys(activos).reverse()[0] + '"]');
          var $li = $activeMenuItem.parent();

          if (!$li.hasClass('active')) {
            $main_menu.magicLine("moveMagcLine", $li);
            $main_menu.magicLine("setActive", null, $li);
            History.pushState(null, null, "#" + Object.keys(activos).reverse()[0]);
          }

        }

      });
    }

    $window.scroll(function () {
      if (!window.animatingScroll) {
        scrollSpy(true);
      } else {
        // Hacer un unbind a lo bestia es un poco agresivo, pero de momento
        // es lo suficientemente robusto mientras nadie mas haga un listen al evento :S
        $window.unbind('animating-scroll-finished');
        $window.one('animating-scroll-finished', function () {
          scrollSpy(true);
        });
      }
    });

    // END $.ready() ////////////////////////
  });
})(jQuery);
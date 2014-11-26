/* ====================================================
 * Magic line.
 * ----------
 * Genera una linea que persigue al raton cuando se interactua con un menu.
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  "use strict";
  var plugin;

  var Class = function (el, options) {
    plugin = this;
    this.$element = $(el);

    var defaults = {
      activeItem: null,
      activeClass: 'active',
      // Indica si la magic line debe perseguir al cursor.
      followCursor: true
    };

    this.options = $.extend(defaults, options);

    init();
  };

  Class.prototype = {

    /**
     * Mueve la magic line a una nueva posicion basandose en el nuevo item activo.
     */
    redrawLine: function ($el_dest) {
      plugin.activeItem = plugin.lis.filter('.' + plugin.options.activeClass);
      plugin.$magicLine.data("origLeft", plugin.$magicLine.position().left).data("origWidth", plugin.$magicLine.width());
      // Esta es la forma tradicional pero menos performante que usar transitions en css
      //plugin.$magicLine.stop().animate({left: plugin.activeItem.position().left, width: plugin.activeItem.width()});
      plugin.$magicLine.css({left: plugin.activeItem.position().left, width: plugin.activeItem.width()});
    },

    /**
     * Mueve el magic line hasta un elemento
     * $el_dest
     */
    moveMagcLine: function ($el_dest) {
      // Esta es la forma tradicional pero menos performante que usar transitions en css
      //plugin.$magicLine.stop().animate({left: $el_dest.position().left, width: $el_dest.parent().width()});
      plugin.$magicLine.css({left: $el_dest.position().left, width: $el_dest.parent().width()});
    },

    /**
     * Devuelve la magic line hasta la ultipa posicion conocida
     * $el_dest
     */
    resetMagcLine: function () {

      // Esta es la forma tradicional pero menos performante que usar transitions en css
      //plugin.$magicLine.stop().animate({
      //  left: plugin.$magicLine.data("origLeft"),
      //  width: plugin.$magicLine.data("origWidth")
      //});

      plugin.$magicLine.css({
        left: plugin.$magicLine.data("origLeft"),
        width: plugin.$magicLine.data("origWidth")
      });
    },

    /**
     * Callback. Establece el nuevo item activo.
     */
    setActive: function (e, $el) {
      $el || ($el = $(this).parent());
      plugin.activeItem = $el;
      plugin.lis.removeClass(plugin.options.activeClass);
      plugin.activeItem.addClass(plugin.options.activeClass);
      updateMagicLine();
    }

  };

  // SECCIÓN DE MÉTODOS PRIVADOS
  function init() {
    plugin.$magicLine = $("<li class='magic-line'></li>");
    plugin.$element.append(plugin.$magicLine);
    plugin.lis = plugin.$element.addClass('magic-line-menu');
    plugin.lis = plugin.$element.find('> li');
    plugin.activeItem = !plugin.options.activeItem ? plugin.lis.first() : plugin.lis.filter(plugin.options.activeItem);
    plugin.activeItem.addClass(plugin.options.activeClass);

    updateMagicLine();

    // Nos ponemos a la escucha para ir actualizando.
    plugin.lis.find("a").hover(hoverIn, hoverOut).click(plugin.setActive);
  }


  /**
   * Callback. Establece el nuevo item activo.
   */
  function updateMagicLine() {

    plugin.$magicLine
      .width(plugin.activeItem.width())
      .css("left", plugin.activeItem.find('> a').position().left)
      .data("origLeft", plugin.$magicLine.position().left)
      .data("origWidth", plugin.$magicLine.width());

    plugin.$element.trigger('magic-line-updated', [plugin.activeItem]);
  }

  /**
   * Callback del evento hover sobre cualquier elemento de menu.
   */
  function hoverIn() {
    var $li = $(this);
    plugin.options.followCursor && plugin.moveMagcLine($li);
  }

  /**
   * Callback del evento hover out sobre cualquier elemento de menu.
   */
  function hoverOut() {
    plugin.options.followCursor && plugin.resetMagcLine();
  }

  // DEFINICIÓN DEL PLUGIN
  $.fn.magicLine = function (options) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();

    return this.each(function () {
      var $element = $(this);
      var data = $element.data("magicLine");
      if (!data) $element.data("magicLine", (data = new Class(this, options)));
      if (typeof options == 'string') data[options].apply(this, args);
    })
  };

  $.fn.magicLine.Constructor = Class;
}(window.jQuery);


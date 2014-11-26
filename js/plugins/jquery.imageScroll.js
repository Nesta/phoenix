/* ====================================================
 * jQuery Parallax
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */
!function ($) {
  "use strict";
  var plugin;

  var Class = function (el, options) {
    plugin = this;

    var defaults = {
      image: null,
      imageAttribute: 'image',
      holderClass: 'imageHolder',
      container: $('body'),
      speed: 0.2,
      coverRatio: 0.75,
      holderMinHeight: 200,
      extraHeight: 0,
      mediaWidth: 1600,
      mediaHeight: 900,
      parallax: true,
      touch: false
    };

    this.options = $.extend(defaults, options);

    this.$imageHolder = $(el);
    this.$win = $(window);
    plugin.options = $.extend({}, defaults, options);
    this.image = this.$imageHolder.data(plugin.options.imageAttribute) || plugin.options.image;
    this.mediaWidth = this.$imageHolder.data('width') || plugin.options.mediaWidth;
    this.mediaHeight = this.$imageHolder.data('height') || plugin.options.mediaHeight;
    this.coverRatio = this.$imageHolder.data('cover-ratio') || plugin.options.coverRatio;
    this.extraHeight = this.$imageHolder.data('extra-height') || plugin.options.extraHeight;
    this.ticking = false;

    init();
  };

  // SECCIÓN DE MÉTODOS PÚBLICOS
  Class.prototype = {

    adjustImgHolderHeights: function () {
      var self = this;
      var winHeight = self.$win.height();
      var winWidth = self.options.container.width();
      var imgHolderHeight = this.coverRatio * winHeight;
      var imgTopPos;
      var imgLeftPos;
      var fromY;
      var imgScrollingDistance;
      var travelDistance;
      var imgWidth;
      var imgHeight;
      var fakedImgHeight;
      var imageDiff;

      imgHolderHeight = (self.options.holderMinHeight < imgHolderHeight ? Math.floor(imgHolderHeight) : self.options.holderMinHeight) + this.extraHeight;
      fakedImgHeight = Math.floor(winHeight - (winHeight - imgHolderHeight) * self.options.speed);
      imgWidth = Math.round(this.mediaWidth * (fakedImgHeight / this.mediaHeight));

      if (imgWidth >= winWidth) {
        imgHeight = fakedImgHeight;
      } else {
        imgWidth = winWidth;
        imgHeight = Math.round(this.mediaHeight * (imgWidth / this.mediaWidth));
      }

      imageDiff = fakedImgHeight - imgHolderHeight;
      travelDistance = winHeight + imgHolderHeight;
      imgScrollingDistance = (((winHeight * 2) * (1 - self.options.speed)) - imageDiff);
      imgTopPos = -((imageDiff / 2) + ((imgHeight - fakedImgHeight) / 2));
      imgLeftPos = Math.round((imgWidth - winWidth) * -0.5);
      fromY = imgTopPos - (imgScrollingDistance / 2);

      self.$scrollingElement.css({
        height: imgHeight,
        width: imgWidth
      });
      self.$imageHolder.height(imgHolderHeight);

      self.$scrollerHolder.css({
        height: imgHolderHeight,
        width: imgWidth
      });

      self.scrollingState = {
        winHeight: winHeight,
        fromY: fromY,
        imgTopPos: imgTopPos,
        imgLeftPos: imgLeftPos,
        imgHolderHeight: imgHolderHeight,
        imgScrollingDistance: imgScrollingDistance,
        travelDistance: travelDistance,
        holderDistanceFromTop: this.$imageHolder.offset().top - self.$win.scrollTop()
      };

      $(document).trigger('image-scroll.height-calculated', [self.$scrollerHolder, self.$imageHolder]);

    },

    bindEvents: function () {
      var self = this;

      plugin.$win.on('resize', function (evt) {
        self.adjustImgHolderHeights();
        if (plugin.options.parallax === true) {
          self.requestTick();
        } else {
          self.updateFallbackPositions();
        }
      });

      if (plugin.options.parallax === true) {
        self.adjustImgHolderHeights();

        plugin.$win.on('scroll', function (evt) {
          self.scrollingState.holderDistanceFromTop = self.$imageHolder.offset().top - plugin.$win.scrollTop();
          self.requestTick();
        });

        getImgDimentions(plugin.$scrollingElement.get(0), function (dimentions) {
          self.scrollingState.holderDistanceFromTop = self.$imageHolder.offset().top - plugin.$win.scrollTop();
          self.requestTick();
        });
      }

    },

    requestTick: function () {
      var self = this;
      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(function () {
          self.updatePositions();
        });
      }
    },

    updatePositions: function () {
      if (this.scrollingState.holderDistanceFromTop <= (this.scrollingState.winHeight) && this.scrollingState.holderDistanceFromTop >= -this.scrollingState.imgHolderHeight) {
        var distanceFromTopAddedWinHeight = this.scrollingState.holderDistanceFromTop + this.scrollingState.imgHolderHeight,
          distanceInPercent = distanceFromTopAddedWinHeight / this.scrollingState.travelDistance,
          currentImgYPosition = Math.round(this.scrollingState.fromY + (this.scrollingState.imgScrollingDistance * (1 - distanceInPercent))),
          leftOffset = plugin.options.container.offset().left;

        this.$scrollerHolder.css(this.getCSSObject({
          transform: $.support.cssProperty('transform', true),
          left: leftOffset,
          x: Math.ceil(this.scrollingState.imgLeftPos) + (plugin.supportedFeature === '' && leftOffset > 0 ? leftOffset : 0),
          y: Math.round(this.scrollingState.holderDistanceFromTop),
          visibility: 'visible'
        }));

        this.$scrollingElement.css(this.getCSSObject({
          transform: $.support.cssProperty('transform', true),
          x: 0,
          y: currentImgYPosition,
          visibility: 'visible'
        }));
      } else {
        this.$scrollerHolder.css({visibility: 'hidden'});
        this.$scrollingElement.css({visibility: 'hidden'});
      }

      this.ticking = false;
    },

    updateFallbackPositions: function () {
      this.$scrollerHolder.css({width: '100%'});
      this.$scrollingElement.css({
        top: this.scrollingState.imgTopPos,
        left: this.scrollingState.imgLeftPos
      });
    },

    getCSSObject: function (options) {
      if (plugin.supportedFeature === "csstransforms3d") {
        options.transform = "translate3d(" + options.x + "px, " + options.y + "px, 0)";
      } else if (plugin.supportedFeature === "csstransforms") {
        options.transform = "translate(" + options.x + "px, " + options.y + "px)";
      } else {
        options.top = options.y;
        options.left = options.x;
      }
      return options;
    }

  };


  // SECCIÓN DE MÉTODOS PRIVADOS
  function init() {

    plugin.supportedFeature = $.support.cssProperty('transform') && has3d() ? 'csstransforms3d' : $.support.cssProperty('transform') ? 'csstransforms3d' : '';

    if (plugin.image) {
      plugin.$scrollingElement = $('<img/>', {
        src: plugin.image
      });
    } else {
      throw new Error('You need to provide either a data-img attr or an image option');
    }

    if (plugin.options.touch === true) {
      plugin.$scrollingElement.css({maxWidth: '100%'}).prependTo(plugin.$imageHolder);
    } else if (plugin.options.parallax === true) {
      plugin.$scrollerHolder = $('<div/>', {
        html: plugin.$imageHolder.html()
      }).css({
        top: 0,
        visibility: 'hidden',
        position: 'fixed',
        overflow: 'hidden'
      }).addClass(plugin.options.holderClass).prependTo(plugin.options.container);
      plugin.$imageHolder.css('visibility', 'hidden').empty();
      plugin.$scrollingElement.css({position: 'absolute', visibility: 'hidden', maxWidth: 'none'}).prependTo(plugin.$scrollerHolder);
    } else {
      plugin.$scrollerHolder = plugin.$imageHolder.css({overflow: 'hidden'});
      plugin.$scrollingElement.css({position: 'relative', overflow: 'hidden'}).prependTo(plugin.$imageHolder);
    }

    if (plugin.options.touch === false) {
      plugin.adjustImgHolderHeights();
      if (plugin.options.parallax === true) {
        plugin.updatePositions();
      }
      else {
        plugin.updateFallbackPositions();
      }
      plugin.bindEvents();
    }

    // Por cada uno de los parallax procesados, un evento final.
    $(document).trigger('image-scroll.parallax-processed', [plugin.$scrollingElement, plugin.$imageHolder]);
  }

  /**
   * Get real image dimentions since webkit will not provide them until the image begin fully loaded.
   * @param {DOMelement} img
   * @returns {width: Number, height: Number}
   * @param cb - The callback that handles the response.
   */
  function getImgDimentions(img, cb) {
    var ghostImg = new Image();

    ghostImg.onload = function () {
      cb({width: (this.naturalWidth || this.width), height: (this.naturalHeight || this.height)});
    };

    ghostImg.src = (img.getAttribute ? img.getAttribute("src") : false) || img.src;
  }

  function has3d() {
    var el = document.createElement('p'),
      has3d,
      transforms = {
        'webkitTransform': '-webkit-transform',
        'OTransform': '-o-transform',
        'msTransform': '-ms-transform',
        'MozTransform': '-moz-transform',
        'transform': 'transform'
      };

    // Add it to the body to get the computed style.
    document.body.insertBefore(el, null);

    for (var t in transforms) {
      if (el.style[t] !== undefined) {
        el.style[t] = "translate3d(1px,1px,1px)";
        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }

    document.body.removeChild(el);

    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
  }

  // jquery plugin
  $.fn.parallax = function (options) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();

    var $return = this.each(function () {
      var $element = $(this);
      var data = $element.data("parallax");
      if (!data) $element.data("parallax", (data = new Class(this, options)));
      if (typeof options == 'string') data[options].apply(this, args);
    });

    // Cuando acabamos de inicializar todos los parallax, lanzamos un evento y los enviamos.
    $(document).trigger('image-scroll.finished', [$return]);

    return $return;
  };

  $.fn.parallax.Constructor = Class;
}(window.jQuery);

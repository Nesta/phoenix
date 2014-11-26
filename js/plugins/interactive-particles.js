(function ($) {

  $.fn.interactiveParticles = function (map, options) {

    var mapElement = $(this);
    var mapNodes = map;
    options = $.extend({
      'initVelJitter': 100,
      'springHome': 0.06,
      'dragBase': 0.88,
      'dragIncrease': 0.4,
      'repultionForce': 10,
      'repultionDist': 180,
      'animationPauseTimeout': 8000,
      'circleSize': 22,
      'colors': ['#5993AC', '#66AECF'],
      'defaultScreen': 1920,
    }, options);

    var repultionDecay = options.repultionForce * 0.01;

    // RUNTIME VARIABLES
    var MapDataInitialized = false;
    var frame = 0;
    var repultionForceCurrent = options.repultionForce;
    var mouseX, mouseY;
    var mousePresent = false;
    var animationStopTimeout = null;
    var intervalTimer = null;

    var correlationCoefficient = $(window).width() / options.defaultScreen;

    // ----------------------------------------
    // INITALIZE

    initMapData();
    setTimeout(function () {
      addMapNodes();
      start();
    }, 300);

    // ----------------------------------------
    // MOUSE AND TOUCH

    mapElement.bind("mousemove touchmove", function (e) {
      repultionForceCurrent = Math.min(repultionForceCurrent + repultionDecay * 2, options.repultionForce);
      start();
      upateMousePosition(e);
    });

    mapElement.bind("mouseenter touchstart", function (e) {
      if (e.type == "touchstart") repultionForceCurrent = options.repultionForce;
      mousePresent = true;
      upateMousePosition(e);
      return false;
    });

    mapElement.bind("mouseleave touchend", function (e) {
      mousePresent = false;
      return false;
    });

    $(window).bind("resize", function () {
      correlationCoefficient = $(window).width() / options.defaultScreen;
      var circleSize = Math.round((options.circleSize * correlationCoefficient)) + 'px';
      var nodeRadius = '30px';
      var nodes = mapElement.find('div.node');

      for (var i = 0, l = nodes.length; i < l; i++) {
        var originalX = nodes[i].originalX;
        var originalY = nodes[i].originalY;


        var styles = {
          'left': Math.round((originalX * correlationCoefficient)) + 'px',
          'top': Math.round((originalY * correlationCoefficient)) + 'px',
          'width': circleSize,
          'height': circleSize,
          'position': 'absolute',
          'borderRadius': nodeRadius,
          'MozBorderRadius': nodeRadius,
          'WebkitBorderRadius': nodeRadius
        };
        $(nodes[i]).css(styles);

      }

    });

    function upateMousePosition(e) {
      var offset = mapElement.offset();
      mouseX = e.originalEvent.pageX - offset.left;
      mouseY = e.originalEvent.pageY - offset.top;
    }


    // ----------------------------------------
    // START AND STOP ANIMATION

    function start() {
      clearTimeout(animationStopTimeout);
      animationStopTimeout = setTimeout(stop, options.animationPauseTimeout);
      if (!intervalTimer) {
        intervalTimer = setInterval(step, 1000 / 60);
      }
    }

    function stop() {
      clearInterval(intervalTimer);
      intervalTimer = null;
    }

    // ----------------------------------------
    // INITIALIZING

    function initMapData() {

      if (MapDataInitialized) return;
      for (var i = 0; i < mapNodes.length; i++) {
        var n = mapNodes[i];
        n.homeX = n.x * .7;
        n.homeY = n.y* .7;
        n.vx = Math.random() * options.initVelJitter - options.initVelJitter / 2;
        n.vy = Math.random() * options.initVelJitter - options.initVelJitter / 2;

      }
      MapDataInitialized = true;
    }

    function addMapNodes() {
      var circleSize = Math.round((options.circleSize * correlationCoefficient)) + 'px';
      var nodeRadius = '30px';
      var totalColors = options.colors.length;
      for (var i = 0, k = 0, l = mapNodes.length; i < l; i++) {
        var n = mapNodes[i];
        var color;
        if (typeof n.color !== 'string') {
          color = options.colors[k];
          k++;
          if (k === totalColors) {
            k = 0;
          }
        } else {
          color = n.color;
        }

        n.el = $('<div class="node">');
        var styles = {
          'left': Math.round((n.x * correlationCoefficient)) + 'px',
          'top': Math.round((n.y * correlationCoefficient)) + 'px',
          'width': circleSize,
          'height': circleSize,
          'position': 'absolute',
          'borderRadius': nodeRadius,
          'background-color': color
        };

        n.el.css(styles);
        mapElement.append(n.el);

        n.el.originalX = n.x;
        n.el.originalY = n.y;


      }
    }

    // ----------------------------------------
    // CORE ANIMATION LOOP

    function step() {

      frame++;
      frame = frame % 10000;
      repultionForceCurrent = Math.max(0, repultionForceCurrent - repultionDecay);

      for (var i = 0; i < mapNodes.length; i++) {
        var n = mapNodes[i];
        if (!n.el) return;

        // Distance to home
        var dxHome = (n.homeX * correlationCoefficient - n.x * correlationCoefficient);
        var dyHome = (n.homeY * correlationCoefficient - n.y * correlationCoefficient);
        var distHome = Math.abs(dxHome) + Math.abs(dyHome); // estimated

        // Apply spring to home
        var drag = options.dragBase - options.dragIncrease / (distHome + 1);
        n.vx = (n.vx + dxHome * options.springHome) * drag;
        n.vy = (n.vy + dyHome * options.springHome) * drag;

        // Mouse repultion
        if (mousePresent) {
          var dxMouse = (mouseX - n.x * correlationCoefficient);
          var dyMouse = (mouseY - n.y * correlationCoefficient);
          var distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < (options.repultionDist * correlationCoefficient)) {
            var repulsion = (1 - distMouse / (options.repultionDist * correlationCoefficient)) * repultionForceCurrent * Math.random();
            n.vx -= dxMouse / distMouse * repulsion;
            n.vy -= dyMouse / distMouse * repulsion;
          }
        }

        // Position change
        n.x += n.vx;
        n.y += n.vy;

        /* var style = n.el.style;
         style.left = (n.x * correlationCoefficient) + 'px';
         style.top = (n.y * correlationCoefficient) + 'px';
         */
        var styles = {
          'left': Math.round((n.x * correlationCoefficient)) + 'px',
          'top': Math.round((n.y * correlationCoefficient)) + 'px'
        };
        n.el.css(styles);

      }
    }


  };

}(jQuery));

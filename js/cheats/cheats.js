(function( $ ) {
  "use strict";

  $(function() {

    $( window ).konami({
      code : [73,78,86,65,68,69,82,83],
      cheat: function() {
        window.open('http://' + window.location.host + '/drupal/cheats/invaders');
      } // end cheat

    });
    $( window ).konami({
      code : [66,79,77,66,69,82],
      cheat: function() {
        window.open('http://' + window.location.host + '/drupal/cheats/bomberman');
      } // end cheat
    });
    $( window ).konami({
      code : [78,65,75,69,68],
      cheat: function() {
        $("*").removeClass();
        $("*").removeAttr('id');
        $("*").removeAttr('style');
      } // end cheat
    });

  });
}(jQuery));

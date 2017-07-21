/**
 * @file
 * Custom Code for About Work Section.
 */

(function ($) {
  $(document).ready(function(){

    // Big Projects Well Done.
    $('#block-aboutbigprojects').append($("<div class='arrow-to-scroll'><a href='#block-views-block-view-project-blk-listsuccesscase'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
    // Function for Scroll Arrow.
    $(".arrow-to-scroll").on('click', function(event) {
      if (this.hash !== "") {

        var anchor = $("div.arrow-to-scroll").children('a');

        var href = anchor.attr('href');

        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(href).offset().top - 0
        }, 1000, function() {
        });
      }
    });

    // Some Of Our Clients. 
    $('#block-someofourclients-work').prependTo('#block-views-block-view-client-blk-display-someofaboutwork');
    $('#block-views-block-view-client-blk-display-someofaboutwork .views-row').appendTo('#block-views-block-view-client-blk-display-someofaboutwork .cycle-logo .view-content-cycle');
    $('#block-views-block-view-client-blk-display-someofaboutwork .attachment').remove();
    $('#block-views-block-view-client-blk-display-someofaboutwork .view-content').remove();

    //var client_logos = $(".view-content-cycle .views-row").shuffle();
    var client_logos = $(".view-content-cycle .views-row");
    var grid_logo = 8;
    var suffle_clients = parseInt(client_logos.length, 10) / parseInt(grid_logo, 10);
      for(var i = 0; i < client_logos.length; i+=suffle_clients) {
      client_logos.slice(i, i+suffle_clients).wrapAll('<div class="view-content-client"></div>');
    }

    $('#block-views-block-view-client-blk-display-someofaboutwork .view-content-cycle .view-content-client').cycle({
        random: 0,
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });

  });
})(jQuery);

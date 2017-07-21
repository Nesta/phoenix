/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
    $(document).ready(function(){

    // Transforming your vision.
    $('#block-blk-becausewe').append($("<div class='arrow-to-scroll'><a href='#block-blk-ourkeyvalues'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
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

    // Discover Our Work.
	  $('#block-whyusdiscoverourwork').prependTo('#block-views-block-view-project-blk-discoverourwork');

	  // Some Of Our Clients.
	  $('#block-someofourclients-work').prependTo('#block-views-block-view-client-blk-display-someofaboutwork');

	  // Our Keys Values.
      $('<div class="check-keys"></div>').prependTo('#block-blk-ourkeyvalues .ourkeysvalue-list > div');

      // Our Expertise.
      $( "#block-ourexpertise h2" ).after( $( ".description--text" ) );
      $( "#block-ourexpertise .description" ).addClass('description-card').removeClass('description');

      var tabs = $('.description--list');

      tabs.on('click', '.vertical-tab', function(e) {
        var tabsContent = $('.description-card');
        var tabRef = '#' + $(this).attr('id');

        if (!$(this).hasClass('is-active')) {
          tabs.find('.is-active').removeClass('is-active');
          $(this).addClass('is-active');
          $(tabsContent).removeClass('active');
          $(tabRef).addClass('active');
        }
      });

      //Our Customers
      /*$('#block-about-whyus-ourcustomers .view-content').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
      });
      */
    });
})(jQuery);

/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function(){

      // Operations, Support & Maintenance.
      $('#block-technology-support-operationssupport').append($("<div class='arrow-to-scroll'><a href='#block-technology-support-services'><img src='/themes/custom/da_vinci/images/fill.png' /></a></div>"));
      // Function for Scroll Arrow.
      $(".arrow-to-scroll").on('click', function(event) {
        if (this.hash !== "") {

          var anchor = $("div.arrow-to-scroll").children('a');

          var href = anchor.attr('href');

          event.preventDefault();

          $('html, body').animate({
            scrollTop: $(href).offset().top
          }, 1000, function() {
          });
        }
      });

      // Services.
      $( "#block-technology-support-services h2" ).after( $( "#block-technology-mobile-services .field--name-body" ) );
      $('#block-technology-support-services .field__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        appendDots: $('#block-technology-support-services .field--name-body'),
        dots: true,
        lazyLoad: 'ondemand',
        lazyLoadBuffer: 0,
        speed: 1000
      });
      $('#block-technology-support-services .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
        var tab = $(this).text();
        $('#slick-slide0' + index + ' button').text(tab);
      });
      /*$('.slick-dots').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
      });*/

      // Digital Media
      $("#block-technology-support-digitalmedia .description .desc-text").prepend($("#block-technology-support-digitalmedia h2"));
      $("#block-technology-support-digitalmedia .description .desc-text").append($(".field--name-field-featured-content-link"));

      // Partners.
      $('#block-technology-support-partners').prependTo('#block-views-block-partner-display-partner');
      $('#block-views-block-partner-display-partner .views-row').appendTo('#block-views-block-partner-display-partner .cycle-logo .view-content-cycle');
      $('#block-views-block-partner-display-partner .attachment').remove();
      $('#block-views-block-partner-display-partner .view-content').remove();

      var partner_logos = $(".view-content-cycle .views-row");
      var grid_logo = 4;
      var suffle_partner = parseInt(partner_logos.length, 10) / parseInt(grid_logo, 10);
      for(var i = 0; i < partner_logos.length; i+=suffle_partner) {
        partner_logos.slice(i, i+suffle_partner).wrapAll('<div class="view-content-partner"></div>');
      }

      $('#block-views-block-partner-display-partner .view-content-cycle .view-content-partner').cycle({
        random: 0,
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
      });

      //Full Stack
      $("#block-technology-support-fullstacksolution").append($("#block-technology-support-imagescollection"));
      $("#block-technology-support-fullstacksolution").append($("#block-technology-support-imagescollection-es"));
      $("#block-technology-support-fullstacksolution").append($("#block-technology-support-imagescollection-cl"));

    });
})(jQuery);

/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function(){

      // Develop a competitive advantage.
      $('#block-technology-developacompetitive').append($("<div class='arrow-to-scroll'><a href='#block-technology-web-services'><img src='/themes/custom/da_vinci/images/fill.png' /></a></div>"));
      // Function for Scroll Arrow.
      $(".arrow-to-scroll").on('click', function(event) {
        if (this.hash !== "") {

          var anchor = $("div.arrow-to-scroll").children('a');

          var href = anchor.attr('href');

          event.preventDefault();

          $('html, body').animate({
            scrollTop: $(href).offset().top + 50
          }, 1000, function() {
          });
        }
      });

      // Services.
      $( "#block-technology-web-services h2" ).after( $( "#block-technology-web-services .field--name-body" ) );
      $('#block-technology-web-services .field__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        appendDots: $('#block-technology-web-services .field--name-body'),
        dots: true,
        lazyLoad: 'ondemand',
        lazyLoadBuffer: 0,
        speed: 1000
      });
      $('#block-technology-web-services .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
        var tab = $(this).text();
        $('#slick-slide0' + index + ' button').text(tab);
      });

      // Technology.
      $('#block-technology-technology').prependTo('#block-views-block-technology-web-display-technology');
      $('#block-views-block-technology-web-display-technology .views-row').appendTo('#block-views-block-technology-web-display-technology .cycle-logo .view-content-cycle');
      $('#block-views-block-technology-web-display-technology .attachment').remove();
      $('#block-views-block-technology-web-display-technology .view-content').remove();

      //var client_logos = $(".view-content-cycle .views-row").shuffle();
      var technology_logos = $(".view-content-cycle .views-row");
      var grid_logo = 8;
      var suffle_technology = parseInt(technology_logos.length, 10) / parseInt(grid_logo, 10);
      for(var i = 0; i < technology_logos.length; i+=suffle_technology) {
        technology_logos.slice(i, i+suffle_technology).wrapAll('<div class="view-content-client"></div>');
      }

      $('#block-views-block-technology-web-display-technology .view-content-cycle .view-content-client').cycle({
        random: 0,
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
      });

      //Full Stack
      $("#block-technology-web-fullstacksolution").append($("#block-technology-web-imagescollection"));
      $("#block-technology-web-fullstacksolution").append($("#block-technology-web-imagescollection-es"));
      $("#block-technology-web-fullstacksolution").append($("#block-technology-web-imagescollection-cl"));

    });

})(jQuery);

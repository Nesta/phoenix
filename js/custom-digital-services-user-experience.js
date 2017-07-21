/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function() {

      // Delivering Experiences.
      $('#block-digital-ux-deliveringexperiences').append($("<div class='arrow-to-scroll'><a href='#block-digital-ux-morethantechniquesastrategy'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
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

      // More than techniques, a strategy.
      $( "#block-digital-ux-morethantechniquesastrategy h2" ).after( $( "#block-digital-ux-morethantechniquesastrategy .field--name-body" ) );
      $('#block-digital-ux-morethantechniquesastrategy .field__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        appendDots: $('#block-digital-ux-morethantechniquesastrategy .field--name-body'),
        dots: true,
        lazyLoad: 'ondemand',
        lazyLoadBuffer: 0,
        speed: 1000
      });
      $('#block-digital-ux-morethantechniquesastrategy .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
        var tab = $(this).text();
        $('#slick-slide0' + index + ' button').text(tab);
      });

      // A simple working process
      $($("<div class='line-dashed'></div>")).insertBefore("#block-digital-ux-asimpleworkingprocess .field__items");

      // Full Stack
      $("#block-digital-ux-fullstacksolution").append($("#block-digital-ux-imagescollection"));
      $("#block-digital-ux-fullstacksolution").append($("#block-digital-ux-imagescollection-es"));
      $("#block-digital-ux-fullstacksolution").append($("#block-digital-ux-imagescollection-cl"));

    });

})(jQuery);

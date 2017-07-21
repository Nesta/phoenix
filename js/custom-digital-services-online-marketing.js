/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function() {

      // Imporiving.
      $('#block-digital-marketing-improvingyouracquisition').append($("<div class='arrow-to-scroll'><a href='#block-digital-marketing-digitalmarketingservices'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div><div class='stadistic-line'></div>"));
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
      $( "#block-digital-marketing-digitalmarketingservices h2" ).after( $( "#block-digital-marketing-digitalmarketingservices .field--name-body" ) );
      $('#block-digital-marketing-digitalmarketingservices .field__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        appendDots: $('#block-digital-marketing-digitalmarketingservices .field--name-body'),
        dots: true,
        lazyLoad: 'ondemand',
        lazyLoadBuffer: 0,
        speed: 1000
      });
      $('#block-digital-marketing-digitalmarketingservices .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
        var tab = $(this).text();
        $('#slick-slide0' + index + ' button').text(tab);
      });

      // A simple working process
      $($("<div class='line-dashed'></div>")).insertBefore("#block-digital-marketing-asimpleworking .field__items");

      // Full Stack
      $("#block-digital-marketing-fullstacksolution").append($("#block-digital-marketing-imagescollection"));
      $("#block-digital-marketing-fullstacksolution").append($("#block-digital-marketing-imagescollection-es"));
      $("#block-digital-marketing-fullstacksolution").append($("#block-digital-marketing-imagescollection-cl"));

    });

})(jQuery);

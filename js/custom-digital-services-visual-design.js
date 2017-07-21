/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function(){
      
      // Designing.
      $('#block-digital-visualdesign-designingproducts').append($("<div class='arrow-to-scroll'><a href='#block-digital-visualdesign-visualdesignservices'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div><div class='layer-card'></div>"));
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

      // A simple working process
      $($("<div class='line-dashed'></div>")).insertBefore("#block-digital-visualdesign-asimpleworking .field__items");

      //Full Stack
      $("#block-digital-visualdesign-fullstacksolution").append($("#block-digital-visualdesign-imagescollection"));
      $("#block-digital-visualdesign-fullstacksolution").append($("#block-digital-visualdesign-imagescollection-es"));
      $("#block-digital-visualdesign-fullstacksolution").append($("#block-digital-visualdesign-imagescollection-cl"));

      // Visual Design Services.
      $( "#block-digital-visualdesign-visualdesignservices h2" ).after( $( "#block-digital-visualdesign-visualdesignservices .field--name-body" ) );
      $('#block-digital-visualdesign-visualdesignservices .field__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        appendDots: $('#block-digital-visualdesign-visualdesignservices .field--name-body'),
        dots: true,
        lazyLoad: 'ondemand',
        lazyLoadBuffer: 0,
        speed: 1000
      });
      $('#block-digital-visualdesign-visualdesignservices .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
        var tab = $(this).text();
        $('#slick-slide0' + index + ' button').text(tab);
      });


    });
})(jQuery);

/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
  $(document).ready(function(){

    // Because.
    $('#block-transforming').append($("<div class='arrow-to-scroll'><a href='#block-technology-benefitsforyou'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
    // Function for Scroll Arrow.
    $(".arrow-to-scroll").on('click', function(event) {
      if (this.hash !== "") {

        var anchor = $("div.arrow-to-scroll").children('a');

        var href = anchor.attr('href');

        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(href).offset().top - 55
        }, 1000, function() {
        });
      }
    });

    // Benefits for you.
    $('#block-technology-benefitsforyou .field__items > .field__item .field__item a').unwrap();
    $('#block-technology-benefitsforyou .field__items > .field__item .field__item img').unwrap();
    $('#block-technology-benefitsforyou .field__items > .field__item:odd').addClass('odd');
    $('#block-technology-benefitsforyou .field__items > .field__item:even').addClass('even');
    $('#block-technology-benefitsforyou .field__items > .field__item').addClass('o-hidden');
    $('#block-technology-benefitsforyou .field__items > .field__item:first-child').addClass('no-hidden');
    $('#block-technology-benefitsforyou .even .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.even').removeClass('no-hidden');
				$('.field__item.odd').addClass('no-hidden');
			}, 3000);
    });
    $('#block-technology-benefitsforyou .odd .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.odd').removeClass('no-hidden');
				$('.field__item.even').addClass('no-hidden');
			}, 3000);
    });

    //Full Stack
    $("#block-fullstacksolution").append($("#block-imagescollection"));
    $("#block-fullstacksolution").append($("#block-technology-imagescollection-es"));
    $("#block-fullstacksolution").append($("#block-technology-imagescollection-cl"));
    //Discover Work
    $("#block-views-block-view-project-display-discoverourwork-technology").prepend($("#block-technology-discoverourwork"));

  });
})(jQuery);

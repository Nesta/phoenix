/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
  $(document).ready(function(){

    // Online strategy expertise.
    $('#block-digital-onlinestrategyexpertise').append($("<div class='arrow-to-scroll'><a href='#block-digital-benefitsforyou'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
    // Function for Scroll Arrow.
    $(".arrow-to-scroll").on('click', function(event) {
      if (this.hash !== "") {

        var anchor = $("div.arrow-to-scroll").children('a');

        var href = anchor.attr('href');

        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(href).offset().top - 10
        }, 1000, function() {
        });
      }
    });

    // Benefits for you.
    $('#block-digital-benefitsforyou .field__items > .field__item .field__item a').unwrap();
    $('#block-digital-benefitsforyou .field__items > .field__item .field__item img').unwrap();
    $('#block-digital-benefitsforyou .field__items > .field__item:odd').addClass('odd');
    $('#block-digital-benefitsforyou .field__items > .field__item:even').addClass('even');
    $('#block-digital-benefitsforyou .field__items > .field__item').addClass('o-hidden');
    $('#block-digital-benefitsforyou .field__items > .field__item:first-child').addClass('no-hidden');
    $('#block-digital-benefitsforyou .even .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.even').removeClass('no-hidden');
				$('.field__item.odd').addClass('no-hidden');
			}, 3000);
    });
    $('#block-digital-benefitsforyou .odd .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.odd').removeClass('no-hidden');
				$('.field__item.even').addClass('no-hidden');
			}, 3000);
    });

    // Discover our work.
    $("#block-digital-discoverourwork").prependTo("#block-views-block-view-project-display-discoverourwork-digital");

    //Full Stack
    $("#block-digital-fullstacksolution").append($("#block-digital-imagescollection"));
    $("#block-digital-fullstacksolution").append($("#block-digital-imagescollection-es"));
    $("#block-digital-fullstacksolution").append($("#block-digital-imagescollection-cl"));

  });
})(jQuery);

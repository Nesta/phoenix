/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
  $(document).ready(function(){

    // For our clients, only the best.
    $('#block-outsourcing-forourclientsonlythebest').append($("<div class='arrow-to-scroll'><a href='#block-outsourcing-benefitsforourclients'><img src='/themes/custom/da_vinci/images/fill-grey.png' /></a></div>"));
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
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item .field__item a').unwrap();
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item .field__item img').unwrap();
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item:odd').addClass('odd');
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item:even').addClass('even');
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item').addClass('o-hidden');
    $('#block-outsourcing-benefitsforourclients .field__items > .field__item:first-child').addClass('no-hidden');
    $('#block-outsourcing-benefitsforourclients .even .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.even').removeClass('no-hidden');
				$('.field__item.odd').addClass('no-hidden');
			}, 3000);
    });
    $('#block-outsourcing-benefitsforourclients .odd .description--img a').click(function (event){
      event.preventDefault();
      $('.field__items > .field__item .active').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().next().addClass('active');
			setTimeout(function(){
				$('.field__item.odd').removeClass('no-hidden');
				$('.field__item.even').addClass('no-hidden');
			}, 3000);
    });

    // IT Technical integrators.
    $( "#block-outsourcing-ittechnicalintegrators h2" ).after( $( "#block-outsourcing-ittechnicalintegrators .field--name-body" ) );
    $('#block-outsourcing-ittechnicalintegrators .field__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: true,
      appendDots: $('#block-outsourcing-ittechnicalintegrators .field--name-body'),
      dots: true,
      lazyLoad: 'ondemand',
      lazyLoadBuffer: 0,
      speed: 1000
    });
    $('#block-outsourcing-ittechnicalintegrators .slick-list .field__item:not(.slick-cloned) .field--name-field-tabhorizontal-listtitle').each(function(index){
      var tab = $(this).text();
      $('#slick-slide0' + index + ' button').text(tab);
    });

    // Smart technology.
    $('#block-outsourcing-smarttechnology').prependTo('#block-views-block-technology-display-outsourcing-technology');
    $('#block-views-block-technology-display-outsourcing-technology .views-row').appendTo('#block-views-block-technology-display-outsourcing-technology .cycle-logo .view-content-cycle');
    $('#block-views-block-technology-display-outsourcing-technology .attachment').remove();
    $('#block-views-block-technology-display-outsourcing-technology .view-content').remove();

    //var client_logos = $(".view-content-cycle .views-row").shuffle();
    var technology_logos = $(".view-content-cycle .views-row");
    var grid_logo = 4;
    var suffle_technology = parseInt(technology_logos.length, 10) / parseInt(grid_logo, 10);
    for(var i = 0; i < technology_logos.length; i+=suffle_technology) {
      technology_logos.slice(i, i+suffle_technology).wrapAll('<div class="view-content-technology"></div>');
    }

    $('#block-views-block-technology-display-outsourcing-technology .view-content-cycle .view-content-technology').cycle({
      random: 0,
      fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });

  });
})(jQuery);

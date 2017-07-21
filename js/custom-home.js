/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
  $(document).ready(function(){

    // Slider
    $('#block-homeenheaderslider .field__items').slick({
      dots: true
    });
    $('#block-homeenheaderslider').append('<div class="group"></div>');
    $('#block-homeenheaderslider .paragraph--type--slide .field--name-field-slide-image').after($('.group'));
  	//$('#block-homeenheaderslider .slick-slide').addClass('odd');
  	//$('#block-homeenheaderslider .slick-slide').first().removeClass('odd');
  	//$('#block-homeenheaderslider .slick-slide:not(".slick-cloned")').first().addClass('even');

    $("#block-homeenheaderslider .paragraph--type--slide").each(
        function() {
          $(this).find('.group').append($(this).find('.field--name-field-slide-title'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-teaser'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-link'));
        }
    );
    $('#block-homeesheaderslider .field__items').slick({
      dots: true
    });
    $('#block-homeesheaderslider').append('<div class="group"></div>');
    $('#block-homeesheaderslider .paragraph--type--slide .field--name-field-slide-image').after($('.group'));
  	//$('#block-homeesheaderslider .slick-slide:odd').addClass('odd');
  	//$('#block-homeesheaderslider .slick-slide:even').addClass('even');

    $("#block-homeesheaderslider .paragraph--type--slide").each(
        function() {
          $(this).find('.group').append($(this).find('.field--name-field-slide-title'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-teaser'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-link'));
        }
    );
    $('#block-homeclhomeslider .field__items').slick({
      dots: true
    });
    $('#block-homeclhomeslider').append('<div class="group"></div>');
    $('#block-homeclhomeslider .paragraph--type--slide .field--name-field-slide-image').after($('.group'));
  	//$('#block-homeclhomeslider .slick-slide:odd').addClass('odd');
  	//$('#block-homeclhomeslider .slick-slide:even').addClass('even');

    $("#block-homeclhomeslider .paragraph--type--slide").each(
        function() {
          $(this).find('.group').append($(this).find('.field--name-field-slide-title'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-teaser'));
          $(this).find('.group').append($(this).find('.field--name-field-slide-link'));
        }
    );


    // Testimony
    $('#block-hometestimonial .field--name-field-entityreference-testimony article .node__content').append($('#block-hometestimonial .field--name-field-entityreference-link'));
    $('#block-homeestestimonial .field--name-field-entityreference-testimony article .node__content').append($('#block-homeestestimonial .field--name-field-entityreference-link'));
    $('#block-homecltestimonial .field--name-field-entityreference-testimony article .node__content').append($('#block-homecltestimonial .field--name-field-entityreference-link'));

    // Discover how we can help.
    $('#block-homediscoverhowwecanhelp').prependTo('#block-views-block-view-business-lines-blk-display-whatwedo-2');
    $("#block-views-block-view-business-lines-blk-display-whatwedo-2 .views-row").each(
       function() {
          var link = $(this).find('.field--type-link a').attr('href');
          var text = $(this).find('.field--type-link').text();
          $(this).find('.field--type-link a').html('<div class="term-name">'+ text +'</div>');
          $(this).find('div > .field').wrap('<a class="views-anchor" href="' + link + '" title="' + text + '"></a>');
       }
    );
    $('.field--name-field-businesslines-description, .term-name').unwrap();
    $('#block-views-block-view-business-lines-blk-display-whatwedo-2 .views-row .field--type-link').hover(
       function() {
          $(this).parent().prev().find('.field--type-image').addClass("hover");
       }, function() {
          $(this).parent().prev().find('.field--type-image').removeClass("hover");
       }
    );
    $('#block-views-block-view-business-lines-blk-display-whatwedo-2 .views-row .field--type-image').hover(
       function() {
          $(this).parent().next().find('.field--type-link').addClass("hover");
       }, function() {
          $(this).parent().next().find('.field--type-link').removeClass("hover");
       }
    );

    // Some sucessful clients.
    $('#block-home-somesucessfulclients').prependTo('#block-views-block-view-client-blk-display-someofourclients-home')
    $('#block-views-block-view-client-blk-display-someofourclients-home .views-row').appendTo('#block-views-block-view-client-blk-display-someofourclients-home .cycle-logo .view-content-cycle');
    $('#block-views-block-view-client-blk-display-someofourclients-home .attachment').remove();
    $('#block-views-block-view-client-blk-display-someofourclients-home .view-content').remove();

    var client_logos = $(".view-content-cycle .views-row");
    var grid_logo = 4;
    var suffle_client = parseInt(client_logos.length, 10) / parseInt(grid_logo, 10);
    for(var i = 0; i < client_logos.length; i+=suffle_client) {
      client_logos.slice(i, i+suffle_client).wrapAll('<div class="view-content-client"></div>');
    }

    $('#block-views-block-view-client-blk-display-someofourclients-home .view-content-cycle .view-content-client').cycle({
      random: 0,
      fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });

    // Stories.
    $('<div class="line"></div>').insertAfter($('#block-views-block-careers-block-home .view-empty'));
    $('<div class="line"></div>').insertAfter($('#block-views-block-careers-block-home .views-field-nid'));


  });
})(jQuery);

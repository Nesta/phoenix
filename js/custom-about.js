/**
 * @file
 * Custom Code for About Section.
 */

(function ($) {
	$(document).ready(function(){

    // Tech Lovers.
    $('#block-blk-techlovers').append($("<div class='arrow-to-scroll'><a href='#block-views-block-view-headquarters-blk-display-headquarters'><img src='/themes/custom/da_vinci/images/fill.png' /></a></div>"));
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

		// Our locations.
		$('#block-views-block-view-headquarters-blk-display-headquarters .view-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			lazyLoad: 'ondemand',
			lazyLoadBuffer: 0,
			speed: 1000
		});

		$('#block-views-block-view-headquarters-blk-display-headquarters .slick-dots').appendTo('#block-views-block-view-headquarters-blk-display-headquarters');
		$('#block-views-block-view-headquarters-blk-display-headquarters .slick-list .views-row:not(.slick-cloned) .views-field-field-headquarter-city').each(function(index){
			var city = $(this).find('p').text();
			$('#slick-slide0' + index + ' button').text(city);
		});

		// Custom Video.
    $('[id^=block-customvideoblock]').attr('id', 'block-customvideoblock');
		setTimeout(function(){
			$('#block-customvideoblock').height($('#block-customvideoblock img').height());
		}, 1000);

		// Consistent Growth.
		$('#block-abouttimelinees, #block-abouttimelinecl').attr('id', 'block-abouttimelineen');
		$('#block-aboutconsistentgrowth').prependTo('#block-abouttimelineen');
  	$('#block-abouttimelineen .field--name-field-timeline-block-cards > .field__item:odd').addClass('odd');
    $('#block-abouttimelineen .field--name-field-timeline-block-cards > .field__item:even').addClass('even');

    setTimeout(function(){
      $('#block-abouttimelineen .field--name-field-timeline-block-cards > .field__item:odd').addClass('late');
    }, 1500);

    setTimeout(function(){
      $('#block-abouttimelineen .field--name-field-timeline-block-cards > .field__item:even').addClass('late');
    }, 1500);

		// What We Do.
		$('#block-aboutwhatwedo').prependTo('#block-views-block-view-business-lines-blk-display-whatwedo');
		$("#block-views-block-view-business-lines-blk-display-whatwedo .views-row").each(
			function() {
				var link = $(this).find('.field--type-link a').attr('href');
				var text = $(this).find('.field--type-link').text();
				$(this).find('.field--type-link a').html('<div class="term-name">'+ text +'</div>');
				$(this).find('div > .field').wrap('<a class="views-anchor" href="' + link + '" title="' + text + '"></a>');
			}
		);
		$('.field--name-field-businesslines-description, .term-name').unwrap();
		$('#block-views-block-view-business-lines-blk-display-whatwedo .views-row .field--type-link').hover(
			function() {
				$(this).parent().prev().find('.field--type-image').addClass("hover");
			}, function() {
				$(this).parent().prev().find('.field--type-image').removeClass("hover");
			}
		);
		$('#block-views-block-view-business-lines-blk-display-whatwedo .views-row .field--type-image').hover(
			function() {
				$(this).parent().next().find('.field--type-link').addClass("hover");
			}, function() {
				$(this).parent().next().find('.field--type-link').removeClass("hover");
			}
		);

		// Some Of Our Clients.
		$('#block-aboutsomeofourclients').prependTo('#block-views-block-view-client-blk-display-someofourclients-about');
		$('#block-views-block-view-client-blk-display-someofourclients-about .views-row').appendTo('#block-views-block-view-client-blk-display-someofourclients-about .cycle-logo .view-content-cycle');
		$('#block-views-block-view-client-blk-display-someofourclients-about .attachment').remove();
		$('#block-views-block-view-client-blk-display-someofourclients-about .view-content').remove();

		//var client_logos = $(".view-content-cycle .views-row").shuffle();
		var client_logos = $(".view-content-cycle .views-row");
		var grid_logo = 4;
		var suffle_clients = parseInt(client_logos.length, 10) / parseInt(grid_logo, 10);
		for(var i = 0; i < client_logos.length; i+=suffle_clients) {
			client_logos.slice(i, i+suffle_clients).wrapAll('<div class="view-content-client"></div>');
		}

		$('#block-views-block-view-client-blk-display-someofourclients-about .view-content-cycle .view-content-client').cycle({
			random: 0,
			fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		});

		// Our Brands
		$('#block-aboutourbrands').prependTo('#block-views-block-view-brand-blk-display-ourbrands');
		$('#block-views-block-view-brand-blk-display-ourbrands .brand-row').hover(
			function() {
				$(this).addClass("hover");
			}, function() {
				$(this).removeClass("hover");
			}
		);

		// Add ID because fuck library only work with ID.
		$('.more-than-box-number').each(
			function(index){
				$(this).attr('id', 'more-than-box-number-' + index);
			}
		);

    $('#block-customvideoblock .close').hide();
		$('#block-customvideoblock .close').on('click', function(ev) {
      $('#block-customvideoblock img').removeClass('active');
			setTimeout(function(){
        $('#block-customvideoblock .custom-video-caption').removeClass('inactive');
        $('#block-customvideoblock .custom-video-description').removeClass('inactive');
        $('#block-customvideoblock .play').removeClass('inactive mini');
        $('#block-customvideoblock h2').removeClass('inactive');
        $('#block-customvideoblock .play').removeClass('active');
        $('#block-customvideoblock video').removeClass('active');
        $('#block-customvideoblock .mute').removeClass('off');
        $('#block-customvideoblock .play').show();
        $('#block-customvideoblock .pause').hide();
        $('#block-customvideoblock .close').hide();
        $('#block-customvideoblock .mute').hide();
			  $("#block-customvideoblock video")[0].pause();
			}, 1200);
			ev.preventDefault();
		});

		$('#block-customvideoblock .play').on('click', function(ev) {
			$('#block-customvideoblock .play').addClass('active');
			$('#block-customvideoblock video').addClass('active');
			$('#block-customvideoblock img').addClass('active');

			$('#block-customvideoblock .mute').addClass('off');
			$('#block-customvideoblock .pause').show();
			$('#block-customvideoblock .close').show();
			$('#block-customvideoblock .mute').show();
			$('#block-customvideoblock .play').addClass('inactive');
			$('#block-customvideoblock h2').addClass('inactive');
			$('#block-customvideoblock .custom-video-caption').addClass('inactive');
			$('#block-customvideoblock .custom-video-description').addClass('inactive');
			$("#block-customvideoblock video")[0].play();
			setTimeout(function(){
				$('#block-customvideoblock .play').hide();
			}, 1200);
			setTimeout(function(){
				$('#block-customvideoblock .pause').addClass('active');
				$('#block-customvideoblock .close').addClass('active');
			}, 1200);
			ev.preventDefault();
		});


		$('#block-customvideoblock .pause').on('click', function(ev) {
			$('#block-customvideoblock .play').show();
			$('#block-customvideoblock .play').removeClass('inactive');
			$('#block-customvideoblock .play').addClass('mini');
			$('#block-customvideoblock .pause').hide();
			$("#block-customvideoblock video")[0].pause();
			ev.preventDefault();
		});

		$('video').on('ended',function(){
			$('#block-customvideoblock .play').show();
			$('#block-customvideoblock .play').removeClass('inactive');
			$('#block-customvideoblock .play').addClass('mini');
			$('#block-customvideoblock .pause').hide();
		});

		$("video").prop('muted', false);
		$(".mute").click( function (){
			if( $("video").prop('muted') ) {
				$("video").prop('muted', false);
				$('#block-customvideoblock .mute').addClass('off');
				$('#block-customvideoblock .mute').removeClass('on');
			} else {
				$("video").prop('muted', true);
				$('#block-customvideoblock .mute').addClass('on');
				$('#block-customvideoblock .mute').removeClass('off');
			}
		});



		// Count element.
		var options = {
			useEasing : true,
			useGrouping : true,
			separator : ',',
			decimal : '.',
			prefix : '',
			suffix : ''
		};

		// Get field value.
		var count_box_number_0 = $('#more-than-box-number-0').text();
		var count_box_number_1 = $('#more-than-box-number-1').text();
		var count_box_number_2 = $('#more-than-box-number-2').text();
		var count_box_number_3 = $('#more-than-box-number-3').text();

		// Start Count.
		var block_blk_factfigures = $("#block-blk-factfigures");
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.attributeName === "class") {
					var attributeValue = $(mutation.target).prop(mutation.attributeName);

					// Prepare Class in-view.
					var classBlock = attributeValue.split(' ');
					var classPosition = classBlock.length;
					var inviewPosition = classPosition - 1;

					// Prepare Numbers.
					var more_than_box_number_0 = new CountUp("more-than-box-number-0", 0, count_box_number_0, 0, 7, options);
					var more_than_box_number_1 = new CountUp("more-than-box-number-1", 0, count_box_number_1, 0, 10, options);
					var more_than_box_number_2 = new CountUp("more-than-box-number-2", 0, count_box_number_2, 0, 10, options);
					var more_than_box_number_3 = new CountUp("more-than-box-number-3", 0, count_box_number_3, 0, 10, options);

					if (classBlock[inviewPosition] == 'in-view') {
						more_than_box_number_0.start();
						more_than_box_number_1.start();
						more_than_box_number_2.start();
						more_than_box_number_3.start();
					}
				}
			});
		});

		observer.observe(block_blk_factfigures[0],  {
			attributes: true
		});

	});
})(jQuery);

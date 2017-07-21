/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
    $(document).ready(function(){

      // QA assurance.
      $('#block-technology-qualityassurance-agileprojects').append($("<div class='arrow-to-scroll'><a href='#block-technology-qualityassurance-ourprocess'><img src='/themes/custom/da_vinci/images/fill.png' /></a></div>"));
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

      // QA Assurance Ecosystem
      $('#block-technology-qualityassurance-qaassuranceecosystem').prependTo('#block-views-block-toolsqa-display-toolsqa');
      $('#block-views-block-toolsqa-display-toolsqa .views-row').appendTo('#block-views-block-toolsqa-display-toolsqa .cycle-logo .view-content-cycle');
      $('#block-views-block-toolsqa-display-toolsqa .attachment').remove();
      $('#block-views-block-toolsqa-display-toolsqa .view-content').remove();

      var qa_logos = $(".view-content-cycle .views-row");
      var grid_logo = 8;
      var suffle_qa = parseInt(qa_logos.length, 10) / parseInt(grid_logo, 10);
      for(var i = 0; i < qa_logos.length; i+=suffle_qa) {
        qa_logos.slice(i, i+suffle_qa).wrapAll('<div class="view-content-client"></div>');
      }

      $('#block-views-block-toolsqa-display-toolsqa .view-content-cycle .view-content-client').cycle({
        random: 0,
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
      });

      //Full Stack
      $("#block-technology-qualityassurance-fullstack").append($("#block-technology-qualityassurance-imagescollection"));
      $("#block-technology-qualityassurance-fullstack").append($("#block-technology-qa-imagescollection-es"));
      $("#block-technology-qualityassurance-fullstack").append($("#block-technology-qa-imagescollection-cl"));

    });
})(jQuery);

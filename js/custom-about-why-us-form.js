/**
 * @file
 * Custom Code for About Why Us Section.
 */

(function ($) {
  Drupal.behaviors.AboutWhyUsTheme = {
    attach: function (context) {
	  // How Can We Help You?.
	  $('#block-howcanwehelpyou select').selectBox();
      $('.js-form-item-first-option select').change(function() {
        $('#block-howcanwehelpyou form#natural-language-form #edit-submit').hide();
        $(this).parent().parent().addClass('first-complete');
      });
      $('.js-form-item-second-option select').change(function() {
        $('#block-howcanwehelpyou form#natural-language-form #edit-submit').hide();
        $(this).parent().parent().addClass('second-complete');
      });
      $('.js-form-item-third-option select').change(function() {
        setTimeout(function(){
          $('#block-howcanwehelpyou form#natural-language-form #edit-submit').hide();
        }, 700);
        $(this).parent().parent().parent().addClass('complete');
        setTimeout(function(){
          $('#solution').show();
        }, 1300);
        setTimeout(function(){
          $('#block-howcanwehelpyou form#natural-language-form .form-email').show();
        }, 1300);
        setTimeout(function(){
          $('#block-howcanwehelpyou form#natural-language-form #edit-submit').show();
        }, 1300);
      });
    }
  };
})(jQuery);

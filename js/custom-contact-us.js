/**
 * @file
 * Custom Code for Technology Web Us Section.
 */

(function ($) {
  $(document).ready(function(){

    // Our Office
    $("#block-contactus-ouroffices").append($('#block-views-block-view-headquarters-display-ouroffices'));

    // Tell us about your project

    var $namePlace = Drupal.t("What's your name?");
    var $mailPlace = Drupal.t('E-mail');
    var $messagePlace = Drupal.t('Message');
    $("#block-contactus-tellusaboutyourproject h2, #block-contactus-tellusaboutyourproject .field--name-body").wrapAll('<div class="group"><div class="title-form"></div></div>')
    $("#block-contactus-tellusaboutyourproject .group").append($('#block-da-vinci-content'));
    $("#block-da-vinci-content #edit-name").attr("placeholder", $namePlace);
    $("#block-da-vinci-content #edit-mail").attr("placeholder", $mailPlace);
    $("#block-da-vinci-content #edit-message-0-value").attr("placeholder", $messagePlace);

});

})(jQuery);

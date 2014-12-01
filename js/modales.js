/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

(function ($) {
  $(document).ready(function () {
    // INIT $.ready() ////////////////////////

    // Preparamos algunos modales
    var $modalDrupalBase = $('.emergya-drupal-base .modal-content').easyModal();

    var contactFormCopy_a = $('<div class="form-contact_a form-contact"></div>').append($('.emergya-drupal-base .contact-form')).addClass('modal-content hidden');

    var $aClose = $('<a class="close" href="#">Close</a>');
    $aClose.clone().appendTo(contactFormCopy_a);

    var $body = $('body');
    contactFormCopy_a.appendTo($body);
    contactFormCopy_a.easyModal();

    // Handlers para abrir los modales.
    $('.solution .content .more').on('click', function (e) {
      $(this).parent().siblings('.modal-content').trigger('openModal');
      e.preventDefault();
    });

    // Control del compotamiento dentro de los modales.
    $('.show-form').on('click', function (e) {
      e.preventDefault();
      var $show_form = $(this).parent().parent();
      $(this).parent().trigger('closeModal');
      
      if ($show_form.hasClass('emergya-drupal-base')) {
        contactFormCopy_a.trigger('openModal');
      }
    });

    var $marca = $('.marca .more');
    $marca.siblings('.modal-content').easyModal();
    // Handlers para abrir los modales.
    $marca.on('click', function (e) {
      $(this).siblings('.modal-content').trigger('openModal');
      e.preventDefault();
    });

    // END $.ready() ////////////////////////
  });
})(jQuery);

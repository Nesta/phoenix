(function ($) {
  $(document).ready(function () {
    // INIT $.ready() ////////////////////////

    // Preparamos algunos modales
    var $modalDrupalBase = $('.emergya-drupal-base .modal-content').easyModal();
    var $drupalAssembly = $('.drupal-assembly .modal-content').easyModal();
    var $openPublish = $('.open-publish .modal-content').easyModal();
    var $openPublic = $('.open-public .modal-content').easyModal();
    var $commerceKickstart = $('.commerce-kickstart .modal-content').easyModal();

    var contactFormCopy_a = $('<div class="form-contact_a form-contact"></div>').append($('.emergya-drupal-base .contact-form')).addClass('modal-content hidden');
    var contactFormCopy_b = $('<div class="form-contact_b form-contact"></div>').append($('.drupal-assembly .contact-form')).addClass('modal-content hidden');
    var contactFormCopy_c = $('<div class="form-contact_c form-contact"></div>').append($('.open-publish .contact-form')).addClass('modal-content hidden');
    var contactFormCopy_d = $('<div class="form-contact_d form-contact"></div>').append($('.open-public .contact-form')).addClass('modal-content hidden');
    var contactFormCopy_e = $('<div class="form-contact_e form-contact"></div>').append($('.commerce-kickstart .contact-form')).addClass('modal-content hidden');

    var $aClose = $('<a class="close" href="#">Close</a>');
    $aClose.clone().appendTo(contactFormCopy_a);
    $aClose.clone().appendTo(contactFormCopy_b);
    $aClose.clone().appendTo(contactFormCopy_c);
    $aClose.clone().appendTo(contactFormCopy_d);
    $aClose.clone().appendTo(contactFormCopy_e);

    var $body = $('body');
    contactFormCopy_a.appendTo($body);
    contactFormCopy_a.easyModal();
    contactFormCopy_b.appendTo($body);
    contactFormCopy_b.easyModal();
    contactFormCopy_c.appendTo($body);
    contactFormCopy_c.easyModal();
    contactFormCopy_d.appendTo($body);
    contactFormCopy_d.easyModal();
    contactFormCopy_e.appendTo($body);
    contactFormCopy_e.easyModal();

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
      } else if ($show_form.hasClass('drupal-assembly')) {
        contactFormCopy_b.trigger('openModal');
      } else if ($show_form.parent().hasClass('open-publish')) {
        contactFormCopy_c.trigger('openModal');
      } else if ($show_form.parent().hasClass('open-public')) {
        contactFormCopy_d.trigger('openModal');
      } else if ($show_form.parent().hasClass('commerce-kickstart')) {
        contactFormCopy_e.trigger('openModal');
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

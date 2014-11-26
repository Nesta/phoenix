/**
 * @file Define forms validations callbacks.
 */
(function ($) {
  $(document).ready(function () {
    $('.contact-submit-bt').once('mailValidation', function() {
      $(this).click(function() {
        var $this = $(this);
        $this.attr('disabled','disabled');
        var errors = [];

        // Get the mail and message inputs:
        var message = $this.parent().siblings('.form-item-message').find('.form-textarea');
        var mail = $this.parent().siblings('.form-item-mail').find('.form-text');

        // Validate mail:
        if (mail != undefined) {
          var mail_value = mail.val();
          if (!IsEmail(mail_value)) {
            errors.push(Drupal.t('Ooops! It looks that your <strong>e-mail</strong> address is not correct. Could you please check it?'));
            $this.parent().parent().find('input[name="mail"]').addClass('error');
            $this.parent().parent().find('textarea').removeClass('error');
          }
        }

        // Validate message:
        if ((message.hasClass('required')) && (!IsEmail(mail_value))) {
          if (message.val().length == 0) {
            errors.push(Drupal.t('In the <strong>message</strong> you can share your name, the reason why you contact us, your phone number... or just a greeting :)'));
            $this.parent().parent().find('textarea').addClass('error');
          }
        }
          // Validate message:
        if ((message.hasClass('required')) && (IsEmail(mail_value))) {
          if (message.val().length == 0) {
            errors.push(Drupal.t('In the <strong>message</strong> you can share your name, the reason why you contact us, your phone number... or just a greeting :)'));
            $this.parent().parent().find('textarea').addClass('error');
            $this.parent().parent().find('input[name="mail"]').removeClass('error');
          }
        }

        // If errors we show them:
        if (errors.length > 0) {
          var error_div = $this.parent().siblings('.form-errors');
          // Set an empty value:
          error_div.html('');
          jQuery.each(errors, function(i, val) {
            error_div.append('<span class="contact-message-error">' + val + '</span>');
          });
          $this.parent().parent().find('.form-errors').removeClass('hide');
          $this.removeAttr('disabled');
          return false;
        }
        // If there are no errors, we handle submit by ajax
        else {
          var form = $(this).parents('form:first');
          if (form.length == 0) {
            return false;
          }
          form.submit(function(e) {
            e.preventDefault();
          });
          // Get form items and values
          var $inputs = $(form.find(':input'));
          var values = {};
          $inputs.each(function() {
            values[this.name] = $(this).val();
          });
          // Set loading icon over form
          form.addClass('loading-layer');
          $.ajax({
            url: '/drupalera-ajax/contact_submit',
            data : {form : values},
            type: 'POST',
            dataType: 'json',
            success: function(data) {
              if (GoogleAnalyticsObject.length > 0) {
                var contact_url = '/contact-' + values.cid;
                ga("send", "pageview", contact_url);
                ga("send", "event", "Contact", "Contact from empresa", contact_url);
              }
              form.removeClass('loading-layer');
              var div = form.parent();
              div.html(data.html);
            },
            error: function(xhr, ajaxOptions, thrownError) {
              form.removeClass('loading-layer');
              errors.push(Drupal.t('Ooops! Sorry but there was an error. Please, contact us via ' + ofuscatorMail()));
            }
          });
          return false;
        }
      });
    });
  });

  /**
   * Validate a mail string
   * @param email
   * @returns {boolean}
   * @constructor
   */
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
})(jQuery);

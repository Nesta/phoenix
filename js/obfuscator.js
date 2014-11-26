/**
 * Created by jlbellido on 3/11/14.
 */
(function ($) {
  Drupal.behaviors.ofuscator = {
    attach: function (context, settings) {
      $(document).ready(function () {
        var ofuscator_mail = ofuscatorMail();
        $('.drupalera-mail').attr('href', 'mailto:' + ofuscator_mail);
      });
    }
  };

  /**
   * Return contact email address for ladrupalera
   */
  ofuscatorMail = function () {
    coded = Drupal.settings.ofuscatorMail.coded;
    key = Drupal.settings.ofuscatorMail.key;
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
      }
    }
    return link;
  }
})(jQuery);

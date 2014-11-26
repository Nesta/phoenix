(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      if ($("body").hasClass('node-type-article')) {
        $('.prettyprint').snippet("html", {style: "acid"});
      }

      $('.snippet-container pre .sh_preproc').each(function () {
        var $this = $(this);
        var t = $this.text();
        $this.html(t.replace('&lt', '<').replace('&gt', '>').replace('&', '').replace('lt', '<').replace('gt', '>').replace(';', '').replace('amp', '&'));
      });

      $('.js-menu-trigger', context).once('menuCategories', function () {
        $(this).click(function () {
          $('.js-menu').toggleClass('is-visible');
          $('.js-menu-screen').toggleClass('is-visible');
        });
      });
      $('.js-menu-screen', context).once('menuCategoriesON', function () {
        $(this).click(function () {
          $('.js-menu').toggleClass('is-visible');
          $('.js-menu-screen').toggleClass('is-visible');
        });
      });

      $('.not-logged-in.page-user #edit-submit-google').appendTo('#edit-actions');

      $('.messages').on('click', function () {
        $(this).addClass('hide');
      });
    }
  }
})(jQuery);

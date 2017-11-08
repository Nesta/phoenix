(function ($) {
  $(function () {
      var base = window.base_font_size || 16,
          selected = window.selected_font_size || 16;

      (function () {
          var $custom_base = $('.custom-base'),
              $custom_px = $('.custom-px'),
              $custom_em = $('.custom-em'),
              $custom_result = $('.custom-result'),
              $convert_button = $('.convert-button');



          function reset_calc () {
              $custom_base.val(selected);
              clear_calc();
          };

          function clear_calc () {
              $custom_px.val('');
              $custom_em.val('');
              $custom_result.text('');
          };

          function do_calc () {
              var px_val = $custom_px.val().replace(/[^0-9.]/g, ''),
                  em_val = $custom_em.val().replace(/[^0-9.]/g, ''),
                  base_val = $custom_base.val().replace(/[^0-9.]/g, '');

              if (base_val && px_val) {
                  $custom_result.text((px_val / base_val).toFixed(3) + 'rem');
              }
              else if (base_val && em_val) {
                  $custom_result.text(parseInt(em_val * base_val) + 'px');
              }
              else {
                  return;
              }
          };
          
          
          $custom_px.on('focus', function (e) {
              clear_calc();
          }).on('keypress', function (e) {
              if (e.keyCode == 13) {
                  do_calc();
              }
          });

          $custom_em.on('focus', function (e) {
              clear_calc();
          }).on('keypress', function (e) {
              if (e.keyCode == 13) {
                  do_calc();
              }
          });

          $convert_button.on('click', function (e) {
              e.preventDefault();
              do_calc();
          });
      })();
  });
})(jQuery);

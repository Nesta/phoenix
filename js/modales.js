/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

(function ($) {
  $(document).ready(function () {
      // Se ha capturado el contenido del modulo styleguide y se ha convertido en una ventana modal,
      // a la cual podemos acceder mediante el icono "brush" situado de manera fija en el lateral
      // derecho del portal, sin embargo, es posible acceder a la pagina como tal que nos facilita el
      // modulo desde la apariencia del tema.
      $('body').append('<div id="style-guide-modal" class="generic-modal"><div class="modal-content"></div></div>');
      $('#style-guide-modal .modal-content').easyModal();      
      $('.style-guide-modal-fire').on('click',function(e){
        e.preventDefault();
        $.get("/admin/appearance/styleguide/da_vinci").then(function(data){
          $('#style-guide-modal .modal-content').html($("#block-system-main",data));
          $('#style-guide-modal .modal-content').append('<a class="close" href="#">Close</a>');
          $('#style-guide-modal .modal-content').css({'top':'10%','left':'10%','width':'80%','height':'80%','overflow-y':'auto','margin-left':'1px','margin-top':'1px'});
        });
        $('#style-guide-modal .modal-content').trigger('openModal');
      });
  });
})(jQuery);

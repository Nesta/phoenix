/**
 * @file  
 * Modal output and behaviour 
 *
 * @pre Style Guide Icon setting active
 * @pre style-guide Module installed
 * @pre User admin logged in
 *
 * We get the content of the style-guide module (through ajax) into the modal window, 
 * displaying a fixed icon at the right side. 
 */
(function ($) {
  $(document).ready(function () {
    $('body').append('<div id="style-guide-modal" class="generic-modal"><div class="modal-content"><a class="close" href="#">Close</a></div></div>');
    $('#style-guide-modal .modal-content').easyModal();      
    $('.style-guide-modal-fire').on('click',function(e){
      e.preventDefault();
      $.get("/admin/appearance/styleguide/da_vinci").then(function(data){
        $('#style-guide-modal .modal-content').html($("#block-system-main",data));
        $('#style-guide-modal .modal-content').css({'top':'10%','left':'10%','width':'80%','height':'80%','overflow-y':'auto','margin-left':'1px','margin-top':'1px'});
      });
      $('#style-guide-modal .modal-content').trigger('openModal');
    });
  });
})(jQuery);

(function ($) {
  Drupal.behaviors.da_vinciThemeMasonry = {
  attach: function (context) {
    // Funciones 'Masonry remove' con sintaxis javascript
    // Capturamos en una variable la capa donde aplicaremos Masonry.
    var container = document.querySelector('.view-masonry');
    var msnry = new Masonry(container, {
      // Definimos que elementos dentro de la vista van a ser eliminados.
      itemSelector: '.views-row',
      // Así como la anchura.
      columnWidth: '.views-row'
    });
    // El proceso de disposición de los elementos en la vista es mucho más rápido que
    // la carga de imágenes. Esto ocurre cuando nuestra vista alberga mucho contenido sin paginado.
    // Con imagesloaded conseguimos anticiparnos a esa colocación cargando todas las imágenes
    // para tener constancia del tamaño real de cada contenido, evitando así, que los elementos
    // se solapen.
    imagesLoaded(container, function () {
      msnry.layout();
    });

    eventie.bind(container, 'click', function (event) {
    // Hemos insertado en 'custom.js' un elemento 'close' que actuará como cierre del elemento.
    // don't proceed if views-row was not clicked on
    if (!classie.has(event.target, 'close')) {
      return;
    }
    // Eliminamos ese elemento
    msnry.remove($(event.target).closest('li'));
    // Y volvemos a recalcular su colocacion dentro de la vista, de manera que los contenidos
    // irán ocupando el lugar de aquellos que hayan sido eliminados.
    msnry.layout();
    });

    // LEEME!
    // El siguiente código aplica el mismo resultado que el anterior, solo que la
    // sintaxis es jQuery. Sin embargo no funciona correctamente cuando queremos
    // integrar 'Masonry' con "infinite scroll"

    /*
      var $container = $('.view-infinite-list').masonry({
          itemSelector: '.views-row',
          columnWidth: '.views-row'
          }).imagesLoaded( function() {
            $container.masonry();
          });
        $container.find('.views-row .close').click (function(){
          $(this).parent('.views-row').remove();
          $container.masonry();
        });
    */
  }
  }
})(jQuery);
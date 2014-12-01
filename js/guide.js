/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

(function ($) {
  Drupal.behaviors.introJS = {
    attach: function (context) {
        if ($(".preview").hasClass("preview")){
          
        }else{

          var intro = introJs();
            intro.setOptions({
              steps: [
                {
                  element: '#title-field-add-more-wrapper',
                  intro: "Insertar título <b>coherente</b> a poder ser <b>NO</b> mayor de <b>2 o 3 líneas</b>."
                },
                {
                  element: '.form-item-body-und-0-summary',
                  intro: '<ul><li>Resumen <span style="color: red;"><b>obligatorio</b></span>.</li><ul><li>Texto que queremos en los listados (este texto no se mostrará en el detalle).</li><li>En caso de no tener texto para el <b>resumen</b>, copiamos las 2 o 3 primeras líneas del campo body aqui.</li></ul><ul><li>Antes de insertar el texto realizar paso 1, una vez escrito 2 o 3:</li><ol><li>Seleccionar todo el texto y pulsar sobre el <span style="color: blue;"><b>botón Tx</b></span>.</li><li>Pegando con <span style="color: blue;"><b>Ctrl+Shift+v</b></span>.</li><li>Pulsando en el botón <span style="color: blue;"><b>Fuente HTML</b></span> escribir y comprobar que el texto <b>NO</b> tiene etiquetas <b>HTML</b>.</ol></ul></ul>',
                  position: 'bottom'
                },
                {
                  element: '.form-item-body-und-0-value',
                  intro: '<ul><li>Descripción <span style="color: red;"><b>obligatoria</b></span>. Es tu <b>MEGA ULTRA SUPER</b> <span style="color: green;">POST</span> y debemos tener paciencia y atender bien a la funcionalidad de cada botón/componente y las <b>grandiosas plantillas</b>.</li></ul><ul><li>Tenemos botones para:</li><ul><li>Propiedades de Imagen</li><li>Imagen</li><li>Vídeo</li><li>Plantillas</li><li>Código fuente</li><li><span style="color: red;">INTRO ROJO</span></li></ul></ul>',
                  position: 'top'
                },
                {
                  element: '#edit-field-image',
                  intro: '<ul><li>Imagen a mostrar <b>sólo en los listados</b>.</li><li>Si no se mete ninguna <b>se añade 1 por defecto</b> asignada a la categoría padre.</li><li>En el caso de no querer, <b>se puede eliminar</b> y en los listados <b>no tendrías imagen.</b></li><li>Está bien <b>añadir una imagen</b>, pulsar en <b><span style="color: blue;">"Subir al servidor"</span></b> y añadir el texto <b><span style="color: green;">ALT :)</span></b></li></ul>',
                  position: 'top'
                },
                {
                  element: '#edit-field-tags',
                  intro: '<strong>TAGS</strong> añadir los tags en tu post: <span style="color: green;"><strong>sass,</strong></span> <span style="color: orange;"><strong>css,</strong></span> <span style="color: darkblue;"><strong>drupal,</strong></span>...',
                  position: 'top'
                },
                {
                  element: '#edit-field-category',
                  intro: '<li><span style="color: red;"><strong>Obligatorio</strong></span> <b>seleccionar ambas opciones</b>.</li><li>El contenido del <b>Post</b> debe estar relacionado con la <span style="color: blue;"><strong>categoría y subcategoría.</span></b></li></ul>',
                  position: 'top'
                },
                {
                  element: '.node-form-revision-information',
                  intro: '- <strong>Backup</strong> - Marcando esta opción <strong>podremos ir guardando diferentes revisiones del documento por si falla poder recuperarlo.',
                  position: 'top'
                },
                {
                  element: '#edit-actions',
                  intro: '<strong>Guardamos</strong> o <strong>Previsualizamos</strong> antes.',
                  position: 'top'
                }
              ]
            });

            intro.start();
      
          }
      
    }
  }
})(jQuery);

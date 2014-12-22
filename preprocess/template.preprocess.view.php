<?php 
/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

/**
 * Implements template_preprocess_views_view().
 */
// Creamos una función donde definimos la vista a la que le aplicaremos el plugin Masonry
function da_vinci_preprocess_views_view(&$vars) {
  // Definimos el nombre de la vista
  if ($vars['view']->name == 'masonry'){

      // Definimos la ruta a los plugins necesarios a cargar ¡SOLO! en esta vista.
      $theme_path = drupal_get_path('theme', 'da_vinci');

        // Plugin masonry: http://masonry.desandro.com/masonry.pkgd.min.js
        drupal_add_js($theme_path . '/js/plugins/masonry.js');

        // Plugin classie: https://github.com/desandro/classie/blob/master/classie.js
        drupal_add_js($theme_path . '/js/plugins/classie.js');

        // Plugin imageload: http://imagesloaded.desandro.com/imagesloaded.pkgd.min.js
        drupal_add_js($theme_path . '/js/plugins/imageload.js');

        // Plugin masonry-view.js: http://codepen.io/desandro/pen/IBJeq
        // Ver masonry-view.js
        drupal_add_js($theme_path . '/js/masonry-view.js');
  }
}

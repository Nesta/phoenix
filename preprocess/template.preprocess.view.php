<?php 
/**
 * Implements template_preprocess_views_view().
 */
function da_vinci_preprocess_views_view(&$vars) {
    if ($vars['view']->name == 'drupalera_blog'){
      $theme_path = drupal_get_path('theme', 'da_vinci');
      drupal_add_js($theme_path . '/js/plugins/masonry.js');
      drupal_add_js($theme_path . '/js/plugins/imageload.js');
      drupal_add_js($theme_path . '/js/plugins/classie.js');
      drupal_add_js($theme_path . '/js/masonry-blog.js');
    }
}


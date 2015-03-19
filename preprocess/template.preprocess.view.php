<?php
/**
 * @file
 * Preproccess functions for Views.
 */

/**
 * Implements da_vinci_preprocess_views_view().
 */
function da_vinci_preprocess_views_view(&$vars) {
  if ($vars['view']->name == 'masonry') {
    $theme_path = drupal_get_path('theme', 'da_vinci');
    $lib_dir = libraries_get_path('da-vinci-plugins');
    drupal_add_js($lib_dir . '/masonry.js');
    drupal_add_js($lib_dir . '/classie.js');
    drupal_add_js($lib_dir . '/imageload.js');
    drupal_add_js($theme_path . '/js/masonry-view.js');
  }
}

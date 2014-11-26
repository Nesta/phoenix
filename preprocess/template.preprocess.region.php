<?php
/**
 * Implements template_preprocess_block().
 */
function da_vinci_preprocess_region(&$vars) {
  if (drupal_is_front_page()) {
    $vars['theme_hook_suggestions'][] = 'region__home_content';
  }
}

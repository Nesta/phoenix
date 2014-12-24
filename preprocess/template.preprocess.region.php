<?php
/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

/**
 * Implement template_preprocess_block().
 */
function da_vinci_preprocess_region(&$vars) {
  /* EXAMPLE
  if (drupal_is_front_page()) {
    $vars['theme_hook_suggestions'][] = 'region__home_content';
  }
  */
}

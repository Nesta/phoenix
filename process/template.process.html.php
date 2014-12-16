<?php
/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

/**
 * Implements template_preprocess_node().
 */
function da_vinci_process_html(&$vars) {
  $vars['html_classes'] = implode(' ', $vars['html_classes']);
}

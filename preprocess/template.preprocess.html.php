<?php
/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */

/**
 * Implements template_preprocess_html().
 */
function da_vinci_preprocess_html(&$vars) {
  if (isset($vars['node'])) {
    // For full nodes.
    $vars['classes_array'][] = ($vars['node']) ? 'full-node' : '';
    // For forums.
    $vars['classes_array'][] = (($vars['node']->type == 'forum') || (arg(0) == 'forum')) ? 'forum' : '';
  }
  else {
    // Forums.
    $vars['classes_array'][] = (arg(0) == 'forum') ? 'forum' : '';
  }
  if (module_exists('panels') && function_exists('panels_get_current_page_display')) {
    $vars['classes_array'][] = (panels_get_current_page_display()) ? 'panels' : '';
  }
  if (theme_get_setting('styleguide')){
    $theme_path = drupal_get_path('theme', 'da_vinci');
    drupal_add_js($theme_path . '/js/plugins/jquery.actual.min.js');  
    drupal_add_js($theme_path . '/js/plugins/jquery.easyModal.js');  
    drupal_add_js($theme_path . '/js/modales.js');  
  }

  // Since menu is rendered in preprocess_page we need to detect it here to add body classes
  $has_main_menu = theme_get_setting('toggle_main_menu');
  $has_secondary_menu = theme_get_setting('toggle_secondary_menu');

  /* Add extra classes to body for more flexible theming */

  if ($has_main_menu or $has_secondary_menu) {
    $vars['classes_array'][] = 'with-navigation';
  }

  if ($has_secondary_menu) {
    $vars['classes_array'][] = 'with-subnav';
  }

  if (!empty($vars['page']['featured'])) {
    $vars['classes_array'][] = 'featured';
  }

  if ($vars['is_admin']) {
    $vars['classes_array'][] = 'admin';
  }

  if (!empty($vars['page']['header_top'])) {
    $vars['classes_array'][] = 'header_top';
  }

  // Add unique classes for each page and website section
  $path = drupal_get_path_alias($_GET['q']);
  $temp = explode('/', $path, 2);
  $section = array_shift($temp);
  $page_name = array_shift($temp);


  // add template suggestions
  $vars['theme_hook_suggestions'][] = "page__section__" . $section;
  $vars['theme_hook_suggestions'][] = "page__" . $page_name;

  if (arg(0) == 'node') {
    if (arg(1) == 'add') {
      if ($section == 'node') {
        array_pop($vars['classes_array']); // Remove 'section-node'
      }
      $vars['classes_array'][] = 'section-node-add'; // Add 'section-node-add'
    }
    elseif (is_numeric(arg(1)) && (arg(2) == 'edit' || arg(2) == 'delete')) {
      if ($section == 'node') {
        array_pop($vars['classes_array']); // Remove 'section-node'
      }
      $vars['classes_array'][] = 'section-node-' . arg(2); // Add 'section-node-edit' or 'section-node-delete'
    }
  }

  if (arg(0) == 'user' || arg(0) == 'users') {
    array_push($vars['classes_array'], 'page-user-view');
  }
  
}

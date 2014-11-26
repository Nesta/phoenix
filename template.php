<?php

/**
 * Implements hook_html_head_alter().
 * This will overwrite the default meta character type tag with HTML5 version.
 */
function da_vinci_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
  unset($head_elements['metatag_content-language_0']);
}

/**
 * Implements hook_css_alter().
 */
function da_vinci_css_alter(&$css) {
  $data = array();

  if (!$cache = cache_get('da_vinci::excludes:css')) {
    // Get the da_vinci css to exclude and set in cache:
    $css_skip = (array) theme_get_setting('css_exclude', 'da_vinci');
    foreach ($css_skip as $value) {
      $data[$value] = $value;
    }
    cache_set('da_vinci::excludes:css', $data, 'cache', CACHE_TEMPORARY);
  }
  else {
    $data = $cache->data;
  }

  // Unset our skipped CSS:
  $css = array_diff_key($css, $data);

}

/**
 * Implements hook_js_alter().
 */
function da_vinci_js_alter(&$js) {
  $data = array();

  if (!$cache = cache_get('da_vinci::excludes:js')) {
    // Get the da_vinci js to exclude and set in cache:
    $js_skip = (array) theme_get_setting('js_exclude', 'da_vinci');
    foreach ($js_skip as $value) {
      $data[$value] = $value;
    }
    cache_set('da_vinci::excludes:js', $data, 'cache', CACHE_TEMPORARY);
  }
  else {
    $data = $cache->data;
  }

  // Unset our skipped JS:
  $js = array_diff_key($js, $data);

}


/**
 * Insert themed breadcrumb page navigation at top of the node content.
 */
function da_vinci_breadcrumb($vars) {
  $breadcrumb = $vars['breadcrumb'];
  if (!empty($breadcrumb)) {
    // Use CSS to hide titile .element-invisible.
    //$output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
    // comment below line to hide current page to breadcrumb
    $breadcrumb[] = drupal_get_title();
    $output = '<nav class="breadcrumb">' . implode('<span class="breadcrumb_next"> » </span>', $breadcrumb) . '</nav>';
    return $output;
  }
}


/**
 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function da_vinci_menu_local_tasks(&$vars) {
  $output = '';

  if (!empty($vars['primary'])) {
    $vars['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $vars['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $vars['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($vars['primary']);
  }
  if (!empty($vars['secondary'])) {
    $vars['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    if (arg(0) == 'user') {
      $vars['secondary'][0]['#link']['title'] = t('My account');
      $vars['secondary']['#prefix'] .= '<ul class="nav nav-tabs">';
    }
    else {
      $vars['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
    }
    $vars['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($vars['secondary']);
  }
  return $output;
}

function da_vinci_menu_tree(&$variables) {
  return '<ul class="menu">' . $variables['tree'] . '</ul>';
}

function da_vinci_page_alter($page) {
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, user-scalable=no'
    )
  );
  drupal_add_html_head($viewport, 'viewport');
}

/**
 * Overwrite theme_links of locale module to display a custom title
 * instead of original title.
 */
function da_vinci_links__locale_block(&$vars) {
  foreach ($vars['links'] as $language => $langInfo) {
    $vars['links'][$language]['title'] = t('Welcome', array(), array('langcode' => $language));
  }

  $content = theme_links($vars);
  return $content;
}

//Preprocess 
require_once "preprocess/template.preprocess.html.php";
require_once "preprocess/template.preprocess.page.php";
require_once "preprocess/template.preprocess.node.php";
require_once "preprocess/template.preprocess.view.php";
require_once "preprocess/template.preprocess.block.php";
require_once "preprocess/template.preprocess.region.php";
require_once "preprocess/template.preprocess.user-profile.php";

//Process
require_once "process/template.process.html.php";

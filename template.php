<?php

/**
 * Implementation of hook_theme()
 */
function da_vinci_theme($vars) {
  $path = drupal_get_path('theme', 'da_vinci') . '/templates/contenido/';
  return array(

    // Seccion generica
    'section' => array(
      'path' => $path,
      'template' => 'section',
      'variables' => array('attributes' => array())
    ),
    // parallax"es"
    'parallax_home_es' => array(
      'path' => $path,
      'template' => 'parallax-home-es'
    ),
    'parallax_clients_es' => array(
      'path' => $path,
      'template' => 'parallax-clients-es'
    ),
    'parallax_services_es' => array(
      'path' => $path,
      'template' => 'parallax-services-es'
    ),
    'parallax_solutions_es' => array(
      'path' => $path,
      'template' => 'parallax-solutions-es'
    ),
    'parallax_comunidad_es' => array(
      'path' => $path,
      'template' => 'parallax-community-es'
    ),
    // contenidos"es"
    'main_menu_es' => array(
      'path' => $path,
      'template' => 'main-menu-es'
    ),
    'proyectos_destacados_es' => array(
      'path' => $path,
      'template' => 'proyectos-destacados-es'
    ),
    'slider_marcas_es' => array(
      'path' => $path,
      'template' => 'slider-marcas-es'
    ),
    'tabs_servicios_es' => array(
      'path' => $path,
      'template' => 'tabs-servicios-es'
    ),
    'negocios_destacados_es' => array(
      'path' => $path,
      'template' => 'negocios-destacados-es'
    ),
    'negocios_marcas_es' => array(
      'path' => $path,
      'template' => 'negocios-marcas-es'
    ),
    'comunidad_cifras_es' => array(
      'path' => $path,
      'template' => 'comunidad-cifras-es'
    ),
    'comunidad_marcas_es' => array(
      'path' => $path,
      'template' => 'comunidad-marcas-es'
    ),
    // parallax"en"
    'parallax_home_en' => array(
      'path' => $path,
      'template' => 'parallax-home-en'
    ),
    'parallax_clients_en' => array(
      'path' => $path,
      'template' => 'parallax-clients-en'
    ),
    'parallax_services_en' => array(
      'path' => $path,
      'template' => 'parallax-services-en'
    ),
    'parallax_solutions_en' => array(
      'path' => $path,
      'template' => 'parallax-solutions-en'
    ),
    'parallax_comunidad_en' => array(
      'path' => $path,
      'template' => 'parallax-community-en'
    ),
    // contenidos"en"
    'main_menu_en' => array(
      'path' => $path,
      'template' => 'main-menu-en'
    ),
    'proyectos_destacados_en' => array(
      'path' => $path,
      'template' => 'proyectos-destacados-en'
    ),
    'slider_marcas_en' => array(
      'path' => $path,
      'template' => 'slider-marcas-en'
    ),
    'tabs_servicios_en' => array(
      'path' => $path,
      'template' => 'tabs-servicios-en'
    ),
    'negocios_destacados_en' => array(
      'path' => $path,
      'template' => 'negocios-destacados-en'
    ),
    'negocios_marcas_en' => array(
      'path' => $path,
      'template' => 'negocios-marcas-en'
    ),
    'comunidad_cifras_en' => array(
      'path' => $path,
      'template' => 'comunidad-cifras-en'
    ),
    'comunidad_marcas_en' => array(
      'path' => $path,
      'template' => 'comunidad-marcas-en'
    ),
    'parallax_contactar_en' => array(
      'path' => $path,
      'template' => 'parallax-contactar-en'
    ),
    'contactar_form_en' => array(
      'path' => $path,
      'template' => 'contactar-form-en'
    ),
    'parallax_contactar_es' => array(
      'path' => $path,
      'template' => 'parallax-contactar-es'
    ),
    'contactar_form_es' => array(
      'path' => $path,
      'template' => 'contactar-form-es'
    ),
  );
}

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

  if (drupal_is_front_page()) {
    unset(
      $css['modules/shortcut/shortcut.css'],
      $css['modules/toolbar/toolbar.css'],
      $css['sites/all/modules/contrib/admin_menu/admin_menu.css'],
      $css['sites/all/modules/contrib/admin_menu/admin_menu.uid1.css'],
      $css['sites/all/modules/contrib/admin_menu/admin_menu_toolbar/admin_menu_toolbar.css']
    );
  }

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


  if (drupal_is_front_page()) {
    unset(
      $js['misc/jquery.cookie.js'],
      $js['misc/jquery.cookie.js'],
      $js['misc/jquery.js'],
      $js['misc/drupal.js'],
      $js['modules/toolbar/toolbar.js'],
      $js['sites/all/modules/contrib/admin_menu/admin_menu_toolbar/admin_menu_toolbar.js'],
      $js['sites/all/modules/contrib/admin_menu/admin_menu.js']
    );
  }

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

/**
 * Implements hoook_preprocess_HOOK().
 */
function da_vinci_preprocess_contactar_form_es(&$vars) {
  $vars['contact_form'] = _da_vinci_generate_contact_form(DEFAULT_CONTACT_FORM);
  $vars['messages'] = theme('status_messages');
}

function da_vinci_preprocess_contactar_form_en(&$vars) {
  $vars['contact_form'] = _da_vinci_generate_contact_form(DEFAULT_CONTACT_FORM);
  $vars['messages'] = theme('status_messages');
}

function da_vinci_preprocess_negocios_destacados_es(&$vars) {
  $vars['assembly_contact_form'] = _da_vinci_generate_contact_form(ASSEMBLY_CONTACT_FORM);
  $vars['drupal_base_contact_form'] = _da_vinci_generate_contact_form(DRUPAL_BASE_CONTACT_FORM);

  if (!isset($vars['messages'])) {
    $vars['messages'] = theme('status_messages');
  }
}

function da_vinci_preprocess_negocios_destacados_en(&$vars) {
  $vars['assembly_contact_form'] = _da_vinci_generate_contact_form(ASSEMBLY_CONTACT_FORM);
  $vars['drupal_base_contact_form'] = _da_vinci_generate_contact_form(DRUPAL_BASE_CONTACT_FORM);

  if (!isset($vars['messages'])) {
    $vars['messages'] = theme('status_messages');
  }
}

function da_vinci_preprocess_negocios_marcas_es(&$vars) {
  $vars['openpublic_contact_form'] = _da_vinci_generate_contact_form(OPENPUBLIC_CONTACT_FORM);
  $vars['openpublish_contact_form'] = _da_vinci_generate_contact_form(OPENPUBLISH_CONTACT_FORM);
  $vars['commerce_contact_form'] = _da_vinci_generate_contact_form(COMMERCE_CONTACT_FORM);

  if (!isset($vars['messages'])) {
    $vars['messages'] = theme('status_messages');
  }
}

function da_vinci_preprocess_negocios_marcas_en(&$vars) {
  $vars['openpublic_contact_form'] = _da_vinci_generate_contact_form(OPENPUBLIC_CONTACT_FORM);
  $vars['openpublish_contact_form'] = _da_vinci_generate_contact_form(OPENPUBLISH_CONTACT_FORM);
  $vars['commerce_contact_form'] = _da_vinci_generate_contact_form(COMMERCE_CONTACT_FORM);

  if (!isset($vars['messages'])) {
    $vars['messages'] = theme('status_messages');
  }
}

# # # # # # # # # # # # # #
# # AUXILIARY FUNCTIONS # #
# # # # # # # # # # # # # #

function _da_vinci_generate_contact_form($type = '') {
  $form_id = 'contact_site_form_' . $type;
  module_load_include('inc', 'contact', 'contact.pages');
  return  drupal_get_form($form_id, $type);
}

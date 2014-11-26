<?php
/**
 * Implements template_preprocess_html().
 */
function da_vinci_preprocess_html(&$vars) {

  /* Deactivated by the moment
  //Redirect english users to /en
  // First of all redirect all requests to / to /en for specific languages for anonymous users
  $lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
  $english_lang = "en|de|fr|zh|hr|cs|da|nl|fi|el|ga|it|ja|kn|ko|lb|no|pl|ru|sv";
  if (user_is_anonymous() &&
    drupal_is_front_page() &&
    $_SERVER['REQUEST_URI'] == '/' &&
    preg_match('/^(' . $english_lang . ').*$/i', $lang) &&
    strpos($_SERVER['HTTP_REFERER'], $_SERVER['HTTP_HOST']) === FALSE) {
    drupal_goto('http://' . $_SERVER['HTTP_HOST'] . '/en');
  }
  */

  // Send to js the required variables for ofuscator.js script.
  //@TODO : Do this with variable_get against fire code:
  $ofuscator_vars = array(
    'coded' => "3bg2@q54DWf5qaD5.s2X",
    'key' => "Zebm1xp3PABUDlWKJw097ajXYTfHtkFEMqzoNdcLR5CynQgvGi68hVr2u4sISO",
  );
  drupal_add_js(array('ofuscatorMail' => $ofuscator_vars), 'setting');

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

  if (!$vars['is_front']) {
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
  }
  else {
    // Manipulamos los estilos y js si estamos entrando en la home.
  }

  if (arg(0) == 'user' || arg(0) == 'users') {
    array_push($vars['classes_array'], 'page-user-view');
  }

  // en la home no se carga nada de JS. Solo los los especificos de la misma.
  if (drupal_is_front_page()) {
    $theme_path = drupal_get_path('theme', 'da_vinci');

    //Antes de resetear nos quedamos un un par de valores para no perderlos.
    $js = drupal_add_js();

    drupal_static_reset('drupal_add_js');

    // Recuperamos los settings.
    foreach ($js['settings']['data'] as $js_setting) {
        drupal_add_js($js_setting, array('type' => 'setting', 'group' => JS_THEME, 'weight' => -10));
    }

    foreach ($js as $j) {
      if ($j['type'] == 'inline' && preg_match('/analytics/i', $j['data'])) {
        drupal_add_js($j['data'], array('type' => 'inline', 'group' => JS_THEME, 'weight' => 3));
      }
    }

    drupal_add_js($theme_path . '/js/plugins/jquery-1.11.1.min.js', array('group' => JS_LIBRARY-20));
    drupal_add_js('/misc/drupal.js', array('group' => JS_LIBRARY-19, 'cache' => FALSE));
    drupal_add_js('/misc/jquery.once.js?v=1.2', array('group' => JS_LIBRARY-18, 'cache' => FALSE));
    drupal_add_js($theme_path . '/js/plugins/requestAnimationFrame.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.requestAnimationFrame.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.support.cssproperty.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.actual.min.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.imageScroll.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.easyModal.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/magicLine/magic-line.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/carousel.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery.history.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/easyResponsiveTabs.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/plugins/jquery-migrate-1.2.1.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/home.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/css_browser.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/scrollspy.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/modales.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/obfuscator.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/form-validations.js', array('group' => JS_LIBRARY));
    drupal_add_js($theme_path . '/js/druplicon-particles.js', array('group' => JS_LIBRARY));

    // Add analytics only if it should be present
    global $user;
    if (module_exists('googleanalytics') && _googleanalytics_visibility_pages() && _googleanalytics_visibility_user($user)) {
      drupal_add_js(drupal_get_path('module', 'googleanalytics') . '/googleanalytics.js', array('group' => JS_THEME, 'weight' => 2));
      if (module_exists('drupalera_google_analytics_et')) {
        drupal_add_js(drupal_get_path('module', 'google_analytics_et') . '/js/google_analytics_et.js', array('group' => JS_THEME, 'weight' => 4));
      }
    }

    // en la home no se carga nada de CSS. Solo los los especificos de la misma.
    drupal_static_reset('drupal_add_css');
    drupal_add_css($theme_path . '/css/home/home.css');
  }
  
  $ofuscator_vars = array(
    'key' => 'Zebm1xp3PABUDlWKJw097ajXYTfHtkFEMqzoNdcLR5CynQgvGi68hVr2u4sISO',
    'coded' => '3bg2@q54DWf5qaD5.s2X',
  );

  // Add the ofuscator vars to js:
  drupal_add_js(array('ofuscatorMail' => $ofuscator_vars), 'setting');

    if (arg(0) == 'node' && arg(1) == 'add' && arg(2) == 'article'){
      $theme_path = drupal_get_path('theme', 'da_vinci');
      drupal_add_js($theme_path . '/js/plugins/intro.js');
      drupal_add_js($theme_path . '/js/demo.js');
      drupal_add_css($theme_path . '/css/blog/introjs.css');
    }

    if (arg(0) == 'node' && arg(1) == '24'){
      $theme_path = drupal_get_path('theme', 'da_vinci');
      drupal_add_js($theme_path . '/js/cheats/iioEngine.min.js');
      drupal_add_js($theme_path . '/js/cheats/bomberman.js');
    }
}

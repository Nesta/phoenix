<?php

/*function autoDetectLanguage(){
  $languages = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
  if ($languages[0] == 'es' || $languages[0] == 'es-ES'){
    $lang = 'es'; 
  }else{ 
    $lang = 'en';
  }
  return $lang;
}
 */
/**
 * Implements template_preprocess_node().
 */

function da_vinci_preprocess_node(&$vars) {

  if ($vars['view_mode'] == 'full' && node_is_page($vars['node'])) {
    $vars['classes_array'][] = 'node-full';
  }

  $vars['date'] = t('!datetime', array('!datetime' => date('j F Y', $vars['created'])));

  // Proporcionamos template suggestions para los nodos por view mode.
  $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__' . $vars['view_mode'];
  $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__' . $vars['view_mode'];

}

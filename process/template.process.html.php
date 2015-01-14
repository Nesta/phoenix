<?php
/**
 * @file
 * Proccess functions for HTML.
 */
/**
 * Implements template_process_html().
 */
function da_vinci_process_html(&$vars) {
  if (theme_get_setting('debug') && user_access('administer content')){
    $vars['html_classes'] = implode(' ', $vars['html_classes']);
  }else{
    $vars['html_classes'] = '';
  }
}

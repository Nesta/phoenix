<?php
/**
 *  Implements hook_preprocess_comment().
 */
function da_vinci_preprocess_comment(&$vars) {
  // Overridden comment created data with time ago:
  $vars['created'] = format_interval(time() - $vars['comment']->created, 1);
}


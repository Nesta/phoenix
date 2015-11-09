<?php
$plugin = array(
  'title' => t('DV - left col'),
  'category' => t('Da Vinci - Layouts'),
  'icon' => 'dv-left-col.png',
  'theme' => 'dv-left-col',
  'admin theme' => 'admin-dv-left-col',
  'theme arguments' => array('id', 'content'),
  'regions' => array(
    'content' => t('Content'),
    'left' => t('Left side'),
    'footer' => t('Footer'),
  ),
);
array(
  '#attached' => array(
    'css' => array(
      drupal_get_path('theme', 'da_vinci') . '/css/panel.css'=> array('group' => CSS_THEME, 'type' => 'file'),
    ),
  ),
);

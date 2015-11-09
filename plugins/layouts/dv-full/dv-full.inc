<?php
$plugin = array(
  'title' => t('DV - Full'),
  'category' => t('Da Vinci - Layouts'),
  'icon' => 'dv-full.png',
  'theme' => 'dv-full',
  'admin theme' => 'admin-dv-full',
  'theme arguments' => array('id', 'content'),
  'regions' => array(
    'content' => t('Content'),
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



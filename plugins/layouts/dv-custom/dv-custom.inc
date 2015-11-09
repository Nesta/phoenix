<?php
$plugin = array(
  'title' => t('DV - Custom'),
  'category' => t('Da Vinci - Layouts'),
  'icon' => 'dv-custom.png',
  'theme' => 'dv-custom',
  'admin theme' => 'admin-dv-custom',
  'theme arguments' => array('id', 'content'),
  'regions' => array(
    'logo' => t('Logo'),
    'description' => t('Description'),
    'map' => t('Map'),
    'data' => t('Data'),
    'tags' => t('Tags'),
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

<?php

/**
 * @file
 * Theme setting callbacks for the da vinci theme.
 */

/**
 * Implements hook_form_FORM_ID_alter().
 */
function da_vinci_form_system_theme_settings_alter(&$form, &$form_state) {
  $form['da_vinci_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Da Vinci Settings'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE,
  ];

  $form['da_vinci_settings']['grid'] = [
    '#type' => 'checkbox',
    '#title' => t('Show Grid Debug Settings'),
    '#default_value' => theme_get_setting('grid', 'da_vinci'),
    '#description'   => t("Check this option to show Grid Debug Button in page. Uncheck to hide. This will only be displayed if admin is logged."),
  ];

  $form['da_vinci_settings']['border-region'] = [
    '#type' => 'checkbox',
    '#title' => t('Show Region Debug Settings'),
    '#default_value' => theme_get_setting('border-region', 'da_vinci'),
    '#description'   => t("Check this option to show Region Debug Border in page. Uncheck to hide. This will only be displayed if admin is logged."),
  ];

  $form['da_vinci_settings']['responsive-project'] = [
      '#type' => 'checkbox',
      '#title' => t('Check me if you want Responsive Project.'),
      '#default_value' => theme_get_setting('responsive-project', 'da_vinci'),
      '#description'   => t("Check me if you want Responsive Project."),
  ];
}

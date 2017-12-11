<?php

/**
 * @file
 * Contains functions only needed for drush integration.
 */

/**
 * Implements hook_drush_command().
 */
function da_vinci_drush_command() {
  $items = [];
  $items['da_vinci'] = [
    'description' => 'Create a Da Vinci subtheme.',
    'aliases' => ['subtheme'],
    'arguments' => [
      'name'         => 'Your theme name.',
      'machine_name' => '[optional] [a-z, 0-9] A machine-readable name for your theme.',
    ],
    'options' => [
      'description'  => 'Your theme description.',
      'machine-name' => '[a-z, 0-9] A machine-readable name for your theme.',
      'set-value-rem' => 'Replace vw_calc with rem_calc.',
    ],
    'examples' => [
      'drush subtheme "Theme name"' => 'Create a sub-theme with default options.',
      'drush subtheme "Theme name" "machine_theme_name" --description="Description for my theme" --set-value-rem' => 'Create a sub-theme with machine name, description and rem.',
    ],
  ];
  return $items;
}

/**
 * Create Da Vinci subtheme.
 */
function drush_da_vinci($name = NULL, $machine_name = NULL) {

  /*
   * Determine all the command line options given.
   */

  // Determine the theme name and machine name.
  if (!isset($name)) {
    // If only given one argument, it is the $name.
    if (isset($machine_name)) {
      $name = $machine_name;
      unset($machine_name);
    }
    else {
      $name = drush_get_option('name');
    }

    if (!isset($machine_name)) {
      $machine_name = drush_get_option('machine-name');
    }
  }

  if (!$name) {
    if ($machine_name) {
      $name = $machine_name;
    }
    else {
      // Allow localize.drupal.org to pick up the string to translate.
      if (FALSE) {
        t('The name of the theme was not specified.');
      }
      return drush_set_error('DA_VINCI_SUBTHEME_NAME_NOT_SPECIFIED', dt('The name of the theme was not specified.'));
    }
  }

  if (!$machine_name) {
    $machine_name = $name;
  }

  // Clean up the machine name.
  $machine_name = str_replace(' ', '_', strtolower($machine_name));

  /*
   * First: Remove characters not valid in function names.
   * Second: Functions must begin with an alpha character.
   */
  $search = [
    '/[^a-z0-9_]/',
    '/^[^a-z]+/',
  ];
  $machine_name = preg_replace($search, '', $machine_name);

  // Determine the path to the new sub-theme.
  $sub_theme_path = 'themes/custom';
  if ($path = drush_get_option('path')) {
    $sub_theme_path = drush_trim_path($path);
  }
  $sub_theme_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . $sub_theme_path . '/' . $machine_name);

  /*
   * Error check directories, then copy STARTERKIT.
   */

  // Ensure the destination directory (not the sub-theme folder) exists.
  if (!is_dir(dirname($sub_theme_path))) {
    // Allow localize.drupal.org to pick up the string to translate.
    if (FALSE) {
      t('The directory "!directory" was not found.', ['!directory' => dirname($sub_theme_path)]);
    }
    return drush_set_error('DA_VINCI_DESTINATION_NOT_FOUND', dt('The directory "!directory" was not found.', ['!directory' => dirname($sub_theme_path)]));
  }

  // Ensure the STARTERKIT directory exists.
  $starterkit_path = drush_normalize_path(drush_get_context('DRUSH_DRUPAL_ROOT') . '/' . drupal_get_path('theme', 'da_vinci') . '/STARTERKIT');
  if (!is_dir($starterkit_path)) {
    // Allow localize.drupal.org to pick up the string to translate.
    if (FALSE) {
      t('The STARTERKIT directory was not found in "!directory"', ['!directory' => dirname($starterkit_path)]);
    }
    return drush_set_error('DA_VINCI_STARTERKIT_NOT_FOUND', dt('The STARTERKIT directory was not found in "!directory"', ['!directory' => dirname($starterkit_path)]));
  }

  drush_print(dt('Copying files from starter kit…'));
  // Allow localize.drupal.org to pick up the string to translate.
  if (FALSE) {
    t('Copying files from starter kit…');
  }

  // Make a fresh copy of the original starter kit.
  if (!drush_op('drush_copy_dir', $starterkit_path, $sub_theme_path)) {
    // drush_copy_dir errors are fatal errors for our subtheme drush command.
    return FALSE;
  }

  /*
   * Alter the contents of the .info.yml file.
   */

  drush_print(dt('Updating .info.yml file…'));
  // Allow localize.drupal.org to pick up the string to translate.
  if (FALSE) {
    t('Updating .info.yml file…');
  }

  /*
   * Replace STARTERKIT in file names and contents.
   */

  drush_print(dt('Replacing "mytheme" in all files…'));
  // Allow localize.drupal.org to pick up the string to translate.
  if (FALSE) {
    t('Replacing "mytheme" in all files…');
  }

  // Iterate through the sub-theme directory finding files to filter.
  $directoryIterator = new \RecursiveDirectoryIterator($sub_theme_path);
  $starterKitFilter = new \RecursiveCallbackFilterIterator($directoryIterator, function ($current, $key, $iterator) {
    // Skip hidden files and directories.
    if ($current->getFilename()[0] === '.') {
      return FALSE;
    }
    // Skip node_modules and the asset-builds folder.
    elseif ($current->getFilename() === 'node_modules' || $current->getFilename() === 'asset-builds') {
      return FALSE;
    }
    // Recursively go through all folders.
    if ($current->isDir()) {
      return TRUE;
    }
    else {
      // Only return Twig templates or files with "mytheme" in their name.
      return strpos($current->getFilename(), '.twig') !== FALSE || strpos($current->getFilename(), 'mytheme') !== FALSE;
    }
  });
  $iterator = new \RecursiveIteratorIterator($starterKitFilter);
  $sub_theme_files = [];
  foreach ($iterator as $path => $info) {
    $sub_theme_files[$info->getFilename()] = $path;
  }

  // Add more to the list of files to filter.
  $sub_theme_files['gulpfile.js'] = $sub_theme_path . '/gulpfile.js';

  foreach ($sub_theme_files as $filename) {
    /*
     * Replace all occurrences of 'STARTERKIT' and 'mytheme' with the machine name
     * of our sub theme.
     */
    drush_op('da_vinci_file_replace', $filename, ['STARTERKIT' => $machine_name]);
    drush_op('da_vinci_file_replace', $filename, ['mytheme' => $machine_name]);

    // Rename all files with mytheme in their name.
    if (strpos($filename, 'mytheme') !== FALSE) {
      drush_op('rename', $filename, str_replace('mytheme', $machine_name, $filename));
    }
  }

  $info_strings = [
    ': Da Vinci custom subtheme.' => ': Da Vinci custom subtheme, ' . $name . '.',
    'name: My Theme' => 'name: ' . $name,
    '# core: 8.x' => 'core: 8.x',
    "core: '8.x'\n" => '',
    "project: 'da_vinci'\n" => '',
  ];

  if ($description = drush_get_option('description')) {
    $info_strings['Da Vinci custom subtheme.'] = $description;
  }

  $info_regexs = [
    ['pattern' => '/\# Information added by Drupal\.org packaging script on [\d-]+\n/', 'replacement' => ''],
    ['pattern' => "/version: '[^']+'\n/", 'replacement' => ''],
  ];

  drush_op('da_vinci_file_replace', $sub_theme_path . '/' . $name . '.info.yml', $info_strings, $info_regexs);

  $info_strings_color = [
    "  'preview_library' => 'mytheme/color.preview'," => "  'preview_library' => '" . $name . "/color.preview',",
  ];

  $info_regexs_color = [];

  drush_op('da_vinci_file_replace', $sub_theme_path . '/color/color.inc', $info_strings_color, $info_regexs_color);

  shell_exec("grep -lr -e 'da-vinci' " . $sub_theme_path . "/src/sass/* | xargs sed -i 's/da-vinci/" . $machine_name . "/g'");
  if (drush_get_option('set-value-rem')) {
    shell_exec("grep -lr -e 'vw_calc' " . $sub_theme_path . "/src/sass/* | xargs sed -i 's/vw_calc/rem_calc/g'");
  }

  /*
   * Notify user of the newly created theme.
   */

  drush_print(dt('Starter kit for "!name" created in: !path', [
    '!name' => $name,
    '!path' => $sub_theme_path,
  ]));
  // Allow localize.drupal.org to pick up the string to translate.
  if (FALSE) {
    t('Starter kit for "!name" created in: !path', ['!name' => $name, '!path' => $sub_theme_path]);
  }
}

/**
 * Replace strings in a file.
 */
function da_vinci_file_replace($file_path, $strings, $regexs = []) {
  $file_path = drush_normalize_path($file_path);
  $file_contents = file_get_contents($file_path);

  if ($file_contents !== FALSE) {
    // Find text with strings.
    $find = array_keys($strings);
    $replace = $strings;
    $file_contents = str_replace($find, $replace, $file_contents);

    // Find text with regex.
    foreach ($regexs as $regex) {
      $file_contents = preg_replace($regex['pattern'], $regex['replacement'], $file_contents);
    }

    // Write to file.
    file_put_contents($file_path, $file_contents);
  }
}

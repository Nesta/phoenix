<?php

/**
 * Implementation of hook_drush_command().
 */
function da_vinci_drush_command() {
  $items = array();
  $items['da_vinci'] = array(
    'description' => 'Create a Da Vinci subtheme.',
    'aliases' => array('dv'),
    'arguments' => array(
      'name'         => 'Your theme name.',
      'machine_name' => '[optional] [a-z, 0-9] A machine-readable name for your theme.',
    ),
    'options' => array(
      'description'  => 'Your theme description.',
      'machine-name' => '[a-z, 0-9] A machine-readable name for your theme.',
    ),
    'examples' => array(
      'drush dv "Theme name"' => 'Create a sub-theme with default options.',
      'drush dv "Theme name" "machine_theme_name" --description="Description for my theme"' => 'Create a sub-theme with machine name and description.',
    ),
  );
  return $items;
}

/**
 * Create Da Vinci subtheme.
 */
function drush_da_vinci ($name = NULL, $machine_name = NULL, $description = NULL) {

// Make sure if user write a name.
  if (empty($name)) {
    drush_set_error(dt("Please provide a name for your subtheme.\nExample:\tdrush dv [name] [machine_name !OPTIONAL] [description !OPTIONAL]\n"));
  return;
  }

	// Provide a machine name.
	$machine_name = !empty($machine_name) ? preg_replace('/[^a-z0-9_-]+/', '', strtolower($machine_name)) : preg_replace('/[^a-z0-9_-]+/', '', strtolower($name));
	$machine_name = str_replace('-', '_', $machine_name);

	// Set path for subtheme.
	$da_vinci_path = drush_locate_root() . '/' . drupal_get_path('theme', 'da_vinci');
		$subtheme_path = explode('/', $da_vinci_path);
		array_pop($subtheme_path);
		$subtheme_path = implode('/', $subtheme_path) . '/' . $machine_name;

	// Make a fresh copy of STARTERKIT.
		drush_op('da_vinci_starter', $da_vinci_path . '/STARTERKIT', $subtheme_path);

	// Rename files with the machine name.
	drush_op('rename', "$subtheme_path/mytheme.info.yml", "$subtheme_path/$machine_name.info.yml");
	drush_op('rename', "$subtheme_path/mytheme.libraries.yml", "$subtheme_path/$machine_name.libraries.yml");
	drush_op('rename', "$subtheme_path/mytheme.sass-lint.yml", "$subtheme_path/$machine_name.sass-lint.yml");
	drush_op('rename', "$subtheme_path/mytheme.theme", "$subtheme_path/$machine_name.theme");
  drush_op('rename', "$subtheme_path/js/mytheme.js", "$subtheme_path/js/$machine_name.js");
  drush_op('rename', "$subtheme_path/css/mytheme.css", "$subtheme_path/css/$machine_name.css");
  drush_op('rename', "$subtheme_path/src/sass/mytheme.sass", "$subtheme_path/src/sass/$machine_name.sass");

  drush_op('da_vinci_file_str_replace', "$subtheme_path/**/*", 'mytheme', $machine_name);


	// Change name and description of the theme.
	drush_op('da_vinci_file_str_replace', "$subtheme_path/$machine_name.info.yml", 'My Theme', "$name");
		if (!empty($description))
			drush_op('da_vinci_file_str_replace', "$subtheme_path/$machine_name.info.yml", 'Da Vinci custom subtheme.', $description);

// Change mytheme for machine name.
	drush_op('da_vinci_file_str_replace', "$subtheme_path/$machine_name.info.yml", 'mytheme', "$machine_name");
	drush_op('da_vinci_file_str_replace', "$subtheme_path/$machine_name.libraries.yml", 'mytheme', "$machine_name");







	// Notify that the new theme was created.
	drush_print(dt("!name subtheme was created in !path. \n", array(
			'!name' => $name,
			'!path' => $subtheme_path,
		)
	));


}

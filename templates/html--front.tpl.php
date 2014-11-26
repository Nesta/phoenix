<!DOCTYPE html>
<html lang="<?php print $language->language; ?>"
      dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
</head>

<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
<?php print $page; ?>
<?php print $scripts; ?>
</body>
</html>

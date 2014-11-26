<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head>
<?php print $head; ?>
<!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess-->
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <canvas id="bomberman" width="360px" height="360px" />
    <script type="text/javascript">
         iio.start(Bomberman,'bomberman');
</script>
</body>
</html>

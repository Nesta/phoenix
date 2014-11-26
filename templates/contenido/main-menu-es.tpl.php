<?php 
  global $base_url;
  $url_comp = explode('/', request_uri());
  $site_path = $base_url . base_path(); 
?>
<div class="main-menu-wrapper">

  <button type="button" class="js-menu-trigger sliding-menu-button">
  <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/menu.png" alt="Menu Icon">
  </button>

  <nav class="js-menu sliding-menu-content main-menu-wrapper-inner clearfix">
    <ul class="main-menu">
      <li>
    <a class="step-jumper" id="step-init" href="#inicio" title="Inicio"><img class="logo pull-left" src="<?php print base_path() . path_to_theme(); ?>/images/home/logo-drupalera-menu.png" alt="Logo Drupalera" />
</a></li>
      <li><a class="menu-clientes" href="#clientes" title="Clientes">Clientes</a></li>
      <li><a class="menu-servicios" href="#servicios" title="Servicios">Servicios</a></li>
      <li><a class="menu-soluciones" href="#soluciones" title="Soluciones">Soluciones</a></li>
      <li><a class="menu-comunidad" href="#comunidad" title="Comunidad">Comunidad</a></li>
      <li><a class="menu-contacto" href="#contacto" title="Contacto">Contacto</a></li>
      <li><a class="menu-blog item-blog" href="<?php print $site_path; if ($url_comp['1']): print filter_xss($url_comp['1']) . '/'; endif; ?>drupal" title="Blog"><span class="hidden">Blog</span><i class="sprite-logo_blog_menu"></i></a></li>
    </ul>
    <div class="language pull-right">
      <a href="/en" title="Language: English">ENGLISH</a>
    </div>
  </nav>

  <div class="js-menu-screen menu-screen"></div>

</div>

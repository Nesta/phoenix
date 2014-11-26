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
    <a class="step-jumper" id="step-init" href="#home" title="Home"><img class="logo pull-left" src="<?php print base_path() . path_to_theme(); ?>/images/home/logo-drupalera-menu.png" alt="Drupalera Icon"/>
</a></li>
      <li><a class="menu-customers" href="#customers" title="Customers">Customers</a></li>
      <li><a class="menu-services" href="#services" title="Services">Services</a></li>
      <li><a class="menu-solutions" href="#solutions" title="Solutions">Solutions</a></li>
      <li><a class="menu-community" href="#community" title="Community">Community</a></li>
      <li><a class="menu-contact" href="#contact" title="Contact">Contact</a></li>
    </ul>
    <div class="language pull-right">
      <a href="/" title="Idioma: Español">ESPAÑOL</a>
    </div>
  </nav>

  <div class="js-menu-screen menu-screen"></div>

</div>

<section id="home" class="img-holder home-parallax" data-image="<?php print base_path() . path_to_theme(); ?>/images/home/parallax/home_v3.jpg" data-width="1300" data-height="813">
  <div class="home-content parallax-content">
    <div class="container">
      <img src="<?php print base_path() . path_to_theme(); ?>/images/home/parallax/home_v3.jpg" class="image-preload" alt="Home"/>
      <div class="align-middle">
        <div>
          <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_drupalera_home_v2.png" class="logo-home" alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
          <div class="home-title">
            <h1>Big in <strong>Drupal</strong></h1>
            <a href="#customers" class="step-jumper hide-modern" id="step-home" title="fix-dl">La Drupalera es una empresa experta en Drupal. Ofrecemos servicios de consultoría y desarrollo web para grandes proyectos y clientes. Ven a conocernos.<i class="sprite-ico-bajar"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<script>
  // Inmediatamente después de tener el div,
  // generamos su tamaño patra evitar el efecto de salto.
  // coverRatio es el mismo que tiene la sección apuntado en el atributo "data-cover-ratio"
  var coverRatio = 1;
  var el = document.getElementById("home");
  el.style.width = "100%";
  el.style.height = (window.innerHeight * coverRatio) + "px";
</script>
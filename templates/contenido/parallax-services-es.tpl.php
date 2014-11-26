<section id="section-services" class="img-holder services-parallax" data-image="<?php print base_path() . path_to_theme(); ?>/images/home/parallax/servicios_v3.jpg" data-width="1300" data-height="813" data-cover-ratio="0.7">
  <?php if (isset($content)): ?>
    <div class="parallax-content">
      <div class="container">
        <?php print $content; ?>
      </div>
    </div>
  <?php endif; ?>
</section>
<script>
  // Inmediatamente después de tener el div,
  // generamos su tamaño patra evitar el efecto de salto.
  // coverRatio es el mismo que tiene la sección apuntado en el atributo "data-cover-ratio"
  var coverRatio = .7;
  var el = document.getElementById("section-services");
  el.style.width = "100%";
  el.style.height = (window.innerHeight * coverRatio) + "px";
</script>
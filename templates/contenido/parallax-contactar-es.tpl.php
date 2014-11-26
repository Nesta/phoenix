<section id="contacto" class="img-holder contactar-parallax" data-image="<?php print base_path() . path_to_theme(); ?>/images/home/parallax/contacto.png" data-width="1300" data-height="813">
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
  var coverRatio = 1;
  var el = document.getElementById("contacto");
  el.style.width = "100%";
  el.style.height = (window.innerHeight * coverRatio) + "px";
</script>
<?php print ($messages); ?>
<div class="solutions container clearfix">

  <div class="solution emergya-drupal-base">
    <div class="content">
      <h3>Emergya Drupal Base</h3>
      <p>Nuestra versión propia de la distribución base de Drupal con esteroides</p>
      <p>Perfecta para facilitar y agilizar el comienzo de los desarrollos de <span>grandes sitios web</span> con un <strong>alto nivel de personalización funcional y visual.</strong></p>
      <a class="more base-viewmodal" href="#">+</a>
    </div>
    <div class="img">
      <img
        src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_base_soluciones.png"
        alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
    </div>

    <div class="modal-content">
      <a class="close" href="#">Close</a>
        <div class="oriented-solutions">
          <span>Orientada principalmente a</span>
          <ul>
            <li>Empresas de diseño y desarrollo web</li>
            <li>Desarrolladores Freelance</li>
            <li>Grandes empresas con departamento de desarrollo interno</li>
          </ul>
          <div class="modal-img">
            <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_base_soluciones.png"
            alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
          </div>
        </div>

        <div class="features-solutions">
          <span>Características</span>
          <ul>
            <li>Idioma español por defecto</li>
            <li>Soporte multi-idioma</li>
            <li>Arquitectura de información configurable por interfaz</li>
            <li>Gestión avanzada de contenidos</li>
            <li>Funcionalidades Front-end</li>
            <li>Preconfiguraciones para acelerar el proceso de creación de un website</li>
            <li>Optimizaciones de rendimiento</li>
            <li>Theme responsive en HTML5 y CSS3 fácilmente personalizable</li>
            <li>Mejoras en la seguridad</li>
            <li>Herramientas de optimización SEO</li>
            <li>Integración avanzada con Google Analytics</li>
            <li>Herramientas de desarrollo</li>
          </ul>
        </div>
        <div class="show-form">
          <a class="base-getinfo" href="#">Me interesa, quiero más información</a>
          <?php print render($drupal_base_contact_form); ?>
        </div>
    </div>
  </div>

  <div class="solution drupal-assembly">
    <div class="content">
      <h3>Drupal Assembly</h3>
        <p>Distribución para la  creación de una <strong>Intranet social enfocada al trabajo distribuido y en movilidad.</strong></p>
        <p>Genera un espacio social de trabajo colaborativo con las mejores prestaciones en la experiencia de uso y gestión de <span>reuniones virtuales.</span></p>
      <a class="more assembly-viewmodal" href="#">+</a>
    </div>
    <div class="img">
      <img
        src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_enssembly_soluciones.png"
        alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
    </div>

    <div class="modal-content">
      <a class="close" href="#">Close</a>

      <div class="oriented-solutions">
        <span>Orientada principalmente a</span>
        <ul>
          <li>Grandes corporaciones distribuidas</li>
          <li>Asociaciones, Fundaciones, ONGs</li>
          <li>Empresas de economía Social</li>
          <li>Cualquier colectivo Distribuido</li>
        </ul>
        <div class="modal-img">
          <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_enssembly_soluciones.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
        </div>
      </div>
      <div class="features-solutions">
        <span>Características</span>
        <ul>
          <li>Gestión de videoconferencia optimizada gracias a su integración completa con Hangout (Google).</li>
          <li>Gestión eficiente y colaborativa de contenidos y documentos “on the go” (búsqueda, catalogación, enriquecimiento).</li>
          <li>Integrado con distintos paquetes software de firma electrónica de documentos.</li>
          <li>Adaptada a todos los tipos de dispositivo: móvil, tablet, PC</li>
        </ul>
      </div>
      <div class="show-form">
        <a  class="assembly-getinfo" href="#">Me interesa, quiero más información</a>
        <?php print render($assembly_contact_form); ?>
      </div>
    </div>

  </div>

</div>

<?php print ($messages); ?>
<div class="marcas-container">
  <div class="marcas justified-list container">
   <div>
     <div class="title">
       <p>Y además<br/>para ...</p>
     </div>
   </div>

    <div class="open-public">
      <div class="marca clearfix">
        <h3>Entidades públicas</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublic_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
        <a class="more openpublic-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublic_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
          <p>Distribución Drupal mantenida por Phase2 Technology, OpenPublic está diseñada para ser el <b>gestor de contenidos perfecto para cualquier entidad pública</b>.</p>
          <p>Es la base perfecta para construir un sitio web enfocado a dar <b>soporte a la ciudadanía</b>, publicar <b>datos abiertos</b>, ofrecer información y recursos...
            Por otro lado cuenta con una <b>interfaz de gestión accesible e intuitiva</b>, pensada para que personas no técnicas sean capaces de gestionar fácilmente tanto usuarios y permisos
            como contenidos, e incluso la propia arquitectura del sitio web.</p>
          <div class="show-form">
            <a class="openpublic-getinfo" href="#">Me interesa, quiero más información</a>
            <?php print render($openpublic_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="open-publish">
      <div class="marca clearfix">
        <h3>Sector media</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublish_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
        <a class="more openpublish-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublish_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
          <p>OpenPublish es una distribución Drupal mantenida por Phase2, diseñada para cubrir las necesidades de <b>medios de comunicación online</b> como televisiones, periódicos, revistas, blogs especializados, etc…</p>
          <p>OpenPublish permite desarrollar de manera sencilla un site <b>multiplataforma</b> enfocado a la gestión de workflows de edición y publicación de <b>contenidos multimedia</b>.
            Tiene integración con Opencalais (web semántica), de Reuters, y cuenta módulos que facilitan el posicionamiento y viralización de los contenidos.</p>
          <p>Algunas de las empresas de medios más influyentes del mundo como Associated Press, Thomson Reuters, Washington Examiner... usan OpenPublish como base de sus sitios web.</p>
          <div class="show-form">
            <a class="openpublish-getinfo" href="#">Me interesa, quiero más información</a>
            <?php print render($openpublish_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="commerce-kickstart">
      <div class="marca clearfix">
        <h3>eCommerce</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo-commerce_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
        <a class="more commerce-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo-commerce_soluciones_v2.png"
          alt="Empresa consultoría desarrollo diseño web drupal ladrupalera"/>
          <p>Distribución mantenida por Commerce Guys, ofrece <b>lo mejor y más completo de una tienda online</b> junto con la capacidad de tener gestión de contenidos y comunidad online.</p>
          <p>Su principal <b>ventaja</b> frente a otras tecnologías de eCommerce como Magento es que Drupal Commerce permitiría tener de manera no muy compleja una tienda online totalmente personalizada,
            junto con un blog y foros especializados, todo integrado en el mismo sitio web. Con Drupal Commerce es muy sencillo implementar <b>nuevas formas de vender online, más
            sociales y participativas</b>.</p>
          <div class="show-form">
            <a class="commerce-getinfo" href="#">Me interesa, quiero más información</a>
            <?php print render($commerce_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a href="#comunidad" class="step-jumper step-solutions hide-modern" title="fix-dl">Ir a Comunidad<i class="sprite-ico-bajar"></i></a>

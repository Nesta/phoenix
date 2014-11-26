<?php print ($messages); ?>
<div class="marcas-container">
  <div class="marcas justified-list container">
   <div>
     <div class="title">
       <p>And also...</p>
     </div>
   </div>

    <div class="open-public">
      <div class="marca clearfix">
        <h3>For the public sector</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublic_soluciones_v2.png"
          alt="Company ladrupalera drupal web development consulting design"/>
        <a class="more openpublic-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublic_soluciones_v2.png"
          alt="Company ladrupalera drupal web development consulting design"/>
          <p>Distribution maintained by Phase2 Technology, it is designed to be the perfect content manager and publishing platform for the government and the public sector.</p>
          <div class="show-form">
            <a class="openpublic-getinfo" href="#">Get more information</a>
            <?php print render($openpublic_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="open-publish">
      <div class="marca clearfix">
        <h3>For media</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublish_soluciones_v2.png"
          alt="Company ladrupalera drupal web development consulting design"/>
        <a class="more openpublish-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo_openpublish_soluciones_v2.png"
          alt="Company ladrupalera drupal web development consulting design"/>
          <p>Openpublish is designed to meet the needs of online media companies: television, newspapers, magazines, specialized blogs, etc...</p>
          <div class="show-form">
            <a  class="openpublish-getinfo" href="#">Get more information</a>
            <?php print render($openpublish_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
    <div class="commerce-kickstart">
      <div class="marca clearfix">
        <h3>For eCommerce</h3>
        <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo-commerce_soluciones_v2.png"
          alt="drupal web development consulting company ladrupalera design"/>
        <a class="more commerce-viewmodal" href="#">
          <span>+</span>
        </a>
        <div class="modal-content">
          <a class="close" href="#">Close</a>
          <img
          src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/logo-commerce_soluciones_v2.png"
          alt="drupal web development consulting company ladrupalera design"/>
          <p>Created and maintained by Commerce Guys. This distribution offers the best of e-commerce plus an advanced content management system and a social community.</p>
          <div class="show-form">
            <a  class="commerce-getinfo" href="#">Get more information</a>
            <?php print render($commerce_contact_form); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a href="#community" class="step-jumper step-solutions hide-modern" title="fix-dl">Go to Community<i class="sprite-ico-bajar"></i></a>

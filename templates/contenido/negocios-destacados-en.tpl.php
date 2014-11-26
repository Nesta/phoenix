<?php print ($messages); ?>
<div class="solutions container clearfix">

  <div class="solution emergya-drupal-base">
    <div class="content">
      <h3>Emergya Drupal Base</h3>
      <p>Our own version of Drupal distribution on steroids.</p>
      <p>Perfect for quick and easy website development, <strong>with a high level of functional</strong> and <strong>visual customization</strong></p>
      <a class="more base-viewmodal" href="#">+</a>
    </div>
    <div class="img">
      <img
        src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_base_soluciones.png"
        alt="Company ladrupalera drupal web development consulting design"/>
    </div>
    <div class="modal-content">
      <a class="close" href="#">Close</a>
        <div class="oriented-solutions">
          <span>Mainly oriented to</span>
          <ul>
            <li>Business web design and development</li>
            <li>Freelance Developers</li>
            <li>Large companies with internal IT departments</li>
          </ul>
          <div class="modal-img">
            <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_base_soluciones.png"
            alt="Company ladrupalera drupal web development consulting design"/>
          </div>
        </div>
        <div class="features-solutions">
          <span>Main features</span>
          <ul>
            <li>Advanced Content Management features</li>
            <li>Presets to speed up the process of creating a website</li>
            <li>Performance optimizations</li>
            <li>Responsive theme HTML5 + CSS3 highly and easily customizable</li>
            <li>Security Enhancements</li>
            <li>Development Tools</li>
            <li>18n support</li>
            <li>SEO optimizacion tools</li>
            <li>Advanced Integration with Google Analytics</li>
          </ul>
        </div>
        <div class="show-form">
          <a class="base-getinfo" href="#">Get more information</a>
          <?php print render($drupal_base_contact_form); ?>
        </div>
    </div>
  </div>

  <div class="solution drupal-assembly">
    <div class="content">
      <h3>Drupal Assembly</h3>
        <p>Distribution perfect for creating a <strong>social intranet, focused on co-working and mobility capabilities</strong></p>
        <p>Drupal Assembly generates a social collaborative workspace with the best performance at the user experience level, capable of easy management of <span>virtual meetings</span></p>
      <a class="more assembly-viewmodal" href="#">+</a>
    </div>
    <div class="img">
      <img
        src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_enssembly_soluciones.png"
        alt="Company ladrupalera drupal web development consulting design"/>
    </div>

    <div class="modal-content">
      <a class="close" href="#">Close</a>

      <div class="oriented-solutions">
        <span>Mainly oriented towards:</span>
        <ul>
          <li>Large and delocalized corporations</li>
          <li>Associations / Foundations / NGOs</li>
          <li>Social economy organizations</li>
          <li>Any collective using distributed workforce models</li>
        </ul>
        <div class="modal-img">
          <img src="<?php print base_path() . path_to_theme(); ?>/images/home/misc/img_drupal_enssembly_soluciones.png"
          alt="Company ladrupalera drupal web development consulting design"/>
        </div>
      </div>
      <div class="features-solutions">
        <span>Main features</span>
        <ul>
          <li>Optimized video management thanks to its complete integration with Google Hangouts</li>
          <li>Efficient and collaborative content management and document edition "on the go" (search, cataloging, enrichment).</li>
          <li>Integrated with different electronic signature systems.</li>
          <li>Multi-device: mobile, tablet, PC...</li>
        </ul>
      </div>
      <div class="show-form">
        <a class="assembly-getinfo" href="#">Get more information</a>
        <?php print render($assembly_contact_form); ?>
      </div>
    </div>

  </div>

</div>

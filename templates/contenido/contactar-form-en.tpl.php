<div id="contactar-contents">
  <div class="contactar-wrapper">
    <span class="title">We’d love to be your technology partner</span>

    <div class="inverse-scroll clearfix">
      <span class="subtitle">Let’s talk</span>

      <div class="contact-email show-tablet">
        <a href="#" class="drupalera-mail" target="_blank">Contact us by email</a>
      </div>
      <div class="form-contact hidden-tablet">
        <?php print ($messages); ?>
        <?php print drupal_render($contact_form); ?>
      </div>
      <div class="contact-info">
        <div>
          <div class="location">
            <a href="https://goo.gl/maps/q5Q3z" target="_blank">Sevilla, Spain</a>
          </div>
          <div class="location-contact">
            + 34 954 517 577
          </div>
        </div>

        <div>
          <div class="location">
            <a href="https://goo.gl/maps/Rhtve" target="_blank">Santiago de Chile</a>
          </div>
          <div class="location-contact">
            +56 2 2348 6403
          </div>
        </div>

        <div>
          <div class="location">
            London, UK
          </div>
          <div class="location-contact">
            Coming soon
          </div>
        </div>

        <div class="social">
          <a href="https://twitter.com/ladrupalera" target="_blank" class="twitter-link"><i class="sprite-ico-contacto-twitter"></i>@ladrupalera</a>
        </div>
      </div>
    </div>
    <footer id="footing-info" class="clearfix">
      <p>La Drupalera is the Emergya Drupal Division <span class="pull-right">Copyright 2014 La Drupalera.</span></p>
      <p class="hide-accessible"><a href="/sitemap.xml" title="<?php print t('Site Map'); ?>" /><?php print t('Site Map'); ?></a></p>
    </footer>
  </div>

</div>

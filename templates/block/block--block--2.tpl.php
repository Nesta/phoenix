<section id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      print l(t('Consultory Development'), '<front>' , array(
        'attributes' => array(
          'class' => array('back-home')
        )
      ));
    ?>
  </div>
  
</section> <!-- /.block -->

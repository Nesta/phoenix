<?php global $base_url; ?>
<section id="page-404">
  <?php if($page['user_bar']): ?>
    <nav class="user-bar" role="navigation">
      <?php print render ($page['user_bar']); ?>
    </nav>
  <?php endif; ?>

  <?php if($page['preface']) : ?>
    <?php print render ($page['preface']); ?>
  <?php endif; ?>

  <div id="main-content" class="main-content container">

    <section id="content" class="clearfix "role="main">

      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
      <?php print render($page['content']); ?>
    </section>
    
  </div>
  
</section>

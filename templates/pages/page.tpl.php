<?php global $base_url; ?>
<section id="page">
  <?php if($page['user_bar']): ?>
    <nav class="user-bar" role="navigation">
      <?php print render ($page['user_bar']); ?>
    </nav>
  <?php endif; ?>

  <header id="masthead" class="site-header" role="banner">
    <div class="header-wrapper container">

      <?php print render ($page['top_bar']); ?>
      <div class="logo header-left">
        <div id="logo" class="site-branding vmiddle">
          <?php if ($logo): ?>
            <div id="site-logo">
              <a href="<?php print $base_url; ?>/" title="<?php print $site_name . ' - ' . $site_slogan; ?>"><img src="<?php print $logo; ?>" alt="<?php print $site_name . ' - ' . $site_slogan; ?>" /></a>
            </div>
          <?php endif; ?>
        </div>
      </div>
      <div class="logo-blog">
        <div id="logo-blog">
          <a href="<?php print $base_url; ?>/drupal" title="<?php print t('Drupalera Blog') . ' - ' . $site_name; ?>"><img src="<?php print base_path() . drupal_get_path('theme', 'da_vinci') . '/logo-blog.png'; ?>" alt="Logo del Blog" /></a>
        </div>
        <div id="claim-blog" class="claim"><div class="text"><?php print t('Drupal in its pure form'); ?></div></div>
      </div>
    </div>
  </header>

  <?php if($page['preface']) : ?>
    <?php print render ($page['preface']); ?>
  <?php endif; ?>

  <div id="main-content" class="main-content container">
    <?php if (theme_get_setting('breadcrumbs')): ?>
      <?php if ($breadcrumb): ?>
        <div id="breadcrumbs" class="clearfix"><?php print $breadcrumb; ?></div>
      <?php endif;?>
    <?php endif; ?>
<div class="hx <?php if (arg(0) == 'drupal' && arg(1) == ''): ?>hide<?php endif; ?>">
      <?php print render($title_prefix); ?>
      <?php if ($title): ?><h1 <?php print $title_attributes; ?>><?php print $title; ?></h1><?php endif; ?>
      <?php print render($title_suffix); ?>
    </div>
    <?php print $messages; ?>
    <?php if ($page['content_top']): ?><div id="content_top"><?php print render($page['content_top']); ?></div><?php endif; ?>

    <section id="content" role="main">
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
      <?php print render($page['content']); ?>
    </section>
    <?php if ($page['sidebar_first']): ?>
      <aside id="sidebar-first" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>
    <?php endif; ?>
    <?php if ($page['sidebar_second']): ?>
      <aside id="sidebar-second" class="" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>
    <?php endif; ?>
  </div>

  <?php if($page['footer']) : ?>
    <footer class="site-footer">
      <?php print render($page['footer']); ?>
    </footer>
  <?php endif; ?>
</section>

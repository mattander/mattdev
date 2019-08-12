<nav id="mainNav" class="navbar navbar-expand-lg">

  <div class="container">
    <a class="navbar-brand" href="/"><img src="<?php echo get_theme_file_uri('images/logo-dark.png'); ?>" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="nav-menu">Menu</span>
    </button>

    <?php 
    wp_nav_menu(array(
      'theme_location' => 'primary',
      'depth' => 2, // 1 = no dropdowns, 2 = with dropdowns.
      'container' => 'div',
      'container_class' => 'collapse navbar-collapse',
      'container_id' => 'navbarSupportedContent',
      'menu_class' => 'navbar-nav mr-auto',
      'fallback_cb' => 'WP_Bootstrap_Navwalker::fallback',
      'walker' => new WP_Bootstrap_Navwalker()
    ));
    ?>
  </div>
</nav>
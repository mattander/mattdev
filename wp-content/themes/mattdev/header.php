<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 * @subpackage mattdev
 * @since 1.0
 * @version 1.0
 */

?>

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112866872-3"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-112866872-3');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="pagename" id="pageName" content="">
  <meta name="description" content="<?php echo get_field('description'); ?>">
  <title>
    <?php the_title() ?> - mattDev</title>
  <?php wp_head(); ?>
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri().'/favicon.ico' ?>">
</head>

<body>
  <?php require('nav.php'); ?>
  <?php show_admin_bar(true) ?>
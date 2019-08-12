<?php
//Register and add custom styles and Bootstrap styles
function add_theme_styles()
{
  wp_enqueue_style('bootstrap', get_template_directory_uri() . '/styles/bootstrap.min.css');
  wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
  wp_enqueue_style('googleBitter', 'https://fonts.googleapis.com/css?family=Bitter:400,400i,700|Lato:400,400i,700|Roboto:400,500,700');
  wp_enqueue_style('default', get_template_directory_uri() . '/styles/styles.css', false, true);
}

add_action('wp_enqueue_scripts', 'add_theme_styles');

//Register and add custom scripts and Bootstrap scripts
function add_theme_scripts()
{
  wp_enqueue_script('bootstrapscript', get_template_directory_uri() . '/scripts/vendor/bootstrap.bundle.min.js', array('jquery'), false, true);
  wp_enqueue_script('script', get_template_directory_uri() . '/scripts/app.js', false, true);
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');

register_nav_menus(array(
  'primary' => __('Primary Menu', 'mattDev'),
));

// Register Custom Navigation Walker
require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';

//Remove editor from pages
function remove_editor()
{
  remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'remove_editor');
?>
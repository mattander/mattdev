<?php require('header.php');
?>
<section class="jumbotron">
  <article class="jumbotron__container container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-lg-6">
        <h1 class="jumbotron__heading">
          <?php echo get_field('header_title') ?>
        </h1>
        <div class="lead">
          <?php echo get_field('header_content') ?>
        </div>
        <a href="<?php echo get_field('header_button_link') ?>" class="btn btn-lg btn-primary">
          <?php echo get_field('header_button_text') ?></a>
      </div>
      <div class="col-xs-12 col-md-12 col-lg-6">
        <img class="jumbotron-image" src="<?php echo get_template_directory_uri() . '/images/two-figures-pointing-3.png'; ?>"
          alt="">
      </div>
    </div>
  </article>
</section>
<?php if (have_rows('service_cards')) : 
  $i = 0;
  ?>
<h2 class="container mb-4">
  <?php echo get_field('services_section_title'); ?>
</h2>
<section class="services container">
  <?php while (have_rows('service_cards')) : the_row(); 

            //vars
    $title = get_sub_field('service_title');
    $text = get_sub_field('service_text');
    $linkText = get_sub_field('service_link_text');
    $link = get_sub_field('service_link');
    ?>

  <article class="card">
    <div class="card-body">
      <h4 class="card-title">
        <?php echo $title; ?>
      </h4>
      <p class="card-text">
        <?php echo $text; ?>
      </p>
      <a href="<?php echo $link; ?>" class="btn btn-primary card-link">
        <?php echo $linkText ?></a>
    </div>
  </article>
  <?php endwhile; ?>
</section>
<?php endif; ?>

<?php if (have_rows('testimonials')) : 
  $i = 0;
  ?>
<!-- <h2 class="container mb-4">
  Testimonials
</h2> -->
<section class="testimonial-section">
  <?php while (have_rows('testimonials')) : the_row(); 

            //vars
    $quote = get_sub_field('quote');
    $name = get_sub_field('name');
    $text = get_sub_field('text');
    $image = get_sub_field('image');

    if (get_sub_field('image')) {
      $image = get_sub_field('image');
    } else {
      $image = get_theme_file_uri('images/lynn-thumbnail.jpeg');
    }
    ?>

  <div class="testimonial">
      <div class="testimonial-body container">
        <?php if (get_sub_field('image')) : ?>
        <div class="testimonial-image-container">
          <img src="<?php echo $image?>" alt=""/>
        </div>
        <?php endif?>
        <div class="testimonial-pullquote"><?php echo $quote; ?></div>
        <div><?php echo $text; ?></div>
        <p><strong><?php echo $name ?></strong></p>
      </div>
  </div>
  <?php endwhile; ?>
</section>
<?php endif; ?>

<section class="lower-content container homepage__lower-content mt-4">
  <h2>
    <?php the_field('lower_section_title'); ?>
  </h2>
  <div>
    <?php the_field('lower_section_text') ?>
  </div>
</section>
<?php require('footer.php'); ?>
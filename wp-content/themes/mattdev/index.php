<?php require('header.php'); ?>

<div class="container mt-4">
  <section id="main-content">
    <div class="row">
      <div class="col-lg-9 col-md-10">
        <h1>
          <?php echo get_field('title'); ?>
        </h1>
        <?php echo get_field('content'); ?>
      </div>
    </div>
  </section>
</div>

<?php require('footer.php'); ?>
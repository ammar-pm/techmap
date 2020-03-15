<div class="enabler-profile profile page-user"<?php print $attributes; ?>>

	<div class="row">
    <div class="col-sm-7">
      <h1><?php print render($content['field_fund_name']); ?></h1>

      <?php print render($content['field_notes']); ?>

      <div class="row">
        <div class="col-sm-6">
          <?php print render($content['field_fund_type']); ?>
        </div>
        <div class="col-sm-6">
          <?php print render($content['field_fund_activity']); ?>
        </div>
      </div>

      <?php print render($content['field_fund_poc']); ?>

      <div class="row">
        <div class="col-sm-6">
          <?php print render($content['field_fund_website']); ?>
        </div>
        <div class="col-sm-6">
          <?php print render($content['field_fund_linkedin']); ?>
        </div>
      </div>
    </div>
    <div class="col-sm-5">
    </div>
  </div>

</div>

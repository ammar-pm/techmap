<div class="enabler-profile profile page-user"<?php print $attributes; ?>>

	<div class="row">
      <div class="col-sm-7">

        <div class="company">
          <h1><?php print render($content['field_company_name']); ?></h1>
          <?php // print render($user_profile['user_picture']) ?>
          <?php print render($content['field_idea_and_value']); ?>

          <div class="row">
            <div class="col-sm-6">
              <?php print render($content['field_sector']); ?>
            </div>
            <div class="col-sm-6">
              <?php print render($content['field_target_mararket']); ?>
            </div>
          </div>

          <?php print render($content['field_founding_date']); ?>
          
          <?php print render($content['field_tags']); ?>
        </div>

        <div class="business">
          <h2> Business </h2>
          <?php print render($content['field_locations']); ?>

          <div class="row">
            <div class="col-sm-4">
              <?php print render($content['field_business_model']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_stage_of_funding']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_number_of_customers']); ?>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <?php print render($content['field_time_spent_at_coworking_sp']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_preferred_space']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_accelerator']); ?>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <?php print render($content['field_initial_investment']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_investment_seeking']); ?>
            </div>
            <div class="col-sm-4">
              <?php print render($content['field_revenue']); ?>
            </div>
          </div>
          
        </div>

        <div class="team">
          <h2> Team </h2>
          <?php print render($content['field_team']); ?>
        </div>

        <div class="network">
          <h2> Network </h2>

          <div class="row">
            <div class="col-sm-6">
              <?php print render($content['field_network']); ?><span> / 10</span>
            </div>
            <div class="col-sm-6">
              <?php print render($content['field_advisory_board']); ?>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <?php print render($content['field_mentors']); ?>
            </div>
            <div class="col-sm-6">
              <?php print render($content['field_mentor_compensation']); ?>
            </div>
          </div>
          
          <?php print render($content['field_startups_close_to']); ?>
          
        </div>

      </div>
      <div class="col-sm-5 col-no-rp">
        <?php print render($content['field_photos']); ?>
      </div>
    </div>

</div>

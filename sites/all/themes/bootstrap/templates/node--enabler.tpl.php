<div class="enabler-profile profile page-user"<?php print $attributes; ?>>

  <div class="row">
      <div class="col-sm-7">

          <div class="space-info">
              
              <h1><?php print render($content['field_space_name']); ?></h1>

              <?php print render($content['field_cities']); ?>

              <div class="row">
                  <div class="col-sm-6">
                      <?php print render($content['field_website']); ?>
                  </div>
                  <div class="col-sm-6">
                      <?php print render($content['field_facebook_event_page_']); ?>
                  </div>
              </div>

              <div class="row">
                  <div class="col-sm-6">
                      <?php print render($content['field_space']); ?>
                  </div>
                  <div class="col-sm-6">
                      <?php print render($content['field_internet_speed']); ?>
                  </div>
              </div>

              <?php print render($content['field_operating_hours']); ?>                
          </div>

          <div class="contacts">
              <h2> Contacts </h2>
              <?php print render($content['field_contacts']); ?>  
          </div>

          <div class="programs">
              <h2> Programs </h2>
              <?php print render($content['field_programs_offered']); ?>
              <?php print render($content['field_service']); ?>
              <?php print render($content['field_cost']); ?>
              <?php print render($content['field_equity']); ?>
              <?php print render($content['field_duration']); ?>
              <?php print render($content['field_events']); ?>
          </div>

          <div class="programs">
              <h2> Startups </h2>
              <?php print render($content['field_target']); ?>
              <?php print render($content['field_startups']); ?>
              <?php print render($content['field_investment']); ?>
              <?php print render($content['field_stayed_startups']); ?>
          </div>

          <div class="founders">
              <h2> Founders </h2>
              <?php print render($content['field_founded']); ?>
              <?php print render($content['field_partners']); ?>
              <?php print render($content['field_founded_by']); ?>
          </div>

      </div>
      <div class="col-sm-5">
          photos
      </div>
  </div>
        
</div>
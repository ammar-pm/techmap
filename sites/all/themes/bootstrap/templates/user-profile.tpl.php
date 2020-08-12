<?php

/**
 * @file
 * Default theme implementation to present all user profile data.
 *
 * This template is used when viewing a registered member's profile page,
 * e.g., example.com/user/123. 123 being the users ID.
 *
 * Use render($user_profile) to print all profile items, or print a subset
 * such as render($user_profile['user_picture']). Always call
 * render($user_profile) at the end in order to print all remaining items. If
 * the item is a category, it will contain all its profile items. By default,
 * $user_profile['summary'] is provided, which contains data on the user's
 * history. Other data can be included by modules. $user_profile['user_picture']
 * is available for showing the account picture.
 *
 * Available variables:
 *   - $user_profile: An array of profile items. Use render() to print them.
 *   - Field variables: for each field instance attached to the user a
 *     corresponding variable is defined; e.g., $account->field_example has a
 *     variable $field_example defined. When needing to access a field's raw
 *     values, developers/themers are strongly encouraged to use these
 *     variables. Otherwise they will have to explicitly specify the desired
 *     field language, e.g. $account->field_example['en'], thus overriding any
 *     language negotiation rule that was previously applied.
 *
 * @see user-profile-category.tpl.php
 *   Where the html is handled for the group.
 * @see user-profile-item.tpl.php
 *   Where the html is handled for each item in the group.
 * @see template_preprocess_user_profile()
 *
 * @ingroup themeable
 */
?>
<?php
    // $author = user_load($node->uid);
  // $author = user_load($user->uid);
  // $field_profile_type = field_get_items('user', $author, 'field_profile_type');
  // $profile_type = $field_profile_type[0]['value'];
  $user = user_load(arg(1));
  $user_id = $user->uid;
  $profile_type = $user->field_profile_type;
  $username = $user->name;
  $email = $user->mail;
  // if($profile_type = $user_profile['field_founding_date']['#object']->field_profile_type != null) {
  if($profile_type != null) {
    $profile_type = $profile_type['und'][0]['value']; // works
    // $user_profile['field_founding_date']['#object']->field_profile_type['und'][0]['value']
  } else {
    $profile_type = "none";
  }
?>
<?php // print_r($author); ?>
<div class="<?php print $profile_type ?>-profile profile"<?php print $attributes; ?>>

  <?php if($profile_type == "company") : ?>
    <div class="page-cover full-width-wrapper">
      <div class="cover-logo">
        <?php print render($user_profile['field_logo']); ?>
      </div>
      <h1><?php print render($user_profile['field_company_name']); ?></h1>
    </div>

    <div class="user-about page-section">
      <?php print render($user_profile['field_pitch']); ?>
    </div>

    <div class="team page-section">
      <?php print views_embed_view('team','block', $user_id ); ?> 
    </div>

    <div class="profile-fields page-section">
      <div class="row">
        <div class="col-sm-4">
          <p class="label"> Located at </p>
          <?php print render($user_profile['field_located_at']); ?>
        </div>
        <div class="col-sm-4">
          <p class="label"> Business Model </p>
          <?php print render($user_profile['field_biz_model']); ?>
        </div>
        <div class="col-sm-4">
          <p class="label"> Investment Amount </p>
          <?php print render($user_profile['field_investment_amount']); ?>
        </div>
      </div>
    </div>

    <div class="page-section">

      <div class="imagery">
        <div class="owl-carousel owl-theme">
          <?php
            $screenshots = $user_profile['field_screenshots']['#object']->field_screenshots['und'];
            foreach ($screenshots as $key => $item) : ?>
              <div class="item">
                <img src="<?php print image_style_url('slide_image', $item['uri']) ?>">
              </div> <?
            endforeach;
          ?>
        </div>
      </div>

      <!-- https://www.youtube.com/embed/xVAWRVsronM
      https://www.youtube.com/watch?v=xVAWRVsronM -->

      <?php 
        $video_url = $user_profile['field_video']['#object']->field_video['und'][0]["safe_value"]; 
        $video = str_replace("watch?v=","embed/",$video_url);
      ?>
      <?php if($video != ""): ?>
        <div class="page-section">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="<?php print $video ?>"></iframe>
          </div>
        </div>
      <?php endif; ?>

    </div>


  <?php elseif($profile_type == "enabler") : ?>
    <div class="page-cover full-width-wrapper">
      <div class="cover-logo">
        <?php // print render($user_profile['field_logo']); ?>
      </div>
      <h1><?php print render($user_profile['field_space_name']); ?></h1>
      <?php print render($user_profile['field_hub_type']); ?>
    </div>

    <div class="user-about page-section">
      <?php print render($user_profile['field_space_bio']); ?>
    </div>

    <div class="team page-section">
      <?php print views_embed_view('team','hub_team', $user_id ); ?> 
    </div>

    <?php if(array_key_exists("field_space_photos",$user_profile)) : ?>
      <div class="page-section">

        <div class="imagery">
          <div class="owl-carousel owl-theme">
            <?php
              
              $photos = $user_profile['field_space_photos']['#object']->field_space_photos['und'];
              foreach ($photos as $key => $item) : ?>
                <div class="item">
                  <img src="<?php print image_style_url('slide_image', $item['uri']) ?>">
                </div> <?php
              endforeach;
              
            ?>
          </div>
        </div>

      </div>
    <?php endif; ?>

    <?php if(array_key_exists("field_hub_startups",$user_profile)) : ?>
      <div class="page-section view-startup-profiles">
        <div class="view-content">
          <h3> Startups </h3>
          <div class="row">
          <?php 
            $startups = $user_profile['field_hub_startups']['#object']->field_hub_startups['und'];

            foreach ($startups as $key => $startup) : ?>
              <?php $startup_link = "/user/" . $startup['entity']->uid; ?>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="startup-teaser">
                  <div class="views-field views-field-field-logo">
                    <div class="field-content">
                      <?php 
                        $image_uri = "";
                        if( count($startup['entity']->field_logo) > 0 ) :
                          $image_uri = $startup['entity']->field_logo['und'][0]['uri']; ?>
                          <img src="<?php print image_style_url('wide_thumbnail', $image_uri) ?>">
                        <?php
                        endif;
                      ?>
                      
                    </div>
                  </div>  
                  <div class="views-field views-field-field-company-name">
                    <div class="field-content"> <?php print $startup['entity']->field_company_name['und'][0]['safe_value']; ?></div>
                  </div>      
                  <div class="views-field views-field-view-user">
                    <span class="field-content"><a href="<?php print $startup_link; ?>">
                      <?php print $startup['entity']->field_pitch['und'][0]['safe_value']; ?>
                    </a></span>
                  </div>      
                  <div class="views-field views-field-field-year-founded">
                    <div class="field-content"><?php print $startup['entity']->field_year_founded['und'][0]['value']; ?></div>
                  </div>
                </div>
              </div> <?php
            endforeach;
          ?>
          </div>
        </div>   
      </div>
    <?php endif; ?>

    <?php if(array_key_exists("field_hub_donors",$user_profile)) : ?>
      <div class="page-section">
        <div class="imagery donors">
          <div class="donors-carousel owl-theme">
            <?php
              
              $donors = $user_profile['field_hub_donors']['#object']->field_hub_donors['und'];
              foreach ($donors as $key => $item) : 
                $donor_name = $item['entity']->field_fund_name['und'][0]['value']; 
                $donor_photo = $item['entity']->field_donor_photo['und'][0] ?>
                 <div class="item">
                  <div class="donor">
                    <img src="<?php print image_style_url('wide_thumbnail', $donor_photo['uri']) ?>">
                    <p> <?php print $donor_name; ?> </p>
                  </div>
                 </div> <?php
              endforeach;
              
            ?>
          </div>
        </div>

      </div>
    <?php endif; ?>


  <?php elseif($profile_type == "investor") : ?>
    <div class="row">
      <div class="col-sm-7">
        <h1><?php print render($user_profile['field_fund_name']); ?></h1>

        <?php print render($user_profile['field_notes']); ?>

        <div class="row">
          <div class="col-sm-6">
            <?php print render($user_profile['field_fund_type']); ?>
          </div>
          <div class="col-sm-6">
            <?php print render($user_profile['field_fund_activity']); ?>
          </div>
        </div>

        <?php print render($user_profile['field_fund_poc']); ?>

        <div class="row">
          <div class="col-sm-6">
            <?php print render($user_profile['field_fund_website']); ?>
          </div>
          <div class="col-sm-6">
            <?php print render($user_profile['field_fund_linkedin']); ?>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
      </div>
    </div>

  <?php elseif($profile_type == "mentor") : ?>
    <div class="row">
      <div class="col-sm-7">
        <?php // print_r($user); ?>
        <h1><?php print($username); ?></h1>
        <p><a href="mailto:<?php print($email); ?>"> <?php print($email); ?> </a></p>
 
        <?php print render($user_profile['field_mentor_bio']); ?>

        <?php print render($user_profile['field_skills']); ?>

        <div class="row">
          <div class="col-sm-6">
            <?php print render($user_profile['field_organization']); ?>
          </div>
          <div class="col-sm-6">
            <?php print render($user_profile['field_title']); ?>
          </div>
        </div>

        <?php print render($user_profile['field_mentor_citiy']); ?>

        <div class="row">
          <div class="col-sm-6">
            <?php print render($user_profile['field_phone']); ?>
          </div>
          <div class="col-sm-6">
            <?php print render($user_profile['field_twitter_link']); ?>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
      </div>
    </div>

  <?php else : ?>
    <div class="row">
        <div class="col-sm-7">
          <?php print render($user_profile['summary']); ?>
          <p> Please edit your profile type and fill in the details.</p>
        </div>
        <div class="col-sm-5"></div>
    </div>
  <?php endif; ?>

</div>

<script type="text/javascript">
  jQuery(window).load(function() {
    jQuery(".owl-carousel").trigger('refresh.owl.carousel');
    jQuery(".owl-carousel").trigger('refresh.owl.carousel');
    jQuery(".owl-carousel").trigger('refresh.owl.carousel');
    jQuery(".donors-carousel").trigger('refresh.owl.carousel');
  });
</script>

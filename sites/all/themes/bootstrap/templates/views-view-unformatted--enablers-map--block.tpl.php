<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<div class="enablers-map">
  <!-- <div id="mapid"></div> -->
  <div id="map"></div>
  <div class="enablers">
    <?php foreach ($rows as $id => $row): ?>
      <div class="enabler">
        <?php print $row; ?>
      </div>
    <?php endforeach; ?>
  </div>
</div>

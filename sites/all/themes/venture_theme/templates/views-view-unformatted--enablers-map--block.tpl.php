<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<div class="map-wrapper">
 <div id="mapid"></div>
</div>

<?php foreach ($rows as $id => $row): ?>
  <div class="enabler">
    <?php print $row; ?>
  </div>
<?php endforeach; ?>

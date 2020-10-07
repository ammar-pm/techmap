<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>

<?php foreach ($row->field_field_hub_social_links as $data): ?>

	<a href="<?php print( $data['raw']['url'] ); ?>" target="_blank">
  	<?php
  		$url = $data['raw']['url']; 
  		if(strpos($url, "facebook")) {
  			print "<span class='fa fa-facebook'></span>";
  		}
  		else if(strpos($url, "instagram")) {
  			print "<span class='fa fa-instagram'></span>";
  		}
  		else if(strpos($url, "twitter")) {
  			print "<span class='fa fa-twitter'></span>";
  		}
  		else if(strpos($url, "linkedin")) {
  			print "<span class='fa fa-linkedin'></span>";
  		}
  		else if(strpos($url, "youtube")) {
  			print "<span class='fa fa-youtube'></span>";
  		}
  		else if(strpos($url, "pinterest")) {
  			print "<span class='fa fa-pinterest'></span>";
  		}
  		else if(strpos($url, "snapchat")) {
  			print "<span class='fa fa-snapchat-ghost'></span>";
  		}
  		else if(strpos($url, "google")) {
  			print "<span class='fa fa-google'></span>";
  		}
  		else {
  			print "<span class='fa fa-globe'></span>";
  		}
  	?>
  </a>

<?php endforeach; ?>

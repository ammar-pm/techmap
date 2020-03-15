/**
 * @file
 * Javascript for OSM Map Dynamic API Formatter javascript code.
 *
 * Based on Lukasz Klimek http://www.klimek.ws
 */

(function ($) {

  Drupal.geolocationOsm = Drupal.geolocationOsm || {};
  Drupal.geolocationOsm.maps = Drupal.geolocationOsm.maps || {};
  Drupal.geolocationOsm.markers = Drupal.geolocationOsm.markers || {};

  Drupal.behaviors.geolocationOsmDynamicFormatter = {

    attach : function(context, settings) {

      var fields = settings.geolocationOsm.formatters;
      // Work on each map
      $.each(fields, function(instance, data) {
        var instanceSettings = data.settings;
        var zoomlevel = instanceSettings.map_zoomlevel;
        var dimensions = instanceSettings.map_dimensions.split("x");
        var map_width = 200;
        var map_height = 200;
        /*
        sometime map is in another tab demension of div parent is always = 0
         */
        if(typeof dimensions[0] !== "undefined") {
          map_width = dimensions[0];
        }
        if(typeof dimensions[1] !== "undefined") {
          map_height = dimensions[1];
        }
        $.each(data.deltas, function(d, delta) {
          var id = instance + "-" + d;
          $("#geolocation-osm-dynamic-" + id).once('geolocation-osm-dynamic-formatter', function () {
            if($(this).height() == 0){
              $(this).height(map_height);
            }
            if($(this).width() == 0){
              $(this).width(map_width);
            }
            var lat = delta.lat;
            var lng = delta.lng;
            var latLng = new L.LatLng(lat, lng);
            // Create map.
            Drupal.geolocationOsm.maps[id] = new L.Map(this).setView([lat, lng], zoomlevel);
            var markerLocation = latLng;

            L.tileLayer(instanceSettings.tile_server_dynamic, {
              attribution: instanceSettings.tile_server_attribution,
              maxZoom: 18
            }).addTo(Drupal.geolocationOsm.maps[id]);
            L.Icon.Default.imagePath = instanceSettings.leafletImagePath;
            var marker = L.marker(markerLocation).addTo(Drupal.geolocationOsm.maps[id]);
          });
        });
      });
    }
  };
}(jQuery));

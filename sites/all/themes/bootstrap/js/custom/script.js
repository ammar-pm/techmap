(function ($, Drupal, window, document, undefined) {

  $(document).ready(function(){
    // profile icon
    $(".logged-in .menu.secondary > li.first > a").html("<span class='glyphicon glyphicon-user'></spam>");
    // search field
    $(".search-form input.form-control").attr("autocomplete","off").attr("placeholder","Search for startups, and innovation hubs");

    var pathname = window.location.pathname;
    if(pathname.includes("hubs")) {
      $(".view-display-id-enablers_counter").addClass("active");
    }
    if(pathname.includes("startups")) {
      $(".view-display-id-startups_counter").addClass("active");
    }
    if(pathname.includes("investors")) {
      $(".view-display-id-investors_counter").addClass("active");
    }

    if($(".page-cover").length > 0) {
      $(document).scroll(function(){
        
        var scrollOffset = $(this).scrollTop();
        var translate = scrollOffset/2;
        var wHeight = window.innerHeight;
        
        $(".page-cover h1, .page-cover .cover-logo, .page-cover .field-name-field-hub-type").css("transform", "translateY(" + translate + "px)" );
        $(".page-cover h1, .page-cover .cover-logo, .page-cover .field-name-field-hub-type").css("opacity", (wHeight/2 - scrollOffset)/(wHeight/2) );
      });
    }

    var owl = $('.owl-carousel');

    owl.owlCarousel({
      margin:10,
      loop:true,
      autoWidth:true,
      nav:true,
      dots:false,
      center: true,
      slideTransition: "linear",
      navSpeed: 300,
      autoplay: true,
      autoPlaySpeed: 4000,
      autoPlayTimeout: 4000,
      autoplayHoverPause: true
    });

    var owld = $('.donors-carousel');

    owld.owlCarousel({
      items: 3,
      margin:10,
      loop:false,
      autoWidth:true,
      nav:true,
      dots:false,
      center: true,
      slideTransition: "linear",
      navSpeed: 300,
      autoplay: true,
      autoPlaySpeed: 4000,
      autoPlayTimeout: 4000,
      autoplayHoverPause: true
    });


    function nextQuestion() {
      $activeQuestion = $(".edit-profile-tab-groups fieldset > .panel-body .field-group-div > div.active");
      $nextQuestion = $activeQuestion.next("div");

      // console.log($nextQuestion);

      // check if next question is exists
      if($nextQuestion.length > 0) {
        // Scroll to question
        $scrollOffset = $nextQuestion.offset().top;
        $("body,html").animate({scrollTop: $scrollOffset}, 500);
      } else {
        $("body,html").animate({scrollTop: $(document).height()}, 500);
      }
    }
    function prevQuestion() {
      $activeQuestion = $(".edit-profile-tab-groups fieldset > .panel-body .field-group-div > div.active");
      $prevQuestion = $activeQuestion.prev("div");

      // console.log($prevQuestion);

      // check if next question is exists
      if($prevQuestion.length > 0) {
        // Scroll to question
        $scrollOffset = $prevQuestion.offset().top;
        $("body,html").animate({scrollTop: $scrollOffset}, 500);
      }
    }

    // edit profile 
    // sticky tabs nav on scroll
    if( $(".page-user-edit .edit-profile-tab-groups").length > 0 ) {

      // $(document).on("click", ".horizontal-tab-button-1", function(){
      //   console.log("here");
      // });

      // $(".edit-profile-tab-groups fieldset > .panel-body > div").first().addClass("active");
      $(".horizontal-tabs-list li:last-child a").click(function(){
        $("body,html").animate({scrollTop: 120}, 500);
      });

      // $("#edit-field-company-name, #edit-field-space-name").addClass("active").find("input").focus();

      $(document).scroll(function(){

        // $(".edit-profile-tab-groups fieldset > .panel-body > div").first().addClass("active");
        
        var scrollOffset = $(this).scrollTop();

        if( scrollOffset > 114 ) {
          $(".edit-profile-tab-groups:not(.horizontal-tab-hidden) .horizontal-tabs-list").addClass("fixed");
          $(".edit-profile-tab-groups:not(.horizontal-tab-hidden) .horizontal-tabs-panes").css("padding-top", "114px");
        } else {
          $(".edit-profile-tab-groups:not(.horizontal-tab-hidden) .horizontal-tabs-list").removeClass("fixed");
          $(".edit-profile-tab-groups:not(.horizontal-tab-hidden) .horizontal-tabs-panes").css("padding-top", "0");
        }

        $currentQuestion = $(".edit-profile-tab-groups fieldset > .panel-body .field-group-div > div:in-viewport").first();
        // $currentQuestion.find("input").focus();

        if(!$currentQuestion.hasClass("active")){
          $(".edit-profile-tab-groups fieldset > .panel-body .field-group-div > div").removeClass("active"); // check if answered and counted?
          // console.log("not active");
          $currentQuestion.addClass("active");
          // $currentQuestion.find(".answer").first().focus(); ///
          // $currentQuestion.find("input").focus();
        }

      });

      // hitting enter or arrows
      $(document).keydown(function(e) {
          // console.log(e.keyCode);
          if(e.which == 13 || e.which == 40) {
            event.preventDefault();
            nextQuestion();
            return false;
          }
          if(e.which == 38) {
            prevQuestion();
          }
      });
    }


    // Arabic Page - coming soon
    if( $("body.page-node-398").length > 0 ) { 
      $("#edit-field-full-name-und-0-value").attr("placeholder","الاسم كاملاً");
      $("#edit-field-email-und-0-email").attr("placeholder","البريد الالكتروني");
      $("#edit-submit").text("إرسال");
    }

    // sticky filters for enablers and startups 
    if( $(".view-enablers, .view-startups").length > 0 ) {
      $(document).scroll(function(){
        
        var scrollOffset = $(this).scrollTop();

        if( scrollOffset > 100 ) {
          $(".view-filters").addClass("sticky");
          $(".view-content").css("padding-top", "104px");
        } else {
          $(".view-filters").removeClass("sticky");
          $(".view-content").css("padding-top", "0");
        }

      });

      // $(document).ajaxComplete(function(event,request, settings) {
      //   $(".view-empty .view-header").show();
      // });
      
    }

    // landing counters
    if($(".landing").length > 0) {
      var enablers_counter = $(".view-display-id-enablers_counter .view-header")[0];
      var statrups_counter = $(".view-display-id-startups_counter .view-header")[0];
      var investors_counter = $(".view-display-id-investors_counter .view-header")[0];
      var mapOpened = false;
      var searchOpened = false;
      $(enablers_counter).prop('Counter',0).animate({
          Counter: $(enablers_counter).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(enablers_counter).text(Math.ceil(now));
          }
      });
      $(statrups_counter).prop('Counter',0).animate({ // .stop().delay(700)
          Counter: $(statrups_counter).text()
      }, {
          duration: 2200,
          easing: 'swing',
          step: function (now) {
              $(statrups_counter).text(Math.ceil(now));
          }
      });
      $(investors_counter).prop('Counter',0).animate({
          Counter: $(investors_counter).text()
      }, {
          duration: 2600,
          easing: 'swing',
          step: function (now) {
              $(investors_counter).text(Math.ceil(now));
          }
      });
    }

    // close full search
    function closeSearch() {
      // search form component
      // $(".landing-page .search-form input.form-control").parent().css({"color": "white"});
      // $(".row.landing-content").css({"z-index": "9"});
      // $(".landing-page .search-form input.form-control").css({"border-color": "white"});
      // $(".search-form .hint, .search-form .block-title").html("Search for startups, enablers and investors").css({"z-index": "9", "color": "#fff"}); //.css({"z-index": "999999", "border-color": "black"});
      // $(".landing-content .close, .search-form .view-search .view-content").hide();
      // $(".search-full").fadeOut();
      // $(".landing-page .search-form input.form-control").blur();
      // $(".info-link").fadeIn();

      // search view: block
      // $(".landing-page .search-form #edit-title-wrapper input.form-control").parent().css({"color": "white"});
      // $(".row.landing-content").css({"z-index": "9"});
      // $(".landing-page .search-form #edit-title-wrapper input.form-control").css({"border-color": "white"});
      // $(".search-form .hint, .search-form .block-title").html("Search for startups, hubs and investors").css({"z-index": "9", "color": "#fff"}); //.css({"z-index": "999999", "border-color": "black"});
      // $(".landing-content .close, .search-form .view-search .view-content").hide();
      $(".search-full").fadeOut();
      $(".search-form input.form-control").blur().val("");
      // $(".info-link").fadeIn();
      searchOpened = false;
    }
    $(document).on('keydown', function(event) {
      if (event.key == "Escape") {
        closeSearch();  
        // $(".view-map-link").parent().fadeIn();
      }
   });

    // landing search
    // $(document).on("focus", ".landing-page .search-form #edit-title-wrapper input.form-control", function (){
    $(document).on("click", ".search-icon", function (){
    // $(".landing-page .search-form #edit-title-wrapper input.form-control").focus(function(){
      $(".search-form .form-control").attr("autocomplete","off");
      // $(this).parent().css({"color": "black"});
      // $(".row.landing-content").css({"z-index": "999999"});
      // $(this).css({"border-color": "black"});
      // $(".search-form #edit-title-wrapper input.form-control").get(0).focus();
      setTimeout(function() { $(".search-form input.form-control").focus() }, 300);
      $(".search-form .hint, .search-form .block-title").html("Type to search"); //.css({"z-index": "999999", "color": "black"});
      $(".search-full").fadeIn();
      // $(".info-link").fadeOut();
      searchOpened = true;
      // $(".view-map-link").parent().fadeOut();
    });
    $(".search-full .close").click(function(){
        closeSearch();
        // $(".view-map-link").parent().fadeIn();
    });

    // report
    $(".info-link").click(function(){
        $(".report").css("bottom", 0);
    });
    $(".report .close-tab").click(function(){
        $(".report").css("bottom", "-100%");
    });

    // Auto complete landing search
    var fullSearchTimeout = null;
    $(document).on("keyup", ".search-form input", function(){

      clearTimeout(fullSearchTimeout);

      if( $(this).val().length > 2 && $(this).val() != "") {
        fullSearchTimeout = setTimeout( function(){
          // console.log("hey");
          // $(".search-form .hint").html("");
          $(".search-form .form-submit").click();
        }, 1000);
      }

      if( $(this).val() == "" ) {
        // $(".search-form .hint").html("Type to search");
        $(".search-form .view-search .view-content").hide();
      }
    });
    $(document).ajaxComplete(function(event,request, settings) {
      // console.log("ajaxComplete");
      // putMarkersToMap(mymap);
      if( searchOpened ) {
        $(".search-form .view-search .view-content").show();
        var input = $(".search-form input");
        input.focus();
        var tmpStr = input.val();
        input.val('');
        input.val(tmpStr);

        $(".search-form input").attr("placeholder","Search for startups, and innovation hubs").attr("autocomplete","off");
      }
    });
    
    // enablers map
    // mapbox
    // if($("#map").length > 0) {
    //     mapboxgl.accessToken = 'pk.eyJ1IjoibW9yYWR0YWxlZWIiLCJhIjoiY2s2dW45Z29pMDFzMzNlbGcydzk3eTlodCJ9.4ILWxhFr5b3rTb0fFMZPPw';
    //     var map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/satellite-v9', //streets-v11',
    //         center: [34.454269, 31.958043], // starting position
    //         zoom: 8 // starting zoom
    //     });
        
    //     // show map
    //     $(".view-map-link a").click(function(event){
    //         event.preventDefault;
    //         // Remove home text and search
    //         $(".search-section").css("transform", "translate(-100%, 0)");
    //         $(".view-map-link").css("transform", "translate(100%, 0)");
    //         $(".landing-content").fadeOut(2000);
            
    //         // after 2 seconds
    //         // Change layer
    //         setTimeout(function () {
    //             map.setStyle('mapbox://styles/mapbox/streets-v11');
    //         }, 1000);
            
    //         // after 1 second
    //         // Add zoom and rotation controls to the map.
    //         setTimeout(function () {
    //             map.addControl(new mapboxgl.NavigationControl());
    //         }, 1500);
            
    //         // Add markers
    //         // one marker each 0.5 second
    //         setTimeout(function () {
    //             $(".enabler").each(function(index, el){

    //                 var latlng = $(this).find(".geolocation-latlng").text().split(",");
    //                 // var afz_type = $(this).find(".views-field-field-afz-type").text().toLowerCase();
    //                 // var afz_icon = socialIcon;
    //                 var enabler_name = $(this).find(".views-field-title span a").text();
    //                 // var afz_web = $(this).find(".views-field-field-web-accounts").text();

    //                 //
    //                 // add markers to map
    //                 //
    //                 var markers = [];
    //                 $(".enabler").each(function(index, el){
                        
    //                     var latlng = $(this).find(".geolocation-latlng").text().split(",");
    //                     var enabler_name = $(this).find(".views-field-title span a").text();


    //                     if (latlng.length > 1) {
                            
    //                         var marker = {
    //                             type: 'Feature',
    //                             geometry: {
    //                                 type: 'Point',
    //                                 coordinates: [ latlng[1], latlng[0] ]
    //                             },
    //                             properties: {
    //                               title: enabler_name,
    //                               description: enabler_name
    //                             }
    //                         }

    //                         // console.log(marker.geometry.coordinates);
    //                     }

    //                     markers.push(marker);

    //                 });

    //                 // console.log(markers);

    //                 map.on('load', function() {
    //                     map.addSource( 'enablerMarkers', {
    //                         type: "geojson",
    //                         data: {
    //                             type: 'FeatureCollection',
    //                             features: markers
    //                         },
    //                         cluster: true,
    //                         clusterRadius: 80
    //                     });

    //                     map.addLayer({
    //                         'id': 'enablerMarkers',
    //                         'type': 'symbol',
    //                         'source': 'enablerMarkers',
    //                         'filter': ['!=', 'cluster', true],
    //                         'layout': {
    //                         'text-field': [
    //                         'number-format',
    //                         ['get', 'mag'],
    //                         { 'min-fraction-digits': 1, 'max-fraction-digits': 1 }
    //                         ],
    //                         'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    //                         'text-size': 10
    //                         },
    //                         'paint': {
    //                         'text-color': [
    //                         'case',
    //                         ['<', ['get', 'mag'], 3],
    //                         'black',
    //                         'white'
    //                         ]
    //                         }
    //                     });
    //                 });

    //                 //
    //                 // markers with no clustering
    //                 //
    //                 // var geojson = {
    //                 //   type: 'FeatureCollection',
    //                 //   features: markers
    //                 // };

    //                 // geojson.features.forEach(function(marker) {

    //                 //   // create a HTML element for each feature
    //                 //   var el = document.createElement('div');
    //                 //   el.className = 'marker';

    //                 //   if(marker) {
    //                 //     // console.log(marker);
    //                 //     // setTimeout(function () {
    //                 //         new mapboxgl.Marker(el)
    //                 //             .setLngLat(marker.geometry.coordinates)
    //                 //             .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    //                 //             .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    //                 //             .addTo(map);
    //                 //     // }, 1000);

    //                 //   }
    //                 // });
    //                 //
    //             });
    //         }, 2000);
    //     });

    // }


    // OpenStreet Map
    if($("#map").length > 0) {

      $("#edit-field-hub-type-value option:first-child").html("All Hub Types");

      // search field
      // $(".landing-page .search-form #edit-title-wrapper input.form-control").attr("autocomplete","off").attr("placeholder","Search");


      // console.log("whatever");
      var PALESTINE_BOUNDS = new L.LatLngBounds(new L.LatLng(33.681782, 32.446489), new L.LatLng(30.304947, 37.602425));

      var mymap = L.map('map', {
        minZoom: 9,
        scrollWheelZoom: false, 
        zoomControl: true, 
        maxBounds: PALESTINE_BOUNDS
      }).setView([31.958043, 34.204269], 9);

      // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      //   // attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      // }).addTo(mymap);
      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9yYWR0YWxlZWIiLCJhIjoiY2s2dW45Z29pMDFzMzNlbGcydzk3eTlodCJ9.4ILWxhFr5b3rTb0fFMZPPw', {
        // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NDg1bDA1cjYzM280NHJ5NzlvNDMifQ.d6e-nNyBDtmQCVwVNivz7A', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 9,
        id: 'mapbox.streets'
        // accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      // L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9yYWR0YWxlZWIiLCJhIjoiY2s2dW45Z29pMDFzMzNlbGcydzk3eTlodCJ9.4ILWxhFr5b3rTb0fFMZPPw', {
      // // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NDg1bDA1cjYzM280NHJ5NzlvNDMifQ.d6e-nNyBDtmQCVwVNivz7A', {
      //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //   maxZoom: 18,
      //   id: 'mapbox.streets'
      //   // accessToken: 'your.mapbox.access.token'
      // }).addTo(mymap);

      var markers = L.markerClusterGroup({
        // spiderfyOnMaxZoom: false,
        showCoverageOnHover: false
        // zoomToBoundsOnClick: false
      });

      // var fmarkers = L.markerClusterGroup({
      //   showCoverageOnHover: false
      // });

      function putMarkersToMap(map) {
        
        // remove all markers
        markers.clearLayers();
        mymap.removeLayer(markers);

        var marker = null;

        // console.log($(".enabler"));

        var defIcon = L.icon({
          iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png",
          iconSize:     [38, 38], // [38, 95] size of the icon
          iconAnchor:   [38, 38], // [22, 94] point of the icon which will correspond to marker's location
          popupAnchor:  [-19, -40] // [-3, -76] point from which the popup should open relative to the iconAnchor
        });

        var incIcon = L.icon({
        iconUrl: Drupal.settings.basePath+'sites/all/themes/bootstrap/images/markers/social.png',
          iconSize:     [38, 38], // [38, 95] size of the icon
          iconAnchor:   [38, 38], // [22, 94] point of the icon which will correspond to marker's location
          popupAnchor:  [-19, -40] // [-3, -76] point from which the popup should open relative to the iconAnchor
        });

        var cowIcon = L.icon({
          iconUrl: Drupal.settings.basePath+'sites/all/themes/bootstrap/images/markers/place.png',
          iconSize:     [38, 38],  // size of the icon
          iconAnchor:   [38, 38],  // point of the icon which will correspond to marker's location
          popupAnchor:  [-19, -40] // point from which the popup should open relative to the iconAnchor
        });

        var accIcon = L.icon({
          iconUrl: Drupal.settings.basePath+'sites/all/themes/bootstrap/images/markers/cafe.png',
          iconSize:     [38, 38],  // size of the icon
          iconAnchor:   [38, 38],  // point of the icon which will correspond to marker's location
          popupAnchor:  [-19, -40] // point from which the popup should open relative to the iconAnchor
        });

        var arrayOfLatLngs = [];

        $(".enabler").each(function(index, el){

          // console.log($(this));

          var latlng = $(this).find(".geolocation-latlng").text().split(",");
          arrayOfLatLngs[index] = latlng;
          var hub_type = $(this).find(".views-field-field-hub-type").text().toLowerCase();
          var hub_icon = defIcon;
          var enabler_name = $(this).find(".views-field-field-space-name").text();
          var enabler_type = $(this).find(".views-field-field-hub-type").html();
          var enabler_bio = $(this).find(".views-field-field-space-bio").html();
          var operating_hours = $(this).find(".views-field-field-opening-hours").html();
          var enabler_space = $(this).find(".views-field-field-space").html();
          var enabler_links = $(this).find(".views-field-field-hub-social-links").html();
          var enabler_link = $(this).find(".views-field-view-user").html();

          if ( hub_type.search("incubator") >= 0 ) {
            hub_icon = incIcon;
          }
          if ( hub_type.search("accelerator") >= 0 ) {
            hub_icon = accIcon;
          }
          if ( hub_type.search("coworking") >= 0 ) {
            hub_icon = cowIcon;
          }

          if (latlng.length > 1) {
            var popupHtml = "<h3>" + enabler_name + "</h3><p>" + enabler_name + "</p>";

            // marker with different icons
            // var marker = L.marker([latlng[0], latlng[1]], {icon: afz_icon}).addTo(mymap).bindPopup(popupHtml);

            // var marker = L.marker([latlng[0], latlng[1]]).addTo(mymap).bindPopup(popupHtml);
            // var marker = L.marker([latlng[0], latlng[1]]).addTo(markers).bindPopup(popupHtml);
            // markers.addLayer(L.marker([latlng[0], latlng[1]]).bindPopup(popupHtml));
            // markers.addLayer(L.marker([latlng[0], latlng[1]]));

            // marker = L.marker([ latlng[0], latlng[1] ], {icon: hub_icon}).on('click', function(e) {
            marker = L.marker([ latlng[0], latlng[1] ]).on('click', function(e) {
                          renderInfo(enabler_name, enabler_type, enabler_bio, operating_hours, enabler_space, enabler_links, enabler_link);
                        });

            // markers.addLayer(L.marker(getRandomLatLng(map)));
            markers.addLayer(marker);

            //.bindPopup(popupHtml));

            // mymap.setView([latlng[0], latlng[1]], 9);
          }
        });
        map.addLayer(markers);
        var mBounds = new L.LatLngBounds(arrayOfLatLngs);
        map.fitBounds(mBounds);
      }

      // Front: show map on view map click
      // $(".view-map-link a").click(function(event){
      //     event.preventDefault;
          
      //     showMap(1000);

      //     window.history.pushState({urlPath:'/hubs'},"",'/hubs');
      // });

    };

    if( $(".hubs-page").length > 0 ) {
      showMap(0);
    }

    // Filter: readd map markers on filter submit
    /// #views-exposed-form-enablers-map-block
    if( $("#views-exposed-form-hubs-map-block").length > 0 ) {
      $("#views-exposed-form-hubs-map-block input.form-text").attr("placeholder","Search hubs...").attr("autocomplete","off");  

      var searchTimeout = null;

      $(document).on("keyup", "#views-exposed-form-hubs-map-block input.form-text", function(){

        clearTimeout(searchTimeout);

        if( $(this).val().length > 2 && $(this).val() != "") {
          searchTimeout = setTimeout( function(){
            // console.log("hey");
            $("#views-exposed-form-hubs-map-block .form-submit").click();
          }, 1000);
        }

        if( $(this).val() == "" ) {
          $("#views-exposed-form-hubs-map-block .form-submit").click();
        }
      });

      $(document).ajaxComplete(function(event,request, settings) {
        if(mapOpened) {
          // console.log("ajaxComplete");
          putMarkersToMap(mymap);
          var input = $("#views-exposed-form-hubs-map-block input.form-text");
          input.focus();
          var tmpStr = input.val();
          input.val('');
          input.val(tmpStr);

          $("#views-exposed-form-hubs-map-block input.form-text").attr("placeholder","Search hubs...").attr("autocomplete","off");
          $("#edit-field-hub-type-value option:first-child").html("All Hub Types");
        }
      });
    }

    // marker info side panel
    function renderInfo(name, hub_type, bio, hours, space, social_links, link) {
      // console.log("hey");
      var content = "";
      content += "<h3>" + name + "</h3><div class='enabler-info'>";
      if (hub_type) {
        content += "<div class='space-type'>" + hub_type + "</div>";
      }
      if (bio) {
        content += bio;
      }
      if (hours) {
        content += hours;
      }
      if (space) {
        content += space;
      }
      if (social_links) {
        content += social_links;
      }
      if (link) {
        content += "<br/>" + link;
      }
      content += "</div>";
      $("#marker-info-panel").css("left", "-100%").html(content).delay(500).css("left", "100px");
      $("#marker-info-panel").append("<div class='close'><span class='glyphicon glyphicon-remove'></span></div>");
      $("#marker-info-panel .close").click(function(){
        $(this).parent().css("left", "-100%");
      });
    }

    function showMap(time) {
      mapOpened = true;

      // Remove home text and search
      // $(".search-section").css("transform", "translate(-150%, 0)");
      // $(".view-map-link").css("transform", "translate(150%, 0)");
      // $(".landing-content").fadeOut(2000);
      
      // after 2 seconds
      // Change layer
      setTimeout(function () {
        // map.setStyle('mapbox://styles/mapbox/streets-v11');
        // mymap.removeLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9yYWR0YWxlZWIiLCJhIjoiY2s2dW45Z29pMDFzMzNlbGcydzk3eTlodCJ9.4ILWxhFr5b3rTb0fFMZPPw', {
        // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NDg1bDA1cjYzM280NHJ5NzlvNDMifQ.d6e-nNyBDtmQCVwVNivz7A', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          minZoom: 9,
          id: 'mapbox.streets'
          // accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

      }, time);
      
      // after 1 second
      // Add zoom and rotation controls to the map.
      setTimeout(function () {
        // map.addControl(new mapboxgl.NavigationControl());
        $(".leaflet-top, .leaflet-left, .leaflet-right").fadeIn();
      }, 1500);

      setTimeout(function () {
        $(".region-sidebar-second").fadeIn();
      }, 1800);
      
      // Add markers
      // one marker each 0.5 second
      setTimeout(function () {

        // todo: create a function to add markers
        /// used first time to add all markers
        /// on filter submit to add filtered markers
        putMarkersToMap(mymap);

      }, 2000);
    }

  });

})(jQuery, Drupal, this, this.document);


  var map;
  var heatmap;
  var geocoder = new google.maps.Geocoder();
(function(){


  var temp_data = [{"lat":"39.918953000000000000000","lon":"-75.176754000000000000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.175304000000000000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.173853999999990000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.172403999999990000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.170953999999980000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.169503999999980000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.168053999999970000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.166603999999960000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.165153999999960000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.163703999999950000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.162253999999950000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.160803999999940000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.159353999999940000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.157903999999930000000","url":"img\/32\/20.png"},{"lat":"39.918953000000000000000","lon":"-75.156453999999930000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.176754000000000000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.175304000000000000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.173853999999990000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.172403999999990000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.170953999999980000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.169503999999980000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.168053999999970000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.166603999999960000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.165153999999960000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.163703999999950000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.162253999999950000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.160803999999940000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.159353999999940000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.157903999999930000000","url":"img\/32\/20.png"},{"lat":"39.920403000000000000000","lon":"-75.156453999999930000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.176754000000000000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.175304000000000000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.173853999999990000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.172403999999990000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.170953999999980000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.169503999999980000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.168053999999970000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.166603999999960000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.165153999999960000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.163703999999950000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.162253999999950000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.160803999999940000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.159353999999940000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.157903999999930000000","url":"img\/32\/20.png"},{"lat":"39.921853000000000000000","lon":"-75.156453999999930000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.176754000000000000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.175304000000000000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.173853999999990000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.172403999999990000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.170953999999980000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.169503999999980000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.168053999999970000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.166603999999960000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.165153999999960000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.163703999999950000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.162253999999950000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.160803999999940000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.159353999999940000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.157903999999930000000","url":"img\/32\/20.png"},{"lat":"39.923303000000000000000","lon":"-75.156453999999930000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.176754000000000000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.175304000000000000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.173853999999990000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.172403999999990000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.170953999999980000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.169503999999980000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.168053999999970000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.166603999999960000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.165153999999960000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.163703999999950000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.162253999999950000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.160803999999940000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.159353999999940000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.157903999999930000000","url":"img\/32\/20.png"},{"lat":"39.924753000000000000000","lon":"-75.156453999999930000000","url":"img\/32\/20.png"}] ;

  var center_lat = 39.8282;
  var center_long = -98.5795;
  var center = new google.maps.LatLng(center_lat, center_long)
  var markers = [];

  //viewport corners
  var viewport_ne;
  var viewport_sw; 

  function initialize() {
    var mapOptions = {
      zoom: 5,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      backgroundColor: "black"
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    eventHandles();
    

  }

    //handle events
  function eventHandles(){
    //on zoom
    var t;
    google.maps.event.addListener(map, 'zoom_changed', 
      function() {
            clearTimeout(t);
            t = setTimeout(function(){
                getCrimes();
            },500);

        var zoomLevel = map.getZoom();
        console.log(zoomLevel);
        //infowindow.setContent('Zoom: ' + zoomLevel);
    });


  }


  function generateMarker(latitude, longitude, image_url){
    var location = new google.maps.LatLng(latitude, longitude);

    marker = new google.maps.Marker({
      map:map,
      draggable:false,
      animation: google.maps.Animation.DROP,
      position: location,
      icon: image_url
    });
    markers.push(marker);

    //add mouseover event

    google.maps.event.addListener(marker, 'mouseover',
      function(){

        //alert('hi');

    });

    generateInfo(marker);

  }

  function clearMarkers(){
    if (markers) {
      for (var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
      }
    }
    markers = [];
    console.log(markers);
    
  }


  function getCrimes(){

                viewport_ne = map.getBounds().getNorthEast();
                viewport_sw = map.getBounds().getSouthWest();
                
    data = 
    {
      "max_lat": viewport_ne.lat(),
      "min_lat": viewport_sw.lat(),
      "max_lon": viewport_ne.lng(),
      "min_lon": viewport_sw.lng()
    }
    $.getJSON("http://maps.hulce.net/crime_points.php", data, function(data){
      console.log(data);
      var heatmapData = [];
      for(var i=0;i<data.points.length;i++) {
          var the_point = data.points[i];
          var elem = {
              location: new google.maps.LatLng(the_point.lat,the_point.lon),
              weight : the_point.level
          };
          heatmapData.push(elem);
          console.log(elem);
      }
      
        if(heatmap!=null) {
            heatmap.setMap(null);
        }
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          radius: 40,
          opacity: 1,
          gradient: ['#f00','#0f0']
        });
        console.log(heatmapData);
        heatmap.setMap(map);
    

    });

  }




  google.maps.event.addDomListener(window, 'load', initialize);



  function generateInfo(marker){

        var contentString = '<div class="marker-info">hihi</div>';

        infoBubble = new InfoBubble({
          maxWidth: 300,
          content: contentString,
          disableAutoPan: true,
          hideCloseButton: true
        });

        var div = document.createElement('DIV');
        div.innerHTML = 'Hello';


        google.maps.event.addListener(marker, 'mouseover', function() {
          if (!infoBubble.isOpen()) {
            infoBubble.open(map, marker);
            //updateStyles();
          }
        });
         google.maps.event.addListener(marker, 'mouseout', function() {
          if (infoBubble.isOpen()) {
            infoBubble.close(map, marker);
          }
        });
        


      }

      function updateStyles() {
        var shadowStyle = document.getElementById('shadowstyle').value;
        infoBubble.setShadowStyle(shadowStyle);

        var padding = document.getElementById('padding').value;
        infoBubble.setPadding(padding);

        var borderRadius = document.getElementById('borderRadius').value;
        infoBubble.setBorderRadius(borderRadius);

        var borderWidth = document.getElementById('borderWidth').value;
        infoBubble.setBorderWidth(borderWidth);

        var borderColor = document.getElementById('borderColor').value;
        infoBubble.setBorderColor(borderColor);

        var backgroundColor = document.getElementById('backgroundColor').value;
        infoBubble.setBackgroundColor(backgroundColor);

        var maxWidth = document.getElementById('maxWidth').value;
        infoBubble.setMaxWidth(maxWidth);

        var maxHeight = document.getElementById('maxHeight').value;
        infoBubble.setMaxHeight(maxHeight);

        var minWidth = document.getElementById('minWidth').value;
        infoBubble.setMinWidth(minWidth);

        var minHeight = document.getElementById('minHeight').value;
        infoBubble.setMinHeight(minHeight);

        var arrowSize = document.getElementById('arrowSize').value;
        infoBubble.setArrowSize(arrowSize);

        var arrowPosition = document.getElementById('arrowPosition').value;
        infoBubble.setArrowPosition(arrowPosition);

        var arrowStyle = document.getElementById('arrowStyle').value;
        infoBubble.setArrowStyle(arrowStyle);
      }


  

  

})();



function search(address){
    var ret;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.panTo(results[0].geometry.location);
        map.setZoom(15);
        ret = true;
      } else {
        console.log(status);
        ret = false;
      }
    });
    return ret;
  }







//****Issue Instagram API Call****
Instagram.mediaLocation(function(response) {
  displayMap();

  for(var i = 0; i < response.data.length; i++) {
    createColumn(response, i);
    addMarkerListener(response, i);

  }
});




/* 
Create Google Map
======================= */

//Bug Fix to ReDraw Map on Show/Hide
function displayMap() {
  document.getElementById('map').style.display="block";
  initMap();
}


//Init new Google Maps
var map;
var userLatLng = {lat: 31.221992, lng: 121.444988};
var mapOptions = {
      center: userLatLng,
      zoom: 13,
      scrollwheel: false
    };

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}


//Create a Marker for Each Instagram Picture
//Marker is attached with Event Listeners
var icon = 'img/logo-40.png';
var iconLight = 'img/pin-green-40.png';
var allMarkers = [];
var markers = [];

function addMarkerListener(response, loopCount) {
  var mediaLat = response.data[loopCount].location.latitude;
  var mediaLng = response.data[loopCount].location.longitude;

  allMarkers[loopCount] = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: {lat: mediaLat, lng: mediaLng},
    map: map,
    id: 'tile' + loopCount,
    icon: icon,
    title: 'Marker' + loopCount
  });

  //Draw Marker into Map
  allMarkers[loopCount].setMap(map);
      /*================*/
      console.log("adding marker " + loopCount);
      /*================*/

  
  //Marker is attached with Event Listeners
  var tileId = '#tile' + (loopCount + 1);
      /*================*/
      console.log("#tile ID is " + tileId);
      /*================*/
  allMarkers[loopCount].addListener('mouseover', function() {
        /*================*/
        console.log("marker " + loopCount + " mouseover");
        /*================*/
    $(tileId).toggleClass('highlight');
  });

  allMarkers[loopCount].addListener('mouseout', function() {
        /*================*/
        console.log("marker " + loopCount + " mouseout");
        /*================*/
    $(tileId).toggleClass('highlight');
  });
}


/* 
Highlight Markers - Hover in/out of Photos
======================= */

// Match Photo Tiles Map Markers Icon
// Highlight the Icon if it matches the photo
function tileHover() {
      /*================*/
      console.log('hover ' + this.id);
      /*================*/
  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(iconLight);
      break;
    }
  }
}

// Match Photo Tiles Map Markers Icon
// Set the Icon back to default on tileOut
function tileOut() {
      /*================*/
      console.log('out '  + this.id);
      /*================*/
  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(icon);
      break;
    }
  }
}



//Get Array of all Photo Tiles
//Add Event Listener to all Photo Tiles
function addTileListener() {
  var tile = document.getElementById('instagram').getElementsByClassName('tile');
      /*================*/
      console.log("tile length is " + tile.length);
      console.log("tile array " + tile);
      /*================*/

  for(var i = 0; i < tile.length; i++) {
    tile[i].addEventListener('mouseover', tileHover, false);
    tile[i].addEventListener('mouseout', tileOut, false);
    /*================*/
    console.log(tile[i]);
    console.log("Add listener"+tile[i]);
    /*================*/
  }
}






//Add Google Maps Event Listener
/*google.maps.event.addDomListener(window, 'load', function () {
  

      // Add Marker 1
      var marker1 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: 51.507351, lng: -0.127758},
        map: map,
        id: 'tile1',
        icon: icon,
        title: "Marker1"
      });
      allMarkers.push(marker1);

      marker1.addListener('mouseover', function(){
        console.log("marker1 mouseover");
        $('#tile1').toggleClass('highlight');
      });

      marker1.addListener('mouseout', function(){
        console.log("marker1 mouseout");
        $('#tile1').toggleClass('highlight');
      });


      // Add Marker 2
      var marker2 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: 51.504787, lng: -0.113469},
        map: map,
        id: 'tile2',
        icon: icon,
        title: "Marker2"
      });
      allMarkers.push(marker2);

      marker2.addListener('mouseover', function(){
        console.log("marker2 mouseover");
        $('#tile2').toggleClass('highlight');
      });

      marker2.addListener('mouseout', function(){
        console.log("marker2 mouseout");
        $('#tile2').toggleClass('highlight');
      });


      // Add Marker 3
      var marker3 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: 51.524112, lng: -0.118147},
        map: map,
        id: 'tile3',
        icon: icon,
        title: "Marker3"
      });
      allMarkers.push(marker3);

      marker3.addListener('mouseover', function(){
        console.log("marker3 mouseover");
        $('#tile3').toggleClass('highlight');
      });

      marker3.addListener('mouseout', function(){
        console.log("marker3 mouseout");
        $('#tile3').toggleClass('highlight');
      });


      // Add Marker 4
      var marker4 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: 51.508051, lng: -0.168641},
        map: map,
        id: 'tile4',
        icon: icon,
        title: "Marker4"
      });
      allMarkers.push(marker4);

      marker4.addListener('mouseover', function(){
        console.log("marker4 mouseover");
        $('#tile4').toggleClass('highlight');
      });

      marker4.addListener('mouseout', function(){
        console.log("marker4 mouseout");
        $('#tile4').toggleClass('highlight');
      });

});*/
/*END DOM Window Listener*/






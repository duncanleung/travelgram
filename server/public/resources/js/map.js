/* 
Create Google Map
======================= */
//Init new Google Maps
var map;

function initMap(lat, lng) {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 13,
      scrollwheel: false
    });
}

//Bug Fix to ReDraw Map on Show/Hide
function displayMap(lat, lng) {
  document.getElementById('map').style.display="block";
  initMap(lat, lng);
}

//Create a Marker for Each Instagram Picture
var icon = 'resources/img/logo-40.png';
var iconLight = 'resources/img/pin-green-40.png';
var allMarkers = [];
var markers = [];

//Marker is attached with Event Listeners
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

  //Marker is attached with Two Event Listeners
  var tileId = '#tile' + (loopCount);

  allMarkers[loopCount].addListener('mouseover', function() {
    $(tileId).toggleClass('highlight');
  });

  allMarkers[loopCount].addListener('mouseout', function() {
    $(tileId).toggleClass('highlight');
  });
}

//All Tiles Attached with Two Event Listeners
function addTileListener() {
  var tileArray = document.getElementById('instagram').getElementsByClassName('tile');

  for(var i = 0; i < tileArray.length; i++) {
    tileArray[i].addEventListener('mouseover', tileHover, false);
    tileArray[i].addEventListener('mouseout', tileOut, false);
  }
}

//Highlight the Marker if it matches the Tile
function tileHover() {

  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(iconLight);
      break;
    }
  }
}

//Set the Marker back to default on tileOut
function tileOut() {
  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(icon);
      break;
    }
  }
}
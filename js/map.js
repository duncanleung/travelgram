
var londonLatLang = {lat: 51.507351, lng: -0.127758};
var map;
var icon = 'img/logo-40.png';
var iconLight = 'img/pin-green-40.png';
var allMarkers = [];

/* 
Create Google Map
======================= */
function displayMap() {
  document.getElementById('map').style.display="block";
  initMap();
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: londonLatLang,
    zoom: 13,
    scrollwheel: false
  });

  //Add Google Maps Event Listener
  google.maps.event.addDomListener(window, 'load', function () {
    

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

  });/*END DOM Window Listener*/

}/*END Google Maps*/



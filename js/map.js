
var londonLatLang = {lat: 51.507351, lng: -0.127758};
var map;
var icon = 'img/logo.png';
var iconLight = 'img/pin-green.png';
var allMarkers = [];

//- CREATE MAP
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: londonLatLang,
    zoom: 13
  });

  /*DOM LISTENER*/
  google.maps.event.addDomListener(window, 'load', function () {
    
    //- ADD MARKERS   
    var marker1 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.507351, lng: -0.127758},
      map: map,
      id: 1,
      icon: icon,
      title: "Marker1"
    });
    allMarkers.push(marker1);

    var marker2 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.504787, lng: -0.113469},
      map: map,
      id: 2,
      icon: icon,
      title: "Marker2"
    });
    allMarkers.push(marker2);

    var marker3 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.524112, lng: -0.118147},
      map: map,
      id: 3,
      icon: icon,
      title: "Marker3"
    });
    allMarkers.push(marker3);

    var marker4 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.508051, lng: -0.168641},
      map: map,
      id: 4,
      icon: icon,
      title: "Marker4"
    });
    allMarkers.push(marker4);

    google.maps.event.addDomListener(marker1, 'mouseover', function(){
      console.log("marker1 hover");
      $('#tile1').toggleClass('.highlight');
    });
  });/*DOM WINDOW LISTENER*/

}/*END CREATE MAP*/

//- HIGHLIGHT MARKER ON DIV HOVER
function hover(id) {
  for(var i=0; i<allMarkers.length; i++) {
    if(id === allMarkers[i].id) {
      allMarkers[i].setIcon(iconLight);
      break;
    }
  }
}

function out(id) {
  for(var i=0; i<allMarkers.length; i++) {
    if(id === allMarkers[i].id) {
      allMarkers[i].setIcon(icon);
      break;
    }
  }
}






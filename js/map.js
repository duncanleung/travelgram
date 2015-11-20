
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
    
    //- ADD MARKER 1 
    var marker1 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.507351, lng: -0.127758},
      map: map,
      id: 1,
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

    //- ADD MARKER 2
    var marker2 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.504787, lng: -0.113469},
      map: map,
      id: 2,
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

    //- ADD MARKER 3
    var marker3 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.524112, lng: -0.118147},
      map: map,
      id: 3,
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

    //- ADD MARKER 4
    var marker4 = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: {lat: 51.508051, lng: -0.168641},
      map: map,
      id: 4,
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

    /*
        - If mousemove in map
        - If marker1 is hovered over
        - set marker = marker1
        - run mouseover/mouseout listeners
    */

/*    google.maps.event.addDomListener(map, 'mousemove', function(){

    });
    
    google.maps.event.addDomListener(marker, 'mouseover', function(){
      switch (marker) {
        case marker1:
          console.log("marker1 mouseover");
          $('#tile1').toggleClass('highlight');

        case marker2:
          console.log("marker2 mouseover");
          $('#tile2').toggleClass('highlight');
      }
    });*/



/*    google.maps.event.addDomListener(marker1, 'mouseover', function(){
      console.log("marker1 mouseover");
      $('#tile1').toggleClass('highlight');
    });

    google.maps.event.addDomListener(marker1, 'mouseout', function(){
      console.log("marker1 mouseout");
      $('#tile1').toggleClass('highlight');
    });*/
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





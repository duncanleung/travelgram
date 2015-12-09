/* 
Places AutoComplete for Search Fields
======================= */

var heroSearchEle = document.getElementById('hero-search');
var placeSearch, autocomplete;

//Init Autocomplete via Google API
function initialize() {
  //Create autocomplete object
  //restrict search to geographical location types

  autocomplete = new google.maps.places.Autocomplete(heroSearchEle, {
    types: ['geocode']
  });

  //when user selects address from dropdown
  //grab the lat lng
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    getLatLng();
  });
}

function getLatLng() {
  //get place details from autocomplete object

  var place = autocomplete.getPlace();

  var lat = place.geometry.location.lat();
  var lng = place.geometry.location.lng();

  console.log(place);
  console.log(lat);
  console.log(lng);
}

initialize();
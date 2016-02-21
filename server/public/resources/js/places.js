
// Places AutoComplete for Search Fields
// =======================

var heroSearchEle = document.getElementById('hero-search');

var placeSearch;
var autocomplete;

//Init Autocomplete via Google API
function initAutoComplete() {

  autocomplete = new google.maps.places.Autocomplete(heroSearchEle, {
    types: ['geocode']
  });

  //Get Lat, Lng: When user selects from dropdown
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    getLatLng();
  });
}

//Get Google Place Details
function getLatLng() {

  var place = autocomplete.getPlace();

  var lat = place.geometry.location.lat();
  var lng = place.geometry.location.lng();

  //Show Results and hide Main
  hideMain();

  //Issue Instagram API Call with new Lat, Lng
  callInstagram(lat, lng);
}

initAutoComplete();
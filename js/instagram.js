/*
Create AJAX Request to Instagram's API
=================== */

window.Instagram = {

  config: {},

  BASE_URL: 'https://api.instagram.com/v1',

  init: function(opt) {
    opt = opt || {};

    this.config.access_token = opt.access_token;
  },

  //Get list of photos from own account
  mediaSelf: function(callback) {
    var endpoint = this.BASE_URL + '/users/self/media/recent/?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

  //Get list of photos in location Lat Lang
    /*Later can take lat and lang, pass as params*/
  mediaLocation: function(callback) {
    var endpoint = this.BASE_URL + '/media/search?distance=5000&lat=31.221992&lng=121.444988&access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

/*  //https://api.instagram.com/v1/locations/{location-id}?access_token=ACCESS-TOKEN

  locationName: function(callback, locationId) {
    var endpoint = this.BASE_URL + '/locations/' + locationId + '?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },*/


  //Get list of recently tagged photos
/*  tagsByName: function(name, callback) {
    var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },*/

  getJSON: function(url, callback) {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(response) {
        if(typeof callback === 'function') callback(response);
      }

    });
  }

};


Instagram.init({
  access_token: ''
});


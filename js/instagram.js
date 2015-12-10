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

  //Get Photos from Own Account **For Testing**
  mediaSelf: function(callback) {
    var endpoint = this.BASE_URL + '/users/self/media/recent/?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

  //Get list of photos in location Lat Lang
  mediaLocation: function(callback, lat, lng) {
    var endpoint = this.BASE_URL + '/media/search?distance=5000&lat=' + lat + '&lng=' + lng + '&access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

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


/*CLIENT ID: b3001e3cef15421db569c0dbd8024147 */
/*ACCESS TOKEN: 18470568.b3001e3.47348909df8444f4a09778e6221cbbeb*/
/*http://127.0.0.1*/

/*ALLOW SCOPE: https://api.instagram.com/oauth/authorize/?client_id=b3001e3cef15421db569c0dbd8024147&redirect_uri=http://127.0.0.1&response_type=code&scope=public_content*/

window.Instagram = {

  /*
  Store App Settings
  =================== */
  config: {},

  BASE_URL: 'https://api.instagram.com/v1',

  init: function(opt) {
    opt = opt || {};

    this.config.access_token = opt.access_token;
  },

/*  popular: function(callback) {
    var endpoint = this.BASE_URL + '/media/popular?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },*/

  mediaSelf: function(callback) {
    var endpoint = this.BASE_URL + '/users/self/media/recent/?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },


  //Get list of photos in location Lat Lang
    /*Later can take lat and lang, pass as params*/
  mediaLocation: function(callback) {
    var endpoint = this.BASE_URL + '/media/search?distance=1000&lat=31.222346&lng=121.446249&access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

/*  locationMedia: function(locationId, callback) {
    var endpoint = this.BASE_URL + '/locations/' + locationId + '/media/recent?access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },*/

  //Get list of recently tagged photos
  tagsByName: function(name, callback) {
    var endpoint = this.BASE_URL + '/tags/' + name + '/media/recent?access_token=' + this.config.access_token;
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
  access_token: '18470568.b3001e3.47348909df8444f4a09778e6221cbbeb'
});


/*Instagram.location(function(response)) {
  var $instagram  = $('#instagram');

  for(var i = 0; i < response.data.length; i++) {
    imageUrl = response.data[i].images.low_resolution.url;
    $instagram.append('<img src=' + )
  }
};

*/







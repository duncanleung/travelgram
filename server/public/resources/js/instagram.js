
// Create AJAX Request to Instagram's API
// ===================
window.Instagram = {

  config: {
    access_token: ''
  },

  BASE_URL: 'https://api.instagram.com/v1',

  //Get list of photos in location Lat Lang
  mediaLocation: function(callback, lat, lng) {
    var endpoint = this.BASE_URL + '/media/search?distance=5000&lat=' + lat + '&lng=' + lng + '&access_token=' + this.config.access_token;
    this.getJSON(endpoint, callback);
  },

  getJSON: function(url, callback) {
    
    // jQuery JSONP used to circumvent cross-domain request
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp',
      success: function(response) {
        callback(response);
      }

    });
  }

};


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
    var endpoint = this.BASE_URL + '/media/search?distance=5000&lat=22.282919&lng=114.152768&access_token=' + this.config.access_token;
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
  access_token: ''
});


(function() {

  //Append everything to container instagramDiv
  var instagramDiv  = document.getElementById('instagram');

  //Create wrapper divColumn to set BootStrap Columns
  function createColumn(response, loopCount) {
    var divColumn = document.createElement('div');
    divColumn.className = "col-md-12 col-lg-6";
    instagramDiv.appendChild(divColumn);

    createTile(response, loopCount, divColumn);
  }

  //Create Tile Wrapper to contain: Header, Photo, Footer
  function createTile(response, loopCount, parent) {
    var divTile = document.createElement('div');
    divTile.id = 'tile' + (loopCount+1);
    divTile.className = 'tile';
    parent.appendChild(divTile);

    createTileHeader(response, loopCount, divTile);
    createTilePhoto(response, loopCount, divTile);
    createTileFooter(response, loopCount, divTile);
  }

  //Create Tile Header to contain profile info
  function createTileHeader(response, loopCount, parent) {
    var divTileHeader = document.createElement('div');
    divTileHeader.className = 'tile-header';
    parent.appendChild(divTileHeader);
  }

  //Create Tile to contain Instagram Photo
  function createTilePhoto(response, loopCount, parent) {
    var divTilePhoto = document.createElement('div');
    divTilePhoto.className = "tile-photo";
    parent.appendChild(divTilePhoto);

    //Append Instagram Image to divTilePhoto
    var newImgEle = document.createElement('img');
    var imageUrl = response.data[loopCount].images.standard_resolution.url;
    
    newImgEle.setAttribute('src', imageUrl);
    divTilePhoto.appendChild(newImgEle);
  }

  //Create Tile Footer to contain Instagram description info
  function createTileFooter(response, loopCount, parent) {
    var divTileFooter = document.createElement('div');
    divTileFooter.className = 'tile-footer';
    parent.appendChild(divTileFooter);
  }
        //THIS STUFF IS IN THE HEADER
          //create div with class=profile
            //create img with src=profile
              //create p with class=username: text:username
          //create div with class=time : text:timestamp?

        //THIS STUFF IS IN THE FOOTER
          //create div with class=likes text: #likes likes
          //create div with class=description text: description


  //Issue Instagram API Call
  Instagram.mediaSelf(function(response) {
    for(var i = 0; i < response.data.length; i++) {
      createColumn(response, i);
    }
  });

})();


/*
<div class="col-md-12 col-lg-6">
  <div id="tile1" class="tile">
    <div class="tile-header">
      <div class="profile"><img src="img/profile/graceful.jpg" alt="">
        <p class="username">gracefuls</p>
      </div>
      <div class="time">38m ago</div>
    </div>
    <div class="tile-photo"><img src="img/results/london.jpg" alt=""></div>
    <div class="tile-footer">
      <div class="likes">48 likes</div>
      <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</div>
    </div>
  </div>
</div>

*/
























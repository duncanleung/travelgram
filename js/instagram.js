

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
  access_token: '18470568.b3001e3.47348909df8444f4a09778e6221cbbeb'
});


(function() {

//Append everything to container instagramDiv
var instagramDiv  = document.getElementById('instagram');

//Create wrapper divColumn to set BootStrap Columns
function createColumnDiv(response, loopCount) {
  var divColumn = document.createElement('div');
  divColumn.className = "col-md-12 col-lg-6";
  instagramDiv.appendChild(divColumn);

  createTileDiv(response, loopCount, divColumn);
}

//Create wrapper divTile to set Tile Wrapper
function createTileDiv(response, loopCount, parent) {
  var divTile = document.createElement('div');
  divTile.id = "tile" + (loopCount+1);
  divTile.className = "tile";
  parent.appendChild(divTile);

  //Append Images to divTile
  var newImgEle = document.createElement('img');
  var imageUrl = response.data[loopCount].images.low_resolution.url;
  
  newImgEle.setAttribute('src', imageUrl);
  divTile.appendChild(newImgEle);

  console.log("creating Tile Div for Pic "+ loopCount);
  console.log(newImgEle);
}

  //loop to create response.data.length # of div with class="col"
    
    //create div with id=tile# class=tile<<<<

      //create div with class="tile-header"
        //create div with class=profile
          //create img with src=profile
            //create p with class=username: text:username
        //create div with class=time : text:timestamp?
      //create div with class=tile-photo
        //create img with src="photooo"
      //create div with class=tile-footer
        //create div with class=likes text: #likes likes
        //create div with class=description text: description

  Instagram.mediaSelf(function(response) {
    
    for(var i = 0; i < response.data.length; i++) {
      
      //Append everything inside container instagramDiv
      //Create divColumn
      //Append Images to divColumn
      createColumnDiv(response, i);
      
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





/*(function() {

  Instagram.mediaSelf(function(response) {
    var instagramDiv  = document.getElementById('instagram');

    

    for(var i = 0; i < response.data.length; i++) {
      
      //Append Images to instagramDiv
      var newImgEle = document.createElement('img');
      var imageUrl = response.data[i].images.low_resolution.url;
      
      newImgEle.setAttribute('src', imageUrl);
      instagramDiv.appendChild(newImgEle);
    }
  });

})();*/



























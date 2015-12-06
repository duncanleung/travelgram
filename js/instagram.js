

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


/*
//Make an API call to Instagram
//Pull photos and wrap them with TileHeader and TileFooter
//Append them into the Results Section of the page
========================== */

  //Append everything to container instagramDiv
  var instagramDiv = document.getElementById('instagram');

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
    divTile.id = 'tile' + (loopCount);
    divTile.className = 'tile';
    parent.appendChild(divTile);

    createTileHeader(response, loopCount, divTile);
    createTilePhoto(response, loopCount, divTile);
    createTileFooter(response, loopCount, divTile);
    addTileListener();
  }

  //Create Tile Header to contain profile info
  function createTileHeader(response, loopCount, parent) {
    var divTileHeader = document.createElement('div');
    divTileHeader.className = 'tile-header';
    parent.appendChild(divTileHeader);

    createProfile(response, loopCount, divTileHeader);
  }

  function createProfile(response, loopCount, parent) {
    var divProfile = document.createElement('div');
    divProfile.className = 'profile';
    parent.appendChild(divProfile);

    //Pull Instagram Profile Photo
    printProfilePic(response, loopCount, divProfile);


    var divText = document.createElement('div');
    divText.className = 'profile-text';
    divProfile.appendChild(divText);

    //Print Username
    printUsername(response, loopCount, divText);
    //Print Location Where Photo was Taken
    printLocation(response, loopCount, divText);
  }

  //Pull Profile Picture
  function printProfilePic(response, loopCount, parent) {
    var newImgEle = document.createElement('img');
    var profileUrl = response.data[loopCount].user.profile_picture;

    newImgEle.setAttribute('src', profileUrl);
    parent.appendChild(newImgEle);
  }

  //Pull Username
  function printUsername(response, loopCount, parent) {
    var newPEle = document.createElement('p');
    var username = response.data[loopCount].user.username;

    newPEle.className = 'username';
    newPEle.textContent = username;
    parent.appendChild(newPEle);
  }

  //Pull Location where Photo was Taken
  function printLocation(response, loopCount, parent) {
    var locationName = response.data[loopCount].location.name;
    var newPEle = document.createElement('p');

    newPEle.className = 'location';
    newPEle.textContent = 'Location: ' + locationName;
    parent.appendChild(newPEle);
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

    //Print Photo Caption
    printCaption(response, loopCount, divTileFooter);
  }
  
  //Pull Caption
  function printCaption(response, loopCount, parent) {
    var caption = response.data[loopCount].caption.text;
    var newPEle = document.createElement('p');

    // console.log(caption)
    newPEle.className = 'caption';
    newPEle.textContent = caption;
    parent.appendChild(newPEle);
  }

  //STUFF IN FOOTER TO FINISH CODING
  //create div with class=likes text: #likes likes
  //create div with class=description text: description


//STUFF IN HEADER TO FINISH CODING
  //create div with class=profile
    //create img with src=profile
      //create p with class=username: text:username
  //create div with class=time : text:timestamp?

/*
    <div class="tile-header">
      <div class="profile"><img src="img/profile/graceful.jpg" alt="">
        <p class="username">gracefuls</p>
      </div>
      <div class="time">38m ago</div>
    </div>

    <div class="tile-footer">
      <div class="likes">48 likes</div>
      <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</div>
    </div>
*/





















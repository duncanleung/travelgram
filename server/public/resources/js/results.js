
// Build Out Results Section with Instagram Photos
// =======================

//Append everything to container instagramDiv
var instagramDiv = document.getElementById('instagram');

//Set BootStrap Columns
function createColumn(response, loopCount) {
  var divColumn = document.createElement('div');
  divColumn.className = "col-md-12 col-lg-6";
  instagramDiv.appendChild(divColumn);

  createTile(response, loopCount, divColumn);
}

//Main Tile Wrapper
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

//Contains Profile Info
function createTileHeader(response, loopCount, parent) {
  var divTileHeader = document.createElement('div');
  divTileHeader.className = 'tile-header';
  parent.appendChild(divTileHeader);

  createProfile(response, loopCount, divTileHeader);
  printTimestamp(response, loopCount, divTileHeader);
}

//Contains Username, Location
function createProfile(response, loopCount, parent) {
  var divProfile = document.createElement('div');
  divProfile.className = 'profile';
  parent.appendChild(divProfile);

  printProfilePic(response, loopCount, divProfile);

  var divText = document.createElement('div');
  divText.className = 'profile-text';
  divProfile.appendChild(divText);

  printUsername(response, loopCount, divText);
  printLocation(response, loopCount, divText);
}

//Contains Instagram Photo
function createTilePhoto(response, loopCount, parent) {
  var divTilePhoto = document.createElement('div');
  divTilePhoto.className = "tile-photo";
  parent.appendChild(divTilePhoto);

  printPhoto(response, loopCount, divTilePhoto);
}

//Contains Instagram description info
function createTileFooter(response, loopCount, parent) {
  var divTileFooter = document.createElement('div');
  divTileFooter.className = 'tile-footer';
  parent.appendChild(divTileFooter);

  printLikes(response, loopCount, divTileFooter);
  printCaption(response, loopCount, divTileFooter);
}



// Pull Specific Data from Instagram API
// =======================
function printPhoto(response, loopCount, parent) {
  var newImgEle = document.createElement('img');
  var imageUrl = response.data[loopCount].images.standard_resolution.url;
  
  newImgEle.setAttribute('src', imageUrl);
  parent.appendChild(newImgEle);
}

function printProfilePic(response, loopCount, parent) {
  var newImgEle = document.createElement('img');
  var profileUrl = response.data[loopCount].user.profile_picture;

  newImgEle.setAttribute('src', profileUrl);
  parent.appendChild(newImgEle);
}

function printUsername(response, loopCount, parent) {
  var newPEle = document.createElement('p');
  var username = response.data[loopCount].user.username;

  newPEle.className = 'username';
  newPEle.textContent = username;
  parent.appendChild(newPEle);
}

function printTimestamp(response, loopCount, parent) {
  var divTimestamp = document.createElement('div');
  var timestamp = response.data[loopCount].created_time;
  
  divTimestamp.className = 'time';
  divTimestamp.textContent = formatTime(timestamp);
  parent.appendChild(divTimestamp);
}

function formatTime(timestamp) {
  var today = new Date();
  var photoTaken = new Date(timestamp * 1000);

  var difference = Math.abs(today - photoTaken);
  var days = Math.ceil(difference / (1000 * 3600 * 24));

  if (days > 1095.75) {
    return '3 years ago';
  }
  else if(days > 730.5) {
    return '2 years ago';
  }
  else if(days > 365.25) {
    return '1 year ago';
  }
  else if(days > 21) {
    return Math.ceil(days/21) + ' weeks ago';
  }
  else if(days > 14) {
    return Math.ceil(days/14) + ' weeks ago';
  }
  else if(days > 7) {
    return Math.ceil(days/7) + ' weeks ago';
  }
  else {
    return days +  ' days ago';
  }
}

function printLocation(response, loopCount, parent) {
  var locationName = response.data[loopCount].location.name;
  var newPEle = document.createElement('p');

  newPEle.className = 'location';
  newPEle.textContent = locationName;
  parent.appendChild(newPEle);
}

function printLikes(response, loopCount, parent) {
  var likes = response.data[loopCount].likes.count;
  var newPEle = document.createElement('p');

  newPEle.className = 'likes';
  newPEle.textContent = likes + ' Likes';
  parent.appendChild(newPEle);
}

function printCaption(response, loopCount, parent) {
  var caption = response.data[loopCount].caption.text;
  var newPEle = document.createElement('p');

  newPEle.className = 'caption';
  newPEle.textContent = caption;
  parent.appendChild(newPEle);
}
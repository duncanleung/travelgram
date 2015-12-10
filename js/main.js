
/*
Issue Instagram API Call
========================== */
function callInstagram(lat, lng) {
  Instagram.mediaLocation(function(response) {
    displayMap(lat, lng);

    for(var i = 0; i < response.data.length; i++) {
      createColumn(response, i);
      addMarkerListener(response, i);
    }
    console.log("finished API call");
  }, lat, lng);
}



/*
Smooth Scroll Functionality
========================== */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        
        return false;
        
        //Set URL Hash
        /*window.location.hash = this.hash;*/
        
      }
    }
  });
});


/*
Show Fixed Nav when scroll below 635px
========================== */
function scrollNav() {
  if(window.pageYOffset>635) {
    document.getElementById('fixed-nav').classList.remove('hide');
  }
  //Hide Fixed Nav when scroll above 635px
  else {
    document.getElementById('fixed-nav').classList.add('hide');
  }
}

//Listen to Scroll and run scrollNav
window.onscroll = scrollNav;




/*
Show / Hide - Results Section and Main Section
========================== */

// Hide all Main Content Sections
function hideMain() {
  var headerEle = document.querySelector('header');
  var searchBarEle = document.getElementById('search-container');
  var discoveryEle = document.getElementById('explore');
  var aboutEle  = document.getElementById('about');
  var footerEle = document.querySelector('footer');
  var bodyEle = document.getElementsByTagName('body');

  bodyEle[0].classList.add('no-scroll');
  headerEle.classList.add('hide');
  searchBarEle.classList.add('hide');
  discoveryEle.classList.add('hide');
  aboutEle.classList.add('hide');
  footerEle.classList.add('hide');

  // showResults Function Run Here
  showResults();
  window.location.hash = '#results';
}

// Show the Photos and Map Section
function showResults() {
  var resultsEle = document.getElementById('results');
  resultsEle.classList.remove('hide');

  //Fix Google Maps Show/Hide bug
  /*var center = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);*/
}

// When Location Tile is Clicked
// Add hideMain to all tiles
var tileEle = document.getElementById('discovery-tiles').querySelectorAll('a');

[].forEach.call(tileEle, function(tile) {
  tile.addEventListener('click', hideMain, false);
});


/*
Results Section Nav Bar - Show/Hide Behavior
========================== */

// Hide Map and Instagram Photos 
function hideResults() {
  var resultsEle = document.getElementById('results');

  resultsEle.classList.add('hide');
}

// Show All Main Content 
function showMain() {
  var headerEle = document.querySelector('header');
  var searchBarEle = document.getElementById('search-container');
  var discoveryEle = document.getElementById('explore');
  var aboutEle  = document.getElementById('about');
  var footerEle = document.querySelector('footer');
  var bodyEle = document.getElementsByTagName('body');

  bodyEle[0].classList.remove('no-scroll');
  headerEle.classList.remove('hide');
  searchBarEle.classList.remove('hide');
  discoveryEle.classList.remove('hide');
  aboutEle.classList.remove('hide');
  footerEle.classList.remove('hide');

  // Hide Photos and Map Section
  hideResults();
  window.location.hash = '#';
}

// When Home Logo is Clicked
// Show main screen and hide Results Section
var logoEle = document.getElementById('home-logo');
logoEle.addEventListener('click', showMain, false);



/*
Search Field in Navigation Bar
- Select all text when clicked
========================== */
var inputEle = document.getElementById('header-search');

inputEle.addEventListener('click', editSearch,false);

function editSearch() {
  inputEle.focus();
  inputEle.setSelectionRange(0, inputEle.value.length);
}



/*
Show / Hide - Author Overlay Modal
========================== */
function showOverlay() {
  var bodyEle = document.getElementsByTagName('body');
  var overlayEle = document.getElementById('overlay');
  var liList = overlayEle.getElementsByTagName('li');
  
  bodyEle[0].classList.add('no-scroll');
  overlayEle.classList.add('is-open');

  // Run List Animation with Delay
  listAnimationLoop(liList, liList.length, 0);
}

// Animate List with Delay
function listAnimationLoop(eleList, length, count) {
  
  eleList[count].classList.add('animate');

  setTimeout(function() {
    if(++count < length) {
      listAnimationLoop(eleList, length, count);
    }
  }, 50);
}

function closeOverlay() {
  var bodyEle = document.getElementsByTagName('body');
  var overlayEle = document.getElementById('overlay');
  var liList = overlayEle.getElementsByTagName('li');

  bodyEle[0].classList.remove('no-scroll');
  overlayEle.classList.remove('is-open');
  
  for(var i = 0; i< liList.length; i++) {
    liList[i].classList.remove('animate');
  }
}

//Run showOverlay on contact-nav button click
var contactEle = document.getElementById('contact-nav');
contactEle.addEventListener('click', showOverlay, false);

//Run closeOverlay on close button click
var closeEle = document.getElementById('close-btn');
closeEle.addEventListener('click', closeOverlay, false);



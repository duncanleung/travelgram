/*
Smooth Scroll from Nav Links
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
      }
    }
  });
});


/*
Show Fixed Nav Bar on Scroll
========================== */

var width = window.innerWidth || document.documentElement.clientWidth;
//Trigger the script only on browser width above 1150px. Recommended on responsive websites
if (width > 1150) {
  
  function testScroll() {
    //Will set the position to FIXED with TOP=80px when user scrolls 850px below. 
    if(window.pageYOffset>635) {
      document.getElementById('fixed-nav').classList.remove('hide');
      /*document.getElementById('fixed-nav').style.top = "80px";*/
    } 

    //Will set the position to ABSOLUTE with TOP=AUTO when user scrolls to top just above 850px line
    else {
      document.getElementById('fixed-nav').classList.add('hide');
      /*document.getElementById('#scroll-top').style.top = "auto";*/
    };
  }
  window.onscroll=testScroll;
};


/*
Discovery Tiles Section
========================== */

// Show the Photos and Map Section
function showListings() {
  var listingsEle = document.getElementById('listings');
  listingsEle.classList.remove('hide');

  //Fix Google Maps Show/Hide bug
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(center);
}

// Hide all Main Content Sections
function hideMain() {
  var headerEle = document.querySelector('header');
  var searchBarEle = document.getElementById('search-container');
  var discoveryEle = document.getElementById('explore');
  var aboutEle  = document.getElementById('about');
  var footerEle = document.querySelector('footer');

  headerEle.classList.add('hide');
  searchBarEle.classList.add('hide');
  discoveryEle.classList.add('hide');
  aboutEle.classList.add('hide');
  footerEle.classList.add('hide');

  // showListings Function Run Here
  showListings();
  window.location.hash = '#browse';
}


// When Location Tile is Clicked
// Add hideMain to all tiles
var tileEle = document.getElementById('discovery-tiles').querySelectorAll('a');

[].forEach.call(tileEle, function(e) {
  e.addEventListener('click', hideMain, false);
});



/*
Listings Nav Bar
========================== */

// Hide Section Map and Instagram Photos 
function hideListings() {
  var listingsEle = document.getElementById('listings');

  listingsEle.classList.add('hide');
}

// Show All Main Content 
function showMain() {
  var headerEle = document.querySelector('header');
  var searchBarEle = document.getElementById('search-container');
  var discoveryEle = document.getElementById('explore');
  var aboutEle  = document.getElementById('about');
  var footerEle = document.querySelector('footer');

  headerEle.classList.remove('hide');
  searchBarEle.classList.remove('hide');
  discoveryEle.classList.remove('hide');
  aboutEle.classList.remove('hide');
  footerEle.classList.remove('hide');

  // Hide Photos and Map Section
  hideListings();
  window.location.hash = '#';
}


var logoEle = document.getElementById('home-logo');

logoEle.addEventListener('click', showMain, false);
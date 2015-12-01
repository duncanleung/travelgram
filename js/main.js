/*
Scroll Nav Links
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
        window.location.hash = this.hash;
        return false;
      }
    }
  });
});



/*
Discovery Tiles Section
========================== */

/* Show Section Map and Instagram Photos */
function showListings() {
  var listingsEle = document.getElementById('listings');

  listingsEle.classList.remove('hide');
}

/* Hide All Main Content */
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


/* When Tile is Clicked,  run hideMain */
var tileEle = document.getElementById('discovery-tiles').querySelectorAll('a');

//Adds an event listener to all tiles
[].forEach.call(tileEle, function(e) {
  e.addEventListener('click', hideMain, false);
});



/*
Listings Nav Bar
========================== */

/* Hide Section Map and Instagram Photos */
function hideListings() {
  var listingsEle = document.getElementById('listings');

  listingsEle.classList.add('hide');
}

/* Show All Main Content */
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

  // hideListings Function Run Here
  hideListings();
  window.location.hash = '#';
}


var logoEle = document.getElementById('home-logo');

logoEle.addEventListener('click', showMain, false);
/*Scroll Nav Links*/
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

  headerEle.setAttribute('class', 'hide');
  searchBarEle.setAttribute('class', 'hide');
  discoveryEle.setAttribute('class', 'hide');
  aboutEle.setAttribute('class', 'hide');
  footerEle.setAttribute('class', 'hide');

  // showListings Function Run Here
  showListings();
}


/* When Tile is Clicked,  run hideMain */
var tileEle = document.getElementById('discovery-tiles').querySelectorAll('a');

//Adds an event listener to all tiles
[].forEach.call(tileEle, function(e) {
  e.addEventListener('click', hideMain, false);
});


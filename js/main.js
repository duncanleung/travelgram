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
        window.location.hash = this.hash;
        return false;
      }
    }
  });
});


/*
Show Fixed Nav Bar on Scroll
========================== */
  
  function scrollNav() {
    //Show Fixed Nav when scroll below 635px
    if(window.pageYOffset>635) {
      document.getElementById('fixed-nav').classList.remove('hide');
    } 

    //Hide Fixed Nav when scroll above 635px
    else {
      document.getElementById('fixed-nav').classList.add('hide');
    };
  }
  window.onscroll = scrollNav;


/*
Show / Hide - Results Section and Main Section
========================== */

// Show the Photos and Map Section
function showResults() {
  var resultsEle = document.getElementById('results');
  resultsEle.classList.remove('hide');

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

  // showResults Function Run Here
  showResults();
  window.location.hash = '#results';
}


// When Location Tile is Clicked
// Add hideMain to all tiles
var tileEle = document.getElementById('discovery-tiles').querySelectorAll('a');

[].forEach.call(tileEle, function(e) {
  e.addEventListener('click', hideMain, false);
});



/*
Results Section Nav Bar
========================== */

// Hide Section Map and Instagram Photos 
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
Highlight Markers when hover in/out of Pictures
======================= */


// Match the Tile ID with the Icon ID
// Set Icon back to iconLight
function hover() {
  /*console.log('hover ' + this.id)*/
  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(iconLight);
      break;
    }
  }
}

// Match the Tile ID with the Icon ID
// Set Icon back to Black
function out() {
/*  console.log('out '  + this.id)*/
  for(var i = 0; i < allMarkers.length; i++) {
    if(this.id === allMarkers[i].id) {
      allMarkers[i].setIcon(icon);
      break;
    }
  }
}


//Get Array of All .tile
var tile = document.getElementById('results').querySelectorAll('.tile');
//Add Event Listener to All Tiles
for(var i = 0; i < tile.length; i++) {
  tile[i].addEventListener('mouseover', hover, false);
  tile[i].addEventListener('mouseout', out, false);
}






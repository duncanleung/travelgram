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

function showListings() {
  var listingsEle = document.getElementById('listings');

  listingsEle.classList.remove('hide');
}

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

  showListings();
}


var parisEle = document.getElementById('paris-tile');
parisEle.addEventListener('click', hideMain, false);
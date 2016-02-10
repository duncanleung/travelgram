# travelgram
####Summary
Travelgram is a photo discovery app that allows users to search for a location in the world and view geolocated Instagram photos that were taken at the searched location.

The Google Places API is used to retrieve the latitude/longitude of the searched location and a request is made to Instagram to retrieve geolocated photos within that latitude/longitude.

The returned Instagram photo data is used to dynamically render DOM elements into a gallery. At the same time, markers are plotted into Google Maps according to the specific latitude/longitude of where each individual photo was taken.

Hovering over each photo will highlight the corresponding marker to show you where the photo was taken (and vice versa), which is achieved by tracking each Goole Maps marker and corresponding photo with an array.

Discover the world through instagram.

####Key Achievements
Travelgram was my first project for [Orange County Code School](https://www.orangecountycodeschool.com) and my key achievements for this project are:

- Learned and implemented API calls, Sass, CSS flexbox, and Javascript event-based map-marker highlighting through self-study
- Dynamic DOM generation with Javascript to populate Instagram gallery and map markers depending on user search
- Javascript event-listeners highlight map-markers on hovering over a Photo (and vice versa)
- Responsive design and positioning with CSS3 flexbox and media-queries
- Dynamic grid layout as screen size decreases, with Bootstrap 3 column classes
- Generated DOM elements from returned JSON data, from AJAX calls to Instagram API and Google Maps API

####Built With the Following Technologies:
- HTML5, CSS3, Bootstrap 3
- Sass and Jade
- AJAX
- Google Maps API
- Google Places Search-Box Autocomplete API
- Instagram API

![TravelGram Main Screen](http://www.duncanleung.com/portfolio/travelgram-github/hero.jpg)
![TravelGram Explore Section](http://www.duncanleung.com/portfolio/travelgram-github/explore.jpg)
![TravelGram Photos Section](http://www.duncanleung.com/portfolio/travelgram-github/browse.jpg)

*This is an ongoing project. Major functionality that still needs to be built out:
- Functionality of search field in fixed navbar  (currenlty only visual presence)
- Filtering of results (currenlty only visual presence)
- Discovery Tiles do not generate Maps nor Istagram AJAX call
- Making new location search does not clear past results

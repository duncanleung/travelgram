function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:londonLatLang,zoom:13}),google.maps.event.addDomListener(window,"load",function(){var a=new google.maps.Marker({animation:google.maps.Animation.DROP,position:{lat:51.507351,lng:-.127758},map:map,id:1,icon:icon,title:"Marker1"});allMarkers.push(a);var n=new google.maps.Marker({animation:google.maps.Animation.DROP,position:{lat:51.504787,lng:-.113469},map:map,id:2,icon:icon,title:"Marker2"});allMarkers.push(n);var o=new google.maps.Marker({animation:google.maps.Animation.DROP,position:{lat:51.524112,lng:-.118147},map:map,id:3,icon:icon,title:"Marker3"});allMarkers.push(o);var i=new google.maps.Marker({animation:google.maps.Animation.DROP,position:{lat:51.508051,lng:-.168641},map:map,id:4,icon:icon,title:"Marker4"});allMarkers.push(i)})}function hover(a){for(var n=0;n<allMarkers.length;n++)if(a===allMarkers[n].id){allMarkers[n].setIcon(iconLight);break}}function out(a){for(var n=0;n<allMarkers.length;n++)if(a===allMarkers[n].id){allMarkers[n].setIcon(icon);break}}var londonLatLang={lat:51.507351,lng:-.127758},map,icon="img/logo.png",iconLight="img/pin-green.png",allMarkers=[];
function scrollNav(){window.pageYOffset>635?document.getElementById("fixed-nav").classList.remove("hide"):document.getElementById("fixed-nav").classList.add("hide")}function showResults(){var e=document.getElementById("results");e.classList.remove("hide");var t=map.getCenter();google.maps.event.trigger(map,"resize"),map.setCenter(t)}function hideMain(){var e=document.querySelector("header"),t=document.getElementById("search-container"),i=document.getElementById("explore"),n=document.getElementById("about"),l=document.querySelector("footer");e.classList.add("hide"),t.classList.add("hide"),i.classList.add("hide"),n.classList.add("hide"),l.classList.add("hide"),showResults(),window.location.hash="#results"}function hideResults(){var e=document.getElementById("results");e.classList.add("hide")}function showMain(){var e=document.querySelector("header"),t=document.getElementById("search-container"),i=document.getElementById("explore"),n=document.getElementById("about"),l=document.querySelector("footer");e.classList.remove("hide"),t.classList.remove("hide"),i.classList.remove("hide"),n.classList.remove("hide"),l.classList.remove("hide"),hideResults(),window.location.hash="#"}function editSearch(){inputEle.focus(),inputEle.setSelectionRange(0,inputEle.value.length)}function hover(){for(var e=0;e<allMarkers.length;e++)if(this.id===allMarkers[e].id){allMarkers[e].setIcon(iconLight);break}}function out(){for(var e=0;e<allMarkers.length;e++)if(this.id===allMarkers[e].id){allMarkers[e].setIcon(icon);break}}$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),window.location.hash=this.hash,!1}})}),window.onscroll=scrollNav;var tileEle=document.getElementById("discovery-tiles").querySelectorAll("a");[].forEach.call(tileEle,function(e){e.addEventListener("click",hideMain,!1)});var logoEle=document.getElementById("home-logo");logoEle.addEventListener("click",showMain,!1);var inputEle=document.getElementById("header-search");inputEle.addEventListener("click",editSearch,!1);for(var tile=document.getElementById("results").querySelectorAll(".tile"),i=0;i<tile.length;i++)tile[i].addEventListener("mouseover",hover,!1),tile[i].addEventListener("mouseout",out,!1);
function showListings(){var e=document.getElementById("listings");e.classList.remove("hide")}function hideMain(){var e=document.querySelector("header"),t=document.getElementById("search-container"),i=document.getElementById("explore"),n=document.getElementById("about"),s=document.querySelector("footer");e.setAttribute("class","hide"),t.setAttribute("class","hide"),i.setAttribute("class","hide"),n.setAttribute("class","hide"),s.setAttribute("class","hide"),showListings()}$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})});var tileEle=document.getElementById("discovery-tiles").querySelectorAll("a");[].forEach.call(tileEle,function(e){e.addEventListener("click",hideMain,!1)});
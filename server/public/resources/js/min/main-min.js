function callInstagram(e,t){Instagram.mediaLocation(function(n){displayMap(e,t);for(var o=0;o<n.data.length;o++)createColumn(n,o),addMarkerListener(n,o);console.log("finished API call")},e,t)}function scrollNav(){window.pageYOffset>635?document.getElementById("fixed-nav").classList.remove("hide"):document.getElementById("fixed-nav").classList.add("hide")}function hideMain(){var e=document.querySelector("header"),t=document.getElementById("search-container"),n=document.getElementById("explore"),o=document.getElementById("about"),a=document.querySelector("footer"),l=document.getElementsByTagName("body");l[0].classList.add("no-scroll"),e.classList.add("hide"),t.classList.add("hide"),n.classList.add("hide"),o.classList.add("hide"),a.classList.add("hide"),showResults(),window.location.hash="#results"}function showResults(){var e=document.getElementById("results");e.classList.remove("hide")}function hideResults(){var e=document.getElementById("results");e.classList.add("hide")}function showMain(){var e=document.querySelector("header"),t=document.getElementById("search-container"),n=document.getElementById("explore"),o=document.getElementById("about"),a=document.querySelector("footer"),l=document.getElementsByTagName("body");l[0].classList.remove("no-scroll"),e.classList.remove("hide"),t.classList.remove("hide"),n.classList.remove("hide"),o.classList.remove("hide"),a.classList.remove("hide"),hideResults(),window.location.hash="#"}function editSearch(){inputEle.focus(),inputEle.setSelectionRange(0,inputEle.value.length)}function showOverlay(){var e=document.getElementsByTagName("body"),t=document.getElementById("overlay"),n=t.getElementsByTagName("li");e[0].classList.add("no-scroll"),t.classList.add("is-open"),listAnimationLoop(n,n.length,0)}function listAnimationLoop(e,t,n){e[n].classList.add("animate"),setTimeout(function(){++n<t&&listAnimationLoop(e,t,n)},50)}function closeOverlay(){var e=document.getElementsByTagName("body"),t=document.getElementById("overlay"),n=t.getElementsByTagName("li");e[0].classList.remove("no-scroll"),t.classList.remove("is-open");for(var o=0;o<n.length;o++)n[o].classList.remove("animate")}$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length){return $("html,body").animate({scrollTop:e.offset().top},1e3),!1;window.location.hash=this.hash}}})}),window.onscroll=scrollNav;var tileEle=document.getElementById("discovery-tiles").querySelectorAll("a");[].forEach.call(tileEle,function(e){e.addEventListener("click",hideMain,!1)});var logoEle=document.getElementById("home-logo");logoEle.addEventListener("click",showMain,!1);var inputEle=document.getElementById("header-search");inputEle.addEventListener("click",editSearch,!1);var contactEle=document.getElementById("contact-nav");contactEle.addEventListener("click",showOverlay,!1);var closeEle=document.getElementById("close-btn");closeEle.addEventListener("click",closeOverlay,!1);
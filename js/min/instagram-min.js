function createColumn(e,t){var a=document.createElement("div");a.className="col-md-12 col-lg-6",instagramDiv.appendChild(a),createTile(e,t,a)}function createTile(e,t,a){var n=document.createElement("div");n.id="tile"+t,n.className="tile",a.appendChild(n),createTileHeader(e,t,n),createTilePhoto(e,t,n),createTileFooter(e,t,n),addTileListener()}function createTileHeader(e,t,a){var n=document.createElement("div");n.className="tile-header",a.appendChild(n),createProfile(e,t,n)}function createProfile(e,t,a){var n=document.createElement("div");n.className="profile",a.appendChild(n),printProfilePic(e,t,n);var i=document.createElement("div");i.className="profile-text",n.appendChild(i),printUsername(e,t,i),printLocation(e,t,i)}function printProfilePic(e,t,a){var n=document.createElement("img"),i=e.data[t].user.profile_picture;n.setAttribute("src",i),a.appendChild(n)}function printUsername(e,t,a){var n=document.createElement("p"),i=e.data[t].user.username;n.className="username",n.textContent=i,a.appendChild(n)}function printLocation(e,t,a){var n=e.data[t].location.name,i=document.createElement("p");i.className="location",i.textContent="Location: "+n,a.appendChild(i)}function createTilePhoto(e,t,a){var n=document.createElement("div");n.className="tile-photo",a.appendChild(n);var i=document.createElement("img"),c=e.data[t].images.standard_resolution.url;i.setAttribute("src",c),n.appendChild(i)}function createTileFooter(e,t,a){var n=document.createElement("div");n.className="tile-footer",a.appendChild(n),printCaption(e,t,n)}function printCaption(e,t,a){var n=e.data[t].caption.text,i=document.createElement("p");i.className="caption",i.textContent=n,a.appendChild(i)}window.Instagram={config:{},BASE_URL:"https://api.instagram.com/v1",init:function(e){e=e||{},this.config.access_token=e.access_token},mediaSelf:function(e){var t=this.BASE_URL+"/users/self/media/recent/?access_token="+this.config.access_token;this.getJSON(t,e)},mediaLocation:function(e){var t=this.BASE_URL+"/media/search?distance=5000&lat=31.221992&lng=121.444988&access_token="+this.config.access_token;this.getJSON(t,e)},getJSON:function(e,t){$.ajax({type:"GET",url:e,dataType:"jsonp",success:function(e){"function"==typeof t&&t(e)}})}},Instagram.init({access_token:""});var instagramDiv=document.getElementById("instagram");
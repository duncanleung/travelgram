function createColumn(e,t){var a=document.createElement("div");a.className="col-md-12 col-lg-6",instagramDiv.appendChild(a),createTile(e,t,a)}function createTile(e,t,a){var n=document.createElement("div");n.id="tile"+t,n.className="tile",a.appendChild(n),createTileHeader(e,t,n),createTilePhoto(e,t,n),createTileFooter(e,t,n),addTileListener()}function createTileHeader(e,t,a){var n=document.createElement("div");n.className="tile-header",a.appendChild(n),createProfile(e,t,n),createTimestamp(e,t,n)}function createTimestamp(e,t,a){var n=document.createElement("div"),i=e.data[t].created_time;n.className="time",n.textContent=formatTime(i),a.appendChild(n)}function formatTime(e){var t=new Date,a=new Date(1e3*e),n=Math.abs(t-a),i=Math.ceil(n/864e5);return i>1095.75?"3 years ago":i>730.5?"2 years ago":i>365.25?"1 year ago":i>21?Math.ceil(i/21)+" weeks ago":i>14?Math.ceil(i/14)+" weeks ago":i>7?Math.ceil(i/7)+" weeks ago":i+"ago"}function createProfile(e,t,a){var n=document.createElement("div");n.className="profile",a.appendChild(n),printProfilePic(e,t,n);var i=document.createElement("div");i.className="profile-text",n.appendChild(i),printUsername(e,t,i),printLocation(e,t,i)}function printProfilePic(e,t,a){var n=document.createElement("img"),i=e.data[t].user.profile_picture;n.setAttribute("src",i),a.appendChild(n)}function printUsername(e,t,a){var n=document.createElement("p"),i=e.data[t].user.username;n.className="username",n.textContent=i,a.appendChild(n)}function printLocation(e,t,a){var n=e.data[t].location.name,i=document.createElement("p");i.className="location",i.textContent=n,a.appendChild(i)}function createTilePhoto(e,t,a){var n=document.createElement("div");n.className="tile-photo",a.appendChild(n);var i=document.createElement("img"),r=e.data[t].images.standard_resolution.url;i.setAttribute("src",r),n.appendChild(i)}function createTileFooter(e,t,a){var n=document.createElement("div");n.className="tile-footer",a.appendChild(n),printLikes(e,t,n),printCaption(e,t,n)}function printLikes(e,t,a){var n=e.data[t].likes.count,i=document.createElement("p");i.className="likes",i.textContent=n+" Likes",a.appendChild(i)}function printCaption(e,t,a){var n=e.data[t].caption.text,i=document.createElement("p");i.className="caption",i.textContent=n,a.appendChild(i)}var instagramDiv=document.getElementById("instagram");
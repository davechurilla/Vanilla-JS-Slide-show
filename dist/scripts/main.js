"use strict";function setImgHeight(e){var t=document.getElementsByClassName("slide")[e],a=document.getElementsByClassName("img-title")[e],i=document.getElementsByClassName("slide-img")[e],n=a.offsetHeight,s=i.offsetHeight,r=parseInt(n)+parseInt(s);t.style.height=r+"px"}function divRemove(){document.querySelector("#heroUnit").removeChild(document.querySelector(".slider"))}function preloadImages(e){preloadImages.list||(preloadImages.list=[]);for(var t=preloadImages.list,a=0;a<e.length;a++){var i=new Image;i.onload=function(){var e=t.indexOf(this);-1!==e&&t.splice(e,1)},t.push(i),i.src=e[a]}}Modernizr.addTest("hires",function(){return!!((window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI||1)>1)}),preloadImages(Modernizr.hires&&Modernizr.touch?["images/retina/cat01.jpg","images/retina/cat02.jpg","images/retina/cat03.jpg","images/retina/cat04.jpg","images/retina/cat05.jpg","images/retina/cat06.jpg","images/retina/cat07.jpg","images/retina/cat08.jpg","images/retina/cat09.jpg","images/retina/cat10.jpg"]:["images/default/cat01.jpg","images/default/cat02.jpg","images/default/cat03.jpg","images/default/cat04.jpg","images/default/cat05.jpg","images/default/cat06.jpg","images/default/cat07.jpg","images/default/cat08.jpg","images/default/cat09.jpg","images/default/cat10.jpg"]),function(){function e(e,a,i){if(void 0==a){var n=r;a=0}else var n=u;if(Modernizr.hires&&Modernizr.touch)var s=n[a].retina;else var s=n[a].img;var l=document.querySelector(e),o="";o+='<li class="slide">',o+='\t<div class="slide-content">',o+='\t\t<div class="img-title">',o+="\t\t\t<h4><strong>Name:</strong> "+n[a].name+"</h4>",o+="\t\t\t<p><strong>Occupation:</strong> "+n[a].title+", ",o+="\t\t\t<strong>Age:</strong> "+n[a].age+"</p>",o+="\t\t</div>",o+='\t\t<div class="slide-img-container"><img src="'+s+'" class="slide-img fadein" width="100%" alt="'+n[a].name+'" /></div>',o+="\t</div>",o+="</li>",l.insertAdjacentHTML(i,o),setTimeout(function(){t()},500)}function t(){var e="",t=document.querySelector("#copyContainer .body-copy");e+=r[0].article,t.innerHTML="",t.insertAdjacentHTML("afterbegin",e)}function a(){function t(){var t=r.splice(0,1),a=document.querySelector("#heroUnit #slideContainer"),i=document.querySelectorAll("#heroUnit #slideContainer .slide");r.push(t[0]),a.setAttribute("style",""),e("#slideContainer",void 0,"beforeend");var n=a.offsetWidth;a.style.transform="translate(-"+n+"px,0)",setTimeout(function(){a.style.transition="unset",a.style.transform="none",i[0].remove()},500)}document.querySelector(".next").addEventListener("mousedown",function(e){t(),this.removeEventListener("mousedown",this)})}function i(){function t(t){var a=r.splice(r.length-1,1),i=document.querySelector("#heroUnit #slideContainer");document.querySelector("#heroUnit #slideContainer .slide").className="slide trash";var n=document.querySelector("#heroUnit #slideContainer .trash");r.unshift(a[0]),i.setAttribute("style",""),e("#slideContainer",void 0,"afterbegin");var s=i.offsetWidth;i.style.left="-"+s+"px",i.style.transform="translate("+s+"px,0)",setTimeout(function(){n.remove(),i.style.left="0",i.style.transform="none",i.style.transition="unset"},500)}document.querySelector(".prev").addEventListener("mousedown",function(e){t(),this.removeEventListener("mousedown",this)})}function n(t){function a(){overlay.className="",galleryUnit.className=""}function i(){if(l!=parseInt(t)+1){t++,l==t+1&&(o.className="nav_arrow next disabled");document.querySelector("#galleryUnit #slideContainer .slide .slide-content");setTimeout(function(){e("#galleryUnit #slideContainer",t)},500)}}function n(){if(0!=t){t--,0==t&&(m.className="nav_arrow prev disabled");document.querySelector("#galleryUnit #slideContainer .slide .slide-content");setTimeout(function(){e("#galleryUnit #slideContainer",t)},500)}}function s(){o.className=l!=t+1?"nav_arrow next":"nav_arrow next disabled",m.className=0!=t?"nav_arrow prev":"nav_arrow prev disabled"}overlay.className="overlay-show",galleryUnit.className="gallery-show",t=parseInt(t);var r=document.querySelector("#overlay .box"),l=u.length,o=document.querySelector("#galleryUnit .next"),m=document.querySelector("#galleryUnit .prev");o.addEventListener("mousedown",function(e){i(),s(),this.removeEventListener("mousedown",this)}),m.addEventListener("mousedown",function(e){n(),s(),this.removeEventListener("mousedown",this)}),r.addEventListener("click",function(e){a()}),s(),e("#galleryUnit",t),setTimeout(function(){setImgHeight(1)},200),window.addEventListener("resize",function(){setImgHeight(1)})}function s(){var e=document.querySelector("#thumbsList");document.querySelector("#overlay"),document.querySelector("#galleryUnit");e.innerHTML="";for(var t=0;t<u.length;t++){e.insertAdjacentHTML("beforeend",'<li class="thumb"><a href="#" id="'+t+'"><img src="'+u[t].thumb+'" class="gallery-img" width="70" alt="Gallery thumbnail" /></a></li>');e.children[t].querySelectorAll("a")[0].addEventListener("click",function(e){e.preventDefault(this),n(this.id),this.removeEventListener("click",this)})}}for(var r=[{img:"/images/default/cat09.jpg",retina:"/images/retina/cat09.jpg",thumb:"/images/thumbs/cat09.jpg",name:"Zeus",title:"Being cute",age:"1 month",article:"<h2>Check out this guy!</h2><p>Aliquam mauris dolor, posuere at augue vel, fringilla semper erat. Ut vehicula malesuada cursus. Donec at urna libero. Nulla sodales bibendum vulputate. Curabitur erat mauris, aliquam in augue non, porta viverra nisi. Ut nulla sem, mattis ut hendrerit quis, condimentum eget ex. Curabitur sed justo quis leo bibendum porta. Praesent sed malesuada ipsum. Aliquam malesuada purus augue, et tincidunt lectus placerat et. Nulla facilisis lorem sit amet ullamcorper tempus. Curabitur egestas aliquam suscipit. Nunc facilisis rhoncus leo sit amet convallis.</p>"},{img:"/images/default/cat02.jpg",retina:"/images/retina/cat02.jpg",thumb:"/images/thumbs/cat02.jpg",name:"Lola",title:"Purring",age:"3 months",article:"<h2>Neat!</h2><p>Praesent laoreet ligula lectus. Sed a neque nunc. Vivamus ornare libero non nunc semper pretium. Donec in tellus quis odio finibus auctor. Maecenas imperdiet aliquet massa eu luctus. Ut posuere suscipit arcu. In mattis velit non fringilla scelerisque. Pellentesque nulla ligula, condimentum non odio at, feugiat vehicula tellus. Vestibulum ut egestas lectus. Sed et urna quis nunc accumsan commodo eget eget dui. Nulla ac nisl sodales, pretium tellus non, porta urna.</p>"},{img:"/images/default/cat03.jpg",retina:"/images/retina/cat03.jpg",thumb:"/images/thumbs/cat03.jpg",name:"Jasper",title:"Sleeping",age:"1.5 months",article:"<h2>Meow, meow, meow...</h2><p>Fusce convallis purus erat, eget ullamcorper quam vestibulum at. Donec quis ligula aliquet, sodales lacus sed, dictum magna. Etiam placerat iaculis leo sit amet bibendum. Integer tincidunt sagittis scelerisque. Suspendisse dictum ultrices justo. Proin justo est, auctor nec nulla et, vestibulum hendrerit magna. Pellentesque mauris turpis, consectetur quis porttitor varius, lacinia ac urna. Maecenas aliquet risus id sollicitudin convallis. Sed a tortor arcu. Cras leo nulla, viverra at velit eget, laoreet tristique justo.</p>"},{img:"/images/default/cat04.jpg",retina:"/images/retina/cat04.jpg",thumb:"/images/thumbs/cat04.jpg",name:"Drake",title:"Eating",age:"3 months",article:"<h2>ROOOOAAAR!</h2><p>Nam interdum lobortis nulla quis euismod. Nam euismod nisl sed leo lobortis, eget cursus elit molestie. Nulla congue id urna et eleifend. Integer at erat nec mauris ultrices cursus eu ut lorem. Vestibulum vitae leo arcu. In volutpat eleifend ante eget commodo. Mauris vitae malesuada ipsum. Aenean ac enim dignissim, consectetur ligula a, interdum arcu. Phasellus molestie nulla ac dignissim porttitor. Aliquam iaculis felis ac egestas tempor. Nulla facilisi.</p>"},{img:"/images/default/cat05.jpg",retina:"/images/retina/cat05.jpg",thumb:"/images/thumbs/cat05.jpg",name:"Luna",title:"Catching pesky mice",age:"3 weeks",article:"<h2>What ya got to eat around here?</h2><p>Cras scelerisque a nibh nec pretium. Integer faucibus in lacus et aliquet. Vestibulum iaculis ante mi, eu egestas mauris ultrices eget. Etiam euismod hendrerit scelerisque. Etiam id felis at leo eleifend pulvinar in ac libero. Vivamus blandit vel quam at hendrerit. Duis ac odio ante. Integer varius laoreet tempus. Vivamus dolor nunc, consequat vel sem eu, aliquam commodo est.</p>"}],l=[{img:"/images/default/cat06.jpg",retina:"/images/retina/cat06.jpg",thumb:"/images/thumbs/cat06.jpg",name:"Harold",title:"Breaking stuff",age:"4 months",article:""},{img:"/images/default/cat07.jpg",retina:"/images/retina/cat07.jpg",thumb:"/images/thumbs/cat07.jpg",name:"Sam",title:"Attacking things",age:"3.5 weeks",article:""},{img:"/images/default/cat08.jpg",retina:"/images/retina/cat08.jpg",thumb:"/images/thumbs/cat08.jpg",name:"Bill",title:"Staring out the window",age:"1 month",article:""},{img:"/images/default/cat01.jpg",retina:"/images/retina/cat01.jpg",thumb:"/images/thumbs/cat01.jpg",name:"Bob",title:"Cleaning... more cleaning",age:"6 months",article:""},{img:"/images/default/cat10.jpg",retina:"/images/retina/cat10.jpg",thumb:"/images/thumbs/cat10.jpg",name:"Betty",title:"Making lots of noise",age:"5 weeks",article:""}],u=[],o=0;o<r.length;o++)u.push(r[o]);for(var o=0;o<l.length;o++)u.push(l[o]);!function(){e("#slideContainer",void 0,"afterbegin"),a(),i(),s()}()}();
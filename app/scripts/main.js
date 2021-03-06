'use strict';

/**
 * @author Dave Churilla
 * churilla@gmail.com
 * 9/23/2017
 */

(function() {

// db object for first five slides, displayed in the hero
var heroGalleryDb = [
    {img:'/images/default/cat09.jpg',retina:'/images/retina/cat09.jpg',thumb:'/images/thumbs/cat09.jpg',name:'Zeus',title:'Being cute',age:'1 month',article:'<h2>Check out this guy!</h2><p>Aliquam mauris dolor, posuere at augue vel, fringilla semper erat. Ut vehicula malesuada cursus. Donec at urna libero. Nulla sodales bibendum vulputate. Curabitur erat mauris, aliquam in augue non, porta viverra nisi. Ut nulla sem, mattis ut hendrerit quis, condimentum eget ex. Curabitur sed justo quis leo bibendum porta. Praesent sed malesuada ipsum. Aliquam malesuada purus augue, et tincidunt lectus placerat et. Nulla facilisis lorem sit amet ullamcorper tempus. Curabitur egestas aliquam suscipit. Nunc facilisis rhoncus leo sit amet convallis.</p>'},
    {img:'/images/default/cat02.jpg',retina:'/images/retina/cat02.jpg',thumb:'/images/thumbs/cat02.jpg',name:'Lola',title:'Purring',age:'3 months',article:'<h2>Neat!</h2><p>Praesent laoreet ligula lectus. Sed a neque nunc. Vivamus ornare libero non nunc semper pretium. Donec in tellus quis odio finibus auctor. Maecenas imperdiet aliquet massa eu luctus. Ut posuere suscipit arcu. In mattis velit non fringilla scelerisque. Pellentesque nulla ligula, condimentum non odio at, feugiat vehicula tellus. Vestibulum ut egestas lectus. Sed et urna quis nunc accumsan commodo eget eget dui. Nulla ac nisl sodales, pretium tellus non, porta urna.</p>'},
    {img:'/images/default/cat03.jpg',retina:'/images/retina/cat03.jpg',thumb:'/images/thumbs/cat03.jpg',name:'Jasper',title:'Sleeping',age:'1.5 months',article:'<h2>Meow, meow, meow...</h2><p>Fusce convallis purus erat, eget ullamcorper quam vestibulum at. Donec quis ligula aliquet, sodales lacus sed, dictum magna. Etiam placerat iaculis leo sit amet bibendum. Integer tincidunt sagittis scelerisque. Suspendisse dictum ultrices justo. Proin justo est, auctor nec nulla et, vestibulum hendrerit magna. Pellentesque mauris turpis, consectetur quis porttitor varius, lacinia ac urna. Maecenas aliquet risus id sollicitudin convallis. Sed a tortor arcu. Cras leo nulla, viverra at velit eget, laoreet tristique justo.</p>'},
    {img:'/images/default/cat04.jpg',retina:'/images/retina/cat04.jpg',thumb:'/images/thumbs/cat04.jpg',name:'Drake',title:'Eating',age:'3 months',article:'<h2>ROOOOAAAR!</h2><p>Nam interdum lobortis nulla quis euismod. Nam euismod nisl sed leo lobortis, eget cursus elit molestie. Nulla congue id urna et eleifend. Integer at erat nec mauris ultrices cursus eu ut lorem. Vestibulum vitae leo arcu. In volutpat eleifend ante eget commodo. Mauris vitae malesuada ipsum. Aenean ac enim dignissim, consectetur ligula a, interdum arcu. Phasellus molestie nulla ac dignissim porttitor. Aliquam iaculis felis ac egestas tempor. Nulla facilisi.</p>'},
    {img:'/images/default/cat05.jpg',retina:'/images/retina/cat05.jpg',thumb:'/images/thumbs/cat05.jpg',name:'Luna',title:'Catching pesky mice',age:'3 weeks',article:'<h2>What ya got to eat around here?</h2><p>Cras scelerisque a nibh nec pretium. Integer faucibus in lacus et aliquet. Vestibulum iaculis ante mi, eu egestas mauris ultrices eget. Etiam euismod hendrerit scelerisque. Etiam id felis at leo eleifend pulvinar in ac libero. Vivamus blandit vel quam at hendrerit. Duis ac odio ante. Integer varius laoreet tempus. Vivamus dolor nunc, consequat vel sem eu, aliquam commodo est.</p>'}
];

// db object for second five slides, displayed in the gallery
var extendedGalleryDb = [
    {img:'/images/default/cat06.jpg',retina:'/images/retina/cat06.jpg',thumb:'/images/thumbs/cat06.jpg',name:'Harold',title:'Breaking stuff',age:'4 months',article:''},
    {img:'/images/default/cat07.jpg',retina:'/images/retina/cat07.jpg',thumb:'/images/thumbs/cat07.jpg',name:'Sam',title:'Attacking things',age:'3.5 weeks',article:''},
    {img:'/images/default/cat08.jpg',retina:'/images/retina/cat08.jpg',thumb:'/images/thumbs/cat08.jpg',name:'Bill',title:'Staring out the window',age:'1 month',article:''},
    {img:'/images/default/cat01.jpg',retina:'/images/retina/cat01.jpg',thumb:'/images/thumbs/cat01.jpg',name:'Bob',title:'Cleaning... more cleaning',age:'6 months',article:''},
    {img:'/images/default/cat10.jpg',retina:'/images/retina/cat10.jpg',thumb:'/images/thumbs/cat10.jpg',name:'Betty',title:'Making lots of noise',age:'5 weeks',article:''}
];

// merge 2 above objects for full db for thumbs and main gallery displayed in modal
var mainGalleryDb = [];
for(var i=0; i < heroGalleryDb.length; i++) {
	mainGalleryDb.push(heroGalleryDb[i]);
}
for(var i=0; i < extendedGalleryDb.length; i++) {
	mainGalleryDb.push(extendedGalleryDb[i]);
}

var prevBtn = document.querySelector('#heroPrev');
var nextBtn = document.querySelector('#heroNext');

// init and start hero gallery, next and prev nav, and thumbnails
function init() {
	currentImg('#slideContainer',undefined,'afterbegin');
	galleryThumbs();
	window.onload = function() { setImgHeight(0); }
}

// output and render slider and initital image
function currentImg(container,id,insert){
	//since HTML template is shared, id passed determines which db object to use (hero or main gallery)
	if(id == undefined) {
		var currentGallery = heroGalleryDb;
		id = 0;
	} else {
		var currentGallery = mainGalleryDb;
	}
	// use retina sized images for retina devices, otherwise, use default size
	if(Modernizr.hires && Modernizr.touch) {var imgDir = currentGallery[id].retina;} else {var imgDir = currentGallery[id].img;}

	// set up and populate HTML dynamically on page load or when vav arrows are clicked
	// container is the selctor passed as argument for either hero or modal gallery
	var Parent = document.querySelector(container);
	var template = ''; 
	    template += '<li class="slide">';
	    template += '	<div class="slide-content">';
	    template += '		<div class="img-title">';
	    template += '			<h4><strong>Name:</strong> '+ currentGallery[id].name +'</h4>';
	    template += '			<p><strong>Occupation:</strong> '+ currentGallery[id].title + ', ';
	    template += '			<strong>Age:</strong> '+ currentGallery[id].age +'</p>';
	    template += '		</div>';
	    template += '		<div class="slide-img-container"><img src="'+ imgDir +'" class="slide-img fadein" width="100%" alt="'+ currentGallery[id].name +'" /></div>'
	    template += '	</div>';
	    template += '</li>';
		  
	// Parent.innerHTML = '';
	Parent.insertAdjacentHTML(insert, template);
	setTimeout(function(){currentCopy();},500);	
};

// populates copy from db for appropriate slide below the slider interface
function currentCopy() {
	var copyTemplate = ''; 
	var copyParent = document.querySelector('#copyContainer .body-copy');
	copyTemplate += heroGalleryDb[0].article;
    copyParent.innerHTML = '';
    copyParent.insertAdjacentHTML('afterbegin', copyTemplate);
}

// reset the image container
// set up the image to slide and trigger animation
// these two functions (nextBtnAction and prevBtnAction) are shared by both carousels
function nextBtnAction(carousel,id) {
	var slideContainer = document.querySelector(carousel);
    var slide = document.querySelectorAll(carousel + ' .slide');
    slideContainer.setAttribute('style', '');
    currentImg(carousel,id,'beforeend');
    var containerWidth = slideContainer.offsetWidth;
	slideContainer.style.transform = 'translate(-' + containerWidth + 'px,0)';
	setTimeout(function(){slideContainer.style.transition='unset';slideContainer.style.transform='none'; slide[0].remove();},500);	
}

function prevBtnAction(carousel,id) {
	var slideContainer = document.querySelector(carousel);
    var slide = document.querySelector(carousel + ' .slide');
    slide.className = 'slide trash';
    var trash = document.querySelector(carousel + ' .trash');
    slideContainer.setAttribute('style', '');
    currentImg(carousel,id,'afterbegin');
    var containerWidth = slideContainer.offsetWidth;
    slideContainer.style.left = '-' + containerWidth + 'px';
	slideContainer.style.transform = 'translate(' + containerWidth + 'px,0)';
	setTimeout(function(){trash.remove();slideContainer.style.left = '0';slideContainer.style.transform='none';slideContainer.style.transition='unset';},500);    
}

// adjust db when next button is pressed
// render slider image content at the 0 index of db
function nextSlide(e){
    e.preventDefault();
    e.stopPropagation();
    var zeroIndex = heroGalleryDb.splice(0, 1);		
    heroGalleryDb.push(zeroIndex[0]);
    nextBtnAction('#slideContainer');
    nextBtn.removeEventListener('mousedown', this, false);
}

// adjust db when prev button is pressed
// render slider image content at the 0 index of db
function prevSlide(e){
    e.preventDefault();
    e.stopPropagation();
    var lastIndex = heroGalleryDb.splice((heroGalleryDb.length - 1), 1);
    heroGalleryDb.unshift(lastIndex[0]);
    prevBtnAction('#slideContainer');
    prevBtn.removeEventListener('mousedown', this, false);
}

nextBtn.addEventListener('mousedown',
        nextSlide,
        false);

prevBtn.addEventListener('mousedown',
        prevSlide,
        false);

// this function contains everything for the main gallery in the modal
function openGallery(id) {
	// display modal and overlay, set variable for even handlers
	overlay.className = 'overlay-show';
	galleryUnit.className = 'gallery-show';
	id = parseInt(id);
	var closeBtn = document.querySelector('#overlay .box');
	var mGallLength = mainGalleryDb.length;
	var modalNextBtn = document.querySelector('#galleryNext');
	var modalPrevBtn = document.querySelector('#galleryPrev');
	var gallerySlideContainer = document.querySelector('#gallerySlideContainer');
	
	// close button function
	function closeGallery() {
		overlay.className = '';
		galleryUnit.className = '';
		gallerySlideContainer.innerHTML = '';
		modalNextBtn.removeEventListener('click', modalNextSlide);
		modalPrevBtn.removeEventListener('click', modalPrevSlide);	 	
	}	

	// counter functions for prev and next buttons
	// args are passed to BtnAction functions defined above
    function modalNextSlide(e){
	    e.preventDefault();
	    e.stopPropagation();
	    if(mGallLength != (parseInt(id) + 1)) {
	        id++;
	        if(mGallLength == (id + 1)) {modalNextBtn.className = 'nav_arrow next disabled';}
	     	nextBtnAction('#gallerySlideContainer',id);
	    } 
        idCheck();
        // modalNextBtn.removeEventListener('click', this);	    
	}

    function modalPrevSlide(e){
	    e.preventDefault();
	    e.stopPropagation();
	    if(id != 0) {
	        id--;
	        if(id == 0) {modalPrevBtn.className = 'nav_arrow prev disabled';}
	        prevBtnAction('#gallerySlideContainer',id);
	    } 
        idCheck();
        // modalPrevBtn.removeEventListener('click', this);    
	}

	// previous and next buttons to be used within modal slider
    modalNextBtn.addEventListener('click',
        modalNextSlide
    );

    modalPrevBtn.addEventListener('click',
        modalPrevSlide
    );    

    // close the modal and the overlay
    closeBtn.addEventListener('click', function(e) {
    	window.removeEventListener('resize', setImgHeight(1));
    	setTimeout(function(){closeGallery();},100);
	});	

	// check index of current active image
	// disable prev or next nav arrow if needed
	function idCheck() {
		if(mGallLength != (id + 1)) {modalNextBtn.className = 'nav_arrow next';} else {modalNextBtn.className = 'nav_arrow next disabled';}
		if(id != 0) {modalPrevBtn.className = 'nav_arrow prev';} else {modalPrevBtn.className = 'nav_arrow prev disabled';}
	}

	idCheck();
	currentImg('#gallerySlideContainer',id,'afterbegin');	
	setTimeout(function(){setImgHeight(1);},500);

  window.addEventListener('resize', function() {
    setImgHeight(1);
  });
}

//use the main gallery db to create the thumbnails that will launch the gallery in a modal window
function galleryThumbs() {
	var thumbsList = document.querySelector('#thumbsList');
	var overlay = document.querySelector('#overlay');
	var galleryUnit = document.querySelector('#galleryUnit');
	thumbsList.innerHTML = '';
	for (var i=0; i < mainGalleryDb.length; i++) {
    	
    	thumbsList.insertAdjacentHTML('beforeend', '<li class="thumb"><a href="#" id="' + i + '"><img src="'+ mainGalleryDb[i].thumb +'" class="gallery-img" width="70" alt="Gallery thumbnail" /></a></li>');
    	
    	var thumb = thumbsList.children[i].querySelectorAll('a');
	    thumb[0].addEventListener('click', function(e) {
            e.preventDefault(this);
            openGallery(this.id);
            this.removeEventListener('click', this);
	    });
    }
}

// start everything
init();
}());


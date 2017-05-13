var galleryOne = document.getElementById("gallery1");
var galleryTwo = document.getElementById("gallery2");
var galleryThree = document.getElementById("gallery3");
var modalContainer = document.getElementById("modal-container");
var galleryModal = document.getElementById("galleryDiv");

galleryOne.addEventListener("click", lightbox);
galleryTwo.addEventListener("click", lightbox);
galleryThree.addEventListener("click", lightbox);

function lightbox() {
	modalContainer.style.display = "block";
	galleryModal.style.backgroundImage = "url('" + wissihickon.fileName + "')";
}

function Image(fileName, caption) {
	this.fileName = fileName;
	this.caption = caption;
}

function Gallery() {
	this.album = [];
	this.addPhoto = addPhoto;
	this.albumList = albumList;
}

function addPhoto(photo) {
	this.album.push(photo);
}

function albumList() {
	for (var i=0; i < this.album.length; i++) {
		console.log("Photo " + i + ": " + this.album[i].fileName);
	}
}

// ----------Image Object Instances----------

// -----Hiking Gallery-----

var wissihickon = new Image("assets/images/hiking/Wissihickon.jpg");

// -----Biking Gallery-----

var fairmountCycling = new Image("assets/images/biking/cycling.jpg");

// -----Kayaking Gallery-----

var pineBarrens = new Image("assets/images/kayaking/PineBarrens.jpg")

// ----------Gallery Object Instances----------

var hiking = new Gallery();
var biking = new Gallery();
var kayaking = new Gallery();

// -----Hiking Photo Push-----

hiking.addPhoto(wissihickon);

// -----Biking Photo Push-----

biking.addPhoto(fairmountCycling);

// -----Kayaking Photo Push-----

kayaking.addPhoto(pineBarrens);

console.log(biking.album);
console.log(hiking.album);
console.log(kayaking.album);

// Make 3 gallery objects, which contains 6 images each. Make a for loop which loads gallery[i] upon a click event.
	// Create a Gallery Object constructor with an array of six images

// When the gallery loads, it will be z-indexed above the page with a blurred background.

// Users will be able to scroll through the gallery once it has been clicked. 
	// Create a click event which uses a for loop to display image[i] once clicked.  
// ----------DOM Variables----------

var galleryOne = document.getElementById("gallery1");
var galleryTwo = document.getElementById("gallery2");
var galleryThree = document.getElementById("gallery3");
var modalContainer = document.getElementById("modal-container");
var galleryModal = document.getElementById("galleryDiv");
var currentPhoto = 0;


// ----------Event Handlers----------

galleryOne.addEventListener("click", galleryDisplay);
galleryTwo.addEventListener("click", galleryDisplay);
galleryThree.addEventListener("click", galleryDisplay);

galleryModal.addEventListener("click", gallery)

// ----------Event Handler Methods----------

function galleryDisplay() {
	modalContainer.style.display = "block";
	galleryModal.style.backgroundImage = "url('" + hiking.album[currentPhoto].fileName + "')";
}

function gallery() {
	if (currentPhoto === hiking.album.length -1) {
		currentPhoto = 0
		galleryDisplay()
	}
	else {
		currentPhoto += 1
		galleryDisplay()
	}
}

// ----------Object Constructors----------

function Image(fileName, caption) {
	this.fileName = fileName;
	this.caption = caption;
}

function Gallery() {
	this.album = [];
	this.addPhoto = addPhoto;
	this.albumList = albumList;
}

// ----------Object Methods----------

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
var coveredBridge = new Image("assets/images/hiking/covered_bridge.jpg");
var fairmount = new Image("assets/images/hiking/fairmount.jpg");
var kellyDrive = new Image("assets/images/hiking/kelly_drive.jpg");
var tinman = new Image("assets/images/hiking/tinman.jpg");
var wonderland = new Image("assets/images/hiking/wonderland.jpg");
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
hiking.addPhoto(fairmount);
hiking.addPhoto(wonderland);
hiking.addPhoto(tinman);
hiking.addPhoto(kellyDrive);
hiking.addPhoto(coveredBridge);

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
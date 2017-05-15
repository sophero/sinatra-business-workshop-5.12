// ----------DOM Variables----------

var galleryOne = document.getElementById("gallery1");
var galleryTwo = document.getElementById("gallery2");
var galleryThree = document.getElementById("gallery3");
var modalContainer = document.getElementById("modal-container");
var galleryModal = document.getElementById("galleryDiv");
var currentPhoto = 0;
var currentGallery = 0;

// ----------Event Handlers----------

galleryOne.addEventListener("click", galleryDisplay);
galleryTwo.addEventListener("click", galleryDisplay);
galleryThree.addEventListener("click", galleryDisplay);

galleryModal.addEventListener("click", gallery)

// ----------Event Handler Methods----------

function galleryDisplay() {
	modalContainer.style.display = "block";
	galleryModal.style.backgroundImage = "url('" + masterGallery.gallery[currentGallery].album[currentPhoto].fileName + "')";
}

function gallery() {
	if (currentPhoto === masterGallery.gallery[currentGallery].album.length -1) {
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
}

function MasterGallery() {
	this.gallery = [];
	this.addGallery = addGallery;
}

// ----------Object Methods----------

function addPhoto(photo) {
	this.album.push(photo);
}

function addGallery(gallery) {
	this.gallery.push(gallery);
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
var masterGallery = new MasterGallery();
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

// -----Gallery Push-----

masterGallery.addGallery(hiking);
masterGallery.addGallery(biking);
masterGallery.addGallery(kayaking);










 
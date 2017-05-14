// ----------DOM Variables----------

var gallery = document.getElementsByClassName("gallery");
var modalContainer = document.getElementById("modal-container");
var galleryModal = document.getElementById("galleryDiv");
var currentPhoto = 0;
var currentGallery = 0;

// ----------Event Handlers----------

galleryModal.addEventListener("click", gallery);

for (let i=0; i < gallery.length; i++) {
	gallery[i].addEventListener("click", function() {
	galleryDisplay(i);
	});
};

// ----------Event Handler Methods----------

function galleryDisplay(i) {
	modalContainer.style.display = "block";
	galleryModal.style.backgroundImage = "url('" + masterGallery.gallery[i].album[currentPhoto].fileName + "')";
}

function gallery() {
	if (currentPhoto === masterGallery.gallery[i].album.length -1) {
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

// -----Gally Push-----

masterGallery.addGallery(hiking);
masterGallery.addGallery(biking);
masterGallery.addGallery(kayaking);










 
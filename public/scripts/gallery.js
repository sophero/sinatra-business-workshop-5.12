// ----------DOM Variables----------

var galleryOne = document.getElementById("gallery1");
var galleryTwo = document.getElementById("gallery2");
var galleryThree = document.getElementById("gallery3");
var modalContainer = document.getElementById("modal-container");
var caption = document.getElementById("caption");
var galleryModal = document.getElementById("galleryDiv");
var blur = document.getElementById("blur");
var currentPhoto = 0;
var currentGallery = 0;

// ----------Event Handlers----------

galleryOne.addEventListener("click", function() {
	currentGallery = 0;
	galleryDisplay();	
});
galleryTwo.addEventListener("click", function() {
	currentGallery = 1;
	galleryDisplay();
});
galleryThree.addEventListener("click", function() {
	currentGallery = 2;
	galleryDisplay();
});

galleryModal.addEventListener("click", gallery);
blur.addEventListener("click", closeGallery);

// ----------Event Handler Methods----------

function galleryDisplay() {
	modalContainer.style.display = "block";
	blur.style.display = "block";
	galleryModal.style.backgroundImage = "url('" + masterGallery.gallery[currentGallery].album[currentPhoto].fileName + "')";
	caption.innerHTML = masterGallery.gallery[currentGallery].album[currentPhoto].caption;
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

function closeGallery() {
	blur.style.display = "none";
	modalContainer.style.display = "none";
	currentPhoto = 0;
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

var wissihickon = new Image("assets/images/hiking/Wissihickon.jpg", "This hundred year old statue overlooks Wissihickon at it's highest point.  Take the Orange trail and look up. He is hard to miss.");
var coveredBridge = new Image("assets/images/hiking/covered_bridge.jpg", "Pennsylvania is well known for it's many covered bridges, which date to the nineteenth century.  There are a few excellent examples of the style off Forbidden Drive in Chestnut Hill.");
var fairmount = new Image("assets/images/hiking/fairmount.jpg", "Leaves of Grass");
var kellyDrive = new Image("assets/images/hiking/kelly_drive.jpg", "Fairmount Park stretches through Philadelphia for over a dozen miles, bisected by the banks of the River Schuylkill.");
var tinman = new Image("assets/images/hiking/tinman.jpg", "The TinMan and friends look over Valley Forge.");
var wonderland = new Image("assets/images/hiking/wonderland.jpg", "The stone walls inside Wissihickon harken hikers to a time long forgotten on the Forbidden Drive.");
// -----Biking Gallery-----

var fairmountCycling = new Image("assets/images/biking/cycling.jpg", "Fairmount Park is the starting point of almost every bike trek a Philadelphian takes.");
var circuitTrails = new Image("assets/images/biking/circuit_trails.jpg", "The circuit trails is a system of trails that connects the city in all directions. It extends beyond Philadelphia as well, connecting Chester, Montgomery, Delaware, and Bucks County as well.");
var fairmountSampler = new Image("assets/images/biking/fairmount_sampler.jpg", "The sampler explores Wissihickon and the Belmont Plateau, giving riders a solid 30-40 miles of trail riding on single track terrain.");
var forbiddenDrive = new Image("assets/images/biking/forbidden_drive.jpg", "Forbidden Drive is the main thoroughfare through Wissihickon and an excellent stretch of pavement to explore one of Philadelphia's best parks.");
var indego = new Image("assets/images/biking/indego.jpg", "If you find yourself in the central zone without a ride, hop on a blue bike and explore.");
var schuylkillTrail = new Image("assets/images/biking/schuykill_trail.jpg", "This is an excellent day ride.  It connects several park systems and towns together and once complete will span 130 miles in length.");

// -----Kayaking Gallery-----

var pineBarrens = new Image("assets/images/kayaking/PineBarrens.jpg")
var cityViews = new Image("assets/images/kayaking/city_view.jpg")
var benFranklin = new Image("assets/images/kayaking/ben_franklin.jpg")
var hiddenSchuylkill = new Image("assets/images/kayaking/hidden_schuylkill.jpg")
var relaxedRide = new Image("assets/images/kayaking/relaxed_ride.jpg")
var whitewater = new Image("assets/images/kayaking/whitewater.jpg")

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
biking.addPhoto(circuitTrails);
biking.addPhoto(fairmountSampler);
biking.addPhoto(forbiddenDrive);
biking.addPhoto(indego);
biking.addPhoto(schuylkillTrail);

// -----Kayaking Photo Push-----

kayaking.addPhoto(benFranklin);
kayaking.addPhoto(pineBarrens);
kayaking.addPhoto(cityViews);
kayaking.addPhoto(relaxedRide);
kayaking.addPhoto(whitewater);
kayaking.addPhoto(hiddenSchuylkill);

// -----Gallery Push-----

masterGallery.addGallery(hiking);
masterGallery.addGallery(biking);
masterGallery.addGallery(kayaking);










 
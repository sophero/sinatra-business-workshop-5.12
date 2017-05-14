var hike = new Image("hiking.jpg");
var bike = new Image("biking.jpg");
var kayak = new Image("kayak.jpg");

var homeCarousel = new Carousel([hike, bike, kayak]);

function Image(filename) {
	this.url = "/assets/images/home-carousel/" + filename;
	this.filename = filename;
}

function Carousel(imageArray) {
	var images = imageArray;
	var curImgIndex = 0;

	var activeImage = document.getElementsByClassName('home-carousel__active-image')[0];
	var leftArrow = document.getElementsByClassName('home-carousel__arrow-left')[0];
	var rightArrow = document.getElementsByClassName('home-carousel__arrow-right')[0];

	leftArrow.addEventListener("click", prevImage);
	rightArrow.addEventListener("click", nextImage);

	displayImg();

	function nextImage() {
		curImgIndex += 1;
		if (curImgIndex === images.length) {
			curImgIndex = 0;
		}
		displayImg();
	}

	function prevImage() {
		curImgIndex -= 1;
		if (curImgIndex < 0) {
			curImgIndex = images.length - 1;
		}
		displayImg();
	}

	function displayImg() {
		activeImage.style.backgroundImage = "url('" + images[curImgIndex].url + "')";
	}
}

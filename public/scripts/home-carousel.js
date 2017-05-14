var testImg = new Image("pocono-biking-large.jpg");

var homeCarousel = new Carousel([testImg]);

function Image(filename) {
	this.url = "/assets/images/" + filename;
	this.filename = filename;
}

function Carousel(imageArray) {
	var images = imageArray;
	var curImgIndex = 0;

	var activeImage = document.getElementsByClassName('home-carousel__active-image')[0];

	displayImg();

	// function nextImage() {
	// 	curImgIndex += 1;
	// }

	function displayImg() {
		activeImage.style.backgroundImage = "url('" + images[curImgIndex].url + "')";
	}
}

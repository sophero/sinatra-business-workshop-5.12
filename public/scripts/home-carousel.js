var hike = new Image("hiking.jpg", "Hiking");
var bike = new Image("biking.jpg", "Biking");
var kayak = new Image("kayak.jpg", "Kayaking");

var homeCarousel = new Carousel([kayak, bike, hike]);

function Image(filename, caption) {
	this.filename = filename;
	this.caption = caption;
	var imageDir = "/assets/images/home-carousel/";
	this.url = imageDir + filename;
}

function Carousel(imageArray) {
	var images = imageArray;
	var curImgIndex = 0;
	var userClick = false;

	var activeImage = document.getElementsByClassName('home-carousel__active-image')[0];
	var leftArrow = document.getElementsByClassName('home-carousel__arrow-left')[0];
	var rightArrow = document.getElementsByClassName('home-carousel__arrow-right')[0];
	var caption = document.getElementsByClassName('home-carousel__caption')[0];
	var tileNav = document.getElementsByClassName('home-carousel__tile-nav')[0];

	leftArrow.addEventListener("click", function() {
		userClick = true;
		prevImage();
	});
	rightArrow.addEventListener("click", function() {
		userClick = true;
		nextImage();
	});

	displayNav();
	var navTiles = document.getElementsByClassName('home-carousel__nav-tile');

	setActiveTile(0);
	autoScroll();

	function nextImage() {
		if (curImgIndex === images.length - 1) {
			var index = 0;
		} else {
			var index = curImgIndex + 1;
		}
		setActiveTile(index);
	}

	function prevImage() {
		if (curImgIndex === 0) {
			var index = images.length - 1;
		} else {
			var index = curImgIndex - 1;
		}
		setActiveTile(index);
	}

	function displayImg() {
		var curImg = images[curImgIndex];
		activeImage.style.backgroundImage = "url('" + curImg.url + "')";
		caption.innerHTML = curImg.caption;
	}

	function setActiveTile(imageIndex) {
		navTiles[curImgIndex].classList.remove("home-carousel__nav-tile--active");
		navTiles[imageIndex].classList.add("home-carousel__nav-tile--active");
		curImgIndex = imageIndex;
		displayImg();
	}

	function displayNav() {
		for (let k = 0; k < images.length; k++) {
			var tileDiv = document.createElement("div");
			tileDiv.classList.add("home-carousel__nav-tile");
			tileDiv.addEventListener("click", function() {
				userClick = true;
				setActiveTile(k);
			});
			tileNav.append(tileDiv);
		}
	}

	function autoScroll() {
		setTimeout(function() {
			if (userClick === false) {
				nextImage();
				autoScroll();
			}
		}, 5000);
	}
}

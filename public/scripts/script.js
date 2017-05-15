var hamburgerIcon=document.getElementsByClassName('hamburger')[0];
var navItem=document.getElementsByClassName('nav-item');
var navBar=document.getElementsByClassName('nav-bar')[0];
var footer=document.getElementsByClassName('footer')[0];
var mainContent=document.getElementsByClassName('main-container')[0];
var totalMenu=document.getElementsByClassName('nav-total')[0];

hamburgerIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (navItem[0].style.display === "block") {
		hideMenu();
	} else {
		showMenu("block");
	}
}

function hideMenu() {
	for (var i=0; i<navItem.length; i++){
	    navItem[i].style.display="none";
			// navItem[i].style.float="right";
	}
	navBar.classList.remove('hamburger-show-menu');
	totalMenu.classList.remove('hamburger-show-menu');
	footer.classList.remove('hamburger-move-content');
	mainContent.classList.remove('hamburger-move-content');
}

function showMenu(style){
	for (var i=0; i<navItem.length; i++){
		navItem[i].style.display=style;
		// navItem[i].style.float="none";
	}
	navBar.classList.add('hamburger-show-menu');
	totalMenu.classList.add('hamburger-show-menu');
	footer.classList.add('hamburger-move-content');
	mainContent.classList.add('hamburger-move-content');

}

window.addEventListener("resize", function() {
	var width = window.innerWidth;
	if (width > 480) {
		showMenu("inline");
		navBar.classList.remove('hamburger-show-menu');
		footer.classList.remove('hamburger-move-content');
		mainContent.classList.remove('hamburger-move-content');
		totalMenu.classList.remove('hamburger-show-menu');
	} else {
		hideMenu();
	}
});

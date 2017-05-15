var hamburgerIcon=document.getElementsByClassName('hamburger')[0];
var navItem=document.getElementsByClassName('nav-item');

hamburgerIcon.addEventListener("click", showMenu);

// function toggleMenu() {
// 	if (navItem[0].style.display === "block") {
// 		hideMenu();
// 	} else {
// 		showMenu();
// 	}
// }

// function hideMenu() {
// 	for (var i=0; i<navItem.length; i++){
// 	    navItem[i].style.display="none";
// 	  }	
// }

function showMenu(){
  for (var i=0; i<navItem.length; i++){
    navItem[i].style.display="block";
  }
}

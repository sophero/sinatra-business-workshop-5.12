var hamburgerIcon=document.getElementsByClassName('hamburger')[0];
var navItem=document.getElementsByClassName('nav-item')

hamburgerIcon.addEventListener("click", showMenu)

function showMenu(){
  for (var i=0; i<navItem.length; i++){
    navItem[i].style.display="block";
  }
}

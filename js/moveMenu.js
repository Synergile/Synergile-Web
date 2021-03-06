// Navbar hiding/unhiding when scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if(window.innerWidth <= 640) return;
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bignav").style.top = "0";
  } else {
    document.getElementById("bignav").style.top = "-51px";
  }
  prevScrollpos = currentScrollPos;
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleMobileNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Hides the mobile menu if it's open when the screen is resized larger than mobile max size
window.onresize = function() {
	if(window.innerWidth < 641) return;
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") != -1) {
		toggleMobileNav();
	}
}

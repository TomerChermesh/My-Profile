window.onscroll = function() {navScroll()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function navScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
	header.classList.remove("sticky");
  }
}

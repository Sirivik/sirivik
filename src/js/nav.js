const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");

navIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  navIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener, "click", closeMenu);

function closeMenu() {
  navIcon.classList.remove("active");
  navMenu.classList.remove("active");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const navBar = document.querySelector(".navbar");
var prevScrollPos = window.pageYOffset;
window.onscroll = scrollShowNav;
function scrollShowNav() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-110px";
  }
  prevScrollPos = currentScrollPos;
}

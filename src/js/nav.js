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

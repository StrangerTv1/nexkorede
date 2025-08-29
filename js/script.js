// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn i");
const navLinks = document.querySelector("header nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("bi-x");
});
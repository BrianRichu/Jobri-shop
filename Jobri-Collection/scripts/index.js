const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector(".site-header");

/* Open mobile menu */
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

/* Close mobile menu */
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

/* Shrink header on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

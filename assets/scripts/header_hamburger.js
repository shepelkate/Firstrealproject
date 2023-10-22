const header_hamburger = document.querySelector(".header_hamburger");
const header_menu = document.querySelector(".header_hamburger-container .header_menu");

header_hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    header_hamburger.classList.toggle("active");
    header_menu.classList.toggle("active");
}
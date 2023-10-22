const header_hamburger = document.querySelector(".header__hamburger");
const header_menu = document.querySelector(".header__mobile-menu");

header_hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    header_hamburger.classList.toggle("active");
    header_menu.classList.toggle("active");
}
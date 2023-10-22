const header_hamburger = document.querySelector(".header__hamburger");
const header_mobile_menu = document.querySelector(".header__mobile-menu");
const header_mobile_menu_link = document.querySelectorAll(".header__mobile-menu a");

header_hamburger.addEventListener("click", mobileMenu);

header_mobile_menu_link.forEach((element) => { 
    element.addEventListener("click", mobileMenu);
});


function mobileMenu() {
    header_hamburger.classList.toggle("active");
    header_mobile_menu.classList.toggle("active");
}

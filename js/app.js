const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

const toggleMenu = () => {
  menu.classList.toggle("menu_opened");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu_opened");
  });
});

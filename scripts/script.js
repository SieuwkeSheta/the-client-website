// hamburger
const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")
const greyScale = document.querySelector(".grey-scale")

hamMenuButton.addEventListener("click", toggleHamMenu)
greyScale.addEventListener("click", toggleHamMenu)

function toggleHamMenu() {
    hamMenu.classList.toggle("is-open")
    greyScale.classList.toggle("is-open")
}



// Laatste nieuws op home-pagina, links en rechts knoppen op carousel
const prevBtn = document.querySelector(".prev1");
const nextBtn = document.querySelector(".next1");
const deCaro = document.querySelector(".carousel");
const eenSlide = document.querySelector(".slide");

prevBtn.addEventListener("click", toPrevSlide);
nextBtn.addEventListener("click", toNextSlide);

function toPrevSlide() {
    let slideWidth = eenSlide.offsetWidth;

    deCaro.scrollLeft = deCaro.scrollLeft - slideWidth;
}

function toNextSlide() {
    let slideWidth = eenSlide.offsetWidth;

    deCaro.scrollLeft = deCaro.scrollLeft + slideWidth;
}




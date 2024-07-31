"use strict";

// Hero slider
const hero = document.querySelector(".hero");
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}

setInterval(() => {
  activeSlide++;
  if (activeSlide === slides.length) {
    activeSlide = 0;
  }
  setActiveSlide();
}, 3000);

// Logo
const logo = document.querySelector(".logo img");

logo.addEventListener("mouseenter", () => {
  logo.src = "img/logo-orig.svg";
});

logo.addEventListener("mouseleave", () => {
  logo.src = "img/logo-branco.svg";
});

// text-size
const wineText = document.querySelector(".selection .title-container h2");
const windowWidth = window.innerWidth;
wineText.style.fontSize =
  windowWidth < 1400 ? `${(window.innerWidth * 100) / 1400}%` : "100%";

window.addEventListener("resize", (e) => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 1420) {
    wineText.style.fontSize = `${(windowWidth * 100) / 1400}%`;
  } else {
    wineText.style.fontSize = "100%";
  }
});

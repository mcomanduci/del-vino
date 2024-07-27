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
  console.log(activeSlide);
}, 3000);

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

// STORE TEST
const storeContainer = document.querySelector(".store .wines-container");

const item = `
            <div class="store-img">
              <img src="img/wines/wine-1-small.png" alt="" />
            </div>
            <div class="store-info">
              <div>
                <h3>Vinho Tinto</h3>
                <div>
                  <img src="img/icones/star.svg" alt="" />
                </div>
              </div>
              <span>R$ 241,00</span>
            </div>
          `;

for (let i = 0; i < 11; i++) {
  const itemEl = document.createElement("div");
  itemEl.classList.add("store-item");
  itemEl.innerHTML = item;
  storeContainer.appendChild(itemEl);
}

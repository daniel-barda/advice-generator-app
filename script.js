"use strict";
const btnEL = document.querySelector(".card__btn");
const card = document.querySelector(".card");
const cardContentEL = document.querySelector(".card__content");
const cardLineEl = document.querySelector(".card__line");

let isMobileImage = false;

const getJSON = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (res.status !== 200) throw new Error("Someting Wrong 💥");
    const data = await res.json();
    const { advice } = data.slip;
    cardContentEL.textContent = `"${advice}"`;
  } catch (error) {
    console.log(error.message);
  }
};

// run getJSON when the app load
window.onload = function () {
  getJSON();
};

btnEL.addEventListener("click", function (e) {
  e.preventDefault();
  getJSON();
});

const isMobile = window.innerWidth <= 500;
if (isMobile) {
  cardLineEl.firstElementChild.setAttribute(
    "src",
    "images/pattern-divider-mobile.svg"
  );
}

if (!isMobile) {
  cardLineEl.firstElementChild.setAttribute(
    "src",
    "images/pattern-divider-desktop.svg"
  );
}

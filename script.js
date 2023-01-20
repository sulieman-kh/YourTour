"use strict";


// Sticky navigation
const headerEl = document.querySelector(".header");
// const listEl = document.querySelectorAll("a");
const imgHeaderEl = document.querySelector(".image__header");



const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];
  // console.log(ent);
  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");

  };
  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-50px"
});
obs.observe(imgHeaderEl)


const cardEl = document.querySelectorAll(".card");
console.log(cardEl)
const cardImgEl = document.querySelector(".card__img");
const btnEL = document.querySelector(".card__button")
document.addEventListener('DOMContentLoaded', cardActive);

function cardActive(e) {
  console.log(cardEl)
  // cardEl.focus();

  cardImgEl.classList.add('carda')
  btnEL.classList.add('btna')

  cardEl.forEach(function (e) {
    e.addEventListener('mouseover', function () {
      cardImgEl.classList.remove('carda')
      btnEL.classList.remove('btna')
    });
  })
}


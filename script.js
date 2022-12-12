"use strict";


// Sticky navigation
const navbarEl = document.querySelector(".navbar");
// const listEl = document.querySelectorAll("a");
const headerEl = document.querySelector("header");
console.log(navbarEl);
console.log(headerEl);
// console.log(listEl);


const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];
  console.log(ent);
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
obs.observe(headerEl)





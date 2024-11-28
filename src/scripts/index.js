const menuToggle = document.getElementById("menu");
const menuToggle2 = document.getElementById("menu2");
const menuToggle3 = document.getElementById("menu3");
const info = document.getElementById("info");
const showcase = document.querySelector(".container");
const overlay = document.querySelector(".opaque");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  overlay.classList.remove("hidden"); // Show overlay
  showcase.classList.add("flex");
  showcase.classList.remove("hidden"); // Slide in the container
  body.classList.add("overflow-hidden");
  nav.classList.remove("hidden");
  // Prevent scrolling
});

menuToggle2.addEventListener("click", () => {
  showcase.classList.remove("flex");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  nav.classList.add("hidden");
});

menuToggle3.addEventListener("click", () => {
  info.classList.add("hidden");
});

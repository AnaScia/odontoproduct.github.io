// let navList = document.querySelector(".nav__list");
let toggle = document.querySelector(".nav__toggle");
let links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  // al hacer click en la flecha..
  toggle.classList.toggle("rotate"); //la flecha rota hacia arriba
  links.classList.toggle("active"); //la lista aparece
});

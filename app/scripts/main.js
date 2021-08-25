$(document).ready(function () {
  btn.addEventListener("click", () => {
    if (active) inpt.classList.remove("active");
    else inpt.classList.add("active");
    active = !active;
  });
});
let active = true;
const inpt = document.querySelector(".searchBar > input");
const btn = document.querySelector(".searchBar > .btn");

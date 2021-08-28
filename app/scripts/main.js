$(document).ready(function () {
  show();
  bd.addEventListener("scroll", show);
});
const eles = document.getElementsByClassName("ctn");
const bd = document.getElementsByClassName("home-page")[0];
function show() {
  let mxw = (window.innerHeight / 5) * 4;
  for (let i = 0; i < eles.length; i++) {
    const e = eles[i];
    if (e.getBoundingClientRect().top < mxw) {
      e.classList.add("show");
    } else {
      e.classList.remove("show");
    }
  }
}

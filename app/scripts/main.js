$(document).ready(function () {
  let stt = 0;
  opBtn.addEventListener("click", () => {
    if (stt == 0) {
      stt = 1;
      list.classList.add("list-actv");
      ico.style = "transform: translate(-50%, -50%)";
      ctn.style = "transform: rotate(-20deg)";
    }
  });
  clsBtn.addEventListener("click", () => {
    if (stt == 1) {
      stt = 0;
      list.classList.remove("list-actv");
      ico.style = "transform: translate(-50%, -50%) rotate(80deg)";
      ctn.style = "";
    }
  });
});

const ico = document.getElementsByClassName("slideMenu__icon")[0];
const opBtn = document.getElementsByClassName("slideMenu__icon-open")[0];
const clsBtn = document.getElementsByClassName("slideMenu__icon-close")[0];
const list = document.getElementsByClassName("slideMenu__list")[0];
const ctn = document.getElementsByClassName("content")[0];

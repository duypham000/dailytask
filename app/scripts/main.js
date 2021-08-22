$(document).ready(function () {
  changeProg(1);
  let current = 1;

  nxt.addEventListener("click", () => {
    current++;
    if (current > 4) current = 4;
    else changeProg(current);
  });
  prv.addEventListener("click", () => {
    current--;
    if (current < 1) current = 1;
    else changeProg(current);
  });
});

const nxt = document.getElementsByClassName("prog__control-next")[0];
const prv = document.getElementsByClassName("prog__control-prev")[0];

const list = document.getElementsByClassName("prog__view-dot");
const bar = document.getElementsByClassName("prog__view-bar")[0];

function changeProg(node) {
  for (let i = 0; i < list.length; i++) {
    const ele = list[i];
    ele.style.border = "#bdc3c7 0.3rem solid";
  }
  for (let i = 0; i < node; i++) {
    const ele = list[i];
    ele.style.border = "#2980b9 0.3rem solid";
  }

  prv.style = "";
  nxt.style = "";
  switch (node) {
    case 1:
      prv.style = "background: #bdc3c7;cursor: not-allowed;";
      bar.style = "transform: translateX(-95%)";
      break;
    case 2:
      bar.style = "transform: translateX(-65%)";
      break;
    case 3:
      bar.style = "transform: translateX(-35%)";
      break;
    case 4:
      nxt.style = "background: #bdc3c7;cursor: not-allowed;";
      bar.style = "transform: translateX(-5%)";
      break;
    default:
      break;
  }
}

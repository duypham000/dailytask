$(document).ready(function () {
  let pros = 0;
  let loop = setInterval(() => {
    appear(pros);
    pros++;
    if (pros > 100) {
      clearInterval(loop);
    }
  }, 50);
});

const wrp = document.getElementsByClassName("wrapper")[0];
const blur = document.getElementsByClassName("blur")[0];
const txt = document.querySelector(".blur > p");

function appear(pros) {
  let bl = 25 - pros / 4 - 0.25;
  let opa = 1 - pros / 100;
  txt.innerHTML = pros + "%";
  if (pros == 100) {
    blur.style = "display: none;";
  } else {
    wrp.style = "filter: blur(" + bl + "px);";
    blur.style = "opacity:" + opa + ";";
  }
}

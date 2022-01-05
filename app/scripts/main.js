$(document).ready(function () {
  actv_event();
});

// variable
var bill, people, tip_percent;

function update() {
  let per_scrn = document.getElementsByClassName(
    "caculator__scrn-grp--display"
  )[0];
  let total_scrn = document.getElementsByClassName(
    "caculator__scrn-grp--display"
  )[1];
  if (bill && tip_percent && people) {
    let total_1per = bill * tip_percent * 0.01;
    total_1per = Math.round(total_1per * 100) / 100;
    let total = Math.round(total_1per * people * 100) / 100;

    per_scrn.innerHTML = "$" + total_1per;
    total_scrn.innerHTML = "$" + total;
  }
  // ============== reset event
  let rs_btn = document.getElementsByClassName("caculator__scrn-btn")[0];

  if ((bill > 0) & (people > 0) & (tip_percent > 0)) {
    rs_btn.classList.add("active");
  } else {
    rs_btn.classList.remove("active");
  }

  rs_btn.addEventListener("click", () => {
    tip_percent = 0;
    people = 0;
    bill = 0;
    let btn_key = document.getElementsByClassName("btn_grp-items");
    let inpts = document.querySelectorAll("input");

    for (let i = 0; i < inpts.length; i++) {
      const e = inpts[i];
      e.value = "";
    }

    for (let i = 0; i < btn_key.length; i++) {
      const ele = btn_key[i];
      ele.classList.remove("active");
    }

    per_scrn.innerHTML = "$0.00";
    total_scrn.innerHTML = "$0.00";
    rs_btn.classList.remove("active");
  });
}

function actv_event() {
  let btn_key = document.getElementsByClassName("btn_grp-items");
  let inpt_key = document.querySelector(".btn_grp-cus > input");
  let inpts = document.querySelectorAll(
    ".caculator__key-input > .input-group > input"
  );

  // =============key btn event
  // active btn
  for (let i = 0; i < btn_key.length; i++) {
    const ele = btn_key[i];
    ele.addEventListener("click", (evnt) => {
      for (let i = 0; i < btn_key.length; i++) {
        const ele = btn_key[i];
        ele.classList.remove("active");
      }
      if (evnt.target.classList.contains("form-control")) {
        evnt.path[1].classList.add("active");
        tip_percent = evnt.target.value;
      } else {
        evnt.target.classList.add("active");
        tip_percent = evnt.target.getAttribute("value");
      }
      update();
    });
    inpt_key.addEventListener("input", () => {
      tip_percent = inpt_key.value;
      update();
    });
  }

  // =============input event
  // active inputs
  for (let i = 0; i < inpts.length; i++) {
    const ele = inpts[i];
    ele.addEventListener("focusin", (evt) => {
      evt.path[1].classList.add("active");
      update();
    });
    ele.addEventListener("focusout", (evt) => {
      evt.path[1].classList.remove("active");
      update();
    });
  }
  // get value
  let bill_ipt = document.getElementById("bill");
  bill_ipt.addEventListener("input", () => {
    bill = bill_ipt.value;
    update();
  });

  let people_par = document.getElementsByClassName("caculator__key-input")[1];
  let people_ipt = document.getElementById("people");
  people_ipt.addEventListener("input", () => {
    people = people_ipt.value;
    if (people > 0) {
      people_par.classList.remove("danger");
    } else {
      people_par.classList.add("danger");
    }
    update();
  });

  people_ipt.addEventListener("focusout", () => {
    if (people > 0) {
      people_par.classList.remove("danger");
    } else {
      people_par.classList.add("danger");
    }
  });
}

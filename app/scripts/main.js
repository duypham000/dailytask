$(document).ready(function () {
  let items = document.getElementsByClassName("cards__item");
  let list_items = document.getElementsByClassName("cards")[0];
  list_items.addEventListener("click", (res) => {
    if (res.target.classList[0] == "cards") {
      let list = res.target.children;
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        e.classList.remove("active");
      }
    }
  });
  for (const item of items) {
    item.addEventListener("click", (res) => {
      let list = res.path[1].children;
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        e.classList.remove("active");
      }
      res.target.classList.add("active");
    });
  }
});

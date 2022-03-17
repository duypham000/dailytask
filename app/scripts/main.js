$(document).ready(function () {
	let items = document.querySelectorAll(".header__navMenu_menu-items > a");
	for (let i = 0; i < items.length; i++) {
		const e = items[i];
		e.addEventListener("click", (e) => {
			triggerListItems(e);
		});
	}
});

function triggerMenuMobile(ele) {
	ele.classList.toggle("active");
	let menu = document.querySelector(".header__navMenu_menu");
	menu.classList.toggle("active");
}

function triggerListItems(ele) {
	ele.path[1].classList.toggle("hide");
}

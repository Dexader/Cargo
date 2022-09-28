
import { isMobile } from "./functions.js";

import { flsModules } from "./modules.js";

/* Active class */


var itemsContainer = document.getElementById("langChoice");

var items = itemsContainer.getElementsByClassName("top-header__item");


for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
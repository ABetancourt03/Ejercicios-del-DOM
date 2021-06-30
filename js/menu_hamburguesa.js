const $panelBtn = document.querySelector(".panel-btn").addEventListener("click", panelBtn);
const $panel = document.querySelector(".panel");

function panelBtn(e) {
	if ($panel.classList.contains("panel-on")) {
    $panel.classList.remove("panel-on");
  } else {
    $panel.classList.add("panel-on");
  }

	e.preventDefault();
}
const w = window;

const $scrollbtn = document.querySelector(".btnScrollTop").addEventListener("click", scrollBtn);

function scrollBtn(e) {
	if (e.target) {
		window.scrollTo({
			behavior: "smooth",
			top: 0
		});
	}
}
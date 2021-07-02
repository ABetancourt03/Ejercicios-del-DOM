const keyDown = document.addEventListener("keydown", shorcuts);
const $ball = document.querySelector(".ball").addEventListener("keydown", moverBall);

function shorcuts(e) {
	if (e.key === "a" && e.altKey) {
		alert("Has lanzado una alerta con el teclado");
	}

	if (e.key === "c" && e.altKey) {
		confirm("Has lanzado una confirmación con el teclado");
	}

	if (e.key === "p" && e.altKey) {
		prompt("Has lanzado un aviso con el teclado");
	}
}

function moverBall(e) {
	
}
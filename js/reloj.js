const d = document;

// Reloj Digital
const $btnIniciarReloj = d.querySelector("#iniciar-reloj").addEventListener("click", btnIniciarReloj);
const $btnDetenerReloj = d.querySelector("#detener-reloj").addEventListener("click", btnDetenerReloj);


let reloj;

function btnIniciarReloj(e) {

	reloj = setInterval(() => {
		let hora = new Date().toLocaleTimeString();

		d.querySelector("#reloj").innerHTML = `<h3>${hora}</h3>`
	}, 1000);

	e.target.disabled = true;
}

function btnDetenerReloj(e) {
	clearInterval(reloj);
	d.querySelector("#reloj").innerHTML = null;
	d.querySelector("#iniciar-reloj").disabled = false;
}

// Alarma Sonora
const $btnIniciarAlarma = d.querySelector("#iniciar-alarma").addEventListener("click", btnIniciarAlarma);
const $btnDetenerAlarma = d.querySelector("#detener-alarma").addEventListener("click", btnDetenerAlarma);
const $alarma = d.createElement("audio");
$alarma.src = "./assets/alarma.mp3";

let alarma;

function btnIniciarAlarma(e) {
	alarma = setInterval(() => {
		$alarma.play();
	}, 1000);
}

function btnDetenerAlarma(e) {
	clearInterval(alarma);
	alarma.pause();
	alarma.currentTime = 0;
}
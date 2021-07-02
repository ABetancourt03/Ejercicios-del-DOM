const $countdown = document.getElementById("countdown");

function countdown(limitDate = "July 22, 2021 3:23:19", finalMessage = "🎉🎂 Feliz Cumpleaños, pequeño programador 🎂🎉") {

	const time = new Date(limitDate).getTime();

	let countTime = setInterval(() => {
		let actualDate = new Date().getTime();

		let limitTime = time - actualDate;

		let dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
			horas = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
			minutos = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
			segundos = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

		$countdown.innerHTML = `<h3>🎉🎂 Faltan: ${dias} días ${horas} horas ${minutos} minutos y ${segundos} segundos, para mi Cumpleaños 🎂🎉</h3>`;

		console.log(time);
	}, 1000);
}

countdown();
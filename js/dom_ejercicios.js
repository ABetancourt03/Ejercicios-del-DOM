const d = document;
const w = window;
const n = navigator;
const ua = n.userAgent;
// Menu Hamburguesa
const $panelBtn = d.querySelector(".panel-btn").addEventListener("click", panelBtn);
const $panel = d.querySelector(".panel");
d.addEventListener("scroll", cerrarMenu);

function panelBtn(e) {
  if ($panel.classList.contains("panel-on")) {
    $panel.classList.remove("panel-on");
  } else {
    $panel.classList.add("panel-on");
  }
}

function cerrarMenu() {
  $panel.classList.remove("panel-on");
}

// Eventos del Teclado
const keyDown = d.addEventListener("keydown", shorcuts);
const $ball = d.querySelector(".ball").addEventListener("keydown", moverBall);

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

function moverBall(e) {}

// Reloj Digital
const $btnIniciarReloj = d
  .querySelector("#iniciar-reloj")
  .addEventListener("click", btnIniciarReloj);
const $btnDetenerReloj = d
  .querySelector("#detener-reloj")
  .addEventListener("click", btnDetenerReloj);

let reloj;

function btnIniciarReloj(e) {
  reloj = setInterval(() => {
    let hora = new Date().toLocaleTimeString();

    d.querySelector("#reloj").innerHTML = `<h3>${hora}</h3>`;
  }, 1000);

  e.target.disabled = true;
}

function btnDetenerReloj(e) {
  clearInterval(reloj);
  d.querySelector("#reloj").innerHTML = null;
  d.querySelector("#iniciar-reloj").disabled = false;
}

// Alarma Sonora
const $btnIniciarAlarma = d
  .querySelector("#iniciar-alarma")
  .addEventListener("click", btnIniciarAlarma);
const $btnDetenerAlarma = d
  .querySelector("#detener-alarma")
  .addEventListener("click", btnDetenerAlarma);
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

// Cuenta Regresiva
const $countdown = d.getElementById("countdown");

function countdown(
  limitDate = "July 22, 2021 00:00:00",
  finalMessage = "🎉🎂 Feliz Cumpleaños, pequeño programador 🎂🎉"
) {
  const time = new Date(limitDate).getTime();

  let countTime = setInterval(() => {
    let actualDate = new Date().getTime();

    let limitTime = time - actualDate;

    let dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      horas = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      minutos = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      segundos = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>🎉🎂 Faltan: ${dias} días ${horas} horas ${minutos} minutos y ${segundos} segundos, para mi Cumpleaños 🎂🎉</h3>`;

    if (limitTime < 0) {
      clearInterval(countTime);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}

countdown();

// Boton de Scroll Top
const $scrollbtn = d.querySelector(".btnScrollTop").addEventListener("click", scrollBtn);

function scrollBtn(e) {
  if (e.target) {
    w.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
}

// Tema Light/Dark
const $btnDarkMode = d.querySelector(".btnDarkMode");
const $body = d.getElementById("body");
const $header = d.querySelector(".header");
const $panelNav = d.querySelector(".panel");
const $menu = d.querySelector(".menu");

$btnDarkMode.addEventListener("click", btnDarkMode);

// Boton Dark/Light
const btnLight = () => {
  $body.classList.remove("darkMode");
};

const btnDark = () => {
  $body.classList.add("darkMode");
};

// Texto Dark/Light
const btnTextLight = () => {
  $btnDarkMode.innerHTML = "☀️";
};

const btnTextDark = () => {
  $btnDarkMode.innerHTML = "🌙";
};

// Header Dark/Light
const headerLight = () => {
  $header.classList.remove("headerDark");
};

const headerDark = () => {
  $header.classList.add("headerDark");
};

// Panel Dark/Light
const panelLight = () => {
  $panelNav.classList.remove("panelDark");
};

const panelDark = () => {
  $panelNav.classList.add("panelDark");
};

// Menu Dark/Light
const menuLight = () => {
  $menu.classList.remove("menuDark");
};

const menuDark = () => {
  $menu.classList.add("menuDark");
};

function btnDarkMode(e) {
  if ($body.classList.contains("darkMode")) {
    btnLight();
  } else {
    btnDark();
  }

  if ($body.classList.contains("darkMode")) {
    btnTextLight();
  } else {
    btnTextDark();
  }

  if ($header.classList.contains("headerDark")) {
    headerLight();
  } else {
    headerDark();
  }

  if ($panelNav.classList.contains("panelDark")) {
    panelLight();
  } else {
    panelDark();
  }

  if ($menu.classList.contains("menuDark")) {
    menuLight();
  } else {
    menuDark();
  }
}

// Responsive con JavaScript
function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}

responsiveMedia(
  "youtube",
  "(min-width: 1024px)",
  `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
);

responsiveMedia(
  "gmaps",
  "(min-width: 1024px)",
  `<a href="https://goo.gl/maps/zdLq8hQAqJLStFsNA" target="_blank" rel="noopener">Ver Mapa</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.7764082144386!2d-118.3947239853014!3d34.02394982666896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b987640d7223%3A0xfd01d00d0eaa5a21!2sAmazon%20Studios!5e0!3m2!1ses!2sve!4v1625452347929!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
);

// Responsive Tester
function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      tester = w.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}

responsiveTester("responsive-tester");

// Deteccion de Dispositivos (User Agent)
function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge
        );
      },
    };

  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;
}

userDeviceInfo("user-device");

// Deteccion de la conexion

function networkStatus() {
    const isOnLine = () => {
        const $div = d.createElement("div");
        
        if (n.onLine) {
            $div.textContent = "Conexión Reestablecida"
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión Perdida"
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div), 2000);
    };
    
    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());
}

networkStatus();

// Deteccion de Camara
/* function webCam(id) {
    const $video = d.getElementById(id);

    if (n.mediaDevices.getUserMedia()) {
        n.mediaDevices.getUserMedia({video:true, audio:true})
            .then(stream => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => console.log(`Sucedio el siguiente error!: ${err}`));
    }
}

webCam("webcam"); */

// Geolocalizacion

function getGeolocation(id) {
    const $id = d.getElementById(id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    const success = (position) => {
        let coords = position.coords;

        $id.innerHTML = `<p>Tu posicion antual es:</p>

            Latitud: <b>${coords.latitude}</b><br>
            Longitud: <b>${coords.longitude}</b><br>
            Precicion: <b>${coords.accuracy}</b> metros<br>
            <br>
        <a href="https://www.google.com/maps/@${coords.latitude},
            ${coords.longitude}, 15z" target="_blank" rel="noopener">Ver en Google Maps</a>`;}

    const error = (err) => {$id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`}

    n.geolocation.getCurrentPosition(success, error, options);
}

getGeolocation("geolocation");

// Filtros de Busquedas
function searchFilters(input, selector) {
    d.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {

            if (e.key === "Escape") e.target.value = "";

            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))
                ? el.classList.remove("filter")
                : el.classList.add("filter"));
        }
    });
}

searchFilters(".card-filter", ".card");












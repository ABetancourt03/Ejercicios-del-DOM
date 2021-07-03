const $btnDarkMode = document.querySelector(".btnDarkMode");
const $body = document.getElementById("body");
const $header = document.querySelector(".header");
const $panelNav = document.querySelector(".panel");
const $menu = document.querySelector(".menu");

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

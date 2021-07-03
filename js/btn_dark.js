const $btnDarkMode = document.querySelector(".btnDarkMode");
const $body = document.getElementById("body");
const $header = document.querySelector(".header");
const $panelNav = document.querySelector(".panel");
const $menu = document.querySelector(".menu");

$btnDarkMode.addEventListener("click", btnDarkMode);

function btnDarkMode(e) {
  if ($body.classList.contains("darkMode")) {
    $body.classList.remove("darkMode");
  } else {
    $body.classList.add("darkMode");
  }

  if ($body.classList.contains("darkMode")) {
    $btnDarkMode.innerHTML = "☀️";
  } else {
    $btnDarkMode.innerHTML = "🌙";
  }

  if ($header.classList.contains("headerDark")) {
    $header.classList.remove("headerDark");
  } else {
    $header.classList.add("headerDark");
  }

  if ($panelNav.classList.contains("panelDark")) {
    $panelNav.classList.remove("panelDark");
  } else {
    $panelNav.classList.add("panelDark");
  }

  if ($menu.classList.contains("menuDark")) {
    $menu.classList.remove("menuDark");
  } else {
    $menu.classList.add("menuDark");
  }
}

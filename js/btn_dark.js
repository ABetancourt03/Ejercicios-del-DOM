const $btnDarkMode = document.querySelector(".btnDarkMode");
const $body = document.getElementById("body");

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
}

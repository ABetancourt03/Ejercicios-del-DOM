const $btnDarkMode = document.querySelector(".btnDarkMode").addEventListener("click", btnDarkMode);
const $body = document.getElementById("body");

function btnDarkMode(e) {
  if ($body.classList.contains("darkMode")) {
    $body.classList.remove("darkMode");
  } else {
    $body.classList.add("darkMode");
  }
}

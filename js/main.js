import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

window.addEventListener("load", () => {

  const intro = document.getElementById("intro");

  setTimeout(() => {

    intro.classList.add("intro-hide");

    setTimeout(() => {

      intro.remove();

    }, 800);

  }, 2000);

});

const boton = document.getElementById("btnFlotante");
const popup = document.getElementById("popupVideo");
const video = document.getElementById("miVideo");
const cerrar = document.getElementById("cerrarPopup");

let temporizador;

// ABRIR POPUP
boton.addEventListener("click", () => {

  popup.style.display = "flex";

  // Reiniciar video
  video.currentTime = 0;

  // Reproducir video
  video.play();

  // Limpiar temporizador anterior
  clearTimeout(temporizador);

  // 1 minuto y 24 segundos
  temporizador = setTimeout(() => {

    cerrarVideo();

  }, 84000);

});

// FUNCIÓN CERRAR
function cerrarVideo(){

  popup.style.display = "none";

  video.pause();

  clearTimeout(temporizador);
}

// BOTÓN X
cerrar.addEventListener("click", cerrarVideo);

/* =========================
   CAROUSEL AUTO 1 SEGUNDO
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const carouselPopup = document.querySelector("#carouselPopup");

  if (carouselPopup) {

    new bootstrap.Carousel(carouselPopup, {
      interval: 1000,
      ride: "carousel",
      pause: false,
      wrap: true
    });

  }

});

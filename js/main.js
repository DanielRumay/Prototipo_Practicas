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

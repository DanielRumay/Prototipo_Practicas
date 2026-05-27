const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // quitar active botones
    buttons.forEach(btn => btn.classList.remove("active"));

    // quitar active contenidos
    contents.forEach(content => content.classList.remove("active"));

    // activar boton actual
    button.classList.add("active");

    // activar contenido
    const tab = button.getAttribute("data-tab");

    document.getElementById(tab).classList.add("active");

  });

});

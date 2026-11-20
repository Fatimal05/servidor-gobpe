
const formulario = document.getElementById("consultaForm");
const campoBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const tramite = campoBusqueda.value.trim();

    if (tramite === "") {
        resultado.textContent = "Por favor, escribe el nombre del trámite.";
        return;
    }

    resultado.textContent = "Has consultado el trámite: " + tramite;
});

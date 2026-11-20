
const formulario = document.getElementById("consultaForm");
const campoBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

    const tramite = campoBusqueda.value.trim();

    if (tramite === "") {
        resultado.textContent = "Por favor, escribe el nombre del trámite.";
        return;
    }


  try {
    const respuesta = await fetch("/api/consultas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "clave-demo-123"
      },
      body: JSON.stringify({ tramite })
    });

    const datos = await respuesta.json();
    resultado.textContent = datos.mensaje;
  } catch (error) {
    resultado.textContent = "No se pudo conectar con el servidor.";
  }
});




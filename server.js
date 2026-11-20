
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend")));
// Ruta GET: consultar los trámites
app.get("/api/tramites", (req, res) => {
    res.json({
        mensaje: "Lista de trámites disponibles",
        tramites: [
            "Partida de nacimiento",
            "DNI",
            "Antecedentes policiales"
        ]
    });
});

// Ruta POST: registrar una consulta
app.post("/api/consultas", (req, res) => {
    const { tramite } = req.body;

    if (!tramite || tramite.trim() === "") {
        return res.status(400).json({
            mensaje: "Debe ingresar un trámite"
        });
    }

    res.status(201).json({
        mensaje: "Consulta registrada correctamente",
        tramite: tramite
    });
});

app.listen(PORT, () => {
    console.log(`Servidor GOB.PE activo en http://localhost:${PORT}`);
});

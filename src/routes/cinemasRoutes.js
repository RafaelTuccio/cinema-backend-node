const { Router } = require("express");
const { listarCinemas, salvarCinemas, editarCinemas, excluirCinemas, cinema } = require("../controllers/cinemasController");


const cinemasRoute = Router();

cinemasRoute.get("/cinemas", listarCinemas);

cinemasRoute.post("/cinemas-cadastrar", salvarCinemas);

cinemasRoute.get("/cinemas/:id", cinema);

cinemasRoute.put("/cinemas-editar/:id", editarCinemas);

cinemasRoute.delete("/cinemas-excluir/:id", excluirCinemas);

module.exports = cinemasRoute;
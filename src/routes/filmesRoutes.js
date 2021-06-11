const { Router } = require("express");
const { listarFilmes, salvarFilmes, editarFilmes, excluirFilmes, filme } = require("../controllers/filmesController"); 

const filmesRoute = Router();

filmesRoute.get("/filmes", listarFilmes);

filmesRoute.post("/filmes-cadastrar", salvarFilmes);

filmesRoute.get("/filmes/:id", filme);

filmesRoute.put("/filmes-editar/:id", editarFilmes);

filmesRoute.delete("/filmes-excluir/:id", excluirFilmes);

module.exports = filmesRoute;
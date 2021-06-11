const { Router } = require("express");
const { listarSessoes, salvarSessoes, editarSessoes, excluirSessoes, sessao} = require("../controllers/sessoesController");

const sessoesRoute = Router();

sessoesRoute.get("/cinema/:id/sessoes", listarSessoes);

sessoesRoute.get("/sessao/:id", sessao);

sessoesRoute.post("/sessoes-cadastrar", salvarSessoes);

sessoesRoute.put("/sessoes-editar/:id", editarSessoes);

sessoesRoute.delete("/sessoes-excluir/:id", excluirSessoes);

module.exports = sessoesRoute;
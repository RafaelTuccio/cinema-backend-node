const filmeService = require("../service/filmeService");

class FilmesController {


    listarFilmes = async (req, res) => {
        try{
            let result = await filmeService.list();
            res.status(200).json({"data": result});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    filme = async (req, res) => {
        try{
            let result = await filmeService.findById(req)
            res.status(200).json({"data": result});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
        
    }

    salvarFilmes = async (req, res) => {
        console.log(req.body);
        try{
            let result = await filmeService.save(req);
            console.log(result);
            res.status(200).json({"msg": "filme salvo com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    editarFilmes = async (req, res) => {
        console.log("Bateu aqui");
        console.log(req.body);
        try{
            let result = await filmeService.update(req);
            console.log(result);
            res.status(200).json({"msg": "filme editado com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    excluirFilmes = async (req, res) => {
        console.log("caiu aqui");
        try{
            let result = await filmeService.delete(req);
            console.log(result);
            res.status(200).json({"msg": "filme deletado com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

}

module.exports = new FilmesController;
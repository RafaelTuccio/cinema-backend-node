const cinemaService = require("../service/cinemaService");

class CinemasController {


    listarCinemas = async (req, res) => {
        try{
            let result = await cinemaService.list();
            res.status(200).json({"data": result});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    salvarCinemas = async (req, res) => {
        try{
            let result = await cinemaService.save(req);
            res.status(200).json({"data": "cinema salvo com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    cinema = async (req, res) => {
        try{
            let result = await cinemaService.findById(req);
            res.status(200).json({"data": result});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    editarCinemas = async (req, res) => {
        try{
            let result = await cinemaService.update(req);
            res.status(200).json({"data": "cinema editado com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    excluirCinemas = async (req, res) => {
        try{
            let result = await cinemaService.delete(req);
            res.status(200).json({"data": "cinema deletado com sucesso!"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

}

module.exports = new CinemasController;
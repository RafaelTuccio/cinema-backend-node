const sessaoService = require("../service/sessaoService");
const filmeService = require("../service/filmeService");

class SessoesController {

    listarSessoes = async (req, res) => {
        try{
            let result = await sessaoService.listByCinema(req);
            
            res.status(200).json({"data": result});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }

    }

    salvarSessoes = async (req, res) => {
        try{
            let result = await sessaoService.save(req);
            console.log(result);
            res.status(200).json({"msg": "sessao salva"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    sessao = async (req, res) => {
       
        try{
            let result = await sessaoService.findSessaoById(req)
            res.status(200).json({"data": result});
           
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }
    editarSessoes = async (req, res) => {
        try{
            let result = await sessaoService.update(req)
            res.status(200).json({"msg": "sessao editada"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

    excluirSessoes = async (req, res) => {
        
        try{
            let result = await sessaoService.delete(req);
            res.status(200).json({"msg": "sessao deletada"});
        }catch(err){
            console.error(err);
            res.status(500).json({"msg": "problemas no servidor"});
        }
    }

}

module.exports = new SessoesController;
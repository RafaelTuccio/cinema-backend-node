const model = require("../model/model");
const { sessaoSaveMapper, sessaoEditarMapper } = require("../model/mapper/sessaoMapper");

class SessaoService {
    listByCinema = (req) => {
        let id_cinema = req.params.id;
        let sql = `SELECT * FROM sessao where id_cinema = ?;`;
        return model(sql, id_cinema);
    }

    save = (req) => {
        let sql = `INSERT INTO sessao SET ?`;
        let sessao = sessaoSaveMapper(req.body);
        return model(sql, sessao);
    }
    findSessaoById = (req) => {
        let id = req.params.id;
        let sql = `SELECT * FROM sessao WHERE sessoes_id = ?;`;
        return model(sql, id)
    }


    update = (req) => {
        let id = req.params.id
        let sessao = sessaoEditarMapper(req.body)
        let sql = `UPDATE sessao SET ? WHERE sessoes_id = ?;`
        return model(sql, [sessao, id]);
    }

    delete = (req) => {
        let sessao_id = req.params.id;
        let sql = `DELETE FROM sessao WHERE sessoes_id =?`;
        return model(sql, sessao_id);
    }
}
module.exports = new SessaoService;
const { filmeSaveMapper, filmeEditMapper } = require("../model/mapper/filmesMapper");
const model = require("../model/model");


class FilmeService {


    save = (req) => {
        let sql = `INSERT INTO filmes SET ?;`;
        let filme = filmeSaveMapper(req.body);
        console.log(filme);
        return model(sql, filme);
    }
    
    list = () => {
        let sql = `SELECT * FROM filmes;`;
        return model(sql, null);
    }

    findById = (req) => {
        let id = req.params.id;
        let sql = `SELECT * FROM filmes WHERE filme_id = ?;`;
        return model(sql, id);
    }
    update = (req) => {
        let id = req.params.id;
        let sql = `UPDATE filmes SET ? WHERE filme_id = ?;`;
        let filme = filmeEditMapper(req.body, id);
        return model(sql, [filme, id]);
    }

    delete = (req) => {
        let id = req.params.id;
        let sql = `DELETE FROM filmes WHERE filme_id = ?;`;
        return model(sql, id);
    }
}

module.exports = new FilmeService;
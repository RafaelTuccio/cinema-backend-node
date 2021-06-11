const { cinemaSaveMapper, cinemaEditMapper} = require('../model/mapper/cinemaMapper');
const model = require("../model/model");



class CinemaService {
    save = (req) => {
        let sql = `INSERT INTO cinema SET ?;`;
        let cinema = cinemaSaveMapper(req.body);
        console.log(cinema);
        return model(sql, cinema);
    }
    
    list = () => {
        let sql = `SELECT * FROM cinema;`;
        return model(sql, null);
    }

    findById = (req) => {
        let id = req.params.id;
        let sql = `SELECT * FROM cinema WHERE cinema_id = ?;`;
        let cinema = cinemaEditMapper(req.body, id);
        return model(sql, id);
    }

    update = (req) => {
        let id = req.params.id;
        let sql = `UPDATE cinema SET ? WHERE cinema_id = ?;`;
        let cinema = cinemaEditMapper(req.body, id);
        return model(sql, [cinema, id]);
    }

    delete = (req) => {
        let id = req.params.id;
        let sql = `DELETE FROM cinema WHERE cinema_id = ?;`;
        return model(sql, id);
    }
}
module.exports = new CinemaService;
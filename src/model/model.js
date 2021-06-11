const connection = require('../config/DataBase');


const model = (sql, object) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, object, (err, result, fields) => {
            if(err){
                console.error(err);
                reject(err)
            }
            resolve(result);
        })

    })
}

module.exports = model;
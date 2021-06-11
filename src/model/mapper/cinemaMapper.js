class CinemaMapper {
    cinemaSaveMapper = (objeto) => {
        return {
            cinema_nome: objeto.cinema_nome,
            cinema_cidade: objeto.cinema_cidade,
            cinema_uf: objeto.cinema_uf
        }
    }

    cinemaEditMapper = (objeto, id) => {
        return {
            cinema_id: id,
            cinema_nome: objeto.cinema_nome,
            cinema_cidade: objeto.cinema_cidade,
            cinema_uf: objeto.cinema_uf
        }
    }
}

module.exports = new CinemaMapper;
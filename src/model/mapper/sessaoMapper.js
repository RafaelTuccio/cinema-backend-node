class SessaoMapper {
    sessaoSaveMapper = (objeto) => {
        
        return {
            dia_semana: objeto.dia_semana,
            horario: objeto.horario,
            id_filme: objeto.idFilme, 
            id_cinema: objeto.idCinema
        }
    }
    sessaoEditarMapper = (objeto) => {
        
        return {
            sessoes_id: objeto.sessoes_id,
            dia_semana: objeto.dia_semana,
            horario: objeto.horario,
            id_filme: objeto.idFilme, 
            id_cinema: objeto.idCinema
        }
    }
}

module.exports = new SessaoMapper;
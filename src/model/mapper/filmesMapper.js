class FilmesMapper {
    
    filmeSaveMapper = (objeto) => {
        return {
            filme_nome: objeto.filme_nome,
            filme_genero: objeto.filme_genero,
            filme_duracao: objeto.filme_duracao,
            filme_classificacao: objeto.filme_classificacao,
            filme_lancamento: objeto.filme_lancamento,
            filme_sinopse: objeto.filme_sinopse
        }
    }

    filmeEditMapper = (objeto, id) => {
        return {
            filme_id: id,
            filme_nome: objeto.filme_nome,
            filme_genero: objeto.filme_genero,
            filme_duracao: objeto.filme_duracao,
            filme_classificacao: objeto.filme_classificacao,
            filme_lancamento: objeto.filme_lancamento,
            filme_sinopse: objeto.filme_sinopse
        }
    }
}

module.exports = new FilmesMapper;
const listaAnimes = require('../mocks/animeList')

function middlewareGetAnimeById (req, res, next) {
    const { id } = req.params;
    const animeIndex = listaAnimes.find(anime => anime.id === Number(id));

    try {
        if (!anime) {
            res.send({message: ` Anime não encontrado. `})
        }
        next()
    } catch (error) {
        res.send({ message: `Não temos certeza do que aconteceu! Erro: ${error}` }) 
    }
}

function middlewareCreateAnime (req,res, next) {
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    try {
        if (!nome || !ano || !nota || !genero || !episodios || !imagem || !sinopse ) {
            res.send({ message: `Não temos certeza do que aconteceu! Erro: ${error}`})
        }
        if () 
        next()
    } catch (error) {
           res.send({ message: `Não temos certeza do que aconteceu! Erro: ${error}` }) 
    };
    
};

function middlewareUpdateAnime (req,res, next) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    try {
        if (animeIndex === -1) {
            return res.send({ message: "Anime não encontrado! "})
        }
        if (!nome || !ano || !nota || !genero || !episodios || !imagem || !sinopse ) {
            res.send({ message: ` Dados incompletos! Por favor insira otods os dados.`})
        }   
        next()
    } catch (error) {
           res.send({ message: `Não temos certeza do que aconteceu! Erro: ${error}` }) 
    };

};

function middlewareDeleteAnime (req,res, next) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));
    try {
        if (animeIndex === -1) {
            return res.send({ message: "Anime não encontrado! "})
        }   
        next()
    } catch (error) {
           res.send({ message: `Não temos certeza do que aconteceu! Erro: ${error}` }) 
    };
    
};


module.exports = {
    middlewareCreateAnime,
    middlewareUpdateAnime,
    middlewareDeleteAnime,
    middlewareGetAnimeById    
}
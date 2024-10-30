const listaAnimes = require('../mocks/animeList')

function getAllAnimes (req, res) {
    res.send(listaAnimes)
}

function getAnimeByID (req, res) {
    const id = parseInt(req.params.id);
    const animes = listaAnimes.find(p => p.id === id);

    if (animes) {
        res.send(animes);
    
    } else {
        res.send({ message: "Anime não encontrado"})
    }
}

function createAnime (req, res) {
    const {
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    listaAnimes.push({
        id,
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse
    })

    res.send('Anime cadastrado com sucesso!')
}

module.exports = {
    getAllAnimes,
    getAnimeByID,
    createAnime
}


const listaAnimes = require('../mocks/animeList')

function getAllAnimes (req, res) {
    res.send(listaAnimes)
}

function getAnimeByID (req, res) {
    const id = parseInt(req.params.id);
    const animes = listaAnimes.find(p => p.id === id);

    if (animes) {
        res.send(animes);
    }
}

function createAnime (req, res) {
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    // Ternário -> x ? condição = true : valor estabelecido
    const id = listaAnimes.length ? listaAnimes[listaAnimes.length -1].id +1 : 1;

    // Subindo os novos dados para o array
    listaAnimes.push({id, nome, ano, nota, genero, episodios, imagem, sinopse})

    // Resposta ao sucesso da tarefa anterior
    res.status(200).send('Anime cadastrado com sucesso!')
}

function updateAnime (req, res) {
    const { id } = req.params;
    const {
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse 
    } = req.body;

    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    listaAnimes[animeIndex] = {
        // Desestruturação do JSON para a devida visualização dos Valores
        ...listaAnimes[animeIndex],
        nome,
        ano,
        nota,
        genero,
        episodios,
        imagem,
        sinopse
    }

    res.status(200).send(' Anime atualizado com sucesso! ')
}

function deleteAnime (req, res) {
    const { id } = req.params;
    const animeIndex = listaAnimes.findIndex(anime => anime.id === Number(id));

    listaAnimes.splice(animeIndex, 1) //.splice é o método que removerá informações de dentro de um array.
    res.status(200).send('Anime deletado com sucesso!')
}

module.exports = {
    getAllAnimes,
    getAnimeByID,
    createAnime,
    updateAnime,
    deleteAnime
}


const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');
const animeMiddleware = require('../middlewares/animesMiddlewares')

// --------------- CRUD(ROTAS) PARA OS ANIMES -------------------|

router.get ('/', (req, res) => {
    res.send('API Iniciada com sucesso!')
})

// CRIANDO A ROTA DE ANIMES
router.get('/animes', animeController.getAllAnimes )

// CRIANDO A ROTA DE VISUALIZAÇÃO PARA TODOS OS ANIMES
router.get('/animes/:id',  animeMiddleware.middlewareGetAnimeById, animeController.getAnimeByID )

// CRIANDO A ROTA DE INSERÇÃO DE ANIMES
router.post('/animes',  animeMiddleware.middlewareCreateAnime, animeController.createAnime)

// CRIANDO A ROTA DE ATUALIZAÇÃO DE ANIMES
router.put('/animes', animeMiddleware.middlewareUpdateAnime, animeController.updateAnime)

// CRIANDO A ROTA DE DELETAR O ANIME
router.delete('/animes', animeMiddleware.middlewareDeleteAnime, animeController.deleteAnime)
//----------------------------------------------------------------|


module.exports = router;
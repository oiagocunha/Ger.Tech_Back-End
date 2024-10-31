// IMPORTANDO  O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// const listaTenis = require('./src/mocks/sneakersList')
const animeController = require('./src/controllers/animeController')
app.use(express.json())

// CRIANDO ROTA HOME
app.get('/', (req, res) => {
  res.send('Bem vindo(a) à API!')
})

// CRIANDO A ROTA DE ANIMES
app.get('/anime', animeController.getAllAnimes )

// CRIANDO A ROTA DE VISUALIZAÇÃO PARA TODOS OS ANIMES
app.get('/anime/:id', animeController.getAnimeByID )

// CRIANDO A ROTA DE INSERÇÃO DE ANIMES
app.post('/anime', animeController.createAnime)

// CRIANDO A ROTA DE ATUALIZAÇÃO DE ANIMES
app.put('/anime', animeController.updateAnime)

// CRIANDO A ROTA DE DELETAR O ANIME
app.delete('/anime', animeController.deleteAnime)

// // SUBINDO O SERVIDOR NA PORTA 3000
// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`O servidor está rodando no link http://localhost:${PORT}`)
// })


// IMPORTANDO O JWT
const jwt = require('jsonwebtoken')
// CRIANDO UM TOKEN ASSINADO
// const token = jwt.sign({'json', 'chave'})
const token = jwt.sign({id: '17', name:'android', email: 'android@dbs.akira'}, 'akdjflnkadgp')
console.log(token)

// VALIDADOR DE DADOS ENVIADOS
const jwtVerify = (tokenUser) => {
  try {
    const decoded = jwt.verify(tokenUser, 'akdjflnkadgp1')
    return decoded
  } catch (error) {
    console.log(`Deu ruim! ${error}`)
  }

}

console.log(jwtVerify(token))
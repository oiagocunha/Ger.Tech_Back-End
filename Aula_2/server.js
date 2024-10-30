// IMPORTANDO  O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// const listaTenis = require('./src/mocks/sneakersList')
const animeController = require('./src/controllers/animeController')

// CRIANDO ROTA HOME
app.get('/', (req, res) => {
  res.send('Bem vindo(a) à API!')
})

// CRIANDO A ROTA DE ANIMES
app.get('/anime', animeController.getAllAnimes )


app.get('/anime/:id', animeController.getAnimeByID )

app.post('/anime', animeController.createAnime)

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando no link http://localhost:${PORT}`)
})



// // CRIANDO ROTA PRODUTOS
// app.get('/products', (req, res) => {
//     res.send(listaTenis)
//   })    

// app.get('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const produto = listaTenis.find(p => p.id === id);

//     if (produto) {
//         res.send(produto);
//     } else {
//         res.status(404).send({ message: "Produto não encontrado"})
//     }

// } )

// app.get('/products/:nome', (req, res) => {
//     const nome = (req.params.nome);
//     const produto = produtos.find(p => p.nome == nome);

//     if (produto) {
//         res.send(produto);
//     } else {
//         res.status(404).send({ message: "Produto não encontrado"})
//     }

// } )


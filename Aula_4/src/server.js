// IMPORTANDO  O EXPRESS
const express = require('express')

// APP RECEBE O EXPRESS
const app = express()
app.use(express.json())

// ACESSANDO OS CONTROLLERS
const animeController = require('./controllers/animeController')
const sneakersController = require('./controllers/sneakersController')

// CRIANDO ROTA HOME
app.get('/', (req, res) => {
  res.send('Bem vindo(a) à API!')
})

// CRIANDO A PÁGINA DE LOGIN
app.post('/login', (req, res) => {

try{

  const jwt = require('jsonwebtoken')
  const email = req.body.email
  const senha = req.body.senha

  const emailUser = 'iago@exemplo.com'
  const senhaUser = '1234if'

  if (email === emailUser && senha === senhaUser) {
    const token = jwt.sign({id: 17, name: 'Iago'}, 'akdjflnkadgp')
    res.send({
      sucess: true,
      token: token,
      message: `Você fez login com sucesso!`
    })
  } else {
    res.send({
      sucess: true,
      token: '',
      message: `Usuário ou Senha inválidos!`
  })
  }

} catch (error) {
  res.send({
    sucess: false,
    token: '',
    message: `Falha na requisição ${error}`
  })
}

})

// CRIANDO ROTA PRODUTOS
app.get('/produtos', sneakersController.GetAllSneakers )


// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando no link http://localhost:${PORT}`)
})
// IMPORTANDO  O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()

// // CRIANDO ROTA HOME
// app.get('/home', (req, res) => {
//   res.send('Hello World')
// })

// // CRIANDO ROTA CEP
// app.get('/cep', (req, res) => {
//   res.send({
//       "cep": "01001-000",
//       "logradouro": "Praça da Sé",
//       "complemento": "lado ímpar",
//       "unidade": "",
//       "bairro": "Sé",
//       "localidade": "São Paulo",
//       "uf": "SP",
//       "estado": "São Paulo",
//       "regiao": "Sudeste",
//       "ibge": "3550308",
//       "gia": "1004",
//       "ddd": "11",
//       "siafi": "7107"
//     })
// })

const produtos = [
    {
        "id": 1,
        "nome": "Nike",
        "imagem": "https://cdn.vnda.com.br/780x/pardalsneakers/2023/08/21/22_10_44_549_tenis_nike_air_vapormax_360_racer_blue_1613_1_078c6835ff714b6f499b2e182c3d1fb8_20210812081446.png?v=1692666644",
        "Descricao": "Nike 360 - Branco e Azul",
        "preco": 299.50
    },
    {
        "id": 2,
        "nome": "Puma",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_puma_flyer_runner_mesh_bdp_feminino_preto_119322_6_44ae5f31e723774d8941ff5736568728.png",
        "Descricao": "Puma - Preto",
        "preco": 399.90
    },
    {
        "id": 3,
        "nome": "Adidas",
        "imagem": "https://images.tcdn.com.br/img/img_prod/311840/tenis_adidas_response_runner_azul_e_preto_114793_6_a9135d0fb1adf94853df1dc720cb4e83.png",
        "Descricao": "Adidas - Azul",
        "preco": 99.90
    }
]

// CRIANDO ROTA PRODUTOS
app.get('/products', (req, res) => {
    res.send(produtos)
  })    

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.send(produto);
    } else {
        res.status(404).send({ message: "Produto não encontrado"})
    }

} )

app.get('/products/:nome', (req, res) => {
    const nome = (req.params.nome);
    const produto = produtos.find(p => p.nome == nome);

    if (produto) {
        res.send(produto);
    } else {
        res.status(404).send({ message: "Produto não encontrado"})
    }

} )

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})
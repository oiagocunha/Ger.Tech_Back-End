const usersModel = require('../models/usersModel')
const userCreate = async (req, res, next) => {
    try {
        // CRIANDO UM NOVO USUÁRIO
        const newUser = await usersModel.create({
            first_name: req.body.first_name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        });

        // CONSOLE PARA MOSTRAR O RESULTADO DO INSERT
        console.log("Usuário criado com sucesso!:", newUser.id)

        // RESPOSTA DA REQUISIÇÃO
        res.status(201).send({
            message: `Usuário criado com sucesso! ID: ${newUser.id}`
        })
        
    } catch (error) {
        res.send({
            message: `Erro ao criar o usuário ${error}`
        })
    }
}

const userList = async (req, res, next) => {
    try {

        const users = await usersModel.findAll();
        res.send(users)

    } catch (error) {
        res.send({
            message: `Erro ao listar usuários ${error}!`
        })
    }
}

module.exports = {
    userCreate,
    userList
}
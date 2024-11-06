const usersModel = require('../models/usersModel')


const createNewUsers = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;

    // CRIANDO UM NOVO USUÁRIO
    const newUser = await usersModel.create({
        first_name: nome,
        surname: sobrenome,
        email: email,
        password: senha
    });

    // RESPOSTA DA REQUISIÇÃO
    res.status(201).send({
        message: `Usuário ${newUser.first_name}, ID: ${newUser.id} criado com sucesso!`
    })
}

const getAllUsers = async (req, res, next) => {
    try {

        const users = await usersModel.findAll();
        res.send(users)

    } catch (error) {
        res.send({
            message: `Erro ao listar usuários ${error}!`
        })
    }
}

const updateUserById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        await userModel.userUpdate(
            { ...req.body },
            { where: { id: id } }
        );

        res.status(201).send({
            message: `Usuário alterado com sucesso! ID: ${id}`
        })

    } catch (error) {
        res.send({
            message: `Erro ao alterar os usuários. ${error}`
        })
    }
}

const deleteUserById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        await userModel.userDelete(
            { ...req.body },
            { where: { id: id } }
        );

        res.status(201).send({
            message: `Usuário deletado com sucesso! ID: ${id}`
        })

    } catch (error) {
        res.send({
            message: `Erro ao deletar o usuário. ${error}`
        })
    }
}

module.exports = {
    createNewUsers,
    getAllUsers,
    updateUserById,
    deleteUserById
}
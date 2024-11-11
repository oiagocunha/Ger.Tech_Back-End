const { where } = require('sequelize');
const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');


const createNewUsers = async (req, res) => {
    const { nome, sobrenome, email, senha } = req.body;
    const saltRounds = 10; // CRIPTOGRAFIA DA SENHA ENVIADA NO BODY
    const senhaHast = await bcrypt.hash(senha, saltRounds)

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
};

const getAllUsers = async (req, res) => {
    try {

        const users = await usersModel.findAll();
        res.send(users)

    } catch (error) {
        res.send({
            message: `Erro ao listar usuários ${error}!`
        })
    }
}

const updateUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await usersModel.findByPk(id);
    try {
        if (user) {
            await usersModel.update(
                {...req.body},
                {where: {id: id}}
            );
            
            res.status(201).send({
                message: ` Usuário de ID: ${id} alterado com sucesso!`
            });

        } else {
            res.status(400).send({
                message: `O usuário de ID: ${id} não foi encontrado.`
            });
        }
    } catch (error) {
        res.send({
            message: `Algo de errado aconteceu ao atualizar o usuário. Erro: ${error}`
        });
    }

}

const deleteUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await usersModel.findByPk(id);
        if (user) {
            await userModel.destroy({
                where: { id: id}
            });
            res.status(200).send({
                message: ` Usuário de ID: ${id} foi deletado com sucesso! `
            });
        } else {
            res.status(404).send({
                message: ` Usuário com ID: ${id} não encontrado! `
            });
        }
    } catch (error) {
        res.send({
            message: ` Algo de errado aconteceu ao deletar o usuário. Erro ${error}`
        });
    };
}


module.exports = {
    createNewUsers,
    getAllUsers,
    updateUserById,
    deleteUserById
}
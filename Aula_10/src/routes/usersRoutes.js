const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const usersMiddlewares = require('../middlewares/usersMiddlewares')

// CRIANDO ROTAS DE USUÁRIOS
router.get('/listar-usuarios', usersController.getAllUsers);
router.post('/criar-usuarios',  usersMiddlewares.middlewareCreateNewUser, usersController.createNewUsers);
router.put('/atualizar-usuarios/:id', usersController.updateUserById);
router.delete('/deletar-usuarios/:id', usersController.deleteUserById);



module.exports = router;
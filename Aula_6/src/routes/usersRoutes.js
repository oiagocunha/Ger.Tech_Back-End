const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// CRIANDO ROTAS DE USUÁRIOS
router.post('/user-create', usersController.userCreate);
router.get('/user-list', usersController.userList);


module.exports = router;
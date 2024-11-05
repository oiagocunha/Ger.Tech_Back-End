const users = require('../mocks/userList');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/dotenvConfig');

function loginAuth(req, res) {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email && user.password === password);

    try {
        if (user) {
            const token = jwt.sign({ id: user.id, name: user.name }, jwtSecret, { expiresIn: '3h' })
            res.send({
                sucess: true,
                token: token,
                message: 'Login realizado com sucesso!'
            })
        } else {
            res.send({
                sucess: false,
                token: '',
                message: 'Usuário ou senha inválidos!'
            })
        }
    } catch (error) {
        res.send(`Algo deu errado! Erro: ${error}`)
    }
}


module.exports = {
    loginAuth
}
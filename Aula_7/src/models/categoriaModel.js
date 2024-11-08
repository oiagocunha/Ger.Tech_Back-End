//QUARDANDO CATEGORIA DOS USUÁRIOS
const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const userModel = require ('./usersModel');

let adressModel = connection.define('adress', {
    user_id: {
        type: DataTypes.INTEGER, //Equivalente ao VARCHAR(50)
        allowNull:false, //Equivalente ao NOTNULL
        references: {
        model: userModel, 
        key: 'id',
        }
    },
    street: {
        type: DataTypes.STRING(150),
        allowNull:false
    },
    number: {
        type: DataTypes.STRING(5),
        allowNull:false
    }
});


module.exports = adressModel;
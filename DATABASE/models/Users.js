const {Sequelize, DB} = require('./../DB');

const Users = DB.define('users', {
    nome: {
        type: Sequelize.STRING
    },
    nasc: {
        type: Sequelize.DATEONLY
    },
    nivel: {
        type: Sequelize.INTEGER
    },

    xp: {
        type: Sequelize.INTEGER
    }
});

function sync(){
    Users.sync({force: true});
}

module.exports = Users;
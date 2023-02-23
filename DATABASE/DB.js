const Sequelize = require('sequelize');


//DATABASE CONFIG---------------------------------------------------
const DB_INFO = {
    database: 'academia',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    pw: '',
    dialect: 'mariadb'
}
//-------------------------------------------------------------------

const DB = new Sequelize(DB_INFO.database, DB_INFO.user, DB_INFO.pw, {host: DB_INFO.host, dialect: DB_INFO.dialect});

module.exports = {
    Sequelize: Sequelize,
    DB: DB
};
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//config
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    
    //Banco de Dados
        const {Sequelize, DB} = require('./DATABASE/DB');




app.get('/', (req, res)=>{
    res.sendFile( __dirname + '/views/index.html');
});






app.listen(8081, ()=>{
    console.log('Servidor rodando em: http://127.0.0.1:8081/');
});





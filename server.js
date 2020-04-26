//todas as bibliotecas instaladas
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//iniciando o app
const app = express();

//para poder enviar dados para a aplicação em formato de json
app.use(express.json());

//iniciando o banco de dados
mongoose.connect('mongodb+srv://cilolata:joana300880@cluster0-lzijk.mongodb.net/hunt?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//registrando o arquivo db de product
requireDir('./src/models');

//acessando e guardando no db
//const Product = mongoose.model('Product');

// rotas
app.use('/api', require('./src/routes'));

//usando o cors
app.use(cors());

app.listen(3001);
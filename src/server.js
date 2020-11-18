// importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages')
// iniciando o express
const server = express();

 
server
    // utilizar o body do request
    .use(express.urlencoded({extended: true}))
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    
    // criar uma rota
    .get('/', pages.index)
    .get('/rents', pages.rents)
    .get('/rent', pages.rent)
    .get('/create-rent', pages.createRent)
    .post('/save-rent', pages.saveRent)
// ligar o servidor
server.listen(8080);
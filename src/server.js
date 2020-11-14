// importar dependencias
const express = require('express');
const path = require('path');

// iniciando o express
const server = express();

// criar uma rota 
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// ligar o servidor
server.listen(8080);
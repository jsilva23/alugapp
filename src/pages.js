const Database = require('./database/db');
const saveRent = require('./database/saveRent');

module.exports = {

    index(request, response) {
        return response.render('index');
    },

    async rents(request, response) {
        try {
            const db = await Database;
            const rents = await db.all('SELECT * FROM rents')
            return response.render('rents', { rents });            
        } catch (error) {
            return response.send('Erro no banco de dados')
        }

    },

    async rent(request, response) {
        const id = request.query.id
        try {
            const db = await Database;
            const rent = await db.all(`SELECT * FROM rents WHERE id="${id}"`)

            return response.render('rent', {rent: rent[0]});            
        } catch (error) {
            return response.send('Erro no banco de dados')
        }
    },

    createRent(request, response) {
        return response.render('create-rent');
    }
}
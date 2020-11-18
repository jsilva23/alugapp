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
    },

    async saveRent(request, response) {
        const fields = request.body
        
        // Verificar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos')
        }

        try {
            // salvar no banco de dados
            const db = await Database;
            await saveRent(db, {
                lat: fields.lat,
                lng: fields.lng,
                business: fields.business,
                description: fields.description,
                images: fields.images,
                compartments: fields.compartments,
                water: fields.water,
                energy: fields.energy,
                business_type: fields.business_type,
                owner: fields.owner,
                intermediary: fields.intermediary,
                phone: fields.phone,
                whatsapp: fields.whatsapp,
                email: fields.email
            })

            //Redirecionamento
            return response.redirect('/rents')
        } catch (error) {
            console.log(error)
            response.send('Erro no banco de dados')
        }
    }
}
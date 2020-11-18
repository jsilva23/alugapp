const Database = require('./db.js')
const saveRent = require('./saveRent')

Database.then(async db => {
    // Inserir dados na tabela
    await saveRent(db, {
        lat: '-8.9011797',
        lng: '13.2830554',
        business: 'Imóvel a venda',
        description: 'Localizada no bairro Calemba 2, rua da Policia. Uma casa grande já mobiliada',
        images: '',
        compartments: '9',
        water: '0',
        energy: '1',
        business_type: 'Venda',
        owner: 'Tomás Bunga',
        intermediary: 'Shakila Abdul',
        phone: '923774526',
        whatsapp: '921735261',
        email: 'exemplo@outlook.com'
    })

    //Consultar dados na tabela
    const selectedRents = await db.all('SELECT * FROM rents')
    console.log(selectedRents);
})
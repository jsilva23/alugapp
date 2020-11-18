const Database = require('./db.js')

Database.then(async db => {
    // Inserir dados na tabela
    /*await db.run(`
        INSERT INTO rents (
            lat,
            lng,
            business,
            description,
            images,
            compartments,
            water,
            energy,
            business_type,
            owner,
            intermediary,
            phone,
            whatsapp,
            email
        ) VALUES (
            '-8.9011797',
            '13.2730554',
            'Imóvel para alugar',
            'Localizada no bairro Victoria certa, rua do Comercio. Uma casa de dois quartos e sala',
            '',
            '5',
            '1',
            '1',
            'Aluguel',
            'José da Silva',
            'Nenhum',
            '928783652',
            '928783652',
            'exemplo@gmail.com'
        );
    `)*/

    //Consultar dados na tabela
    const selectedRents = await db.all('SELECT * FROM rents')
    console.log(selectedRents);
})
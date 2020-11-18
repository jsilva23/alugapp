const Database = require('sqlite-async');

function execute(db) {
   return db.exec(`
        CREATE TABLE IF NOT EXISTS rents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            business TEXT,
            description TEXT,
            images TEXT,
            compartments TEXT,
            water TEXT,
            energy TEXT,
            business_type TEXT,
            owner TEXT,
            intermediary TEXT,
            phone TEXT,
            whatsapp TEXT,
            email TEXT
        ); 
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)


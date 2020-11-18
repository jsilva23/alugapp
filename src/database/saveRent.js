function saveRent(db, rent) {
    return db.run(`
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
            '${rent.lat}',
            '${rent.lng}',
            '${rent.business}',
            '${rent.description}',
            '${rent.images}',
            '${rent.compartments}',
            '${rent.water}',
            '${rent.energy}',
            '${rent.business_type}',
            '${rent.owner}',
            '${rent.intermediary}',
            '${rent.phone}',
            '${rent.whatsapp}',
            '${rent.email}'
        );
    `)
}

module.exports = saveRent;

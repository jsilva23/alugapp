module.exports = {

    index(request, response) {
        return response.render('index');
    },

    rents(request, response) {
        return response.render('rents');
    },

    rent(request, response) {
        return response.render('rent');
    },

    createRent(request, response) {
        return response.render('create-rent');
    }
}
'use strict';
module.exports = function(app) {
    var emails = require('../controllers/emailsController');

    //emails Route
    app.route('/email')
        .post(emails.create_an_email);
};
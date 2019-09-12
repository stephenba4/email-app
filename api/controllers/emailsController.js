'use strict';

var mongoose = require('mongoose'),
    Email = mongoose.model('Emails');

exports.create_an_email = function(req, res) {
    var new_email = new Email(req.body); 
    new_email.save(function(err, email) {
        if (err)
          res.send(err);
        res.json(email);
        console.log(email);
    });
};

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmailSchema = new Schema({
    email: {
        type: String,
        required: 'Please enter your email'
    },
    name: {
        type: String,
        required: 'Please enter your name'
    }
});

module.exports = mongoose.model('Emails', EmailSchema);

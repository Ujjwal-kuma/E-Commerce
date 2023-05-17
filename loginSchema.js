let mongoose = require('mongoose');
let dbConnect = require('./dbConnect');
dbConnect();

const loginSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        typr: String
       
    },
    cart: []
});

module.exports = loginSchema ;
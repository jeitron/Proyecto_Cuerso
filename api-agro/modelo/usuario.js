const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usuesquema = new Schema({

documento: Number,
nombre: String,
telefono: Number,
correo: String,
direccion: String,
ciudad: String,
departamento: String,
pass: String,
rol: String

});



module.exports = mongoose.model('usuario', usuesquema);

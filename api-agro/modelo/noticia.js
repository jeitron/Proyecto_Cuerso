const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var notiesquema = new Schema({

titulo: String,
fecha: String,
contenido: String

});

module.exports = mongoose.model('noticia', notiesquema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var proesquema = new Schema ({
    tipo: String,
    nombrep: String,
    precio: Number,
    cantidad: Number,
    descripcion: String,
    
    
    });

    module.exports = mongoose.model('producto', proesquema);
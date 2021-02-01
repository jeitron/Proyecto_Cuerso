const express = require('express');
const bodyparser = require('body-parser');
const rutas = require('./rutas/rutas')
const cors = require('cors');

const app = express();
app.use( bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/api', rutas);

module.exports = app;
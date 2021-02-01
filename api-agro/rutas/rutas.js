const express = require('express');
const controladorusu = require('../controlador/controlador');
const controladorpro = require('../controlador/controlador');
const controladornot= require('../controlador/controlador');
const api = express.Router();
 
//rutas de usuario
api.post('/', controladorusu.crear );
api.get('/listado', controladorusu.listar);
api.get('/listado/:documento', controladorusu.listardoc)
api.put('/actusu/:_id', controladorusu.update);
api.delete('/:idusu', controladorusu.eliminar);

// rutas de productos
api.post('/producto', controladorpro.crearpro);
api.get('/listarpro', controladorpro.listarpro);
api.get('/listarpro/:nombrep', controladorpro.listarpronom);
api.get('/listartip/:tipo', controladorpro.listarprotip);
api.put('/actpro/:nombrep', controladorpro.updatepro);
api.delete('/elim/:nomp', controladorpro.eliminarpro);

//rutas de noticia
api.post('/regnot', controladornot.crearnot);
api.get('/listanot', controladornot.listarnot);
api.delete('/notdel/:idnot', controladornot.eliminarnoti);




module.exports = api;
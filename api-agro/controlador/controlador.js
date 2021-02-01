
const usuario = require('../modelo/usuario');
const producto = require('../modelo/producto');
const noticia = require('../modelo/noticia');

/////  funciones de los usuarios
function crear(req, res) {
var usu = new usuario();
var param = req.body;

usu.documento = param.documento
usu.nombre = param.nombre;
usu.telefono = param.telefono;
usu.correo = param.correo;
usu.direccion = param.direccion;
usu.ciudad = param.ciudad;
usu.departamento = param.departamento;
usu.pass = param.pass;
usu.rol = "comun";

usu.save( (error, creado) => {
if (error) {
    res.status(500).send({
        statusCode: 500,
        message: "error mi server"
    })
}
 else {
     if (!creado) {
         res.status(400).send({
            statusCode: 400,
            message: "error al registrar"
         })         
         }
         else {
            res.status(200).send({
                statusCode: 200,
                message: "registrado",
                datausu: creado,
                                  })
             }
            }

} )

}
function listar(req, res){
   
    usuario.find({}, (error, listado) => {
        if (error) {
            res.status(500).send( {
                statusCode: 500,
                message: "error del server"
            })
            }
            else {   
                    res.status(200).send ({
                        statusCode: 200,
                        message: "listado de la bd",
                        listado:  listado
                    })                 
            }   
    })
}
function listardoc(req, res){
    var documento = req.params.documento;
   
    usuario.find({documento: documento}, (error, listadodoc) => {
        if (error) {
            res.status(500).send( {
                statusCode: 500,
                message: "error del server"
            })
            }
            else {   
                    res.status(200).send ({
                        statusCode: 200,
                        message: "listado de la bd",
                        listado:  listadodoc
                    }) 
                
            }   
    })
}
function update (req, res){
    var parametro = req.body;
    var idusu = req.params._id;

    usuario.findByIdAndUpdate(idusu, parametro, (error, updated) => {
  if (error) {
      res.status(500).send({
          statusCode: 500,
          message: "error e el server"
      })
  }
  else {
      if (!updated) {
          res.status(400).send ({
             statusCode: 400,
             message: "no actualizo" 
          })
             }
             else {
                 res.status(200).send ({
                     statusCode: 200,
                     message: "actualizado"
                 })
             }
  }
    })

}
function eliminar(req, res){
    var idusu = req.params.idusu;

    usuario.findByIdAndDelete(idusu, (error, eliminado) => {
 if (error) {
     res.status(500).send( {
         statusCode: 500,
         message: "error del server"
     })
     }
     else {
         if (!eliminado) {
             res.status(400).send ({
                 statusCode: 400,
                 message: "error al eliminar"
             })
         }
         else {
             res.status(200).send ({
                 statusCode: 200,
                 message: "eliminado"
             }) 
         }
     }

    })
}



////   funciones de los productos

function crearpro(req, res) {
    var pro = new producto();
    var param = req.body;
    
    pro.tipo = param.tipo
    pro.nombrep = param.nombrep;
    pro.precio = param.precio;
    pro.cantidad = param.cantidad;
    pro.descripcion = param.descripcion;
   
    
    pro.save( (error, creado) => {
    if (error) {
        res.status(500).send({
            statusCode: 500,
            message: "error mi server"
        })
    }
     else {
         if (!creado) {
             res.status(400).send({
                statusCode: 400,
                message: "error al registrar"
             })         
             }
             else {
                res.status(200).send({
                    statusCode: 200,
                    message: "registrado",
                    datapro: creado,
                                      })
                 }
                }
    
    } )
    
    }

function listarpro(req, res){
   
        producto.find({}, (error, listado) => {
            if (error) {
                res.status(500).send( {
                    statusCode: 500,
                    message: "error del server"
                })
                }
                else {   
                        res.status(200).send ({
                            statusCode: 200,
                            message: "listado de la bd",
                            listado:  listado
                        })                 
                }   
        })
    }
function listarpronom(req, res){
        var nombrep = req.params.nombrep;
       
        producto.find({nombrep: nombrep}, (error, listadonom) => {
            if (error) {
                res.status(500).send( {
                    statusCode: 500,
                    message: "error del server"
                })
                }
                else {   
                        res.status(200).send ({
                            statusCode: 200,
                            message: "listado de la bd",
                            listado:  listadonom
                        }) 
                    
                }   
        })
    } 
function listarprotip(req, res){
        var tipo = req.params.tipo;
       
        producto.find({tipo: tipo}, (error, listadotip) => {
            if (error) {
                res.status(500).send( {
                    statusCode: 500,
                    message: "error del server"
                })
                }
                else {   
                        res.status(200).send ({
                            statusCode: 200,
                            message: "listado de la bd",
                            listado:  listadotip
                        }) 
                    
                }   
        })
    } 
function updatepro (req, res){
        var parametro = req.body;
        var nombrep = req.params.nombrep;
    
        producto.findByIdAndUpdate(nombrep, parametro, (error, updatedpro) => {
      if (error) {
          res.status(500).send({
              statusCode: 500,
              message: "error e el server"
          })
      }
      else {
          if (!updatedpro) {
              res.status(400).send ({
                 statusCode: 400,
                 message: "no actualizo" 
              })
                 }
                 else {
                     res.status(200).send ({
                         statusCode: 200,
                         message: "actualizado"
                     })
                 }
      }
        })
    
    }
function eliminarpro(req, res){
        var nomp = req.params.nomp;
    
        producto.findByIdAndDelete(nomp, (error, eliminadop) => {
     if (error) {
         res.status(500).send( {
             statusCode: 500,
             message: "error del server"
         
         })
         }
         else {
             if (!eliminadop) {
                 res.status(400).send ({
                     statusCode: 400,
                     message: "error al eliminar"
                 })
             }
             else {
                 res.status(200).send ({
                     statusCode: 200,
                     message: "eliminado"
                 }) 
             }
         }
    
        })
    }

//funciones de la seccion de notcias

function crearnot(req, res) {
    var not = new noticia();
    var param = req.body;
    

    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();



    not.titulo = param.titulo
    not.fecha = dd + '/' +  mm + '/' +  yyyy ;
    not.contenido = param.contenido;
    
    
    not.save( (error, creado) => {
    if (error) {
        res.status(500).send({
            statusCode: 500,
            message: "error mi server"
        })
    }
     else {
         if (!creado) {
             res.status(400).send({
                statusCode: 400,
                message: "error al registrar"
             })         
             }
             else {
                res.status(200).send({
                    statusCode: 200,
                    message: "noticia registrada",
                    datausu: creado,
                                      })
                 }
                }
    
    } )
    
    }

function listarnot(req, res){
   
        noticia.find({}, (error, listado) => {
            if (error) {
                res.status(500).send( {
                    statusCode: 500,
                    message: "error del server"
                })
                }
                else {   
                        res.status(200).send ({
                            statusCode: 200,
                            message: "listado de la bd",
                            listado:  listado
                        })                 
                }   
        })
    }

 function eliminarnoti(req, res){
        var idnot = req.params.idnot;
    
        noticia.findByIdAndDelete(idnot, (error, eliminado) => {
     if (error) {
         res.status(500).send( {
             statusCode: 500,
             message: "error del server"
         })
         }
         else {
             if (!eliminado) {
                 res.status(400).send ({
                     statusCode: 400,
                     message: "error al eliminar"
                 })
             }
             else {
                 res.status(200).send ({
                     statusCode: 200,
                     message: "eliminado"
                 }) 
             }
         }
    
        })
    }
    


module.exports = {
    crear,
    listar,
    listardoc,
    update,
    eliminar,
    crearpro,
    listarpro,
    listarpronom, 
    updatepro,
    eliminarpro,
    crearnot,
    listarnot,
    eliminarnoti,
    listarprotip

}
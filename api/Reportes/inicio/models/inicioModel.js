var inicioModel = function() {

};


inicioModel.prototype.listarUsuarios= function (callback) {

 var query = G.knex.column('*')
            .select().from("usuarios as x")
            .where("x.usuarios_id", '1')
            .as("b");

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [listarUsuarios]:", err);
        callback({err: err, msj: "Error al consultar la lista de usuarios"});
    });
};
inicioModel.prototype.listarProductos= function (callback) {

 var query = G.knex.column('*')
            .select().from("fabricantes as x")
            .as("b");

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [listarProductos]:", err);
        callback({err: err, msj: "Error al listar Productos"});
    });
};

inicioModel.prototype.listarExtensiones= function (callback) {
 console.log("listarExtensionesMODELO");
 var query = G.knex.column('p.nombre', 'p.extension', 'a.nombre as nombreAreas', 'a.color')
            .select().from("intranet.propietarios as p")
            .innerJoin('intranet.extensiones as e',
                function(){
                    this.on("e.propietario_id" , "p.id")
                }).innerJoin("intranet.areas as a",function(){
                    this.on("a.id" , "e.area_id")
                });
                 console.log("listarExtensionesMODELO1",query);
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [listarExtensiones]:", err);
        callback({err: err, msj: "Error al consultar la lista de extensiones"});
    });
};

inicioModel.prototype.mostrarPortada= function (callback) {
 console.log("mostrarPortada123");
 var query = G.knex.column("id", "url", "fecha_inicio", "fecha_final", "active", "descripcion", "interval")
            .select()
            .from("intranet.portada");
          
                 console.log("mostrarPortadamodelo",query);
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [mostrarPortada]:", err);
        callback({err: err, msj: "Error al consultar mostrar Portada"});
    });
};
module.exports = inicioModel;



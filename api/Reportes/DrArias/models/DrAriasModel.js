var DrAriasModel = function() {

};

DrAriasModel.prototype.listarUsuarios= function (callback) {

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

DrAriasModel.prototype.listarProductos= function (callback) {

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

module.exports = DrAriasModel;

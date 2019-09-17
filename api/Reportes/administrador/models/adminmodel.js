var adminModel = function () {

};


adminModel.prototype.mostrarAreas= function (callback) {
 var query = G.knex.column("id","nombre")
            .select()
            .from("intranet.areas")
            .whereNotIn('id', [14]);    
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [mostrarAreas]:", err);
        callback({err: err, msj: "Error al consultar mostrar areas"});
    });
};


adminModel.prototype.listarTipoDoc= function (data,callback) {
 var query = G.knex.column("id","titulo")
            .select()
            .from("intranet.cabecera"); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [listarTipoDoc]:", err);
        callback({err: err, msj: "Error al listar TIPO DE DOCUMENTO ISO"});
    });
};


adminModel.prototype.buscar= function (obj,callback) {
 var query = G.knex.column("ndocumento","codigo","state")
            .select()
            .from("intranet.documentos")
            .where("area_id" )
            .andWhere("cabecera_id"); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar los documentos1"});
    });
};


adminModel.prototype.almacenarRegistro= function (data,callback) {
    console.log("ALMACENAR MODELO AHIIII",data);
 var query = G.knex('intranet.documentos').insert({
        ndocumento: data.nombreDoc, 
        url: data.url, 
        cabecera_id: data.tipodoc,
        area_id: data.area, 
        codigo: data.codigo
    }); 

    query.then(function (resultado) {
        console.log("122****almacenarRegistro",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [almacenarRegistro]:", err);
        callback({err: err, msj: "Error al guardar almacenarRegistro"});
    });
};

module.exports = adminModel;
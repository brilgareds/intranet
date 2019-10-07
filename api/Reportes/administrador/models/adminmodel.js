var adminModel = function () {

};


adminModel.prototype.mostrarAreas1= function (callback) {
 var query = G.knex.column("id","nombre")
            .select()
            .from("intranet.areas")
            .whereNotIn('id', [14]);    
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [mostrarAreas1]:", err);
        callback({err: err, msj: "Error al consultar mostrar areas"});
    });
};


adminModel.prototype.listarTipoDoc= function (callback) {
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


adminModel.prototype.buscar= function (data,callback) {
 var query = G.knex.column("id","ndocumento","codigo")
            .select()
            .from("intranet.documentos")
            .where("cabecera_id",data.tipoid)
            .andWhere("area_id",data.areaid); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar buscar documentos"});
    });
};

adminModel.prototype.eliminar= function (data,callback) {
 var query = G.knex("intranet.documentos")
            .where("id",data.id)
            .del(); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al eliminar documentos"});
    });
};

adminModel.prototype.almacenarRegistro= function (data,callback) {
var query = G.knex('intranet.documentos').insert({
       ndocumento: data.nombreDoc,
       url: data.url,
       cabecera_id: data.tipodoc,
       area_id: data.area,
       codigo: data.codigo
   });

   query.then(function (resultado) {
      // console.log("122****almacenarRegistro",query.toString());
       callback(false, resultado);
   }).catch(function (err) {
       console.log("err [almacenarRegistro]:", err);
       callback({err: err, msj: "Error al guardar almacenarRegistro"});
   });
};


adminModel.prototype.almacenPublicidad= function (data,callback) {
var query = G.knex('intranet.anuncios').insert({
       titulo: data.titulo,
       contenido: data.contenido,
       sede: data.sede,
       propietario: data.publicador,
       active: 'active',
       aprobacion: '0'

   });

   query.then(function (resultado) {
       callback(false, resultado);
   }).catch(function (err) {
       console.log("err [almacenPublicidad]:", err);
       callback({err: err, msj: "Error al guardar almacenPublicidad"});
   });
};

module.exports = adminModel;
var creadormodel = function () {

};

creadormodel.prototype.mostrarAreas2= function (callback) {
	var query = G.knex.column("id","nombre")
	.select()
	.from("intranet.areas")
	.whereNotIn('id', [17]);    
	query.then(function (resultado) {
		callback(false, resultado);
	}).catch(function (err) {
		console.log("err [mostrarAreas2]:", err);
		callback({err: err, msj: "Error al consultar mostrar areas"});
	});
};


creadormodel.prototype.listarEnlace= function (callback) {
 var query = G.knex.column("id","titulo")
            .select()
            .from("intranet.opciones"); 

    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        console.log("err [listarEnlace]:", err);
        callback({err: err, msj: "Error al listar tipo de enlaces"});
    });
};


creadormodel.prototype.almacenarExtensiones= function (data,callback) {
	var query = G.knex('intranet.extensiones').insert({
		area_id: data.area,
		propietario_id: data.idpro
	});

	query.then(function (resultado) {
     // console.log("122****almacenarExtensiones",query.toString());
      callback(false, resultado);
  }).catch(function (err) {
  	console.log("err [almacenarExtensiones]:", err);
  	callback({err: err, msj: "Error al guardar almacenarExtensiones"});
  });
};

creadormodel.prototype.almacenarPropietarios= function (data,callback) {
	var query = G.knex('intranet.propietarios')
	.returning('id')
	.insert({
		nombre: data.nombreE,
		extension: data.extension
	});

	query.then(function (resultado) {
   //  console.log("122****almacenarPropietarios",query.toString());
      callback(false, resultado);
  }).catch(function (err) {
  	console.log("err [almacenarPropietarios]:", err);
  	callback({err: err, msj: "Error al guardar almacenarPropietarios"});
  });
};

creadormodel.prototype.aprobado = function (data , callback) {

   var query = G.knex('intranet.anuncios')
           .where("id", data.id)
           .update({
                    aprobacion: '1',
                    fecha_inicio: 'now()'
                  });
 
   query.then(function (resultado) {

       callback(false, resultado);
   }).catch(function (err) {
       callback({err: err, msj: err});
   });
};


creadormodel.prototype.eliminarPropietarios= function (data,callback) {
 var query = G.knex("intranet.extensiones")
            .where("id",data.id)
            .del(); 

    query.then(function (resultado) {
       //console.log("122****eliminar",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al eliminar union"});
    });
};


creadormodel.prototype.buscarExtension= function (data,callback) {
 var query = G.knex.column("e.id","e.propietario_id","e.area_id","pro.nombre", "pro.extension")
            .select()
            .from("intranet.extensiones as e")
            .innerJoin('intranet.propietarios as pro', "pro.id", "e.propietario_id")
            .where("e.area_id",data.busarea); 

    query.then(function (resultado) {
     // console.log("122****buscarExtension",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar  buscarExtension"});
    });
};


creadormodel.prototype.buscarEnlace= function (data,callback) {
 var query = G.knex.column("u.idunion","u.enlaces_id","u.opcion_id","e.name", "e.url")
            .select()
            .from("intranet.union as u")
            .innerJoin('intranet.enlaces as e', "e.id", "u.enlaces_id")
            .where("u.opcion_id",data.busOpc); 

    query.then(function (resultado) {
     // console.log("122****buscarEnlace",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar  buscarEnlace"});
    });
};


creadormodel.prototype.mostrarAprobacion= function (callback) {
 var query = G.knex.column("id", "titulo", "contenido", "sede", "aprobacion", "propietario", "fecha_inicio")
            .select()
            .from("intranet.anuncios"); 

    query.then(function (resultado) {
     //console.log("122****mostrarAprobacion",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar  mostrarAprobacion"});
    });
};


creadormodel.prototype.almacenarUnion= function (data,callback) {
  var query = G.knex('intranet.union').insert({
    opcion_id: data.opcion,
    enlaces_id: data.idEnla
  });

  query.then(function (resultado) {
     // console.log("122****almacenarUnion",query.toString());
      callback(false, resultado);
  }).catch(function (err) {
    console.log("err [almacenarUnion]:", err);
    callback({err: err, msj: "Error al guardar almacenarUnion"});
  });
};

creadormodel.prototype.almacenarEnlace= function (data,callback) {
  var query = G.knex('intranet.enlaces')
  .returning('id')
  .insert({
    name: data.name,
    url: data.url
  });

  query.then(function (resultado) {
   //  console.log("122****almacenarEnlace",query.toString());
      callback(false, resultado);
  }).catch(function (err) {
    console.log("err [almacenarEnlace]:", err);
    callback({err: err, msj: "Error al guardar almacenarEnlace"});
  });
};


module.exports = creadormodel;
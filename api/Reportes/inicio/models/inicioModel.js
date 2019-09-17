var inicioModel = function () {

};


inicioModel.prototype.listarUsuarios = function (callback) {

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
inicioModel.prototype.listarProductos = function (callback) {

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


var formatearExtensiones = function (array, index, Extensiones, Propietarios, j, i, nombre, callback) {
    
    var fila = array[index];
    if (!fila) { 
        Extensiones[i-1].Propietarios =  Propietarios;
        callback(false, Extensiones); 
        return; 
    }

    if(fila.nombreAreas !== nombre){
       
       if(nombre !== "") {   
      Extensiones[i-1].Propietarios =  Propietarios;
        }


      Extensiones[i] = {
        nombre: fila.nombreAreas,
        color: fila.color,
        url: fila.url,
        Propietarios : []
       }
       nombre = fila.nombreAreas; 
       Propietarios = [];
       i++;
       j=0;
    }

    Propietarios[j] = {
        nombre: fila.nombre, 
        extension : fila.extension
    }
    j++;

    formatearExtensiones(array, index+1, Extensiones, Propietarios, j, i, nombre, callback);
};


inicioModel.prototype.listarExtensiones = function (callback) {
    var query = G.knex.column('p.nombre', 'p.extension', 'a.nombre as nombreAreas', 'a.color','a.id','p.id', 'a.url')
        .select().from("intranet.propietarios as p")
        .innerJoin('intranet.extensiones as e',
            function () {
                this.on("e.propietario_id", "p.id")
            }).innerJoin("intranet.areas as a", function () {
            this.on("a.id", "e.area_id")
        });

  

    query.then(function (resultado) {
        if (resultado.length > 0) {
            var obj = {};
                                          
            G.Q.nfcall(formatearExtensiones, resultado, 0, [], [], 0,0, "")
                .then(response => {
                   resultado = response;
                    callback(false, resultado);
                }).catch(err => {
                    throw err;
                });
        } else {
            throw err;
        }
    }).catch(function (err) {
        callback({err: err, msj: "Error al consultar la lista de extensiones"});
    });
};

inicioModel.prototype.mostrarPortada= function (callback) {
 var query = G.knex.column("id", "url", "fecha_inicio", "fecha_final", "active", "descripcion", "interval")
            .select()
            .from("intranet.portada");
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al consultar mostrar Portada"});
    });
};

inicioModel.prototype.mostrarAreas= function (callback) {
    
 var query = G.knex.column("id","nombre")
            .select()
            .from("intranet.areas")
            .whereNotIn('id', [14, 17]);    
        console.log('mpstrar areass ', (query.toString()));
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al consultar mostrar areas"});
    });
};


inicioModel.prototype.mostrarAdmin= function (callback) {
 var query = G.knex.column("id","herramienta")
            .select()
            .from("intranet.administrador");    
    query.then(function (resultado) {
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al consultar mostrar ADMIN"});
    });
};

module.exports = inicioModel;


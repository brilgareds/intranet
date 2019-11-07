var inicioModel = function () {

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
        }).orderBy('a.id');

  

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



inicioModel.prototype.mostrarAreas= function (callback) {
    
 var query = G.knex.column("id","nombre")
            .select()
            .from("intranet.areas")
            .whereNotIn('id', [14,17]);    
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





var formatearEnlaces = function (array, index, Union, Enlaces, j, i, nombre, callback) {
    
    var fila = array[index];
    if (!fila) { 
        Union[i-1].Enlaces =  Enlaces;
        callback(false, Union); 
        return; 
    }

    if(fila.titulo !== nombre){
       
       if(nombre !== "") {   
      Union[i-1].Enlaces =  Enlaces;
        }


      Union[i] = {
        nombre: fila.titulo,
        controls: fila.controls,
        labelly: fila.labelly,
        Enlaces : []
       }
       nombre = fila.titulo; 
       controls: fila.controls;
        labelly: fila.labelly;
       Enlaces = [];
       i++;
       j=0;
    }

    Enlaces[j] = {
        nombre: fila.name, 
        url : fila.url
    }
    j++;

    formatearEnlaces(array, index+1, Union, Enlaces, j, i, nombre, callback);
};


inicioModel.prototype.mostrarEnlaces = function (callback) {
    var query = G.knex.column('e.id','e.name','e.url','o.titulo','o.controls','o.labelly')
        .select().from("intranet.enlaces as e")
        .innerJoin('intranet.union as u',
            function () {
                this.on("u.enlaces_id", "e.id")
            }).innerJoin("intranet.opciones as o", function () {
            this.on("o.id", "u.opcion_id")
        }).orderBy('o.id');
    query.then(function (resultado) {
        //console.log("mostrarEnlaces",resultado);
        if (resultado.length > 0) {
            var obj = {};
                                          
            G.Q.nfcall(formatearEnlaces, resultado, 0, [], [], 0,0, "")
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
        callback({err: err, msj: "Error al mostrar enlaces"});
    });
};



inicioModel.prototype.mostrarPublica= function (callback) {
 var query = G.knex.column("id","contenido","sede","propietario", "titulo","active")
            .select()
            .from("intranet.anuncios")
            .where('aprobacion', 1);    
    query.then(function (resultado) {
        //console.log("122****mostrarPublica",query.toString());
        callback(false, resultado);
    }).catch(function (err) {
        callback({err: err, msj: "Error al consultar mostrar ADMIN"});
    });
};



module.exports = inicioModel;


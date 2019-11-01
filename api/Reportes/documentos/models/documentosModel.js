var documentosModel = function () {

};

var formatearDocumentos = function (array, index, cabecera, documentos, j, i, ndocumento, callback) {
	
    var fila = array[index];
    if (!fila) { 
        cabecera[i-1].documentos =  documentos;

        callback(false, cabecera); 
        return; 
    }
    console.log('fila: ', fila);


    if(fila.titulo !== ndocumento){
       
       if(ndocumento !== "")    
      cabecera[i-1].documentos =  documentos;

      cabecera[i] = {
        titulo: fila.titulo,
        nombre: fila.nombre,
        id: fila.idCab,
        documentos : []
       }
       ndocumento = fila.titulo; 
       documentos = [];
       i++;
       j=0;
    }

    documentos[j] = {
        ndocumento: fila.ndocumento, 
        codigo : fila.codigo,
        url : fila.url
    }
    j++;
    formatearDocumentos(array, index+1, cabecera, documentos, j, i, ndocumento, callback);
};





var formatearManuales = function (array, index, cabecera, documentos, j, i, ndocumento, callback) {
  
    var fila = array[index];
    if (!fila) { 
        cabecera[i-1].documentos =  documentos;

        callback(false, cabecera); 
        return; 
    }

    if(fila.titulo !== ndocumento){
       
       if(ndocumento !== "")    
      cabecera[i-1].documentos =  documentos;

      cabecera[i] = {
        titulo: fila.titulo,
        nombre: fila.nombre,
        documentos : []
       }
       ndocumento = fila.titulo; 
       documentos = [];
       i++;
       j=0;
    }

    documentos[j] = {
        ndocumento: fila.ndocumento, 
        url : fila.url
    }
    j++;
    formatearManuales(array, index+1, cabecera, documentos, j, i, ndocumento, callback);
};
/*SELECT  doc.ndocumento, doc.url,doc.codigo
  FROM intranet.areas as a
  INNER JOIN intranet.documentos as  doc ON a.id = doc.area_id
  INNER JOIN intranet.cabecera as  cab ON doc.cabecera_id = cab.id
  where a.id = '4';*/

documentosModel.prototype.listarDocumentos = function (obj,callback) {
    var query = G.knex.column('doc.ndocumento', 'doc.url', 'doc.codigo','cab.titulo','a.nombre',"cab.id as idCab")
        .select().from("intranet.documentos as doc")
        .innerJoin('intranet.areas as a',
            function () {
                this.on("doc.area_id", "a.id")
            }).innerJoin("intranet.cabecera as cab", function () {
            this.on("doc.cabecera_id", "cab.id")
        }).where('a.id', obj.id)
          .orderBy('cab.id');

          //console.log("query",query.toString());
        query.then(function (resultado) {
         //console.log("122****documentos",query.toString());
        if (resultado.length > 0) {
            var obj = {};
                                          
            G.Q.nfcall(formatearDocumentos, resultado, 0, [], [], 0,0, "")
                .then(response => {
                    console.log('Salidaaaa: ', response);
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


documentosModel.prototype.listarManuales = function(callback){
   var query = G.knex.column('doc.ndocumento','cab.titulo','doc.url')
            .select().from("intranet.documentos as doc")
            .innerJoin('intranet.cabecera as cab', function(){
              this.on("doc.cabecera_id", "cab.id")
            }).whereIn('doc.cabecera_id', [11,12])
            .andWhere('doc.area_id', 17)
            .orderBy('cab.id'); 

    query.then(function (resultado) {
            if (resultado.length > 0) {
            var obj = {};
                                          
            G.Q.nfcall(formatearManuales, resultado, 0, [], [], 0,0, "")
                .then(response => {
                   // console.log('Salidaaaa: ', response);
                    resultado = response;
                    callback(false, resultado);
                }).catch(err => {
                    throw err;
                });
        } else {
            throw err;
        }
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar MANUALES USUARIOS"});
    });
};


documentosModel.prototype.listarProcesos = function(callback){
   var query = G.knex.column('doc.ndocumento','cab.titulo','doc.url')
            .select().from("intranet.documentos as doc")
            .innerJoin('intranet.cabecera as cab', function(){
              this.on("doc.cabecera_id", "cab.id")
            }).whereIn('doc.cabecera_id', [13])
            .andWhere('doc.area_id', 17)
            .orderBy('cab.id'); 

    query.then(function (resultado) {
            if (resultado.length > 0) {
            var obj = {};
                                          
            G.Q.nfcall(formatearManuales, resultado, 0, [], [], 0,0, "")
                .then(response => {
                   // console.log('Salidaaaa: ', response);
                    resultado = response;
                    callback(false, resultado);
                }).catch(err => {
                    throw err;
                });
        } else {
            throw err;
        }
    }).catch(function (err) {
        callback({err: err, msj: "Error al listar PROCESOS COSMITET"});
    });
};


module.exports = documentosModel;


var DrAriasModel = function() {

};

DrAriasModel.prototype.eliminarRotacionMedipol= function (obj, callback) {

    var query = G.knex('rotacion_diaria_medipol')
            .where('empresa_id', obj.empresa)
            .andWhere('centro_utilidad', obj.centroUtilidad)
            .andWhere('bodega', obj.bodega)
            .andWhere('fecha', obj.fechaToday)
            .del();

    query.then(function (resultado) {

        callback(false, resultado);

    }).catch(function (err) {
        console.log("err (/catch) [eliminarRotacionMedipol]: ", err);
        callback({err: err, msj: "Error al eliminar Rotacion Medipol"});
    });
};

module.exports = DrAriasModel;

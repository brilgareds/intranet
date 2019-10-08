module.exports = function(app, di_container) {

    // var c_Documentos = di_container.get("c_documentos");

  
    app.get('/api/listarDocumentos', function(req, res) {
        c_Documentos.listarDocumentos(req, res);
    });

    app.get('/api/listarManuales', function(req, res) {
        c_Documentos.listarManuales(req, res);
    });

    app.get('/api/listarProcesos', function(req, res) {
        c_Documentos.listarProcesos(req, res);
    });


};
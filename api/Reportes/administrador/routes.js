module.exports = function(app, di_container) {

    var c_admin = di_container.get("c_admin");

    app.get('/api/listarTipoDoc', function(req, res) {
        c_admin.listarTipoDoc(req, res);
    });
    app.get('/api/mostrarAreas', function(req, res) {
        c_admin.mostrarAreas(req, res);
    });

    app.get('/api/almacenarRegistro', function(req, res) {        
    });
    
    app.get('/api/buscar', function(req, res) {
         c_admin.buscar(req, res);
    });

    app.post('/api/upload',G.upload.single('file'),(req, res) => {
        console.log("req",req);
        c_admin.almacenarRegistro(req, res);
    });
};
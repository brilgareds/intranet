module.exports = function(app, di_container) {

    var c_admin = di_container.get("c_admin");

    app.get('/api/listarTipoDoc', function(req, res) {
        c_admin.listarTipoDoc(req, res);
    });
    app.get('/api/mostrarAreas1', function(req, res) {
        c_admin.mostrarAreas1(req, res);
    });

    app.get('/api/almacenarRegistro', function(req, res) {        
    });
    
    app.get('/api/buscar', function(req, res) {
         c_admin.buscar(req, res);
    });
      app.get('/api/almacenPublicidad', function(req, res) {
         c_admin.almacenPublicidad(req, res);
    });
     app.get('/api/eliminar', function(req, res) {
         c_admin.eliminar(req, res);
    });

     app.post('/api/upload', G.upload.single('file'),(req, res) => {
       c_admin.almacenarRegistro(req, res);
   });
};
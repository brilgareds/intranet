module.exports = function(app, di_container) {

    var c_Inicio = di_container.get("c_inicio");

    app.get('/api/usuarios', function(req, res) {
        c_Inicio.listarUsuarios(req, res);
    });
    
    app.get('/api/listarProductos', function(req, res) {
        c_Inicio.listarProductos(req, res);
    });
    
    app.get('/api/tmrColombia', function(req, res) {
        c_Inicio.tmrColombia(req, res);
    });
    
    app.get('/api/ipLocal', function(req, res) {
        c_Inicio.ipLocal(req, res);
    });

    app.get('/api/listarExtensiones', function(req, res) {
        c_Inicio.listarExtensiones(req, res);
    });
        app.get('/api/mostrarAreas', function(req, res) {
        c_Inicio.mostrarAreas(req, res);
    });
     app.get('/api/mostrarPortada', function(req, res) {
        c_Inicio.mostrarPortada(req, res);
    });
              app.get('/api/mostrarAdmin', function(req, res) {
        c_Inicio.mostrarAdmin(req, res);
    });
};
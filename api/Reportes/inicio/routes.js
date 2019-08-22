module.exports = function(app, di_container) {

    var c_Inicio = di_container.get("c_inicio");

    app.get('/api/usuarios', function(req, res) {
        console.log('usuarios');
        c_Inicio.listarUsuarios(req, res);
    });
    
    app.get('/api/listarProductos', function(req, res) {
        console.log('listarProductos');
        c_Inicio.listarProductos(req, res);
    });
    
    app.get('/api/tmrColombia', function(req, res) {
        console.log('tmrColombia');
        c_Inicio.tmrColombia(req, res);
    });
    
    app.get('/api/ipLocal', function(req, res) {
        console.log('ipLocal');
        c_Inicio.ipLocal(req, res);
    });

        app.get('/api/listarExtensiones', function(req, res) {
        console.log('listarExtensiones');
        c_Inicio.listarExtensiones(req, res);
    });
    
};
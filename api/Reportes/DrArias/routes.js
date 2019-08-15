module.exports = function(app, di_container) {

    var c_Reportes = di_container.get("c_reportes");

    app.get('/api/usuarios', function(req, res) {
        console.log('usuarios');
        c_Reportes.listarUsuarios(req, res);
    });
    
    app.get('/api/listarProductos', function(req, res) {
        console.log('listarProductos');
        c_Reportes.listarProductos(req, res);
    });
    
    app.get('/api/tmrColombia', function(req, res) {
        console.log('tmrColombia');
        c_Reportes.tmrColombia(req, res);
    });
    
    app.get('/api/ipLocal', function(req, res) {
        console.log('ipLocal');
        c_Reportes.ipLocal(req, res);
    });
    
};
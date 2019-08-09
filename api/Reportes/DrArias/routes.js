module.exports = function(app, di_container) {

    var c_Reportes = di_container.get("c_reportes");

    app.get('/api/usurios', function(req, res) {
        c_Reportes.listarDrArias(req, res);
    });
    
};
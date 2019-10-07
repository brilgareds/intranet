module.exports = function(app, di_container) {

	var c_crea = di_container.get("c_crea");

	app.get('/api/mostrarAreas2', function(req, res) {
		c_crea.mostrarAreas2(req, res);
	});

	
	app.get('/api/listarEnlace', function(req, res) {
		c_crea.listarEnlace(req, res);
	});

	
	app.get('/api/almacenarPropietarios', function(req, res) {
		c_crea.almacenarPropietarios(req, res);
	});
	app.get('/api/almacenarEnlace', function(req, res) {
		c_crea.almacenarEnlace(req, res);
	});

		
	app.get('/api/buscarExtension', function(req, res) {
		c_crea.buscarExtension(req, res);
	});
		app.get('/api/buscarEnlace', function(req, res) {
		c_crea.buscarEnlace(req, res);
	});

		app.get('/api/mostrarAprobacion', function(req, res) {
		c_crea.mostrarAprobacion(req, res);
	});

	app.get('/api/eliminarPropietarios', function(req, res) {
		c_crea.eliminarPropietarios(req, res);
	});
};
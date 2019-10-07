var creador = function (crea) {
    this.m_crea = crea;

};


creador.prototype.mostrarAreas2 = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_crea, 'mostrarAreas2').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado areas!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error listar areas', 500, err));

    }).done();

};

creador.prototype.eliminarPropietarios = function (req, res) {
    var that = this;

   var data = req.query;


    G.Q.ninvoke(that.m_crea, 'eliminarPropietarios',data).then(function (data) {
        res.send(G.utils.r(req.url, 'extension ELIMINADO!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error AL ELIMINAR extension', 500, err));

    }).done();

};
creador.prototype.listarEnlace = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_crea, 'listarEnlace').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado enlaces!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error listar enlaces', 500, err));

    }).done();

};

creador.prototype.buscarExtension = function (req, res) {

    var that = this;
   var data = req.query;

    G.Q.ninvoke(that.m_crea, 'buscarExtension',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'BUSQUEDAD EXTENSIONES REALIZADA!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error AL REALIZAR BUSQUEDAD EXTENSIONES', 500, err));

    }).done();

};

creador.prototype.mostrarAprobacion = function (req, res) {

    var that = this;

    G.Q.ninvoke(that.m_crea, 'mostrarAprobacion').then(function (data) {
       
        res.send(G.utils.r(req.url, 'BUSQUEDAD APROBACION REALIZADA!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error AL REALIZAR BUSQUEDAD APROBACION', 500, err));

    }).done();

};

creador.prototype.buscarEnlace = function (req, res) {

    var that = this;
   var data = req.query;

    G.Q.ninvoke(that.m_crea, 'buscarEnlace',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'BUSQUEDAD ENLACE REALIZADA!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error AL REALIZAR BUSQUEDAD ENLACE', 500, err));

    }).done();

};


creador.prototype.almacenarPropietarios = function (req, res) {

    var that = this;
    var datos = {
        nombreE: req.query.nombreE,
        extension: req.query.extension,
        area: req.query.areaid,
        
    }  

    G.Q.ninvoke(that.m_crea, 'almacenarPropietarios',datos).then(function (data) {

    	datos.idpro = data[0];

    	return G.Q.ninvoke(that.m_crea, 'almacenarExtensiones',datos);
      }). then(function (data) {

        res.send(G.utils.r(req.url, 'ALMACENAR PROPIETARIOS!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error ALMACENAR PROPIETARIOS', 500, err));

    }).done();

};




creador.prototype.almacenarEnlace = function (req, res) {

    var that = this;
    var datos = {
        name: req.query.name,
        url: req.query.url,
        
    }  

    G.Q.ninvoke(that.m_crea, 'almacenarEnlace',datos).then(function (data) {

        datos.idEnla = data[0];

        return G.Q.ninvoke(that.m_crea, 'almacenarUnion',datos);
      }). then(function (data) {

        res.send(G.utils.r(req.url, 'ALMACENAR ENLACES!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error ALMACENAR ENLACES', 500, err));

    }).done();

};

creador.$inject = [
    "m_crea",
];

module.exports = creador;
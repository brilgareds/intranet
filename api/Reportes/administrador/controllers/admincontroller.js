var administrador = function (admin) {
    this.m_admin = admin;
};


administrador.prototype.mostrarAreas = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_admin, 'mostrarAreas').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado areas!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error listar areas', 500, err));

    }).done();

};


administrador.prototype.buscar = function (req, res) {

    var that = this;

   var data = req.params;
    console.log('buscar', req.file);

    G.Q.ninvoke(that.m_admin, 'buscar',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'BUSQUEDAD REALIZADA!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error AL REALIZAR BUSQUEDAD', 500, err));

    }).done();

};

administrador.prototype.almacenarRegistro = function (req, res) {

    var that = this;

   var data = req.params;
    console.log('almacenarRegistro', req.file);
   // console.log('almacenarParams', req);
  //  console.log('almacenarRegistro',req);

    G.Q.ninvoke(that.m_admin, 'almacenarRegistro',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'ALMACENAR REGISTRO!!!!', 200, data));

    }).fail(function (err) {
         console.log('err',err);
        res.send(G.utils.r(req.url, 'Error ALMACENAR REGISTRO', 500, err));

    }).done();

};


/*Alquiler.prototype.guardarProveedor = function (req, res) {
   var that = this;
   var args = req.body.data;
   if (args.nombre === undefined || args.nombre === "") {
       res.send(G.utils.r(req.url, 'Debe digitar el nombre del Proveedor', 404, {}));
       return;
   }
   var obj = {nombre: args.nombre};
   G.Q.ninvoke(that.m_alquiler, "guardarProveedor", obj).
           then(function (resultado) {
               res.send(G.utils.r(req.url, 'guardar proveedor ok!!!!', 200, {guardarProveedor: resultado}));
           }).
           fail(function (err) {
               res.send(G.utils.r(req.url, 'Error al guardar proveedor', 500, {guardarProveedor: {error: err}}));
           }).
           done();
};*/



administrador.prototype.listarTipoDoc = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_admin, 'listarTipoDoc').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado TIPO DE DOCUMENTO ISO!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error al listar TIPO DE DOCUMENTO ISO', 500, err));

    }).done();

};

administrador.$inject = [
    "m_admin"
];

module.exports = administrador;
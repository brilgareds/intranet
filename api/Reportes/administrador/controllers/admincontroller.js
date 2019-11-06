var administrador = function (admin, emails) {
    this.m_admin = admin;
    this.emails = emails;

};


administrador.prototype.mostrarAreas1 = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_admin, 'mostrarAreas1').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado areas!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error listar areas', 500, err));

    }).done();

};


administrador.prototype.buscar = function (req, res) {

    var that = this;

   var data = req.query;

    G.Q.ninvoke(that.m_admin, 'buscar',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'BUSQUEDAD REALIZADA!!!!', 200, data));

    }).fail(function (err) {
         console.log('err buscar',err);
        res.send(G.utils.r(req.url, 'Error AL REALIZAR BUSQUEDAD', 500, err));

    }).done();

};

administrador.prototype.eliminar = function (req, res) {

    var that = this;

   var data = req.query;

    G.Q.ninvoke(that.m_admin, 'eliminar',data).then(function (data) {
       
        res.send(G.utils.r(req.url, 'DOCUMENTO ELIMINADO!!!!', 200, data));

    }).fail(function (err) {
         console.log('err eliminar',err);
        res.send(G.utils.r(req.url, 'Error AL BLOQUEAR DOCUMENTO', 500, err));

    }).done();

};

administrador.prototype.almacenarRegistro = function (req, res) {

    var that = this;
    var datos = {
        area: req.body.area,
        codigo: req.body.codigo,
        nombreDoc: req.body.nombreDoc,
        tipodoc: req.body.tipodoc,
        url : req.file.filename
    }  

    G.Q.ninvoke(that.m_admin, 'almacenarRegistro',datos).then(function (data) {

       
        res.send(G.utils.r(req.url, 'ALMACENAR REGISTRO!!!!', 200, data));

    }).fail(function (err) {
         console.log('err almacenarRegistro',err);
        res.send(G.utils.r(req.url, 'Error ALMACENAR REGISTRO', 500, err));

    }).done();

};


administrador.prototype.almacenPublicidad = function (req, res) {

    var that = this;
    var datos = {
        titulo: req.query.titulo,
        contenido: req.query.contenido,
        sede: req.query.sede,
        publicador: req.query.publicador,
    }  

    G.Q.ninvoke(that.m_admin, 'almacenPublicidad',datos).then(function (data) {

       G.Q.nfcall(__enviar_correo_electronico, that,'desarroll1@duanaltda.com','Aprobacion de Correo','aprobar-----');


      }).then(function (data) {
        res.send(G.utils.r(req.url, 'ALMACENAR PUBLICIDAD!!!!', 200, data));

    }).fail(function (err) {
         console.log('err almacenPublicidad',err);
        res.send(G.utils.r(req.url, 'Error ALMACENAR PUBLICIDAD', 500, err));

    }).done();

};

function __enviar_correo_electronico(that, to,subject, message, callback) {
    var fecha = new Date();

   
    var smtpTransport = that.emails.createTransport("SMTP", {
        host: G.settings.email_host, // hostname
        secureConnection: true, // use SSL
        port: G.settings.email_port, // port for secure SMTP
        auth: {
            user: G.settings.email_rotaciones,
            pass:  G.settings.email_rotaciones_pass
        }
    });

    var settings = {
        from: G.settings.email_rotaciones,
        to: to,
        cc: 'desarroll1@duanaltda.com',
        subject: subject,
        html: message

    };

    
    smtpTransport.sendMail(settings, function (error, response) {

        if (error !== null) {
            console.log("Error :: ",error);
            callback({estado: 505, mensaje: error});
            return;
        } else {            
            smtpTransport.close();
            console.log("Correo enviado");
            callback(false, {estado: 200, mensaje: "Correo Enviado"});
            return;
        }
    });
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
    "m_admin",
    "emails"
];

module.exports = administrador;
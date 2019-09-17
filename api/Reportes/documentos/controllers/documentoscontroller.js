var documentosiso = function (documentos) {
    this.m_documentos = documentos;
};




documentosiso.prototype.listarDocumentos = function (req, res) {
    var that = this;
    var arg = req.query;
    G.Q.ninvoke(that.m_documentos, 'listarDocumentos',{id : arg.id }).then(function (data) {
        res.send(G.utils.r(req.url, 'Listado de Documentos ISO !!!!', 200, {areas: data}));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error Listado de Documentos ISO', 500, {listarDocumentos: err}));

    }).done();

};


documentosiso.prototype.listarManuales = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_documentos, 'listarManuales').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado de MANUALES DE USUARIOS!!!!', 200, {listarManuales: data}));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error Listado de  MANUALES DE Usuarios', 500, {listarManuales: err}));

    }).done();

};


documentosiso.prototype.listarProcesos = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_documentos, 'listarProcesos').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado de PROCESOS COSMITET!!!!', 200, {listarProcesos: data}));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error Listado de  PROCESOS COSMITET', 500, {listarProcesos: err}));

    }).done();

};

documentosiso.$inject = [
    "m_documentos"
];

module.exports = documentosiso;

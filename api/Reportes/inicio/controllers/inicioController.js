var inicial = function (inicio) {
    this.m_inicio = inicio;
};

/**
 * @author Andres M Gonzalez
 * +Descripcion controlador que lista todos los datos del Dr Arias
 * @params detalle:
 * @fecha 2016-06-03
 */
inicial.prototype.listarUsuarios = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_inicio, 'listarUsuarios').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado de Usuarios!!!!', 200, {listarUsuarios: data}));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error Listado de Usuarios', 500, {listarUsuarios: err}));

    }).done();

};

inicial.prototype.listarExtensiones = function (req, res) {
    var that = this;
    console.log("listarExtensiones");
    G.Q.ninvoke(that.m_inicio, 'listarExtensiones').then(function (data) {
        console.log("listarExtensiones", data);
        res.send(G.utils.r(req.url, 'Listado de Extensiones!!!!', 200, {listarExtensiones: data}));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error Listado de Extensiones', 500, {listarExtensiones: err}));

    }).done();

};


inicial.prototype.ipLocal = function (req, res) {

    ip = req.connection.remoteAddress.replace(/^.*:/, '');

    if (ip === '1') {
        ip = G.ip.address();
    }

    if (ip) {
        res.send(G.utils.r(req.url, 'Ip encontrada!!', 200, {ip: ip}));
    } else {
        res.send(G.utils.r(req.url, 'Error, Ip no encontrada!!', 500, ip));
    }
}

inicial.prototype.listarProductos = function (req, res) {
    var that = this;

    G.Q.ninvoke(that.m_inicio, 'listarProductos').then(function (data) {

        res.send(G.utils.r(req.url, 'Listado Productos!!!!', 200, data));

    }).fail(function (err) {

        res.send(G.utils.r(req.url, 'Error listar Productos', 500, err));

    }).done();

};

inicial.prototype.tmrColombia = function (req, res) {
    var that = this;
    var trm;

    dolar().then(function (dolar) {
        trm = dolar;
        return getClima('3.4177204', '-76.5388129');
    })
        .then(function (clima) {
            clima.dolar = trm;
            res.send(G.utils.r(req.url, 'Listado Productos!!!!', 200, clima));
        })
        .catch();
};

const dolar = () => {

    return G.trmcol.query().then(
        trm => trm
    ).catch(
        err => err
    )
}

const getClima = async (lat, lng) => {

    let respuesta = await G.axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (respuesta.data.cod === '400') {
        throw new Error(`No hay resultados de clima`);
    }

    let coors = respuesta.data;
    return coors;
}


inicial.$inject = [
    "m_inicio"
];

module.exports = inicial;


var Reportes = function (drArias) {
    this.m_drArias = drArias;
};

/**
 * @author Andres M Gonzalez
 * +Descripcion controlador que lista todos los datos del Dr Arias
 * @params detalle: 
 * @fecha 2016-06-03
 */
Reportes.prototype.listarDrArias = function (req, res) {
    var that = this;
   console.log('hello');
   res.send({nada:'qwerty'});
};

Reportes.$inject = [
    "m_drArias"
];

module.exports = Reportes;
